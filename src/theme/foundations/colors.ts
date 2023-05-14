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
  },
} as const;

export type Colors = typeof colors;
export default colors;
