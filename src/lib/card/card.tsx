import styled from "styled-components";
import { typography } from "../theme/tokens/typography";
import { Badge } from "../badge/badge";

export interface ICardProps {
	text?: string;
	date?: string;
	badge?: boolean;
	badgeText?: string;
	imageUrl?: string;
}

const CardWrapper = styled.div`
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
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme.colors.bg.primarySubtle};
		border-color: ${(props) => props.theme.colors.border.primary};
	}
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

const CardDate = styled.div`
	font-family: ${typography.fontFamily.base};
	font-size: ${typography.fontSize.small};
	line-height: ${typography.lineHeight.small};
	color: ${(props) => props.theme.colors.text.subtle};
	font-weight: ${typography.fontWeight.regular};
`;

export const Card: React.FC<ICardProps> = ({
	text = "Сегодня местами в Подмосковье идёт дождь — в некоторых округах он будет ещё и завтра.",
	date = "2 апреля 2025 г., 08:00",
	badge = true,
	badgeText = "Новости",
	imageUrl,
}) => {
	return (
		<CardWrapper>
			{badge && (
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
				<CardDate>{date}</CardDate>
			</Content>
		</CardWrapper>
	);
};