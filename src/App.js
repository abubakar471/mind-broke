import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
