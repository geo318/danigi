<script lang="ts">
	import { check, footer } from '$lib';
	import * as m from '$paraglide/messages';
	const array = [1, 2, 3, 4, 5, 6] as const;
</script>

<footer class="flex flex-col w-full text-white" id="contact">
	<div
		class="h-[15vw] py-5 w-full overflow-hidden relative flex flex-col lg:gap-10 gap-2 items-center justify-center"
	>
		<img src={footer} alt="footer bg" class="absolute inset-0 w-full my-auto -z-10" />
		<div class="absolute inset-0 bg-black bg-opacity-85 -z-10" />
		<h3 class="lg:text-3xl md:text-xl text-sm z-10">{m.footer_h()}, Reutlingen, Index: 72764</h3>
		<div>WhatsApp, Viber: +995 595 666 777</div>
	</div>

	<section class="bg-black">
		<div class="max-w-[100rem] mx-auto">
			<ul class="grid lg:grid-cols-9 grid-cols-2 gap-5 lg:mx-20 mx-3">
				<li class="lg:col-span-3 col-span-1 flex flex-col gap-3">
					<h3 class="text-gray-300 mt-10">Danigi Spedition LLC</h3>
					<ul class="flex flex-col gap-2 mt-5">
						{#each array as i}
							<li class="flex gap-2">
								<img src={check} alt="" class="sm:block hidden" />
								{m[`footer_li_${i}`]()}
							</li>
						{/each}
					</ul>
				</li>
				<li class="lg:col-span-2 col-span-1 flex flex-col gap-3 text-gray-300">
					<h3 class="text-lg font-bold mt-10 mb-5 text-white">ტენტების განყოფილება</h3>
					<a href="tel:+995555666777">+995 555 666 777</a>
					<a href="tel:+995579666777">+995 579 666 777</a>
					<a href="tel:+995596666777">+995 596 666 777</a>
				</li>
				<li class="lg:col-span-2 col-span-1 flex flex-col gap-3 text-gray-300">
					<h3 class="text-lg font-bold mt-10 mb-5 text-white">ავტომზიდები</h3>
					<a href="tel:+995595666777">+995 595 666 777</a>
					<a href="tel:+995558666777">+995 558 666 777</a>
					<a href="tel:+995514666777">+995 514 666 777</a>
				</li>
				<li class="lg:col-span-2 col-span-1 flex flex-col gap-3 text-gray-300">
					<h3 class="text-lg font-bold mt-10 mb-5 text-white">კონტაქტი</h3>
					<a href="tel:+995592666777">+995 592 666 777</a>
					<a href="tel:+995593666777">+995 553 666 777</a>
					<div class="lg:my-3" />
					<a href="mailto:info@danigi.com">info@danigi.com</a>
					<a href="mailto:danigisp@danigi.com">danigisp@danigi.com</a>
				</li>
			</ul>
		</div>
	</section>
	<h6 class="bg-black text-center text-gray-300 pt-12 pb-8">© 2024 DANIGI.COM - {m.footer_c()}</h6>
</footer>
