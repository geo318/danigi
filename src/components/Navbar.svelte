<script>
	import { logo, navItems } from '$lib';
</script>

<nav class="flex lg:px-12 px-3 items-center py-4">
	<img src={logo} alt="logo" height="200" width="200" />
	<ul class="ml-auto flex gap-6 font-medium">
		{#each navItems as { name, href }}
			<li>
				<a {href}>{name}</a>
			</li>
		{/each}
	</ul>
</nav>
