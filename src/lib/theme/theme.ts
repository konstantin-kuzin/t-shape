import { DefaultTheme, ThemeProvider } from "styled-components";
import { colors } from "./tokens";

export const lightTheme: DefaultTheme = {
    colors:{
        bg:{
            base: colors.neutral[100],
            primary: colors.orange[400],
            primaryHover: colors.orange[500],
            primaryActive: colors.orange[600],
            primarySubtle: colors.orange[100],
            secondary: colors.blue[500],
            secondaryHover: colors.blue[600],
            secondaryActive: colors.blue[700],
            secondaryBoldStatic: colors.blue[700],
            secondarySubtle: colors.blue[100],
            inverted: colors.storm[600],
            invertedStatic: colors.storm[700],  
        },
        text:{
            base: colors.neutral[800],
            subtle: colors.neutral[500],
            primary: colors.orange[400],
            secondary: colors.blue[500],
            inverted: colors.neutral[100],
            invertedStatic: colors.neutral[100],
        },
        fg: {
            base: colors.neutral[800],
            primary: colors.orange[400],
            subtle: colors.neutral[500],
            inverted: colors.neutral[100],
            invertedStatic: colors.neutral[100],
        },
        border: {
            primary: colors.orange[400],
            primarySubtle: colors.orange[200],
            inverted: colors.neutral[100],
            invertedStatic: colors.neutral[100],
        },
    },
}

export const darkTheme: DefaultTheme = {
    colors:{
        bg:{
            base: colors.neutral[800],
            primary: colors.orange[500],
            primaryHover: colors.orange[600],
            primaryActive: colors.orange[700],
            primarySubtle: colors.orange[700],
            secondary: colors.blue[600],
            secondaryHover: colors.blue[700],
            secondaryActive: colors.blue[800],
            secondaryBoldStatic: colors.blue[700],
            secondarySubtle: colors.blue[700],
            inverted: colors.storm[400],
            invertedStatic: colors.storm[700],  
        },
        text:{
            base: colors.neutral[100],
            subtle: colors.neutral[500],
            primary: colors.orange[500],
            secondary: colors.blue[400],
            inverted: colors.neutral[800],
            invertedStatic: colors.neutral[100],
        },
        fg: {
            base: colors.neutral[200],
            primary: colors.orange[500],
            subtle: colors.neutral[500],
            inverted: colors.neutral[800],
            invertedStatic: colors.neutral[100],
        },
        border: {
            primary: colors.orange[500],
            primarySubtle: colors.orange[600],
            inverted: colors.neutral[800],
            invertedStatic: colors.neutral[100],
        },
    },
}


export { ThemeProvider };