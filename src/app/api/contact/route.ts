import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/config";
import { submitToFormspree } from "@/lib/formspree";

const PHONE_PATTERN = /^\(\d{3}\) \d{3}-\d{4}$/;

// Form values are interpolated into email HTML — escape them.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const body = await request.json();
  const {
    firstName,
    lastName,
    email,
    phone,
    businessName,
    industry,
    website,
    message,
  } = body ?? {};

  if (!firstName || !lastName || !email || !phone || !businessName || !industry || !message) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (!PHONE_PATTERN.test(phone)) {
    return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 });
  }

  // Record the lead in Formspree regardless of Resend's config/health, so a
  // submission is never lost to an email misconfiguration.
  const formspreeSubmit = submitToFormspree({
    formType: "inquiry",
    _subject: `New inquiry: ${firstName} ${lastName} (${businessName})`,
    firstName,
    lastName,
    email,
    phone,
    businessName,
    industry,
    website: website || undefined,
    message,
  });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — inquiry email was not sent.");
    await formspreeSubmit;
    return NextResponse.json(
      { error: "Email sending isn't configured yet. Try again later." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  // LAUNCH CHECKLIST (email): the shared onboarding@resend.dev sender only
  // delivers to the Resend account owner's inbox. Once ei-conversion.com is
  // verified in Resend, set RESEND_FROM to an address on the domain
  // (e.g. "Ei Conversion <hello@ei-conversion.com>").
  const from = process.env.RESEND_FROM ?? "Ei Conversion <onboarding@resend.dev>";
  const notifyTo = process.env.INQUIRIES_TO ?? siteConfig.email;

  const safeFirstName = escapeHtml(String(firstName));
  const safeBusiness = escapeHtml(String(businessName));

  const confirmationText = `Hi ${firstName},

Thanks for reaching out to Ei Conversion. I got your details for ${businessName} and I'm looking forward to taking a look at your Google presence.

Here's what happens next:
1. I'll review your business and where you currently rank across the Valley.
2. I'll reach out within 24 hours to book your free strategy call.
3. On the call I'll show you exactly what it would take to get you into the top 3. No pressure, no obligation.

Talk soon,
Ethan
Ei Conversion
${siteConfig.email}`;

  const confirmationHtml = `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:#f4f1ea;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f1ea;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background-color:#16223b;padding:32px 40px;text-align:center;">
                <div style="font-family:Georgia,'Times New Roman',serif;font-size:26px;font-weight:600;color:#ffffff;letter-spacing:0.5px;">Ei Conversion</div>
                <div style="font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;color:#0f7a53;letter-spacing:3px;text-transform:uppercase;margin-top:6px;">Local SEO · Rio Grande Valley</div>
              </td>
            </tr>
            <tr>
              <td style="background-color:#faf8f3;padding:40px;">
                <h1 style="margin:0 0 16px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:600;color:#16223b;">Thanks, ${safeFirstName}!</h1>
                <p style="margin:0 0 24px;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#16223b;">
                  I got your details for <strong>${safeBusiness}</strong> and I'm looking forward to taking a look at your Google presence.
                </p>
                <h2 style="margin:0 0 12px;font-family:Helvetica,Arial,sans-serif;font-size:13px;font-weight:700;color:#0f7a53;letter-spacing:2px;text-transform:uppercase;">What happens next</h2>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
                  <tr><td style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#16223b;padding-bottom:8px;"><span style="color:#0f7a53;font-weight:700;">1.</span>&nbsp; I'll review your business and where you currently rank.</td></tr>
                  <tr><td style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#16223b;padding-bottom:8px;"><span style="color:#0f7a53;font-weight:700;">2.</span>&nbsp; I'll reach out within 24 hours to book your free strategy call.</td></tr>
                  <tr><td style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#16223b;"><span style="color:#0f7a53;font-weight:700;">3.</span>&nbsp; On the call I'll show you exactly what it takes to reach the top 3. No pressure.</td></tr>
                </table>
                <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#16223b;">
                  Talk soon,<br />
                  <span style="font-family:Georgia,'Times New Roman',serif;font-size:18px;font-weight:600;">Ethan</span><br />
                  <span style="font-size:14px;color:#857f72;">Ei Conversion · ${siteConfig.email}</span>
                </p>
              </td>
            </tr>
            <tr>
              <td style="background-color:#16223b;padding:20px 40px;text-align:center;">
                <div style="font-family:Helvetica,Arial,sans-serif;font-size:12px;color:#ffffff;opacity:0.75;">Ei Conversion · Local SEO for the Rio Grande Valley</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const [{ error }] = await Promise.all([
    resend.batch.send([
      // Internal lead notification — plain and functional.
      {
        from,
        to: notifyTo,
        replyTo: String(email),
        subject: `New inquiry: ${firstName} ${lastName} (${businessName})`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nBusiness: ${businessName}\nIndustry: ${industry}\nWebsite/GBP: ${website || "N/A"}\n\nChallenge:\n${message}`,
      },
      // Customer confirmation — branded, with a plain-text fallback.
      {
        from,
        to: String(email),
        replyTo: siteConfig.email,
        subject: "Thanks for reaching out · Ei Conversion",
        text: confirmationText,
        html: confirmationHtml,
      },
    ]),
    formspreeSubmit,
  ]);

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Something went wrong sending your message." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
