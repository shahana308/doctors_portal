import { alertAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  container: {
    borderRadius: 'md',
    boxShadow: 'base',
    height: 'fit-content',
  },
  title: {
    color: 'white',
    fontSize: 'md',
    fontWeight: 700,
    _light: {
      color: 'black.850',
    },
    _dark: {
      color: 'white',
    },
  },
  description: {
    fontSize: 'xs',
    fontWeight: 700,
    color: 'grey.700',
    _light: {
      color: 'grey.560',
    },
    _dark: {
      color: 'grey.100',
    },
  },
  icon: {
    h: 7,
    w: 7,
  },
});

const success = definePartsStyle((props) => {
  const { status } = props;
  return {
    container: {
      borderLeft: 'green.600',
      _light: {
        bg: 'white',
      },
      _dark: {
        bg: 'grey.900',
      },
    },
    icon: {
      color: 'green.500',
    },
  };
});

const error = definePartsStyle((props) => {
  const { status } = props;
  return {
    container: {
      borderLeft: 'red.600',
      _light: {
        bg: 'white',
      },
      _dark: {
        bg: 'grey.900',
      },
    },
    icon: {
      color: 'red.500',
    },
  };
});

const info = definePartsStyle((props) => {
  const { status } = props;
  return {
    container: {
      _light: {
        bg: 'white',
        borderLeft: 'blue.600',
      },
      _dark: {
        borderLeft: 'blue.300',
        bg: 'grey.900',
      },
    },
    icon: {
      _light: {
        color: 'blue.500',
      },
      _dark: {
        color: 'blue.600',
      },
    },
  };
});

const warning = definePartsStyle((props) => {
  const { status } = props;
  return {
    container: {
      borderLeft: 'yellow.600',
      _light: {
        bg: 'white',
      },
      _dark: {
        bg: 'grey.900',
      },
    },
    icon: {
      color: 'yellow.500',
    },
  };
});

const variants = {
  success,
  error,
  info,
  warning,
};

const size = {
  md: defineStyle({
    w: 5,
    h: 5,
  }),
};

const sizes = {
  lg: definePartsStyle({
    icon: size.md,
  }),
};

export const alertTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'error' || 'success' || 'info' || 'warning',
  },
});
