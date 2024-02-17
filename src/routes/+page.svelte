<script>
	import { Navbar, Fold, Button, Heading, Cars, Footer, Form } from '$components';
	import { infoIcons, bodyType1, bodyType2 } from '$lib';
	import { autoList, generateCargoSectionKeys, steps } from '$configs';
	import * as m from '$paraglide/messages';

	let isFormOpen = false;
	const handleClose = () => (isFormOpen = false);
	const handleOpen = () => (isFormOpen = true);
</script>

<Navbar />

<Fold {handleOpen} />
{#if isFormOpen}
	<Form {handleClose} />
{/if}

<main class="flex flex-col items-center">
	<Heading id="cars">{m.auto_transport()}</Heading>
	<section class="max-w-[100rem] mx-12 p-10 rounded-3xl bg-white grid grid-cols-2 gap-20">
		<div>
			<h5 class="mb-8 text-2xl font-medium">{m.why_h()}</h5>
			<p class="mt-2 leading-relaxed">
				{m.why_p1()}
			</p>
			<p class="mt-4 leading-relaxed">
				{m.why_p2()}
			</p>
			<Button className="mt-10">{m.why_action()}</Button>
		</div>
		<div>
			<ul class="flex flex-col gap-6">
				<li class="border border-[#ED1B23] rounded-2xl px-6 py-5 flex gap-5">
					<img src={infoIcons[0]} alt="icon" />
					{m.why_li1()}
				</li>
				<li class="border border-[#ED1B23] rounded-2xl px-6 py-5 flex gap-5">
					<img src={infoIcons[1]} alt="icon" />
					{m.why_li2()}
				</li>
				<li class="border border-[#ED1B23] rounded-2xl px-6 py-5 flex gap-5">
					<img src={infoIcons[2]} alt="icon" />
					{m.why_li3()}
				</li>
				<li class="border border-[#ED1B23] rounded-2xl px-6 py-5 flex gap-5">
					<img src={infoIcons[3]} alt="icon" />
					{m.why_li4()}
				</li>
			</ul>
		</div>
	</section>

	<Heading id="price">{m.transport()}</Heading>

	<section
		class="max-w-[100rem] mx-12 p-10 w-[calc(100%-6rem)] rounded-3xl bg-white gap-20 overflow-hidden relative"
	>
		<Cars className="absolute top-0 inset-x-0 bg-black bg-opacity-70 py-5" />
		<div class="h-10" />

		<div class="grid grid-cols-4 gap-10 justify-between mt-10">
			{#each autoList as { name, bg, list }}
				<section class="border border-zinc-300 rounded-lg overflow-hidden">
					<figure class="relative">
						<img src={bg} alt={name} class="w-full" />
						<div class="absolute inset-0 bg-black bg-opacity-50" />
						<figcaption
							class="text-white absolute z-10 inset-0 flex items-center justify-center text-2xl font-medium"
						>
							{name}
						</figcaption>
					</figure>

					<ul class="p-5 flex flex-col gap-3">
						{#each list as c}
							<li>{c}</li>
						{/each}
					</ul>
				</section>
			{/each}
		</div>
		<address class="text-right text-red-600 mt-5">
			<span>&#128222; {m.price_insight()}</span>
			<a href="tel:+995555666777">+995 555 666 777</a>
		</address>
	</section>

	<Heading>{m.order()}</Heading>
	<section
		class="max-w-[100rem] mx-12 w-[calc(100%-6rem)] p-10 rounded-3xl bg-white gap-20 overflow-hidden relative"
	>
		<h3 class="text-3xl text-medium text-center">{m.order_h3()}</h3>
		<h5 class="text-center mt-8">{m.order_h5()}</h5>

		<figure class="grid grid-cols-2 gap-10">
			<div class="pt-8"><img src={bodyType1} alt="transport" class="w-full" /></div>
			<div><img src={bodyType2} alt="transport" class="w-full" /></div>
		</figure>
	</section>

	<Heading id="cargo">{m.cargo_transport()}</Heading>
	<section
		class="max-w-[100rem] mx-12 w-[calc(100%-6rem)] overflow-hidden relative grid grid-cols-3 gap-5 text-slate-800"
	>
		{#each generateCargoSectionKeys() as section}
			<div class="bg-white rounded-2xl p-10">
				<h5 class="text-center text-[#ED1B23] font-bold text-xl mb-10">{m[section.h]()}</h5>
				<p class="text-sm leading-loose mb-5">{m[section.p]()}</p>
				<ul class="flex flex-col gap-2 list-disc">
					{#each section.li as li}
						<li class="text-sm leading-loose text-balance">{m[li]()}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</section>

	<Heading className="mb-5">{m.steps()}</Heading>
	<section class="max-w-[100rem] mx-12 w-[calc(100%-6rem)] pb-10 overflow-hidden relative">
		<h3 class="text-center">
			{m.steps_sub()}
		</h3>
	</section>
	<section class="max-w-[100rem] mx-12 w-[calc(100%-6rem)] p-10 overflow-hidden relative">
		<div class="border-t border-zinc-300 w-full" />
		<ul class="-mt-6 pb-10 flex justify-around">
			{#each steps as step, i}
				<li class="flex flex-col items-center">
					<div
						class="h-12 w-12 rounded-lg bg-[#ED1B23] text-white text-2xl flex items-center justify-center font-semibold"
					>
						{i + 1}
					</div>
					<h5 class="text-lg font-medium text-center mt-4 mb-6">{m[`steps_${step}_h`]()}</h5>
					<p class="max-w-80 text-center">
						{m[`steps_${step}_p`]()}
					</p>
				</li>
			{/each}
		</ul>
	</section>

	<Heading id="about">{m.about_h()}</Heading>
	<section class="max-w-[100rem] mx-12 w-[calc(100%-6rem)] p-10 rounded-3xl bg-white overflow-hidden relative">
		<p class="text-sm text-slate-800 leading-loose">{m.about()}</p>
	</section>

	<section class="w-full relative mt-20">
		<Footer />
	</section>
</main>
