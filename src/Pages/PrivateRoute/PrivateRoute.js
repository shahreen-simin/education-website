import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const PrivateRoute = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <div className='text-center m-5'>
        loading
      </div>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}}></Navigate>
    }
    return children;
};

export default PrivateRoute;