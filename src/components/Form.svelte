<script lang="ts">
	export let handleClose: () => void;
</script>

<div class="fixed inset-0 flex items-center justify-center z-20">
	<button class="fixed bg-black bg-opacity-50 inset-0 z-10" on:click={handleClose} />
	<div class="flex flex-col max-w-[80vw] lg:max-w-[40rem] w-full bg-white p-10 rounded-xl z-10">
		<button class="ml-auto cursor-pointer text-lg" on:click={handleClose}>&#x2715;</button>
		<form class="flex flex-col gap-6">
			<div class="flex flex-col gap-2">
				<label for="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					class="border border-black rounded-md py-3 px-7"
					placeholder="Enter your name"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<input type="email" name="email" />
			</div>
			<div class="flex flex-col gap-2">
				<input type="tel" name="phone" />
			</div>
			<div class="flex flex-col gap-2">
				<textarea id="message" rows="5" />
			</div>
			<button class="bg-[#ED1B23] text-white py-3 rounded-lg"> Send </button>
		</form>
	</div>
</div>
