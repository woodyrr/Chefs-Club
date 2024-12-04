import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_EMAIL_DEVELOPEMENT);

export default defineEventHandler(async () => {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      html: '<strong>It works!</strong>',
    });
    // delivered@resend.dev
    return data;
  } catch (error) {
    return { error };
  }
});
