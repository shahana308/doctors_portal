import { checkboxAnatomy as parts } from '@chakra-ui/anatomy';
import {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from '@chakra-ui/styled-system';

import { mode } from '@chakra-ui/theme-tools';

const baseStyleControl: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;

  return {
    w: '100%',
    h: '100%',
    transitionProperty: 'box-shadow',
    transitionDuration: 'normal',
    border: '1px solid',
    borderRadius: 'sm',
    borderColor: 'inherit',
    color: 'white',

    _checked: {
      bg: 'primary.500',
      borderColor: 'primary.500',
      color: mode(`white`, `black`)(props),

      _hover: {
        bg: `primary.500`,
        borderColor: 'none',
      },

      _disabled: {
        borderColor: mode('grey.200', 'transparent')(props),
        bg: mode('grey.200', 'greyAlpha.200')(props),
        color: mode('grey.500', 'greyAlpha.200')(props),
      },
    },

    _indeterminate: {
      bg: 'primary.500',
      borderColor: 'primary.500',
      color: mode('white', 'grey.900')(props),
    },

    _disabled: {
      bg: mode('gray.100', 'whiteAlpha.100')(props),
      borderColor: mode('grey.100', 'transparent')(props),
    },

    _focusVisible: {
      boxShadow: 'none',
    },

    _invalid: {
      borderColor: mode('red.500', 'red.300')(props),
    },
  };
};

const baseStyleContainer: SystemStyleObject = {
  _disabled: { cursor: 'not-allowed' },
};

const baseStyleLabel: SystemStyleFunction = (props) => {
  return {
    display: 'flex',
    alignItems: 'center',
    width: 'full',
    marginLeft: 5,
  };
};

const baseStyleIcon: SystemStyleObject = {
  transitionProperty: 'transform',
  transitionDuration: 'normal',
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  icon: baseStyleIcon,
  container: baseStyleContainer,
  control: baseStyleControl(props),
  label: baseStyleLabel(props),
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  '2xl': {
    control: { w: 3, h: 3 },
    label: { fontSize: 'lg', px: 4, h: 12 },
    icon: { fontSize: '0.625rem' },
  },
  xl: {
    control: { w: 3, h: 3 },
    label: { fontSize: 'lg', px: 4, h: 12 },
    icon: { fontSize: '0.625rem' },
  },
  lg: {
    control: { w: 3, h: 3 },
    label: { fontSize: 'lg', px: 4, h: 12, borderRadius: 'md' },
    icon: { fontSize: '0.625rem' },
  },
  md: {
    control: { w: 4, h: 4 },
    label: { fontSize: 'md', px: 4, h: 'full', borderRadius: 'md' },
    icon: { fontSize: '0.625rem' },
  },
  sm: {
    control: { h: 3, w: 3 },
    label: { fontSize: 'sm', px: 3, h: 8, borderRadius: 'sm' },
    icon: { fontSize: '0.45rem' },
  },
};

const defaultProps = {
  size: 'md',
  colorScheme: 'blue',
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps,
};
