import { Box, Text, chakra } from "@chakra-ui/react";
import React from "react";
import { greetings } from "../common-function/greetings";

const Header: React.FC<IHeader> = ({ name, description }) => {
  return (
    <Box>
      <Text
        fontWeight={400}
        color="black.800"
        fontStyle="normal"
        lineHeight="md"
        fontSize="xl">
        {greetings()}, <chakra.span fontWeight={900}>{name}!</chakra.span>
      </Text>
      <Text fontStyle="italic" fontSize="sm" fontWeight={400}>
        {description}
      </Text>
    </Box>
  );
};

export default Header;
