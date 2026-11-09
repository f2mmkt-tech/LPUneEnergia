import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const { nome, email, whatsapp, area, carteira } = data;

    if (!nome || !email) {
      return new Response(
        JSON.stringify({ error: "Nome e email são obrigatórios." }),
        { status: 400 }
      );
    }

    const safe = (v) =>
      v && v.toString().trim() !== "" ? v : "Não informado";

    const formatted = {
      nome: safe(nome),
      email: safe(email),
      whatsapp: safe(whatsapp),
      area: safe(area),
      carteira: safe(carteira),
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family:Arial;padding:30px;background:#F5EEE2;">
        <div style="max-width:600px;margin:auto;background:#fff;padding:25px;border-radius:12px;">
          
          <h2 style="color:#C9A46B;text-align:center;">
            Novo Lead Parceiro OR-LINK
          </h2>

          <table style="width:100%;margin-top:20px;border-collapse:collapse;">
            ${row("Nome", formatted.nome, true)}
            ${row("WhatsApp", formatted.whatsapp)}
            ${row("Área de atuação", formatted.area, true)}
            ${row("Carteira de clientes", formatted.carteira)}
            ${row("Email", formatted.email, true)}
          </table>

          <p style="margin-top:20px;font-size:12px;color:#777;text-align:center;">
            Lead enviado pelo site OR-LINK
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Website OR-LINK" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Novo parceiro — ${formatted.nome}`,
      html: htmlContent,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Erro ao enviar" }),
      { status: 500 }
    );
  }
}

function row(label, value, accent = false) {
  return `
    <tr style="background:${accent ? "#F5EEE2" : "#fff"};">
      <td style="padding:10px;border:1px solid #ddd;font-weight:bold;">
        ${label}
      </td>
      <td style="padding:10px;border:1px solid #ddd;">
        ${value}
      </td>
    </tr>
  `;
}