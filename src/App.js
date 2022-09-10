import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
