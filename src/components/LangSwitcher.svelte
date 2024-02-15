<script lang="ts">
	import { availableLanguageTags } from '$paraglide/runtime';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n.js';
	import { locales } from '$configs';
</script>

<div class="flex gap-2 px-5">
	{#each availableLanguageTags as lang}
		<a href={i18n.route($page.url.pathname)} hreflang={lang}>{locales[lang]}</a>
	{/each}
</div>
