import { superValidate, message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { newOrderSchema } from '../schema/index.js';
import { zod } from 'sveltekit-superforms/adapters';
import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

const { RESEND_API_KEY, EMAIL, SENDER } = process.env;
const resend = new Resend(RESEND_API_KEY);

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(newOrderSchema));
		if (!form.valid)
			fail(404, {
				message: 'Not found'
			});

		const { error } = await resend.emails.send({
			from: `${SENDER} ${EMAIL}`,
			to: [form.data.email, EMAIL ?? ''],
			subject: 'Wew order received',
			html: `
				${form.data.name} has placed a new order.
				Message: ${form.data.comment}.
				Contact information:
				${form.data.email}, ${form.data.phone}
			`
		});

		if (error)
			fail(500, {
				message: error
			});

		return message(form, 'Success!');
	}
};
