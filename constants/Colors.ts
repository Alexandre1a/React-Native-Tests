export const Colors = {
  light: {
    // Couleurs de base pour le thème clair
    primary: "#007AFF", // Bleu iOS par défaut
    background: "#F2F2F7", // Gris clair système
    label: "#000000", // Noir
    secondaryText: "#666666", // Gris foncé
    accent: "#34C759", // Vert
    error: "#FF3B30", // Rouge
  },
  dark: {
    // Couleurs de base pour le thème sombre
    primary: "#0A84FF", // Bleu iOS sombre
    background: "#000000", // Noir
    label: "#FFFFFF", // Blanc
    secondaryText: "#8E8E93", // Gris
    accent: "#30D158", // Vert clair
    error: "#FF453A", // Rouge vif
  },
};
export type ColorTheme = "light" | "dark";

export const getThemeColors = (theme: ColorTheme) => Colors[theme];
