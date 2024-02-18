<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { newOrderSchema } from '$schema';
	import { formInputs } from '$configs';
	import * as m from '$paraglide/messages';
	import { z } from 'zod';
	import SuperDebug from 'sveltekit-superforms';

	export let handleClose: () => void;
	let data: { form: z.infer<typeof newOrderSchema> } = {
		form: formInputs
	};

	const { form, enhance, errors, constraints, message } = superForm(data.form, {
		taintedMessage: 'You sure you want to leave?',
		validators: zodClient(newOrderSchema)
	});
	const inputs = Object.keys(formInputs) as (keyof typeof formInputs)[];
</script>

<div class="fixed inset-0 flex lg:items-center justify-center z-50">
	<button class="fixed bg-black bg-opacity-50 inset-0 -z-10" on:click={handleClose} />
	<div
		class="flex flex-col max-w-[90vw] lg:max-w-[40rem] mb-auto mt-5 lg:mt-10 w-full bg-white lg:p-10 p-5 rounded-xl z-10"
	>
		<button class="ml-auto cursor-pointer text-lg" on:click={handleClose}>&#x2715;</button>
		<form method="POST" class="flex flex-col gap-6" use:enhance>
			{#if $message}
				<div
					class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
					role="alert"
				>
					<strong class="font-bold">{$message}</strong>
				</div>
			{/if}
			{#each inputs as name}
				<div class="flex flex-col gap-2">
					<label class="capitalize font-medium" for={name}
						>{name === 'comment' ? m.form_info() : m[`form_${name}`]()}</label
					>
					{#if name !== 'comment'}
						<input
							{name}
							id={name}
							class="border border-black rounded-md py-3 px-7"
							placeholder="{m.form_placeholder()} {m[`form_${name}`]()}"
							bind:value={$form[name]}
							{...$constraints[name]}
						/>
					{:else}
						<textarea
							{name}
							id={name}
							class="border border-black rounded-md py-3 px-7"
							placeholder="{m.form_placeholder()} {name}"
							rows="5"
							bind:value={$form[name]}
							{...$constraints[name]}
						/>
					{/if}
					{#if $errors[name]}<span class="invalid text-red-500">{$errors[name]}</span>{/if}
				</div>
			{/each}
			<button type="submit" class="bg-[#ED1B23] text-white py-3 rounded-lg uppercase font-bold"
				>{m.order_action()}</button
			>
		</form>
	</div>
</div>
