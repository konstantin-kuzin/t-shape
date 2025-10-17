
import styled, { css } from "styled-components";
import { typography } from "../theme/tokens/typography";


type BadgeSize = "small" | "medium";
type BadgeMode = "primary" | "secondary" | "neutral";

/**
 * Интерфейс для свойств компонента Badge
 */
export interface IBadgeProps {
	/**
	 * Текст бейджа
	 * @default "Badge"
	 */
	text?: string;
	/**
	 * Цветовая схема
	 * - primary: основной режим с акцентным цветом
	 * - secondary: второстепенный режим с нейтральным цветом
	 * - neutral: нейтральный режим для информационных сообщений
	 * @default "primary"
	 */
	mode?: BadgeMode;
	/**
	 * Размер бейджа
	 * - small: компактный размер для ограниченного пространства
	 * - medium: стандартный размер для большинства случаев
	 * @default "small"
	 */
	size?: BadgeSize;
}


const badgeMode = {
	primary: css`
		color: ${(props) => props.theme.colors.text.inverted};
		background-color: ${(props) => props.theme.colors.bg.primary};
		border: 1px solid ${(props) => props.theme.colors.bg.primary};
	`,

	secondary: css`
		color: ${(props) => props.theme.colors.text.invertedStatic};
		background-color: ${(props) => props.theme.colors.bg.secondary};
		border: 1px solid ${(props) => props.theme.colors.bg.secondary};
	`,

	neutral: css`
		color: ${(props) => props.theme.colors.text.inverted};
		background-color: ${(props) => props.theme.colors.bg.inverted};
		border: 1px solid ${(props) => props.theme.colors.bg.inverted};
	`,
};

const badgeSize = {
	medium: css`
			font-size: ${typography.fontSize.medium};
			line-height: ${typography.lineHeight.medium};
			padding: 4px 20px;
			height: 32px;
			`,
	small: css`
			font-size: ${typography.fontSize.small};
			line-height: ${typography.lineHeight.small};
			padding: 2px 16px;
			min-height: 20px;
			`,
}

const StyledBadge = styled.div<IBadgeProps>`
	display: inline-block;
	font-style: normal;
	font-weight: 500;
	font-family: ${typography.fontFamily.base};
	font-weight: ${typography.fontWeight.regular};
	vertical-align: middle;
	white-space: nowrap;
	border-radius: 999px;
	max-width: 200px;
	overflow: hidden;
	text-overflow: ellipsis;
	${(props) => badgeSize[props.size || "small"]}
	${(props) => badgeMode[props.mode || "primary"]}
`;


/**
 * Компонент Badge - элемент для отображения статусов, категорий или меток
 *
 * @param text - Текст бейджа (по умолчанию: "Badge")
 * @param mode - Режим отображения: "primary" (основной), "secondary" (второстепенный) или "neutral" (нейтральный)
 * @param size - Размер бейджа: "small" или "medium"
 */
export const Badge: React.FC<IBadgeProps> = ({ text, mode, size }) => {
	const badgeText = text ? text : "Badge";

	return (
		<StyledBadge mode={mode} size={size}>
			{badgeText}
		</StyledBadge>
	);
};