import { Resend } from "resend";
import { env } from "../../config/env.js";

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmail = async ({ name, email, subject, message }) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: env.CONTACT_EMAIL,
        subject: `Portafolio / ${subject} — ${name} (${email})`,
        html: `
            <p>${message}</p>
        `,
    });
};