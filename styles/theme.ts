const palette = {
  red: "#cc7161",
  orange: "#dc9770",
  amber: "#e8b67f",
  yellow: "#e7d192",
  olive: "#aebb8f",
  sage: "#8ba38d",
  basil: "#638a7e",
  teal: "#529ead",
  navy: "#40768c",

  black: "#000000",
  lightBlack: "#444444",
  white: "#ffffff",
  lightWhite: "#eeeeee",
};

export const theme = {
  colors: {
    background: palette.lightWhite,
    red: palette.red,
    orange: palette.orange,
    amber: palette.amber,
    yellow: palette.yellow,
    olive: palette.olive,
    sage: palette.sage,
    basil: palette.basil,
    teal: palette.teal,
    navy: palette.navy,
    black: palette.black,
    lightBlack: palette.lightBlack,
    white: palette.white,
  },
  spacing: {
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    l: 20,
    xl: 24,
    xxl: 40,
  },
  typography: {
    header: {
      fontFamily: "Raleway",
      fontSize: 36,
      fontWeight: "bold",
    },
    body: {
      fontFamily: "Merriweather",
      fontSize: 16,
    },
  },
  breakpoints: {
    smallPhone: 0,
    phone: 321,
    tablet: 768,
  },
};
