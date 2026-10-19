"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "@/components/icons";

type Status = "idle" | "sending" | "sent" | "error";

type ContactFormProps = {
  /** Address messages are delivered to. */
  email: string;
};

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-accent focus:outline-none";

export function ContactForm({ email }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const senderEmail = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const company = String(data.get("company") ?? "");

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: senderEmail, message, company }),
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
        return;
      }

      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      // No mail service configured yet — hand the message to the visitor's
      // own mail client instead of dropping it.
      if (response.status === 503) {
        const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
        const body = encodeURIComponent(
          `${message}\n\n—\nFrom: ${name}\nEmail: ${senderEmail}`,
        );
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        setStatus("idle");
        return;
      }

      setStatus("error");
      setError(payload?.error ?? "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setError("Network error. Please email me directly instead.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8">
        <p className="text-lg font-semibold tracking-tight">Message sent</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Thanks for reaching out — I&apos;ll get back to you at{" "}
          <span className="text-ink">{email}</span> as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-ink underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={`mt-2 ${fieldClass}`}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={`mt-2 ${fieldClass}`}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="What are you trying to build?"
          className={`mt-2 resize-y ${fieldClass}`}
        />
      </div>

      {/* Honeypot: invisible to people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 text-sm text-red-600">
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <ArrowUpRight className="h-4 w-4" />
        </button>

        <a
          href={`mailto:${email}`}
          className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-ink"
        >
          or email me directly
        </a>
      </div>
    </form>
  );
}
