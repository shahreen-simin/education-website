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
    const navItems = <>
            <li>
              <a className='text-white'>Profile</a>
            </li>
            <li>
              <a className='text-white'>Courses</a>
            </li>
            <li>
              <a className='text-white'>About</a>
            </li>
            <li>
              <a className='text-white'>Contact</a>
            </li>
            <li>
              <div>
              <img
                  className="w-8 rounded-full"
                  src={user ? user.photoURL : noUser}
                />
                <a className='text-white'>{user?.displayName.slice(0,7).toUpperCase()}</a>
                {
                  user ? <a className='text-white' onClick={logout}>Sign Out</a>: <a className='text-white' href='/login'>Login</a>
                }
              </div>
            </li>
            </>
    return (
      <div class="navbar bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {
                navItems
              }
            </ul>
          </div>
          <img className='ms-20 w-[290px]' src={nsuLogo} alt="" />
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            {
                navItems
            }
          </ul>
        </div>
      </div>
    );
};

export default Navbar;