import './App.css';
import { ChakraProvider,defaultSystem } from '@chakra-ui/react'
import FORM from './Form';
function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <FORM/>
    </ChakraProvider>
  );
}

export default App;
