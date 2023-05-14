const colors = {
  black: {
    800: "#222222",
  },
  green: {
    800: "#11302A",
  },
  white: {
    200: "#F3F5F7",
  },
  grey: {
    100: "#F3F5F7",
    300: "#686868",
    500: "#9fa0a2",
  },
  teal: {
    100: "#def4f7",
    500: "#59afb1",
  },
  orange: {
    100: "#ffeedd",
    500: "#fe8a1b",
  },
  red: {
    100: "#ffe8e9",
    500: "#fe676c",
  },
  blue: {
    100: "#def0ff",
    500: "#1d9dff",
  },
} as const;

export type Colors = typeof colors;
export default colors;
