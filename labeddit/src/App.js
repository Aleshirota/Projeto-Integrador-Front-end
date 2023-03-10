import Router from "./routes/Router";
import { ChakraProvider, theme } from '@chakra-ui/react'


const App = () => {
  return (
    <ChakraProvider theme={theme}>
   <Router/>
   </ChakraProvider>
  );
}
export default App;
