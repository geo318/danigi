<script>
	import { cars } from '$lib';
	export let className = '';
</script>

<section class="py-4 w-full">
	<div
		class="auto-cols grid md:flex justify-between max-w-[100rem] mx-auto lg:px-20 px-3 {className}"
	>
		{#each cars.sort(() => Math.random() - 0.5) as car}
			<div class="shrink-0">
				<img src={car} alt={car} width="48" height="48" />
			</div>
		{/each}
	</div>
</section>

<style>
	.auto-cols {
		grid-template-columns: repeat(auto-fill, 60px);
		grid-template-rows: 1fr minmax(0, 0) minmax(0, 0);
		overflow: hidden;
	}
</style>
