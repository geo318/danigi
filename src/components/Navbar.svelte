<script>
	import { logo } from '$lib';
	import { navItems } from '$configs';
	import { LangSwitcher } from '$components';
	import { goto } from '$app/navigation';
	import * as m from '$paraglide/messages';
</script>

<nav class="flex lg:px-12 px-3 items-center py-4 bg-white">
	<button on:click={() => goto('/')}>
		<img src={logo} alt="logo" height="200" width="200" />
	</button>

	<ul class="ml-auto flex gap-6 font-medium">
		{#each navItems as { name, href }}
			<li>
				<a {href}>{m[name]()}</a>
			</li>
		{/each}
	</ul>
	<LangSwitcher />
</nav>
