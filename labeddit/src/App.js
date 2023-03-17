import Router from "./routes/Router";
import { ChakraProvider, theme } from '@chakra-ui/react'
import { GlobalStyle } from "./GlobalStyle.styled";



const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle/>
        <Router />
    </ChakraProvider>
  );
}
export default App;
