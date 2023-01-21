import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    primary: "#f07e00",
    secondary: "#fff",
  },
  font: {
    primary: "Roboto, sans-serif",
    secondary: "Roboto, sans-serif",
  },
});

export const navbarContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: vars.color.primary,
  color: vars.color.secondary,
  fontSize: "1.6rem",
  padding: "1rem",
  fontFamily: vars.font.primary,
});
