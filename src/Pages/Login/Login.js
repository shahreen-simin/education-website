import React, { useState } from 'react';
import nsuLogo from '../../images/nsu-wide-logo.png'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
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
        signInWithEmailAndPassword(email,password);
      }
    
    return (
        <div>
            
            <div className='bg-primary md:w-2/3 lg:w-1/2 mx-auto py-20 my-20'>
                <h1 className='text-accent mb-8 text-3xl'>Education Management System</h1>
                <h1 className="text-yellow-300 text-2xl font-bold">Login</h1>
                <form onSubmit={handleSubmit}>
                    <input name='email' type="email"placeholder="Type your email" className="m-5 block mx-auto input w-full max-w-xs" />
                    <input name='password' type="password" placeholder="Type your password" className="m-5 block mx-auto input w-full max-w-xs" />
                    {signInError}
                    <input type="submit" value="Submit" placeholder="Type your password" className="m-5 btn-accent text-white text-bold text-xl block mx-auto input w-full max-w-xs" />
                </form>
                <p>Forget Password? - <Link className='text-red-600 font-semibold' to='/forgetPass'>Click here.</Link></p>
                
                <p>New Here? - <Link className='text-yellow-300 font-semibold' to='/register'>Register</Link></p>
                <button className="m-5 btn-accent text-white text-bold text-xl block mx-auto btn  w-full  max-w-xs" onClick={() => signInWithGoogle()}>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;