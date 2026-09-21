export const config = { runtime: "edge" }

const TO_EMAIL = "info@eurealtypro.com"

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 })
  }

  const { name, email, phone, message } = (await req.json()) as {
    name?: string
    email?: string
    phone?: string
    message?: string
  }

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Name, email, and message are required" }), {
      status: 400,
    })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Email service not configured" }), {
      status: 500,
    })
  }

  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Elite Urban Realty Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      reply_to: email,
      subject: `New website inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\n${message}`,
    }),
  })

  if (!emailRes.ok) {
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 502 })
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 })
}
