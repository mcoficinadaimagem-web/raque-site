import nodemailer from "nodemailer";

export const config = {
  runtime: "nodejs18.x",
};

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Método não permitido" }), {
      status: 405,
    });
  }

  const { name, email, phone, message } = await req.json();

  if (!name || !email || !phone || !message) {
    return new Response(JSON.stringify({ error: "Campos obrigatórios faltando" }), {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site Raquel Martins" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Novo contato de ${name}`,
      html: `
        <h2>📩 Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
        <br/>
        <p style="color: #888;">Enviado automaticamente pelo site.</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });

  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return new Response(JSON.stringify({ error: "Erro ao enviar email" }), {
      status: 500,
    });
  }
}