import { Resend } from 'resend';
import EmailTemplate from '../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    try {
      const data = await resend.emails.send({
        from: fromEmail,
        to: [fromEmail, email],
        subject: subject,
        react: EmailTemplate({
          name: name,
          subject: subject,
          message: message,
        }),
      });

      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
