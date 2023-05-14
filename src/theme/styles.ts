import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: (props) => ({
    html: {
      width: '100%',
      height: '100%',
      margin: '0',
      padding: '0',
    },

    body: {
      width: '100%',
      height: '100%',
      margin: '0',
      padding: '0',
      color: mode('black', 'white')(props),
    },
    '#root': {
      bg: mode('white', 'black.700')(props),
      height: '100%',
    },

    '.App': {
      height: '100%',
    },

    main: {
      flex: '1',
    },

    ul: {
      listStyle: 'none !important',
    },

    '*::placeholder': {},
    '*, *::before, &::after': {
      wordWrap: 'break-word',
    },

    '*::-webkit-scrollbar': {
      width: '4px',
      height: '4px'
    },
    '*::-webkit-scrollbar-track': { background: 'transparent', width: '5px' },
    '*::-webkit-scrollbar-thumb': {
      background: mode('#ebebeb', '#3a3a3a'),
      borderRadius: '5px',
    },
  }),
};

export default styles;
