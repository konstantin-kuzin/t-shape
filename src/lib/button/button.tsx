import styled from "styled-components";
import { typography } from "../theme/tokens/typography";
import { Icon } from "../icon/icon";
import { spacers } from "../theme/tokens/spacers";


type ButtonSize = "small" | "medium" | "large";
type ButtonMode = "primary" | "secondary";
type iconBefore = "chevronLeft" | "user";
type iconAfter = "chevronRight" | "user";


/**
 * Интерфейс для свойств компонента Button
 */
export interface IButtonProps {
    /** Текст кнопки */
    text?: string;
    /** Стиль кнопки */
    mode?: ButtonMode
    /** Размер кнопки */
    size?: ButtonSize
    /** Заблокированное состояние кнопки */
    disabled?: boolean;
    /** Состояние загрузки */
    loading?: boolean;
    /** Название иконки iconBefore */
    iconBefore?: iconBefore
    /** Название иконки iconAfter */
    iconAfter?: iconAfter

}

// Используем transient-prop: $loading
const StyledButton = styled.button<{
    mode?: ButtonMode
    size?: ButtonSize
    disabled?: boolean;
    $loading?: boolean; // transient prop
}>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${typography.fontFamily.base};
    font-weight: ${typography.fontWeight.semiBold};
    text-align: center;
    white-space: nowrap;
    border-radius: ${spacers[4]};
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    ${(props) => props.size === "small" && `
        font-size: ${typography.fontSize.small};
        line-height: ${typography.lineHeight.small};
        padding: ${spacers[0]} ${spacers[8]};
        min-height: ${spacers[32]};
        min-width: ${spacers[80]};
    `}

    ${(props) => props.size === "medium" && `
        font-size: ${typography.fontSize.medium};
        line-height: ${typography.lineHeight.medium};
        padding: ${spacers[0]} ${spacers[12]};
        min-height: ${spacers[40]};
        min-width: ${spacers[88]};
    `}

    ${(props) => props.size === "large" && `
        font-size: ${typography.fontSize.big};
        line-height: ${typography.lineHeight.big};
        padding: ${spacers[0]} ${spacers[16]};
        min-height: ${spacers[48]};
        min-width: ${spacers[104]};   
    `}

    ${(props) => props.mode === "primary" && `
        background-color: ${props.theme.colors.bg.primary};
        color: ${props.theme.colors.text.inverted};
        border: 1px solid ${props.theme.colors.bg.primary};

        &:hover:not(:disabled) {
            background-color: ${props.theme.colors.bg.primaryHover};
            border-color: ${props.theme.colors.bg.primaryHover};
        }

        &:active:not(:disabled) {
            background-color: ${props.theme.colors.bg.primaryActive};
            border-color: ${props.theme.colors.bg.primaryActive};
        }

        &:disabled {
            cursor: not-allowed;
        }
    `}
    ${(props) => props.mode === "secondary" && `
        background-color: ${props.theme.colors.bg.secondary};
        color: ${props.theme.colors.text.invertedStatic};
        border: 1px solid ${props.theme.colors.bg.secondary};

        &:hover:not(:disabled) {
            background-color: ${props.theme.colors.bg.secondaryHover};
            border-color: ${props.theme.colors.bg.secondaryHover};
        }

        &:active:not(:disabled) {
            background-color: ${props.theme.colors.bg.secondaryActive};
            border-color: ${props.theme.colors.bg.secondaryActive};
        }

        &:disabled {
            background-color: ${props.theme.colors.bg.secondaryBoldStatic};
            border-color: ${props.theme.colors.bg.secondaryBoldStatic};
            cursor: not-allowed;
        }
    `}
`;

const Content = styled.span<{ loading?: boolean; disabled?: boolean }>`\
    display: flex;
    gap: ${spacers[4]};
    ${(props) => props.loading && `opacity: 0;`}
    ${(props) => props.disabled && !props.loading && `opacity: 0.4;`}
`;

const IconContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: props.mode === "primary" ? ${(props) => props.theme.colors.fg.inverted} : ${(props) => props.theme.colors.fg.invertedStatic};
`;

const Spinner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${spacers[16]};
    height: ${spacers[16]};
    border: ${spacers[2]} solid currentColor;
    border-top: ${spacers[2]} solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
`;

export const Button: React.FC<IButtonProps> = ({
    text,
    mode = "primary",
    size = "medium",
    disabled = false,
    loading = false,
    iconAfter,
    iconBefore,
}) => {
    const buttonText = text ? text : "The Button";

    const iconSize = (buttonSize: ButtonSize) => {
        switch (buttonSize) {
            case "small": return 16;
            default: return 20;
        }
    };

    return (
        <StyledButton
            mode={mode}
            size={size}
            disabled={disabled || loading}
            $loading={loading}
        >
            <Content loading={loading} disabled={disabled}>
                {iconBefore && (
                    <IconContainer>
                        <Icon iconName={iconBefore} size={iconSize(size)} />
                    </IconContainer>
                )}
                {buttonText}
                {iconAfter && (
                    <IconContainer>
                        <Icon iconName={iconAfter} size={iconSize(size)} />
                    </IconContainer>
                )}
            </Content>
            {loading && <Spinner />}

        </StyledButton>
    );
};
