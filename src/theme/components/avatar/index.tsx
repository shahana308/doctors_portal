import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const smallMedium = defineStyle({
  width: '40px',
  height: '40px',
  fontSize: 'md',
});

const extraSmall = defineStyle({
  width: '27px',
  height: '27px',
  fontSize: 'sm',
});

const sizes = {
  xss: definePartsStyle({ container: extraSmall }),
  smd: definePartsStyle({ container: smallMedium }),
};

export default defineMultiStyleConfig({ sizes });
