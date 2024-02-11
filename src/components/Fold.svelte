<script>
	import { banner } from '$lib';
</script>

<div class="grid-box text-white">
	<div class="bg-black opacity-70 grid-bg" />
	<img src={banner} alt="banner" class="w-full grid-bg" />
	<div class="left-col z-10 lg:pl-28 flex flex-col justify-center gap-8">
		<h1 class="text-5xl font-bold leading-normal">ავტომობილების ტრანსპორტირება</h1>
		<h3 class="font-medium text-lg">ტვირთების გადაზიდვა, ექსპორტი და იმპორტი</h3>
	</div>
	<div class="right-col z-10">
		<div class="h-full lg:mx-28 rounded-lg relative p-5 justify-center items-center">
			<div class="bg-black opacity-20 absolute inset-0" />
			ტრანსპორტირება
		</div>
	</div>
	<slot />
</div>

<style>
	.grid-box {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.grid-bg {
		grid-area: 1 / 1 / 6 / 5;
	}
	.left-col {
		grid-area: 2 / 1 / 5 / 3;
	}
	.right-col {
		grid-area: 2 / 5 / 5 / 3;
	}
</style>
