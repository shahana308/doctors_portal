import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleObject,
} from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const baseStyle: PartsStyleObject<typeof parts> = {
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
  },
};

const size: Record<string, SystemStyleObject> = {
  '2xl': {
    fontSize: 'xl',
    px: 4,
    h: 12,
  },
  xl: {
    fontSize: 'xl',
    px: 4,
    h: 12,
  },
  lg: {
    fontSize: 'lg',
    px: 4,
    h: 12,
    borderRadius: 'md',
  },

  md: {
    fontSize: 'md',
    px: 4,
    h: 10,
    borderRadius: 'md',
  },

  sm: {
    fontSize: 'sm',
    px: 3,
    h: 8,
    borderRadius: 'sm',
  },

  xs: {
    fontSize: 'xs',
    px: 2,
    h: 6,
    borderRadius: 'sm',
  },
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  '2xl': {
    field: size['2xl'],
    addon: size['2xl'],
  },
  xl: {
    field: size.xl,
    addon: size.xl,
  },
  lg: {
    field: size.lg,
    addon: size.lg,
  },
  md: {
    field: size.md,
    addon: size.md,
  },
  sm: {
    field: size.sm,
    addon: size.sm,
  },
  xs: {
    field: size.xs,
    addon: size.xs,
  },
};

const variantOutline: PartsStyleFunction<typeof parts> = (props) => {
  return {
    field: {
      border: '1px solid',
      rounded: 'full',
      borderColor: mode('grey.200', 'grey.560')(props),
      bg: 'inherit',
      _hover: {
        borderColor: mode('gray.300', 'greyAlpha.200')(props),
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },

      _focusVisible: {
        zIndex: 1,
        borderColor: mode('gray.500', 'greyAlpha.200')(props),
        boxShadow: `0 0 0 1px  ${mode('gray.900', 'greyAlpha.200')(props)}`,
      },
    },
    addon: {
      border: '1px solid',
      borderColor: mode('inherit', 'greyAlpha.200')(props),
      bg: mode('gray.100', 'greyAlpha.200')(props),
    },
  };
};

const variantForm: PartsStyleFunction<typeof parts> = (props) => {
  return {
    field: {
      border: '1px solid',
      rounded: 'full',
      borderColor: 'grey.200',
      mb: '1rem',
      h: '2rem',
      _placeholder: { fontSize: '14px' },

      // _readOnly: {
      //   boxShadow: 'none !important',
      //   userSelect: 'all',
      // },
      // _disabled: {
      //   opacity: 0.4,
      //   cursor: 'not-allowed',
      // },
    },
  };
};

const variantSearch: PartsStyleFunction<typeof parts> = (props) => {
  return {
    field: {
      border: '1px solid',
      rounded: 'full',
      borderColor: 'grey.200',
      bg: 'inherit',
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
    },
  };
};

const variants = {
  outline: variantOutline,
  search: variantSearch,
  form: variantForm,
};

const defaultProps = {
  size: 'md',
  variant: 'outline',
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps,
};
