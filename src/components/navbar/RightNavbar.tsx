import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Center, Text } from "@chakra-ui/react";

const RightNavbar = () => {
  return (
    <Box
      height="100%"
      minWidth="6%"
      position="fixed"
      py={4}
      boxShadow="5px 10px 8px 10px rgba(0, 0, 0, 0.05);">
      <Flex
        pb="3.7rem"
        direction="column"
        width="100%"
        height="70%"
        alignItems="center"
        justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar
              size="md"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Box
              w={5}
              h={5}
              borderRadius="1.8rem"
              mt="-0.5rem"
              bg="grey.100"
              zIndex={10000}>
              <Center height="100%">
                <ChevronDownIcon></ChevronDownIcon>
              </Center>
            </Box>
            <Text fontWeight={700} fontStyle="calibri" mt={2}>
              Daniel{" "}
            </Text>
            <Text
              fontWeight={400}
              fontStyle="calibri"
              fontSize="xs"
              color="grey.300">
              Senior Doctor
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default RightNavbar;
