<script>
	import { banner, pin } from '$lib';
	import { Button, Cars } from '$components';
</script>

<section class="grid-box text-white">
	<div class="bg-black opacity-70 grid-bg" />
	<img src={banner} alt="banner" class="w-full grid-bg" />
	<div class="left-col z-10 lg:pl-28 flex flex-col justify-center gap-8 max-w-[50rem]">
		<h1 class="text-5xl font-bold leading-normal">ავტომობილების ტრანსპორტირება</h1>
		<h3 class="font-medium text-lg">ტვირთების გადაზიდვა, ექსპორტი და იმპორტი</h3>
	</div>
	<div class="flex right-col z-10 ml-auto">
		<div
			class="h-full max-w-[28rem] max-h-[32rem] my-auto lg:mx-28 rounded-lg relative p-10 overflow-hidden shadow"
		>
			<section class="flex flex-col h-full text-center">
				<div class="flex gap-3 font-bold w-full justify-center items-center text-2xl">
					<img src={pin} alt="location pin" />ტრანსპორტირება
				</div>
				<h4 class="mt-2">გააფორმე შეკვეთა</h4>
				<h3 class="font-bold text-2xl balanced mt-auto">შეუკვეთე ტვირთი ან ავტომობილი მარტივად</h3>
				<Button className="mt-8 mb-auto">შეკვეთის გაფორმება</Button>
				<a href="/" class="font-semibold underline">დაგვიკავშირდი</a>
			</section>

			<div class="bg-black opacity-20 absolute inset-0 -z-10" />
		</div>
	</div>
	<slot />
</section>
<div class="bg-black bg-opacity-90 w-full">
	<Cars />
</div>

<style>
	.grid-box {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.grid-bg {
		grid-area: 1 / 1 / 6 / 5;
	}
	.left-col {
		grid-area: 1 / 1 / 5 / 3;
	}
	.right-col {
		grid-area: 1 / 5 / 5 / 3;
	}
	.shadow {
		box-shadow: 4px 4px 30px 10px hsla(0, 0%, 100%, 0.1);
	}
</style>
