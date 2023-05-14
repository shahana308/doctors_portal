import "./App.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import extendTheme from "./theme/theme";
import { MainPage } from "./Home";

function App() {
  return (
    <ChakraProvider theme={extendTheme}>
      <Container
        height="100%"
        maxWidth="100%"
        width="100%"
        bg="white"
        m={0}
        p={0}>
        <Router>
          <Routes>
            <Route path="/*" element={<MainPage></MainPage>} />
          </Routes>
        </Router>
      </Container>
    </ChakraProvider>
  );
}

export default App;
