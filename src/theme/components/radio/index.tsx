/* eslint-disable @typescript-eslint/no-explicit-any */

import { radioAnatomy as parts } from '@chakra-ui/anatomy';
import {
  PartsStyleFunction,
  SystemStyleFunction,
} from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

import Checkbox from '../checkbox';

const baseStyleControl: SystemStyleFunction = (props) => {
  const { control = {} } = Checkbox.baseStyle(props);

  return {
    ...control,
    borderRadius: 'full',
    _checked: {
      ...(control as any)._checked,
      _before: {
        content: `""`,
        display: 'inline-block',
        pos: 'relative',
        w: '50%',
        h: '50%',
        borderRadius: '50%',
        bg: 'currentColor',
      },
    },
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  label: Checkbox.baseStyle(props).label,
  container: Checkbox.baseStyle(props).container,
  control: baseStyleControl(props),
});

const variantPrimary: PartsStyleFunction<typeof parts> = (props) => {
  return {
    label: {
      boxShadow: 'none',
      bg: 'inherit',
      ml: '0',
      _hover: {
        bg: 'inherit',
      },
    },
    container: {
      borderColor: mode(`black`, `grey.550`)(props),
      _checked: {
        borderColor: 'primary.500',
      },
    },
  };
};

const variants = {
  primary: variantPrimary,
};

const defaultProps = {
  size: 'md',
  colorScheme: 'blue',
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes: Checkbox.sizes,
  variants,
  defaultProps,
};
