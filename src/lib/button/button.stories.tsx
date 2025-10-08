import { Button } from "./button";

export default {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
		status: {
			type: "stable",
		},
		tags: ["autodocs"],
	},

	argTypes: {
		mode: {
			control: { type: "inline-radio" },
			options: ["primary", "secondary"] as const,
			description: "Button mode",
		},
		size: {
			control: { type: "inline-radio" },
			options: ["small", "medium", "large"] as const,
			description: "Button size",
		},
		text: {
			control: {
				type: "text",
				expanded: true
			},
			description: "Button text",
		},
		disabled: {
			control: { type: "boolean" },
			description: "Button disabled state",
		},
		loading: {
			control: { type: "boolean" },
			description: "Button loading state",
		},
	},
};

export const Base = {
	render: (args: {}) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center", paddingTop: "50px"}}>
			<Button {...args} />
		</div>
	),
	args: {
		text: "Button",
		mode: "primary" as const,
		size: "medium" as const,
		disabled: false,
		loading: false,
	},
};

export const Modes = {
	render: (args: {}) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center", paddingTop: "50px"}}>
			<Button {...args} mode="primary" text="Primary" />
			<Button {...args} mode="secondary" text="Secondary" />
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
			<Button {...args} size="small" text="Small" />
			<Button {...args} size="medium" text="Medium" />
			<Button {...args} size="large" text="Large" />
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

export const States = {
	render: (args: {}) => (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start", paddingTop: "50px"}}>
			<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
				<Button {...args} text="Enabled" />
				<Button {...args} disabled text="Disabled" />
				<Button {...args} loading={true} text="Loading" />
			</div>
		</div>
	),
	args: {
		mode: "primary" as const,
		size: "medium" as const,
	},
	parameters: {
		controls: {
			exclude: ["disabled", "loading", "text"],
		},
	}
};