import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>` 
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        -webkit-overflow-scrolling: touch;
        font-family: sans-serif;
        background: ${({ theme }) => theme.colors.bg.base};
        color: ${({ theme }) => theme.colors.text.base};
        transition: background-color 0.2s ease, color 0.2s ease;
    }

    /* Storybook specific styles */
    .sb-show-main,
    .sb-main-padded,
    .sb-main-padded .sb-bar,
    .sb-main-padded .sb-bar .sb-bar__inner {
        background: ${({ theme }) => theme.colors.bg.base} !important;
        color: ${({ theme }) => theme.colors.text.base} !important;
    }

    #storybook-root,
    #root,
    [data-testid="storybook-root"] {
        background: ${({ theme }) => theme.colors.bg.base};
        color: ${({ theme }) => theme.colors.text.base};
        transition: background-color 0.2s ease, color 0.2s ease;
        display: flex;
        gap: 16px;
        align-items: center;
        justify-content: center;
        margin: 50px;
    }

    #storybook-docs,
    .docs-story {
        margin: 0px;
        padding: 0px;
        background: ${({ theme }) => theme.colors.bg.base};
        color: ${({ theme }) => theme.colors.text.base};
    }
`;
