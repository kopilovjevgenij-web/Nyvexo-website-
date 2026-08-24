import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

// Where lead notifications should go. Falls back to SITE.email so the
// address stays correct even if the env var isn't set locally.
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || SITE.email;

// SMTP delivery via the existing mailbox. All four vars must be set
// (in Vercel: Project Settings -> Environment Variables, Production)
// for real emails to go out — see .env.example for what each one is.
function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) return null;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "missing_required_fields" }, { status: 400 });
  }

  const formType = typeof body.formType === "string" ? body.formType : "contact";
  const submission = { formType, receivedAt: new Date().toISOString(), ...body };
  const transporter = getTransporter();

  if (!transporter) {
    // No SMTP configured. In production this must not report success —
    // a silently-swallowed failure is exactly what broke lead delivery
    // before. Locally/in preview without secrets, log and keep the
    // success UI so the form remains testable.
    if (process.env.NODE_ENV === "production") {
      console.error("[Nyvexo contact] SMTP not configured — lead was NOT emailed:", submission);
      return NextResponse.json({ ok: false, error: "email_not_configured" }, { status: 500 });
    }
    console.log(`[Nyvexo contact submission -> ${CONTACT_EMAIL}] (SMTP not configured, logging only)`, submission);
    return NextResponse.json({ ok: true });
  }

  try {
    await transporter.sendMail({
      from: `"Nyvexo website" <${process.env.SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nyvexo — new ${formType} lead: ${name}`,
      text: Object.entries(submission)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Nyvexo contact] sendMail failed:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
