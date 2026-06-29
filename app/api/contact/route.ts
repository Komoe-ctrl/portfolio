import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, website } = await req.json();

    // Honeypot check
    if (website && website.length > 0) {
      return Response.json(
        { error: "Bot détecté" },
        { status: 400 }
      );
    }

    // Validation basique
    if (!name || !email || !message) {
      return Response.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }

    // Protection email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["komoelogique@gmail.com"],
      subject: `Message portfolio de ${name}`,
      replyTo: email,
      text: `
Nom: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}