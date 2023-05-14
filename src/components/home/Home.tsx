import { Container, Flex } from "@chakra-ui/react";
import { HEADERDATA } from "../../utils/constants/Header";
import Header from "../common-components/Header";
import SearchBar from "../common-components/SearchBar";
import Reports from "../common-components/Reports/reports";

const Home = () => {
  return (
    <Container height="100%" maxWidth="100%" width="100%" m={0} px="30px">
      <Flex direction="column" p="25px">
        <Header
          name={HEADERDATA.name}
          description={HEADERDATA.description}></Header>{" "}
        <SearchBar></SearchBar>
        <Reports />
      </Flex>
    </Container>
  );
};

export default Home;
