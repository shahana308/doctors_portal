import {
  StyleConfig,
  SystemStyleFunction,
  SystemStyleObject,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const baseStyle: StyleConfig['baseStyle'] = (_props: unknown) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'light',
  borderRadius: '0.3125rem',
  _focus: {
    outline: 'unset',
    boxShadow: 'unset',
  },
  _active: {
    outline: 'unset',
    boxShadow: 'unset',
  },
  '&:hover': {
    '& img': {
      filter: 'brightness(0) invert(1)',
    },
  },
});

const variantSolid: SystemStyleFunction = () => ({
  bg: 'primary.500',
  cursor: 'pointer',
  // textTransform: 'capitalize',
  rounded: 'full',
  textColor: 'white',
  _hover: {
    bg: 'primary.500',
    color: 'white',
    _disabled: {
      backgroundColor: 'primary.200',
      textColor: 'white',
    },
  },
});

const variantSolidRed: SystemStyleFunction = () => ({
  bg: 'red.600',
  rounded: 'full',
  textColor: 'white',
  // textTransform: 'capitalize',
  cursor: 'pointer',
  _hover: {
    bg: '"red.600"',
    color: 'white',
    _disabled: {
      backgroundColor: '"red.600"',
      textColor: 'white',
    },
  },
});

const variantSolidGreen: SystemStyleFunction = () => ({
  bg: 'green.600',
  rounded: 'full',
  textColor: 'white',
  // textTransform: 'capitalize',
  cursor: 'pointer',
  _hover: {
    bg: '"green.600"',
    color: 'white',
    _disabled: {
      backgroundColor: '"green.600"',
      textColor: 'white',
    },
  },
});

const variantOutlinePrimary: SystemStyleFunction = (props) => ({
  bg: 'transparent',
  rounded: 'full',
  textColor: mode('primary.500', 'primary.600')(props),
  borderWidth: '1px',
  borderColor: mode('primary.500', 'primary.600')(props),
  // textTransform: 'capitalize',
  _hover: {
    bg: mode('primary.500', 'primary.600')(props),
    textColor: 'white',
    _disabled: {
      backgroundColor: mode('primary.500', 'primary.600')(props),
      textColor: 'white',
    },
  },
  _active: {
    bg: 'transparent',
    textColor: mode('primary.500', 'primary.600')(props),
    borderColor: mode('primary.500', 'primary.600')(props),
  },
});

const variantOutlineSecondary: SystemStyleFunction = (props) => ({
  bg: 'transparent',
  textColor: mode('black.500', 'white')(props),
  cursor: 'pointer',
  borderWidth: '1px',
  rounded: 'full',
  // textTransform: 'capitalize',
  borderColor: mode('black.500', 'grey.560')(props),
  _hover: {
    bg: 'black.500',
    textColor: 'white',
    _disabled: {
      bg: 'blackAlpha.500',
      textColor: mode('whiteAlpha.900', 'secondaryGray')(props),
    },
  },
});

const variantTransparent: SystemStyleObject = {
  bg: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // textTransform: 'capitalize',
  _hover: {
    _disabled: {},
  },
};

const variants: StyleConfig['variants'] = {
  solid: variantSolid,
  solidRed: variantSolidRed,
  solidGreen: variantSolidGreen,
  outlinePrimary: variantOutlinePrimary,
  outlineSecondary: variantOutlineSecondary,
  transparent: variantTransparent,
};

const sizes: SystemStyleObject = {
  md: {
    height: 8,
    fontSize: 'sm',
  },
  sm: { fontSize: 'sm' },
  xs: { fontSize: 'xs' },
};

const defaultProps = {
  variant: 'solid',
  size: 'md',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
