import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import NotFound from './pages/shared/NotFound/NotFound';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import CheackOut from './pages/CheackOut/CheackOut/CheackOut';
import AddService from './pages/AddService/AddService';
import ManageServices from './pages/ManageServices/ManageServices';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <CheackOut></CheackOut>
          </RequireAuth>
        }></Route>
        <Route path="/addservice" element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
