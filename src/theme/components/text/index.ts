import { mode } from '@chakra-ui/theme-tools';

const sizes = {
  sm: {},
  xs: {},
};

const defaultProps = {
  size: 'xs',
};

const variantLabel = () => {
  return {
    fontSize: { base: 'md', lg: 'sm', xl: 'lg' },
    pb: { md: 2 },
    pt: { base: 4, md: 0 },
    pl: { base: 4, md: 0 },
    textTransform: 'capitalize',
    color: {
      base: mode('grey.125', 'grey.750'),
      md: mode('black.500', 'grey.750'),
    },
  };
};

const variants = {
  label: variantLabel,
};

export default {
  sizes,
  variants,
  defaultProps,
};
