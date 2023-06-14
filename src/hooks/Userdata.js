import React, { useEffect, useState } from 'react';

const Userdata = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/register')
        .then(res=> res?.json())
        .then(data => setUser(data))
    },[])
    return ([user, setUser]);
};

export default Userdata;