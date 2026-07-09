import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * "3 free tips" signup. Two effects, no database:
 * 1. Adds the contact to the Resend audience (RESEND_AUDIENCE_ID) so they get
 *    the newsletter — skipped gracefully if the audience isn't configured yet.
 * 2. Emails them the link to the /free-tips video page.
 */
export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body?.email ?? "").trim().toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — signup email was not sent.");
    return NextResponse.json(
      { error: "Signups aren't configured yet. Try again later." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM ?? "Ei Conversion <onboarding@resend.dev>";
  const tipsUrl = `${siteConfig.url}/free-tips`;

  // Add to the newsletter audience. Best-effort: a duplicate contact or a
  // missing audience must not block delivery of the tips email.
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (audienceId) {
    try {
      await resend.contacts.create({ email, audienceId, unsubscribed: false });
    } catch (err) {
      console.error("[subscribe] contact add failed (continuing):", err);
    }
  } else {
    console.warn("[subscribe] RESEND_AUDIENCE_ID not set — skipping newsletter add.");
  }

  const text = `Hey,

Thanks for signing up. Here are your 3 free tips — the first three things I do when I start working with a local business to get them into the top 3 on Google:

Watch the video here: ${tipsUrl}

Quick preview:
1. Fill out your Google Business Profile — completely.
2. Make your website say what you do and where you do it.
3. Clean up your citations so Google trusts you.

The video walks through all three with real examples. No technical know-how needed.

If you ever want to stop getting emails from me, just unsubscribe — I'm not in the business of bothering people.

Talk soon,
Ethan
Ei Conversion
${siteConfig.email}`;

  const html = `<!DOCTYPE html>
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
                <h1 style="margin:0 0 16px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:600;color:#16223b;">Your 3 free tips are ready.</h1>
                <p style="margin:0 0 24px;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#16223b;">
                  These are the first three things I do when I start working with a local business to get them into the top 3 on Google — explained in one short video, no technical know-how needed.
                </p>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
                  <tr><td style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#16223b;padding-bottom:8px;"><span style="color:#0f7a53;font-weight:700;">1.</span>&nbsp; Fill out your Google Business Profile — completely.</td></tr>
                  <tr><td style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#16223b;padding-bottom:8px;"><span style="color:#0f7a53;font-weight:700;">2.</span>&nbsp; Make your website say what you do and where you do it.</td></tr>
                  <tr><td style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#16223b;"><span style="color:#0f7a53;font-weight:700;">3.</span>&nbsp; Clean up your citations so Google trusts you.</td></tr>
                </table>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
                  <tr>
                    <td style="border-radius:9999px;background-color:#0f7a53;">
                      <a href="${tipsUrl}" style="display:inline-block;padding:14px 32px;font-family:Helvetica,Arial,sans-serif;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">Watch the video</a>
                    </td>
                  </tr>
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

  const { error } = await resend.emails.send({
    from,
    to: email,
    replyTo: siteConfig.email,
    subject: "Your 3 free tips to rank higher on Google",
    text,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
