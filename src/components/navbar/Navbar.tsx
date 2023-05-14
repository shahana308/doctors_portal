import { Box, Flex, Icon } from "@chakra-ui/react";
import { LogoIcon } from "../common-components/IconComponents/logo";
import { ArrowRightIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box
      height="100vh"
      width="5%"
      position="fixed"
      px={1}
      boxShadow="8px 0px 8px rgba(0, 0, 0, 0.05);">
      <Box p={2} display="flex" flexDirection="column" alignItems="flex-end">
        <Icon as={ArrowRightIcon} w={3} h={3}></Icon>
      </Box>
      <Flex
        pb="3rem"
        direction="column"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around">
          <LogoIcon width="100%" height="full" py={4}></LogoIcon>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
