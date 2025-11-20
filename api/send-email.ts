import { Resend } from "resend";

export const config = {
  runtime: "nodejs18.x",
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Campos obrigatórios faltando" });
  }

  try {
    const response = await resend.emails.send({
      from: "Site Raquel Martins <contato@raquelmartinsorganiza.com.br>",
      to: ["mcoficinadaimagem@gmail.com"],
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

    return res.status(200).json({ success: true, response });

  } catch (err: any) {
    console.error("Erro ao enviar email:", err);
    return res.status(500).json({ error: err.message || "Erro ao enviar email" });
  }
}
