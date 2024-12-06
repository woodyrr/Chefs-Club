// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_EMAIL_DEVELOPEMENT);

// const body = await readBody(event);
// const { email, magicLink } = body;

// export default defineEventHandler(async (event) => {
//   try {
//     const data = await resend.emails.send({
//       from: `Chef's Club <no-reply@chef's-club.dev>`,
//       to: [email],
//       subject: 'Hello world',
//       html: '<strong>It works!</strong>',
//     });
//     // delivered@resend.dev
//     return data;
//   } catch (error) {
//     return { error };
//   }
// });


import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, magicLink } = body;

  // Resend configuration
  const resend = new Resend(process.env.RESEND_EMAIL_DEVELOPEMENT);

  // Send the email
  try {
    await resend.emails.send({
      from: `Chef's Club <no-reply@chef's-club.dev>`,
      to: email,
      subject: "Log in to Your App",
      html: `<p>Click the link below to log in:</p>
             <a href="${magicLink}">${magicLink}</a>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    throw createError({
      statusCode: 500,
      message: "Failed to send email",
    });
  }
});

