import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Campos obrigatórios faltando" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // mail.raquelmartinsorganiza.com.br
      port: Number(process.env.SMTP_PORT), // 465
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER, // contato@...
        pass: process.env.SMTP_PASS, // senha do email
      },
    });

    await transporter.sendMail({
      from: `"Site Raquel Martins" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // envia para o próprio email da Raquel
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

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return res.status(500).json({ error: "Erro ao enviar email" });
  }
}
