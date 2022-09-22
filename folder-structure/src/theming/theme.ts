type ThemeColors = {
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
};

export type Theme = {
  colors: ThemeColors;
};

export const theme: Theme = {
  colors: {
    primary: '#AE97ED',
    secondary: '#F08AB9',
    textPrimary: '#000000',
    textSecondary: '#FFFFFF'
  }
};
