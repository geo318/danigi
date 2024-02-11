<script>
	import { Navbar, Fold, Button, Heading } from '$components';
	import { infoIcons } from '$lib';
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
