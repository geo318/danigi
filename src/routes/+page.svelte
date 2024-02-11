<script>
	import { Navbar, Fold, Button, Heading, Cars } from '$components';
	import { infoIcons, mb, hk, oc, rs } from '$lib';
</script>

<Navbar />

<Fold />

<Heading>ავტომობილების ტრანსპორტირება</Heading>

<section class="max-w-[100rem] mx-20 p-10 rounded-3xl bg-white grid grid-cols-2 gap-20">
	<div>
		<h5 class="mb-8 text-2xl font-medium">რატომ უნდა აირჩიოთ Danigi?</h5>
		<p class="mt-2 leading-relaxed">
			მრავალი მიზეზი არსებობს, რის გამოც ჩვენი მომხმარებლები ირჩევენ ჩვენს მომსახურებას
			ავტომობილების ტრანსპორტირებისთვის. ჩვენ თავიდანვე აქტიურად ვართ ჩართულები პროცესში, იმისთვის,
			რომ ზუსტად გავიგოთ თქვენი მოთხოვნები. დანიგის პროფესიონალი გუნდი, დაგეხმარებათ ამომწურავი
			ინფორმაციის მიღებაში და შეკვეთის დაფიქსირებიდან მის ჩაბარებამდე, მჭიდრო კომუნიკაციაში იქნებიან
			თქვენთან. ჩვენ გთავაზობთ საუკეთესო ტარიფს უმაღლესი ხარისხის მომსახურებისთვის, რომელსაც სხვაგან
			ვერ ნახავთ!
		</p>
		<p class="mt-4 leading-relaxed">
			თქვენი ავტომობილის უსაფრთხოდ და დროულად დანიშნულების ადგილზე ტრანსპორტირება, ჩვენი მთავარი
			პრიორიტეტია.
		</p>
		<Button className="mt-10">ავტომობილების სია</Button>
	</div>
	<div>
		<ul class="flex flex-col gap-6">
			<li class="border border-[#ED1B23] rounded-2xl px-6 py-5 flex gap-5">
				<img src={infoIcons[0]} alt="icon" />
				ავტომობილის მოძებნა გერმანიაში შეგიძლიათ შემდეგ საიტებზე: www.mobile.de www.autoscout24.de ან
				სხვა ნებისმიერი საშუალებით.
			</li>
			<li class="border border-[#ED1B23] rounded-2xl px-6 py-5 flex gap-5">
				<img src={infoIcons[1]} alt="icon" />
				დანიგის ექსპერტები ადგილზე აფასებენ თქვენს მიერ შერჩეული ავტომობილს, შემდეგ კი ხდება გადაყავთ
				ავტოპარკამდე.
			</li>
			<li class="border border-[#ED1B23] rounded-2xl px-6 py-5 flex gap-5">
				<img src={infoIcons[2]} alt="icon" />
				ვახდენთ ტვირთების გაფორმებას, თანმხლები დოკუმენტაციისა და საბაჟო საბუთების სწორად მომზადებას.
			</li>
			<li class="border border-[#ED1B23] rounded-2xl px-6 py-5 flex gap-5">
				<img src={infoIcons[3]} alt="icon" />
				ვუზრუნველყოფთ ავტომობილების ტრანსპორტირებას გერმანიიდან საქართველოში, ევროსტანდარტის სრული დაცვით.
			</li>
		</ul>
	</div>
</section>

<Heading>ჩამოიყვანე გერმანიიდან</Heading>

<section class="max-w-[100rem] mx-20 p-10 rounded-3xl bg-white gap-20 overflow-hidden relative">
	<Cars className="absolute top-0 inset-x-0 bg-black bg-opacity-70" />
	<div class="h-10" />

	<div class="grid grid-cols-4 gap-10 justify-between mt-10">
		<section class="border border-zinc-300 rounded-lg overflow-hidden">
			<figure class="relative">
				<img src={mb} alt="" class="w-full" />
				<div class="absolute inset-0 bg-black bg-opacity-50" />
			</figure>

			<ul class="p-5 flex flex-col gap-2">
				<li>Mercedes W211</li>
				<li>Mercedes W213</li>
				<li>Mercedes 639 Viano Lang</li>
				<li>Mercedes W212</li>
				<li>Mercedes 447 V Class Lang</li>
				<li>Mercedes 639 Viano Extralang</li>
				<li>Mercedes 447 V Class Extralang</li>
				<li>BMW E46</li>
				<li>BMW X1,X5,X6,X7</li>
				<li>BMW E60</li>
			</ul>
		</section>
		<section class="border border-zinc-300 rounded-lg overflow-hidden">
			<figure class="relative">
				<img src={hk} alt="" class="w-full" />
				<div class="absolute inset-0 bg-black bg-opacity-50" />
			</figure>
			<ul class="p-5 flex flex-col gap-2">
				<li>Hyundai Accent</li>
				<li>Hyundai Matrix</li>
				<li>Hyundai i30</li>
				<li>Hyundai i30 Kombi/Hatchback</li>
				<li>Hyundai Sonata</li>
				<li>Hyundai Santafe</li>
				<li>Hyundai Tucson</li>
				<li>Kia Rio</li>
				<li>Kia Ceed Kombi/Karavan</li>
				<li>Kia Ceed Limousine/Hatchback</li>
				<li>Kia Carens</li>
			</ul>
		</section>

		<section class="border border-zinc-300 rounded-lg overflow-hidden">
			<figure class="relative">
				<img src={rs} alt="" class="w-full" />
				<div class="absolute inset-0 bg-black bg-opacity-50" />
			</figure>
			<ul class="p-5 flex flex-col gap-2">
				<li>Renault Dacia Logan Kombi/Karavan</li>
				<li>Renault Megane Kombi/Karavan</li>
				<li>Renault Scenic Hatchback</li>
				<li>Renault Scenic - Karavan</li>
				<li>Skoda Fabia Kombi/Karavan</li>
				<li>Skoda Roomster Kombi/Karavan</li>
			</ul>
		</section>

		<section class="border border-zinc-300 rounded-lg overflow-hidden">
			<figure class="relative">
				<img src={oc} alt="" class="w-full" />
				<div class="absolute inset-0 bg-black bg-opacity-50" />
			</figure>
			<ul class="p-5 flex flex-col gap-2">
				<li>Ford Connect</li>
				<li>Ford Transit</li>
				<li>Fiat Doblo</li>
				<li>OPEL Astra H</li>
				<li>OPEL Combo</li>
				<li>OPEL Zafira</li>
				<li>TOYOTA Corolla-Hatchback</li>
				<li>TOYOTA Corolla Kombi/Karavan</li>
			</ul>
		</section>
	</div>
</section>
