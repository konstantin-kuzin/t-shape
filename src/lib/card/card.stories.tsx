import { Card } from "./card";

export default {
	title: "Components/Card",
	component: Card,
	parameters: {
		layout: "centered",
		status: {
			type: "stable",
		},
		tags: ["autodocs"],
	},

	argTypes: {
		text: {
			control: {
				type: "text",
				expanded: true
			},
			description: "Card text content",
		},
		date: {
			control: {
				type: "text",
			},
			description: "Card date",
		},
		badge: {
			control: { type: "boolean" },
			description: "Show badge",
		},
		badgeText: {
			control: {
				type: "text",
			},
			description: "Badge text",
		},
		imageUrl: {
			control: {
				type: "text",
			},
			description: "Background image URL",
		},
		
	},
};

export const Base = {
	render: (args: {}) => (
		<Card {...args} />
	),
	args: {
		text: "Сегодня местами в Подмосковье идёт дождь — в некоторых округах он будет ещё и завтра.",
		date: "2 апреля 2025 г., 08:00",
		badge: true,
		badgeText: "Новости",
		imageUrl: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/c70c4a02-f7af-510c-92b0-54d3fe9d0b6c/8f037b8a-487e-5bc4-8aef-95264a468c03.jpg",
	},
};