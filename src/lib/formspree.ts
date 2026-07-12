/**
 * Server-side relay to Formspree. Used as a submission record/"database" for
 * form leads — independent of the Resend email flow, so a lead is captured
 * here even if Resend is misconfigured or its send fails.
 */
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT ?? "https://formspree.io/f/mbdvvavy";

export async function submitToFormspree(data: Record<string, unknown>): Promise<void> {
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`[formspree] submission failed (${res.status}):`, body);
    }
  } catch (err) {
    console.error("[formspree] submission failed:", err);
  }
}
