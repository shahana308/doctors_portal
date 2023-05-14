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
} as const;

export type Colors = typeof colors;
export default colors;
