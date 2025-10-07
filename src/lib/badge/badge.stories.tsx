import { Badge } from "./badge";

export default {
	title: "Components/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
		status: {
			type: "stable",
		},
		tags: ["autodocs"],
	},
	tags: ["autodocs"],
	
	argTypes: {
		mode: {
			control: { type: "inline-radio" },
			options: ["primary", "secondary", "neutral"] as const,
			description: "Badge mode",
		},
		size: {
			control: { type: "inline-radio" },
			options: ["small", "medium"] as const,
			description: "Badge size",
		},
		text: {
			control: {
				type: "text",
				expanded: true
			},
			description: "Badge text",
		},
	},
};

export const Base = {
	render: (args: {}) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center", paddingTop: "50px"}}>
			<Badge {...args} />
		</div>
	),
	args: {
		text: "The Badge",
		mode: "primary" as const,
		size: "small" as const,
	},
};

export const Modes = {
	render: (args: {}) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center", paddingTop: "50px"}}>
			<Badge {...args} mode="primary" text="Primary"  />
			<Badge {...args} mode="secondary" text="Secondary" />
			<Badge {...args} mode="neutral" text="Neutral" />
		</div>
	),
	parameters: {
		controls: {
			exclude: ["mode", "text"],
		},
	}
};

export const Sizes = {
	render: (args: {}) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center", paddingTop: "50px"}}>
			<Badge {...args} size="small" text="Small" />
			<Badge {...args} size="medium" text="Medium" />
		</div>
	),
	args: {
		mode: "primary" as const,
	},
	parameters: {
		controls: {
			exclude: ["size", "text"],
		},
	},
};

export const LongValue = {
	render: (args: {}) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center", paddingTop: "50px"}}>
			<Badge {...args} size="small" />
			<Badge {...args} size="medium" />
		</div>
	),
	args: {
		text: "Очень длинный текст бейджа который не помещается в контейнер",
		mode: "secondary" as const,
	},
};
