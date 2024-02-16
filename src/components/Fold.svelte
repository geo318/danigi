<script lang="ts">
	import { banner, pin } from '$lib';
	import { Button, Cars } from '$components';
	import * as m from '$paraglide/messages';

	export let handleOpen: () => void;
</script>

<section class="grid-box text-white">
	<div class="bg-black opacity-70 grid-bg" />
	<img src={banner} alt="banner" class="w-full grid-bg" />
	<section class="grid-bg grid-box max-w-[100rem] px-20 mx-auto w-full">
		<div class="left-col z-10 flex flex-col justify-center gap-8 w-full">
			<h1 class="text-5xl font-bold leading-normal">{m.fold_car_transport()}</h1>
			<h3 class="font-medium text-lg">{m.fold_cargo_transport()}</h3>
		</div>
		<div class="flex right-col z-10 w-full">
			<div
				class="h-full max-w-[30rem] ml-auto w-full max-h-[32rem] my-auto rounded-lg relative p-10 overflow-hidden shadow"
			>
				<section class="flex flex-col h-full text-center">
					<div class="flex gap-3 font-bold w-full justify-center items-center text-2xl">
						<img src={pin} alt="location pin" />{m.fold_transport()}
					</div>
					<h4 class="mt-2">{m.fold_order()}</h4>
					<h3 class="font-bold text-2xl balanced mt-auto">{m.fold_order_car_cargo()}</h3>

					<Button className="mt-8 mb-auto" onClick={handleOpen}>{m.fold_action()}</Button>

					<a href="#contact" class="font-semibold underline">{m.fold_contact()}</a>
				</section>

				<div class="bg-black opacity-20 absolute inset-0 -z-10" />
			</div>
		</div>
	</section>
	<slot />
</section>
<div class="bg-black bg-opacity-90 w-full">
	<Cars />
</div>

<style>
	.grid-box {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.grid-bg {
		grid-area: 1 / 1 / 6 / 5;
	}
	.left-col {
		grid-area: 1 / 1 / 5 / 3;
	}
	.right-col {
		grid-area: 1 / 3 / 4 / 5;
	}
	.shadow {
		box-shadow: 4px 4px 30px 10px hsla(0, 0%, 100%, 0.1);
	}
</style>
