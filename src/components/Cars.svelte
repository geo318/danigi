<script>
	import { cars } from '$lib';
	export let className = '';
</script>

<section class="flex justify-between w-full max-w-[100rem] mx-auto px-20 py-4 {className}">
	{#each cars as car}
		<div class="shrink-0">
			<img src={car} alt={car} width="48" height="48" />
		</div>
	{/each}
</section>
