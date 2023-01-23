import { createTheme, style, styleVariants } from "@vanilla-extract/css";
import { spice } from "@/styles/sprinkles.css";

const greenBtn = spice({
  backgroundColor: "green-600",
  color: "white",
  padding: "size-3",
  width: "size-13",
  borderRadius: "radius-3",
  border: "border-0",
});

const redBtn = spice({
  backgroundColor: "red-400",
  color: "white",
  padding: "size-3",
  width: "size-13",
  borderRadius: "radius-3",
  border: "border-0",
});

export const btnVariants = styleVariants({
  primary: [redBtn],
  secondary: [greenBtn],
});
