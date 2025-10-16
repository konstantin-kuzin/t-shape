import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

/**
 * Компонент Card для отображения контента в виде карточки.
 * Используется для отображения новостей, статей или другого контента в карточном формате.
 * Может отображать основной текст, дополнительный текст, бейдж и фоновое изображение.

 */
const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
	parameters: {
		layout: "centered",
		controls: {
			expanded: true
		},
		docs: {
			description: {
				component: `
Карточка - это компонент для отображения контента в структурированном виде с поддержкой изображений и меток.

## Назначение

Компонент "Card" предназначен для:
- Отображения новостей, статей или другого контента в карточном формате
- Структурированного представления информации с визуальным разделением
- Создания галерей и списков контента
- Представления товаров или услуг


## Размеры и отступы

| Элемент | Размеры |
|---------|---------|
| CardWrapper | Мин. ширина: 280px<br/>Макс. ширина: 400px |
| BackgroundImage | Мин. высота: 200px |
| Content | Padding: 16px |

## Состояния

### Default (Обычное)
- Базовое состояние карточки
- Светлый фон с границей

### Hover (При наведении)
- Изменение цвета фона на более темный
- Усиление границы
- Плавный переход (0.2s ease)

## Особенности

- **Адаптивность**: Ширина карточки автоматически подстраивается под контент
- **Фоновые изображения**: Поддержка изображений с автоматическим позиционированием

## Используемые токены

### Цвета
- Фон: \`theme.colors.bg.base\` (основной) и \`theme.colors.bg.primarySubtle\` (при hover)
- Границы: \`theme.colors.border.primarySubtle\` (основная) и \`theme.colors.border.primary\` (при hover)
- Текст: \`theme.colors.text.base\` (основной) и \`theme.colors.text.subtle\` (дополнительный)

### Типографика
- Семейство шрифта: \`typography.fontFamily.base\`
- Основной текст: \`typography.fontSize.medium\` / \`typography.lineHeight.medium\`
- Дополнительный текст: \`typography.fontSize.small\` / \`typography.lineHeight.small\`
				`
			}
		}
	},
	tags: ["autodocs"],
	argTypes: {
		text: {
			control: "text",
			table: {
				type: { summary: "string" },

			}
		},
		additionalText: {
			control: "text",
			table: {
				type: { summary: "string" },

			}
		},
		badgeText: {
			control: "text",
			table: {
				type: { summary: "string" },

			}
		},
		imageUrl: {
			control: "text",
			table: {
				type: { summary: "string" },

			}
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Базовая карточка
 */
export const Base: Story = {
	args: {
		text: "Сегодня местами в Подмосковье идёт дождь — в некоторых округах он будет ещё и завтра.",
		additionalText: "31 июня 2025 г.",
		badgeText: "Новости",
		imageUrl: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/c70c4a02-f7af-510c-92b0-54d3fe9d0b6c/8f037b8a-487e-5bc4-8aef-95264a468c03.jpg",
	},
};