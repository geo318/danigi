import { mb, hk, oc, rs } from '../lib/assets';

export const navItems = [
	{ name: 'nav_cars', href: '#cars' },
	{ name: 'nav_cargo', href: '#cargo' },
	{ name: 'nav_prices', href: '#price' },
	{ name: 'nav_about', href: '#about' },
	{ name: 'nav_contact', href: '#contact' }
] as const;

export const locales = {
	en: '🇬🇧',
	ka: '🇬🇪',
	ru: '🇷🇺'
} as const;

export const formInputs = {
	name: '',
	phone: '',
	email: '',
	comment: ''
} as const;

export const autoList = [
	{
		bg: mb,
		name: 'MERCEDES - BMW',
		list: [
			'Mercedes W211',
			'Mercedes W212',
			'Mercedes W213',
			'Mercedes 639 Viano Lang',
			'Mercedes 447 V Class Lang',
			'Mercedes 639 Viano Extralang',
			'Mercedes 447 V Class Extralang',
			'BMW E46',
			'BMW X1,X5,X6,X7',
			'BMW E60',
			'BMW E70'
		]
	},
	{
		bg: hk,
		name: 'HYUNDAI - KIA',
		list: [
			'Hyundai Accent',
			'Hyundai Matrix',
			'Hyundai i30',
			'Hyundai i30 Kombi/Hatchback',
			'Hyundai Sonata',
			'Hyundai Santafe',
			'Hyundai Tucson',
			'Kia Rio',
			'Kia Ceed Kombi/Karavan',
			'Kia Ceed Limousine/Hatchback'
		]
	},
	{
		bg: rs,
		name: 'RENAULT - SKODA',
		list: [
			'Renault Dacia Logan Kombi/Karavan',
			'Renault Megane Kombi/Karavan',
			'Renault Scenic Hatchback',
			'Renault Scenic - Karavan',
			'Skoda Fabia Kombi/Karavan',
			'Skoda Roomster Kombi/Karavan'
		]
	},
	{
		bg: oc,
		name: 'OTHER',
		list: [
			'Ford Connect',
			'Ford Transit',
			'Fiat Doblo',
			'OPEL Astra H',
			'OPEL Combo',
			'OPEL Zafira',
			'TOYOTA Corolla-Hatchback',
			'TOYOTA Corolla Kombi/Karavan'
		]
	} as const
];

export const generateCargoSectionKeys = () => {
	const section = 3;
	type Section = 1 | 2 | 3;
	const cargoSectionConfig = [] as {
		h: `cargo_${Section}_h`;
		p: `cargo_${Section}_p`;
		li: `cargo_${Section}_li${Section | 4}`[];
	}[];
	for (let i = 0; i < section; i++) {
		const num = (i + 1) as Section;
		cargoSectionConfig[i] = {
			h: `cargo_${num}_h`,
			p: `cargo_${num}_p`,
			li: [`cargo_${num}_li1`, `cargo_${num}_li2`, `cargo_${num}_li3`, `cargo_${num}_li4`]
		};
	}
	return cargoSectionConfig;
};

export const steps = ['order', 'del', 'pay'] as const;
