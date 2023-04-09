import React from 'react';
import nsuLogo from '../../images/nsu-wide-logo.png'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

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
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email,password);
      }
    return (
        <div>
            <div className='p-3 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500'>
                <img className='ms-20 w-[350px]' src={nsuLogo} alt="" />
            </div>
            <div className='bg-primary md:w-2/3 lg:w-1/2 mx-auto py-20 my-20'>
                <h1 className='text-accent mb-8 text-3xl'>Education Management System</h1>
                <h1 className="text-yellow-300 text-2xl font-bold">Login</h1>
                <form onSubmit={handleSubmit}>
                    <input name='email' type="email" placeholder="Type your email" class="m-5 block mx-auto input w-full max-w-xs" />
                    <input name='password' type="password" placeholder="Type your password" class="m-5 block mx-auto input w-full max-w-xs" />
                    <input type="submit" value="Submit" placeholder="Type your password" class="m-5 btn-accent text-white text-bold text-xl block mx-auto input w-full max-w-xs" />
                </form>
                <p>New Here? - <a className='text-yellow-300 font-semibold' href='/register'>Register</a></p>
                <button className="m-5 btn-accent text-white text-bold text-xl block mx-auto btn  w-full  max-w-xs" onClick={() => signInWithGoogle()}>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;