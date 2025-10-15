import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

/**
 * Компонент Button для создания интерактивных кнопок с различными режимами отображения.
 * Поддерживает различные размеры, режимы (primary/secondary), состояния загрузки и отключения.
 */
const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
		controls: {
			expanded: true
		},
		tags: ["autodocs"],
		docs: {
			description: {
				component: `
Кнопка - это интерактивный элемент интерфейса, который позволяет пользователям выполнять действия в приложении.

## Назначение

Компонент "Button" предназначен для:
- Инициирования действий пользователя (отправка формы, навигация, подтверждение)
- Привлечения внимания к основным действиям
- Обеспечения обратной связи при взаимодействии

## Варианты стиля

### Primary (Основной)
- Используется для основных действий
- Цвета: оранжевый фон с темным текстом
- Применение: формы, модальные окна, основные CTA

### Secondary (Вторичный)
- Используется для вспомогательных действий
- Цвета: синий фон с белым текстом
- Применение: второстепенные действия, навигация

## Размеры

| Размер | Мин. ширина | Высота | Padding | Шрифт | Применение |
|--------|--------|--------|---------|-------|-----------|
| small | 80px | 32px | 8px 16px | 12px | Компактные интерфейсы, таблицы |
| medium | 95px | 40px | 12px 24px | 14px | Стандартные формы и интерфейсы |
| large | 102px | 52px | 16px 32px | 16px | Акцентные элементы, мобильные интерфейсы |

## Состояния

- **Default**: Базовое состояние кнопки
- **Hover**: Изменение цвета фона при наведении курсора
- **Active**: Затемненный цвет фона во время клика
- **Disabled**: Полупрозрачный текст, отсутствие реакции
- **Loading**: Отображение спиннера, отсутствие реакции

## Используемые токены

### Цвета

#### Primary режим
- Фон: \`theme.colors.bg.primary\`
- Hover: \`theme.colors.bg.primaryHover\`
- Active: \`theme.colors.bg.primaryActive\`
- Текст: \`theme.colors.text.inverted\`
- Граница: Наследуется от фона

#### Secondary режим
- Фон: \`theme.colors.bg.secondary\`
- Hover: \`theme.colors.bg.secondaryHover\`
- Active: \`theme.colors.bg.secondaryActive\`
- Disabled: \`theme.colors.bg.secondaryBoldStatic\`
- Текст: \`theme.colors.text.invertedStatic\`
- Граница: Наследуется от фона

### Типографика

- Семейство шрифта: \`typography.fontFamily.base\`
- Вес шрифта: \`typography.fontWeight.semiBold\`

#### Размеры шрифта и высота строки

| Размер кнопки | Размер шрифта | Высота строки | Padding | Мин. высота | Мин. ширина |
|---------------|---------------|---------------|---------|-------------|-------------|
| small | \`typography.fontSize.small\` | \`typography.lineHeight.small\` | 0px 16px | 32px | 80px |
| medium | \`typography.fontSize.medium\` | \`typography.lineHeight.medium\` | 0px 24px | 40px | 90px |
| large | \`typography.fontSize.big\` | \`typography.lineHeight.big\` | 0px 32px | 52px | 100px |

## Лучшие практики

1. **Выбор варианта**:
   - Primary для основных действий
   - Secondary для вспомогательных действий

2. **Выбор размера**:
   - Small для компактных интерфейсов
   - Medium для стандартных форм
   - Large для акцентных элементов

3. **Состояния**:
   - Используйте loading для асинхронных операций
   - Блокируйте кнопку во время отправки формы
   - Показывайте disabled для недоступных действий

4. **Текст**:
   - Используйте глаголы действия
   - Будьте кратки и ясны
   - Следуйте тону приложения
				`
			}
		}
	},
	argTypes: {
		text: {
			control: "text",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "Button" },
			}
		},
		mode: {
			control: { type: "radio" },
			options: ["primary", "secondary"] as const,
			table: {
				type: { summary: "primary | secondary" },
				defaultValue: { summary: "primary" },
				category: "Вид"
			}
		},
		size: {
			control: { type: "radio" },
			options: ["small", "medium", "large"] as const,
			table: {
				type: { summary: "small | medium | large" },
				defaultValue: { summary: "medium" },
				category: "Вид"
			}
		},
		disabled: {
			control: "boolean",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Состояние"
			}
		},
		loading: {
			control: "boolean",
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
				category: "Состояние"
			}
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Базовая кнопка
 */
export const Base: Story = {
	args: {
		text: "Button",
		mode: "primary",
		size: "medium",
		disabled: false,
		loading: false,
	},
};

/**
 * Примеры кнопок в разных стилях
 */
export const Mode: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
			<Button {...args} mode="primary" text="Primary" />
			<Button {...args} mode="secondary" text="Secondary" />
		</div>
	),
	args: {
		size: "medium",
		disabled: false,
		loading: false,
	},
	parameters: {
		controls: {
			exclude: ["mode", "text"],
		},
	}
};

/**
 * Примеры кнопок разных размеров
 */
export const Size: Story = {
	render: (args) => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
			<Button {...args} size="small" text="Small" />
			<Button {...args} size="medium" text="Medium" />
			<Button {...args} size="large" text="Large" />
		</div>
	),
	args: {
		mode: "primary",
		disabled: false,
		loading: false,
	},
	parameters: {
		controls: {
			exclude: ["size", "text"],
		},
		// docs: {
		// 	description: {
		// 		story: "Демонстрация кнопок разных размеров."
		// 	}
		// }
	}
};

/**
 * Примеры кнопок в разных состояниях (enabled, disabled, loading)
 */
export const State: Story = {
	render: (args) => (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
			<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
				<Button {...args} text="Enabled" />
				<Button {...args} disabled text="Disabled" />
				<Button {...args} loading={true} text="Loading" />
			</div>
		</div>
	),
	args: {
		mode: "primary",
		size: "medium",
	},
	parameters: {
		controls: {
			exclude: ["disabled", "loading", "text"],
		},
	}
};