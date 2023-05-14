import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const baseStyleOverlay: SystemStyleObject = {
  bg: 'blackAlpha.600',
  zIndex: 'modal',
};

const baseStyleDialogContainer: SystemStyleFunction = () => {
  return {
    display: 'flex',
    zIndex: 'modal',
    justifyContent: 'center',
    alignItems: 'center',
  };
};

const baseStyleDialog: SystemStyleFunction = (props) => {
  return {
    borderRadius: 'lg',
    color: 'inherit',
    zIndex: 'modal',
    maxH: 'calc(100% - 7.5rem)',
    boxShadow: mode('lg', 'dark-lg')(props),
    bg: mode('white', 'black.700')(props),
  };
};

const baseStyleHeader: SystemStyleFunction = (props) => {
  return {
    px: 0,
    pb: 0,
    pt: 8,
    color: mode('primary.500', 'primary.600')(props),
    fontWeight: '700',
  };
};

const baseStyleCloseButton: SystemStyleObject = {
  position: 'absolute',
  top: 2,
  insetEnd: 3,
};

const baseStyleBody: SystemStyleFunction = () => {
  return {
    p: 0,
    flex: 1,
    overflowY: 'auto',
  };
};

const baseStyleFooter: SystemStyleObject = {
  pb: '1.9rem',
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer(props),
  dialog: baseStyleDialog(props),
  header: baseStyleHeader(props),
  closeButton: baseStyleCloseButton,
  body: baseStyleBody(props),
  footer: baseStyleFooter,
});

const defaultProps = {
  size: 'md',
};

export default {
  parts: parts.keys,
  baseStyle,
  defaultProps,
};
