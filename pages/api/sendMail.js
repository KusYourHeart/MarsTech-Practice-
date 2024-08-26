import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { email, message } = req.body;

  if (!email || !/\S+@\S+\.\S+/.test(email) || !message || message.length < 10) {
    return res.status(400).json({ status: 'Error', error: 'Некорректные данные.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const emailHtml = `
  <div style="background-color: grey; padding: 20px; text-align: center;">
    <h1>Здравствуйте!</h1>
    <p>${message}</p>
    <p>Отправитель: ${email}</p>
  </div>
`;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_TO,
      subject: 'Новое сообщение с вашего сайта от ${email}',
      html: emailHtml,
    });
    res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.log(res);
    res.status(500).json({ status: 'Error', error: error.message });
  }
};