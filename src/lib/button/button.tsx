import styled, { css } from "styled-components";
import { typography } from "../theme/tokens/typography";
import { Icon } from "../icon/icon";


/**
 * Интерфейс для свойств компонента Button
 */
export interface IButtonProps {
    /** Текст кнопки */
    text?: string;
    /** Стиль кнопки */
    mode?: "primary" | "secondary";
    /** Размер кнопки */
    size?: "small" | "medium" | "large";
    /** Заблокированное состояние кнопки */
    disabled?: boolean;
    /** Состояние загрузки */
    loading?: boolean;
    /** Название иконки */
    iconAfter?: "chevronRight" | "user";
}

// Используем transient-prop: $loading
const StyledButton = styled.button<{
    mode?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
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
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    ${(props) => props.size === "small" && `
        font-size: ${typography.fontSize.small};
        line-height: ${typography.lineHeight.small};
        padding: 0px 16px;
        min-height: 32px;
        min-width: 80px;
    `}

    ${(props) => props.size === "medium" && `
        font-size: ${typography.fontSize.medium};
        line-height: ${typography.lineHeight.medium};
        padding: 0px 24px;
        min-height: 40px;
        min-width: 90px;
    `}

    ${(props) => props.size === "large" && `
        font-size: ${typography.fontSize.big};
        line-height: ${typography.lineHeight.big};
        padding: 0px 32px;
        min-height: 52px;
        min-width: 100px;   
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
    gap: 4px;
    ${(props) => props.loading && css`opacity: 0;`}
    ${(props) => props.disabled && !props.loading && css`opacity: 0.4;`}
`;

const Spinner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border: 2px solid currentColor;
    border-top: 2px solid transparent;
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
}) => {
    const buttonText = text ? text : "The Button";
    
    const iconSize = (buttonSize: "small" | "medium" | "large") => {
        switch (buttonSize) {
            case "small": return 16;
            case "medium": return 20;
            case "large": return 24;
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
                {buttonText}
                {iconAfter && (
                <Icon
                    iconName={iconAfter}
                    size={iconSize(size)}
                />
            )}
            </Content>
            {loading && <Spinner />}
            
        </StyledButton>
    );
};
