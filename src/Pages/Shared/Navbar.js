import React from 'react';
import nsuLogo from '../../images/nsu-wide-logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import noUser from '../../images/no-user.PNG'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  console.log(user);
  const username = user?.displayName?.split(" ");

    const navItems = <>
            <li>
              <a href='/' className='text-white'>Home</a>
            </li>
            <li>
              <a className='text-white'>Profile</a>
            </li>
            <li>
              <a href='/TotalCourses' className='text-white'>Courses</a>
            </li>
            <li>
              <a href='/JobPortal' className='text-white'>Job Portal</a>
            </li>
            <li>
              <a href='/post' className='text-white'>Post</a>
            </li>
            <li>
              <a href='/dashboard' className='text-white'>Dashboard</a>
            </li>
            
            </>
    return (
      <div className="navbar bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-500 rounded-box w-52"
            >
              {
                navItems
              }
              <div className='flex flex-col justify-center items-center ms-3'>
              <img
                  className="w-8 rounded-full"
                  src={user ? user?.photoURL : noUser}
                />
                <p className='text-white'>{username ? username[0]?.toUpperCase(): ''}</p>
                
            </div>
                {
                  user ? <a className='text-white  btn btn-sm block ms-5 bg-red-700 flex justify-center items-center' onClick={logout}>Sign Out</a>: <a className='text-white btn-primary btn btn-sm block ms-5  flex justify-center items-center' href='/login'>Login</a>
                }
            </ul>
            
          </div>
          <img className='ms-20 w-[290px]' src={nsuLogo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                navItems
            }
          </ul>
          <div className='flex flex-col justify-center items-center ms-3'>
              <img
                  className="w-8 rounded-full"
                  src={user ? user?.photoURL : noUser}
                />
                <p className='text-white'>{username ? username[0]?.toUpperCase(): ''}</p>
                
            </div>
                {
                  user ? <a className='text-white  btn btn-sm block ms-5 bg-red-700 flex justify-center items-center' onClick={logout}>Sign Out</a>: <a className='text-white btn-primary btn btn-sm block ms-5  flex justify-center items-center' href='/login'>Login</a>
                }
        </div>
      </div>
    );
};

export default Navbar;