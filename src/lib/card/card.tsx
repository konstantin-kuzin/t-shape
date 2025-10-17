import styled from "styled-components";
import { typography } from "../theme/tokens/typography";
import { Badge } from "../badge/badge";
import { Button } from "../button/button";

/**
 * Интерфейс для свойств компонента Card
 */
export interface ICardProps {
	/** Основной текст карточки */
	text?: string;
	/** Дополнительный текст */
	additionalText?: string;
	/** Текст бейджа. Если не передан - бейдж не отображается */
	badgeText?: string;
	/** URL фонового изображения */
	imageUrl?: string;
	/** Интерактивность */
	interactive?: boolean;
	/** Текст на кнопке */
	buttonText?: string;

}

const CardWrapper = styled.div<{ interactive?: boolean }>`
	position: relative; 
	width: 100%;
	min-width: 280px;
	max-width: 400px;
	background-color: ${(props) => props.theme.colors.bg.base};
	border: 1px solid ${(props) => props.theme.colors.border.primarySubtle};
	border-radius: 16px;
	overflow: hidden;
	box-sizing: border-box;
	transition: all 0.2s ease;
	cursor: ${(props) => (props.interactive ? "pointer" : "default")};

	${(props) => props.interactive && `
		&:hover {
			background-color: ${props.theme.colors.bg.primarySubtle};
			border-color: ${props.theme.colors.border.primary};
		}
	`}
`;

const BadgeContainer = styled.div`
	position: absolute;
	top: 16px;
	right: 16px;
	z-index: 3;
`;

const BackgroundImage = styled.div<{ imageUrl?: string }>`
	width: 100%;
	height: 100%;
	min-height: 200px;
	position: relative;
	overflow: hidden;

	${(props) => props.imageUrl && `
		background-image: url(${props.imageUrl});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	`}
`;

const Content = styled.div`
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	border-top: 1px solid ${(props) => props.theme.colors.border.primarySubtle};
`;

const CardText = styled.div`
	font-family: ${typography.fontFamily.base};
	font-size: ${typography.fontSize.medium};
	line-height: ${typography.lineHeight.medium};
	color: ${(props) => props.theme.colors.text.base};
	font-weight: ${typography.fontWeight.semiBold};
`;

const CardAdditionalText = styled.div`
	font-family: ${typography.fontFamily.base};
	font-size: ${typography.fontSize.small};
	line-height: ${typography.lineHeight.small};
	color: ${(props) => props.theme.colors.text.subtle};
	font-weight: ${typography.fontWeight.regular};
`;

/**
 * Компонент Card - карточка для отображения контента. 
 *
 * @param text - Основной текст карточки (по умолчанию содержит пример текста о погоде)
 * @param additionalText - Дата или дополнительная информация (по умолчанию: "2 апреля 2025 г., 08:00")
 * @param badgeText - Текст бейджа (по умолчанию: "Новости")
 * @param imageUrl - URL фонового изображения карточки
 */
export const Card: React.FC<ICardProps> = ({
	text = "Text",
	additionalText = "Text",
	badgeText,
	imageUrl,
	interactive = true,
	buttonText = "Открыть",
}) => {
	return (
		<CardWrapper interactive={interactive}>
			{badgeText && (
				<BadgeContainer>
					<Badge
						text={badgeText}
						mode="neutral"
						size="small"
					/>
				</BadgeContainer>
			)}
			<BackgroundImage imageUrl={imageUrl} />
			<Content>
				<CardText>{text}</CardText>
				<CardAdditionalText>{additionalText}</CardAdditionalText>
				{!interactive && <div style={{ paddingTop: '8px' }}><Button text={buttonText} /></div>}
			</Content>
		</CardWrapper>
	);
};
