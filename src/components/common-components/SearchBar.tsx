import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { TiMicrophone } from "react-icons/ti";
import { BsSliders } from "react-icons/bs";

const SearchBar = () => {
  return (
    <Box mt={3} width="100%">
      <InputGroup>
        <InputLeftElement
          height="1.875rem"
          pointerEvents="none"
          children={<SearchIcon color="green.800" w={4} h={3} />}
        />
        <Input
          height="1.875rem"
          bg="white.200"
          borderColor="transparent"
          placeholder="Type to find what you are looking for.."
          _placeholder={{ fontSize: "sm" }}
        />
        <InputRightElement
          fontSize="1.438rem"
          right="3.75rem"
          height="1.875rem"
          w={4}
          children={<BsSliders />}
        />

        <InputRightElement
          height="1.875rem"
          fontSize="1.438rem"
          right="0.938rem"
          w={4}
          children={<TiMicrophone />}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
