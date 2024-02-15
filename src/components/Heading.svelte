<script>
	export let className = '';
	export let id = '';
</script>

<h3 class="mx-auto text-center mt-12 mb-10 text-2xl font-medium {className}" {id}>
	<slot />
</h3>
