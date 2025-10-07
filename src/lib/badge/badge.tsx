
import { FC } from "react";
import styled, { css } from "styled-components";
import { typography } from "../theme/tokens/typography";

export interface BadgeProps {
	text?: string;
	mode?: "primary" | "secondary" | "neutral";
	size?: "small" | "medium";
}


const badgeMode = {
	primary: css`
		color: ${(props) => props.theme.colors.text.base};
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
			font-size: ${typography.fontSize.base};
			line-height: ${typography.lineHeight.base};
			padding: 4px 20px;
			min-height: 32px;
			`,
	small: css`
			font-size: ${typography.fontSize.small};
			line-height: ${typography.lineHeight.small};
			padding: 2px 16px;
			min-height: 20px;
			`,
	}

const StyledBadge = styled.div<{ mode: BadgeProps["mode"]; size: BadgeProps["size"] }>`
	display: inline-block;
	font-style: normal;
	font-weight: 500;
	font-family: ${typography.fontFamily.base};
	font-weight: ${typography.fontWeight.regular};
	text-align: center;
	white-space: nowrap;
	border-radius: 999px;
	max-width: 200px;
	overflow: hidden;
	text-overflow: ellipsis;
	${(props) => badgeSize[props.size || "small"]}
	${(props) => badgeMode[props.mode || "primary"]}
`;


export const Badge: FC<BadgeProps> = ({
	text = "Badge",
	mode = "primary",
	size = "small",
}) => {
	const badgeText = text ? text : "Badge";

	return (
		<StyledBadge mode={mode} size={size}>
			{badgeText}
		</StyledBadge>
	);
};