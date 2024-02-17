<script>
	import { navItems } from '$src/configs';
	import LangSwitcher from './LangSwitcher.svelte';
	import { twMerge } from 'tw-merge';
	import * as m from '$paraglide/messages';

	export let className = '',
		menuClass = '',
		langClass = '';
</script>

<nav class={twMerge(`lg:flex hidden ${className}`)}>
	<ul class="flex gap-6 font-medium {menuClass}">
		{#each navItems as { name, href }}
			<li>
				<a {href}>{m[name]()}</a>
			</li>
		{/each}
	</ul>
	<LangSwitcher className={langClass} />
</nav>
