import { Resend } from "resend";
import { getSettings } from "@/lib/content";

export const runtime = "nodejs";

/* The address messages are sent FROM. It must belong to a domain verified
   in Resend. The reply-to is set to the visitor, so hitting Reply works. */
const FROM = process.env.CONTACT_FROM ?? "Website <noreply@annamariamosterlind.com>";

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return new Response("Email is not configured", { status: 500 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  // Honeypot: only bots fill this in.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return new Response("OK", { status: 200 });
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 4000);
  const lang = String(body.lang ?? "en").slice(0, 5);

  if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return new Response("Missing or invalid fields", { status: 400 });
  }

  /* The address lives in the CMS. If the file can't be read for any reason,
     fall back to CONTACT_TO so a message is never silently lost. */
  let to = process.env.CONTACT_TO ?? "";
  try {
    const settings = await getSettings();
    if (settings.email) to = settings.email;
  } catch {
    // keep the fallback
  }
  if (!to) return new Response("No recipient configured", { status: 500 });

  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from: FROM,
      to,
      replyTo: email,
      subject: `Website message from ${name}`,
      text: `${name} <${email}> wrote from the ${lang.toUpperCase()} page:\n\n${message}`,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("contact form:", err);
    return new Response("Could not send", { status: 502 });
  }

  return new Response("OK", { status: 200 });
}
