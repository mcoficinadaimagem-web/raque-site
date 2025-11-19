import nodemailer from "nodemailer";

export const config = {
  runtime: "nodejs18.x",
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Campos obrigatórios faltando" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,             // 👈 PORTA CORRETA PARA HOSTGATOR + VERCEL
      secure: false,         // 👈 STARTTLS (não SSL)
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

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return res.status(500).json({ error: "Erro ao enviar email" });
  }
}
