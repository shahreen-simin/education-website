import React from 'react';
import nsuLogo from '../../images/nsu-wide-logo.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if(user || gUser){
    navigate('/')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email,password);
    navigate('/')
  }
 
    return (
      <div>
        <div className="p-3 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          <img className="ms-20 w-[350px]" src={nsuLogo} alt="" />
        </div>
        <div className="bg-primary md:w-2/3 lg:w-1/2 mx-auto py-20 my-20">
          <h1 className="text-accent mb-5 text-3xl">
            Education Management System
          </h1>
          <h1 className="text-yellow-300 text-2xl font-bold">Register</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name='name'
              placeholder="Type your name"
              class="m-5 block mx-auto input w-full max-w-xs"
            />
            <input
              type="email"
              name='email'
              placeholder="Type your email"
              class="m-5 block mx-auto input w-full max-w-xs"
            />
            <input
              type="password"
              name='password'
              placeholder="Type your password"
              class="m-5 block mx-auto input w-full max-w-xs"
            />
              <div className='flex justify-center'>
              <label class="label  cursor-pointer">
                <span class="label-text text-white me-5 text-xl">Student</span>
                <input
                  type="radio"
                  name="radio-10"
                  class="radio checked:bg-yellow-500"
                />
              </label>
             <label class="label  cursor-pointer">
                <span class="label-text text-white me-5 text-xl">Teacher</span>
                <input
                  type="radio"
                  name="radio-10"
                  class="radio checked:bg-yellow-500"
                />
              </label>
              </div>
            <input
              type="submit"
              value="Submit"
              placeholder="Type your password"
              class="m-5 btn-accent cursor-pointer text-white text-bold text-xl block mx-auto input w-full max-w-xs"
            />
          </form>
          <p>Already have an account? - <a className='text-yellow-300 font-semibold' href='/login'>Login</a></p>

          <button className="m-5 btn-accent text-white text-bold text-xl block mx-auto btn  w-full  max-w-xs" onClick={() => signInWithGoogle()}>Login With Google</button>
        </div>
      </div>
    );
};

export default Register;