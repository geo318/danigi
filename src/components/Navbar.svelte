<script lang="ts">
	import { logo } from '$lib';
	import { Nav } from '$components';
	import { goto } from '$app/navigation';

	let innerWidth = 1024,
		isOpen = false;
	const toggleMenu = () => (isOpen = !isOpen);

	$: isMobile = innerWidth <= 1024;
</script>

<svelte:window bind:innerWidth />

<nav class="flex lg:px-12 px-3 items-center py-4 bg-white">
	<button on:click={() => goto('/')}>
		<img src={logo} alt="logo" height="200" width="200" />
	</button>

	{#if !isMobile}
		<Nav className="ml-auto lg:flex hidden" />
	{:else if isOpen}
		<button class="bg-black bg-opacity-30 fixed inset-0 z-20" on:click={toggleMenu} />
		<aside class="fixed right-0 inset-y-0 w-[70vw] bg-white z-50 p-5 flex flex-col">
			<button on:click={toggleMenu} class="text-2xl ml-auto">&#x2715;</button>
			<Nav className="flex flex-col mr-auto" menuClass="flex-col" langClass="px-0 mt-5" />
		</aside>
	{:else}
		<button class="ml-auto text-2xl lg:hidden flex" on:click={toggleMenu}>&#9776;</button>
	{/if}
</nav>
