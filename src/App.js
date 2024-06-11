import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import RestView from './pages/RestView';

function App() {
  return (
   <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/restview/:id' element={<RestView/>} />
    </Routes>
      
      <Footer/>
   </>
  );
}

export default App;
