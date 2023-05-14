const borders = {
  none: 0,
  primary: {
    "1px": "1px solid #51608B",
    solid: {
      600: "2px solid #6E8ADA",
    },
  },
  grey: {
    dashed: { 500: "1px dashed #ACB0B5", 300: "1px dashed #C5C8D2" },
    solid: {
      50: "1px solid #7B7B7BB2",
      60: "1px solid #EDEBF9",
      80: "1px solid #DADCDF",
      100: "0.5px solid #EAEAEA",
      200: "2px solid #EAEAEA",
      700: "1px solid #878787",
      600: "1px solid #A8A8A8",
      550: "1px solid #565656",
      500: "1px solid #ACB0B5",
      400: "1px solid #DEDDDD",
      300: "1px solid #C5C8D2",
      150: "1px solid #d8d8d8",
    },
  },
  greyAlpha: {
    dashed: { 500: "1px dashed #ACB0B580" },
  },
  black: {
    solid: {
      400: "1px solid #3A3B3E33",
      500: "1px solid #3A3B3E",
    },
  },
  green: {
    300: "1px solid #84DF8D",
    500: "1px solid #238914",
    600: "7px solid #4E9578",
  },
  red: {
    200: "1px solid #F47373",
    500: "1px solid red",
    600: "7px solid #C10000",
  },
  blue: {
    300: "7px solid #5b74b9",
    600: "7px solid #234588",
  },
  yellow: {
    600: "7px solid #EAB719",
  },
  brown: {
    300: "1px solid #C97335",
  },
  // red: {
  //   500: '1px solid #AD1D1D',
  // },
  transparent: "1px solid transparent",
  "1px": "0.1rem solid",
  "2px": "0.2rem solid",
};

export default borders;
