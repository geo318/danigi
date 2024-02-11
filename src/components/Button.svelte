<script>
	export let className = '';
</script>

<button
	class="hover:bg-[#EF4C5E] bg-[#ED1B23] text-center px-6 py-4 font-semibold rounded-lg tracking-wide text-white {className}"
>
	<slot />
</button>
