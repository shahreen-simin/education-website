import React from 'react';
import nsuLogo from '../../images/nsu-wide-logo.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../Shared/Loading';

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

  let signInError;
    if(error || gError){
      signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    if(loading || gLoading ){
      return <Loading></Loading>
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email,password);
    const register = {
      name: e.target.name.value,
      email: e.target.email.value,
      role: e.target.role.value,
    }

    fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(register)
        })
        .then(res=> res.json())
        .then(data=> {
          console.log(data)
          toast(`Registered successfully`)
          navigate('/')
          // if(data.success){
          //   toast(`Registered successfully`)
          // }
          // else{
          //   toast.error(`Registered Failed`)
          // }

        })
        .catch(err=>{
          toast.error(`Registered Failed`)
        })
  }
 
    return (
      <div>
        {/* <div className="p-3 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          <img className="ms-20 w-[350px]" src={nsuLogo} alt="" />
        </div> */}
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
              className="m-5 block mx-auto input w-full max-w-xs"
            />
            <input
              type="email"
              name='email'
              placeholder="Type your email"
              className="m-5 block mx-auto input w-full max-w-xs"
            />
            <input
              type="password"
              name='password'
              placeholder="Type your password"
              className="m-5 block mx-auto input w-full max-w-xs"
            />
              <div className='flex justify-center'>
              <label className="label  cursor-pointer">
                <span className="label-text text-white me-5 text-xl">Student</span>
                <input
                  type="radio"
                  name="role"
                  value='Student'
                  className="radio checked:bg-yellow-500"
                />
              </label>
             <label className="label  cursor-pointer">
                <span className="label-text text-white me-5 text-xl">Teacher</span>
                <input
                  type="radio"
                  name="role"
                  value='Teacher'
                  className="radio checked:bg-yellow-500"
                />
              </label>
              </div>
              {signInError}
            <input
              type="submit"
              value="Submit"
              placeholder="Type your password"
              className="m-5 btn-accent cursor-pointer text-white text-bold text-xl block mx-auto input w-full max-w-xs"
            />
          </form>
          <p>Already have an account? - <Link className='text-yellow-300 font-semibold' to='/login'>Login</Link></p>

          <button className="m-5 btn-accent text-white text-bold text-xl block mx-auto btn  w-full  max-w-xs" onClick={() => signInWithGoogle()}>Login With Google</button>
        </div>
        <ToastContainer />
      </div>
    );
};

export default Register;