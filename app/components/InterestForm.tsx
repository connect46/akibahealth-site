"use client";

import { useState, type FormEvent } from "react";

// Submits to Netlify Forms. The form is registered by public/__forms.html;
// field names here must match that file.
const ROLES = [
  "Ministry of Health / EPI program",
  "Funder or donor",
  "Implementing partner / NGO",
  "Researcher or academic",
  "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function InterestForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Honeypot: real people never see or fill this field.
    if (String(data.get("company_website") ?? "").trim() !== "") {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const body = new URLSearchParams(data as unknown as Record<string, string>).toString();
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-card form-done" role="status">
        <h3>Thanks, we&apos;ve got it.</h3>
        <p>We&apos;ll be in touch soon. In the meantime, you can explore the live demo.</p>
      </div>
    );
  }

  return (
    <form className="contact-card interest" name="interest" method="POST" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="interest" />
      <p className="hp" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="row2">
        <label htmlFor="f-name">Name
          <input id="f-name" name="name" required autoComplete="name" />
        </label>
        <label htmlFor="f-email">Work email
          <input id="f-email" name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <div className="row2">
        <label htmlFor="f-org">Organization
          <input id="f-org" name="organization" required autoComplete="organization" />
        </label>
        <label htmlFor="f-country">Country
          <input id="f-country" name="country" autoComplete="country-name" />
        </label>
      </div>
      <label htmlFor="f-role">I&apos;m with a…
        <select id="f-role" name="role" defaultValue="" required>
          <option value="" disabled>Choose one</option>
          {ROLES.map((r) => <option key={r}>{r}</option>)}
        </select>
      </label>
      <label htmlFor="f-msg"><span>What would you like to explore? <span className="opt">(optional)</span></span>
        <textarea id="f-msg" name="message" rows={4} />
      </label>

      <button className="btn dark" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Register interest"}
      </button>
      {status === "error" && (
        <p className="form-err" role="alert">That didn&apos;t send. Check your connection and try again.</p>
      )}
    </form>
  );
}
