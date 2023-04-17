import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Login/Register';
import Home from './Pages/Home/Home';
import JobPortal from './Pages/JobPortal/JobPortal';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Jobpost from './Pages/JobPortal/Jobpost';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/JobPortal' element={<JobPortal></JobPortal>}></Route>
        <Route path='/Jobpost' element={<Jobpost></Jobpost>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
