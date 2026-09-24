"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

type State = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ copy, lang }: { copy: Dictionary["form"]; lang: string }) {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang }),
      });
      if (!res.ok) throw new Error(await res.text());
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <p className="text-lg text-deep-fg">
        {copy.success}
      </p>
    );
  }

  const field =
    "mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-deep-fg placeholder:text-deep-fg/40 outline-none transition focus:border-white/40";

  return (
    <form onSubmit={onSubmit}>
      {/* Spam trap: real people never see this, bots fill it in. */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-deep-fg/70">
          {copy.nameLabel}
          <input type="text" name="name" required maxLength={120} className={field} />
        </label>
        <label className="text-sm text-deep-fg/70">
          {copy.emailLabel}
          <input type="email" name="email" required maxLength={200} className={field} />
        </label>
      </div>

      <label className="mt-5 block text-sm text-deep-fg/70">
        {copy.messageLabel}
        <textarea name="message" required rows={5} maxLength={4000} className={field} />
      </label>

      <button
        type="submit"
        disabled={state === "sending"}
        className="btn mt-6 w-full inline-flex sm:w-auto items-center justify-center rounded-md bg-accent px-6 py-3 font-[500] text-white shadow-sm transition hover:shadow-md disabled:opacity-60"
      >
        {state === "sending" ? copy.sending : copy.submit}
      </button>

      {state === "error" && <p className="mt-4 text-sm text-red-300">{copy.error}</p>}
    </form>
  );
}
