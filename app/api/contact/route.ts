import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

// Where lead notifications should go once real sending is wired up.
// Falls back to SITE.email so the address stays correct even if the env
// var isn't set locally.
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || SITE.email;

// Mock lead-capture endpoint. Validates and logs the submission today;
// wire it up to a CRM, Google Sheets, Telegram, email or a Make/n8n
// webhook by replacing the block below — the request/response contract
// stays the same for the AuditForm and Contact form clients. Whatever you
// wire up, send it to CONTACT_EMAIL above rather than hardcoding an
// address again.
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

  // TODO: forward `body` to CONTACT_EMAIL via CRM / Google Sheets /
  // Telegram / email / Make / n8n.
  console.log(`[Nyvexo contact submission -> ${CONTACT_EMAIL}]`, {
    formType: body.formType ?? "contact",
    receivedAt: new Date().toISOString(),
    ...body,
  });

  return NextResponse.json({ ok: true });
}
