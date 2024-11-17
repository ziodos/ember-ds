import { css, unsafeCSS } from 'lit';
import { tokens } from './tokens';

// Helper function to safely convert token values
const cssValue = (value: string) => unsafeCSS(value);

export const theme = css`
  :host {
    /* Colors */
    --ds-color-primary: ${cssValue(tokens.colors.primary[500])};
    --ds-color-primary-hover: ${cssValue(tokens.colors.primary[600])};
    --ds-color-primary-light: ${cssValue(tokens.colors.primary[100])};
    --ds-color-white: ${cssValue(tokens.colors.neutral.white)};
    --ds-color-neutral-50: ${cssValue(tokens.colors.neutral[50])};
    --ds-color-neutral-100: ${cssValue(tokens.colors.neutral[100])};
    --ds-color-neutral-200: ${cssValue(tokens.colors.neutral[200])};
    --ds-color-neutral-300: ${cssValue(tokens.colors.neutral[300])};
    --ds-color-neutral-400: ${cssValue(tokens.colors.neutral[400])};
    --ds-color-neutral-500: ${cssValue(tokens.colors.neutral[500])};
    --ds-color-neutral-600: ${cssValue(tokens.colors.neutral[600])};
    --ds-color-neutral-700: ${cssValue(tokens.colors.neutral[700])};
    --ds-color-neutral-800: ${cssValue(tokens.colors.neutral[800])};
    --ds-color-neutral-900: ${cssValue(tokens.colors.neutral[900])};

    /* Typography */
    --ds-font-family: ${cssValue(tokens.typography.fontFamily.sans)};
    --ds-font-mono: ${cssValue(tokens.typography.fontFamily.mono)};
    --ds-font-size-xs: ${cssValue(tokens.typography.fontSize.xs)};
    --ds-font-size-sm: ${cssValue(tokens.typography.fontSize.sm)};
    --ds-font-size-base: ${cssValue(tokens.typography.fontSize.base)};
    --ds-font-size-lg: ${cssValue(tokens.typography.fontSize.lg)};
    --ds-font-size-xl: ${cssValue(tokens.typography.fontSize.xl)};
    --ds-font-size-2xl: ${cssValue(tokens.typography.fontSize['2xl'])};
    --ds-font-size-3xl: ${cssValue(tokens.typography.fontSize['3xl'])};
    --ds-font-size-4xl: ${cssValue(tokens.typography.fontSize['4xl'])};

    /* Spacing */
    --ds-spacing-xs: ${cssValue(tokens.spacing.xs)};
    --ds-spacing-sm: ${cssValue(tokens.spacing.sm)};
    --ds-spacing-md: ${cssValue(tokens.spacing.md)};
    --ds-spacing-lg: ${cssValue(tokens.spacing.lg)};
    --ds-spacing-xl: ${cssValue(tokens.spacing.xl)};

    /* Border Radius */
    --ds-radius-sm: ${cssValue(tokens.radius.sm)};
    --ds-radius-md: ${cssValue(tokens.radius.md)};
    --ds-radius-lg: ${cssValue(tokens.radius.lg)};
    --ds-radius-full: ${cssValue(tokens.radius.full)};

    /* Shadows */
    --ds-shadow-sm: ${cssValue(tokens.shadows.sm)};
    --ds-shadow-md: ${cssValue(tokens.shadows.md)};
    --ds-shadow-lg: ${cssValue(tokens.shadows.lg)};
  }

  :host([data-theme="dark"]) {
    --ds-color-primary: ${cssValue(tokens.colors.primary[400])};
    --ds-color-primary-hover: ${cssValue(tokens.colors.primary[300])};
    --ds-color-primary-light: ${cssValue(tokens.colors.primary[900])};
    --ds-color-white: ${cssValue(tokens.colors.neutral[900])};
    --ds-color-neutral-50: ${cssValue(tokens.colors.neutral[800])};
    --ds-color-neutral-100: ${cssValue(tokens.colors.neutral[700])};
    --ds-color-neutral-200: ${cssValue(tokens.colors.neutral[600])};
    --ds-color-neutral-300: ${cssValue(tokens.colors.neutral[500])};
    --ds-color-neutral-400: ${cssValue(tokens.colors.neutral[400])};
    --ds-color-neutral-500: ${cssValue(tokens.colors.neutral[300])};
    --ds-color-neutral-600: ${cssValue(tokens.colors.neutral[200])};
    --ds-color-neutral-700: ${cssValue(tokens.colors.neutral[100])};
    --ds-color-neutral-800: ${cssValue(tokens.colors.neutral[50])};
    --ds-color-neutral-900: ${cssValue(tokens.colors.neutral.white)};
  }
`;