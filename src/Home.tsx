/** @format */

import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import RightNavbar from "./components/navbar/RightNavbar";
import Home from "./components/home/Home";

export const MainPage = () => {
  return (
    <Flex height="100%">
      <Box height="100%" width="6vw">
        <Navbar />
      </Box>
      <Box width="88vw">
        <Home />
      </Box>
      <Box height="100%" width="6vw" overflow="hidden">
        <RightNavbar />
      </Box>
    </Flex>
  );
};
