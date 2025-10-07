import "styled-components";

declare module "styled-components" {

  export interface DefaultTheme {
    colors: {
      bg: {
        base: string;
        primary: string;
        primarySubtle: string;
        secondary: string;
        secondaryHover: string;
        secondaryActive: string;
        secondaryBoldStatic: string;
        secondarySubtle: string;
        inverted: string;
        invertedStatic: string;
        primaryHover: string;
        primaryActive: string;
      };
      text: {
        base: string;
        subtle: string;
        primary: string;
        secondary: string;
        inverted: string;
        invertedStatic: string;
      };
      fg: {
        base: string;
        primary: string;
        subtle: string;
        inverted: string;
        invertedStatic: string;
      };
      border: {
        primary: string;
        primarySubtle: string;
        inverted: string;
        invertedStatic: string;
      };
    };
    /*
    spacers: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      10: string;
      11: string;
      12: string;
      14: string;
      15: string;
      16: string;
      18: string;
      20: string;
      22: string;
      23: string;
      24: string;
      30: string;
      32: string;
      36: string;
      40: string;
      48: string;
      56: string;
      64: string;
      72: string;
    };
    typography: {
      fontFamily: {
        base: string;
      };
      fontSize: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        big: string;
        normal: string;
        small: string;
      };
      lineHeight: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        big: string;
        normal: string;
        small: string;
      };
      fontWeight: {
        regular: string;
        bold: string;
        semiBold: string;
      };
    };
    zIndices: {
      hide: number;
      auto: string;
      surface: number;
      surfaceElevated: number;
      surfaceDragged: number;
      overlayContent: number;
      overlayTooltip: number;
      overlaySidebar: number;
      overlayModal: number;
      overlayNotification: number;
    };
  */
  }
}
