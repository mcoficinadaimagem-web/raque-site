import { Resend } from "resend";

export const config = {
  runtime: "nodejs",
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Campos obrigatórios faltando" });
    }

    const result = await resend.emails.send({
      from: "Raquel Martins <contato@raquelmartinsorganiza.com.br>",
      to: "contato@raquelmartinsorganiza.com.br",
      replyTo: email,   // <- CORRETO!
      subject: `Novo contato de ${name}`,
      html: `
        <h2>Novo contato via site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });

    console.log("Resend result:", result);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return res.status(500).json({ error: "Erro ao enviar email" });
  }
}
