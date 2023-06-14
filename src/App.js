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
import JobDetails from './Pages/JobPortal/JobDetails';
import Post from './Pages/Post/Post';
import Courses from './Pages/Courses/Courses';
import CourseDetails from './Pages/Courses/CourseDetails';
import CheckOut from './Pages/Courses/CheckOut';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewTotalCourses from './Pages/Courses/ViewTotalCourses';
import NotFound from './Pages/Shared/NotFound';
import ForgetPass from './Pages/Login/ForgetPass';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App max-w-screen-xl mx-auto bg-lime-50">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/forgetPass' element={<ForgetPass></ForgetPass>}></Route>
        <Route path='/Post' element={<Post></Post>}></Route>
        <Route path='/JobPortal' element={<JobPortal></JobPortal>}></Route>
        <Route path='/Jobpost' element={<Jobpost></Jobpost>}></Route>
        <Route path='/Courses' element={<Courses></Courses>}></Route>
        <Route path='/TotalCourses' element={<ViewTotalCourses></ViewTotalCourses>}></Route>
        <Route path='/Course-Details/:courseId' element={<CourseDetails></CourseDetails>}></Route>
        <Route path='/JobDetails/:jobId' element={<JobDetails></JobDetails>}></Route>
        <Route path='/checkout' element={<PrivateRoute><CheckOut></CheckOut></PrivateRoute>}></Route>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
