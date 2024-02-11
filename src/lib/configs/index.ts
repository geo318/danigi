import { mb, hk, oc, rs } from '../assets';

export const navItems = [
	{ name: 'ავტომობილები', href: '/' },
	{ name: 'ტვირთები', href: '/needs' },
	{ name: 'ფასები', href: '/service' },
	{ name: 'ჩვენს შესახებ', href: '/about' },
	{ name: 'კონტაქტი', href: '/contact' }
];

export const locales = {
	en: '🇬🇧',
	ka: '🇬🇪',
	ru: '🇷🇺'
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
