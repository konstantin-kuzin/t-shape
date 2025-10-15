import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

/**
 * Элемент для отображения статусов, категорий или меток
 * Используется для выделения важной информации, статусов или категоризации контента.
 * Поддерживает различные режимы отображения и размеры.
 */
const meta: Meta<typeof Badge> = {
	title: "Components/Badge",
	tags: ["autodocs"],
	component: Badge,
	parameters: {
		controls: {
			expanded: true
		},
		docs: {
			description: {
				component: `
Бейдж - это элемент интерфейса для отображения статусов, категорий или меток.

## Назначение

Компонент "Badge" предназначен для:
- Отображения статусов и категорий
- Выделения важной информации
- Категоризации контента
- Создания визуальных акцентов

## Цветовые темы

### Primary (Основной)
- Используется для выделения основной информации
- Цвета: акцентный цвет фона с инвертированным текстом
- Применение: основные статусы, важные категории

### Secondary (Второстепенный)
- Используется для дополнительной информации
- Цвета: нейтральный цвет фона с инвертированным текстом
- Применение: вспомогательные статусы, дополнительные категории

### Neutral (Нейтральный)
- Используется для информационных сообщений
- Цвета: инвертированный цвет фона с инвертированным текстом
- Применение: информационные статусы, системные сообщения

## Размеры

| Размер | Мин. высота | Padding | Шрифт | Применение |
|--------|-------------|---------|-------|-----------|
| small | 20px | 2px 16px | Маленький | Компактные интерфейсы, ограниченное пространство |
| medium | 32px | 4px 20px | Средний | Стандартное использование, большинство случаев |

## Особенности

- **Автоматическая обрезка текста**: Длинный текст автоматически обрезается с помощью ellipsis
- **Максимальная ширина**: 200px для предотвращения слишком широких бейджей

## Используемые токены

### Цвета

#### Primary режим
- Фон: \`theme.colors.bg.primary\`
- Текст: \`theme.colors.text.inverted\`
- Граница: \`theme.colors.bg.primary\`

#### Secondary режим
- Фон: \`theme.colors.bg.secondary\`
- Текст: \`theme.colors.text.invertedStatic\`
- Граница: \`theme.colors.bg.secondary\`

#### Neutral режим
- Фон: \`theme.colors.bg.inverted\`
- Текст: \`theme.colors.text.inverted\`
- Граница: \`theme.colors.bg.inverted\`

### Типографика

- Семейство шрифта: \`typography.fontFamily.base\`
- Вес шрифта: \`typography.fontWeight.regular\`

#### Размеры шрифта и высота строки

| Размер бейджа | Размер шрифта | Высота строки | Padding | Мин. высота |
|---------------|---------------|---------------|---------|-------------|
| small | \`typography.fontSize.small\` | \`typography.lineHeight.small\` | 2px 16px | 20px |
| medium | \`typography.fontSize.medium\` | \`typography.lineHeight.medium\` | 4px 20px | 32px |
				`
			}
		}
	},
	
	argTypes: {
		text: {
			control: "text",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "Badge" },
			}
		},
		mode: {
			control: { type: "radio" },
			options: ["primary", "secondary", "neutral"] as const,
			table: {
				type: { summary: "primary | secondary | neutral" },
				defaultValue: { summary: "primary" },
				category: "Вид"
			}
		},
		size: {
			control: { type: "radio" },
			options: ["small", "medium"] as const,
			table: {
				type: { summary: "small | medium" },
				defaultValue: { summary: "small" },
				category: "Вид"
			}
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Базовый бейдж с основными пропсами
 */
export const Base: Story = {
	args: {
        text: "Badge",
        mode: "primary",
        size: "small",
    },
	parameters: {
		controls: {
			expanded: true
		}
	}
};

/**
 * Примеры бейджей в разных режимах
 */
export const Mode: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
			<Badge {...args} mode="primary" text="Primary" />
			<Badge {...args} mode="secondary" text="Secondary" />
			<Badge {...args} mode="neutral" text="Neutral" />
		</div>
	),
	args: {
		size: "small",
	},
	parameters: {
		controls: {
			exclude: ["mode", "text"],
		},
	}
};

/**
 * Примеры бейджей разных размеров
 */
export const Size: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
			<Badge {...args} size="small" text="Small" />
			<Badge {...args} size="medium" text="Medium" />
		</div>
	),
	args: {
		mode: "primary",
	},
	parameters: {
		controls: {
			exclude: ["size", "text"],
		},
	}
};

/**
 * Примеры бейджей с длинным текстом и автоматической обрезкой
 */
export const LongValue: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
			<Badge {...args} size="small" />
			<Badge {...args} size="medium" />
		</div>
	),
	args: {
		text: "Очень длинный текст бейджа который не помещается в контейнер",
		mode: "secondary",
	},
	name: "Long Text Value",
	parameters: {
		controls: {
			exclude: ["size"],
		},
	}
};
