import React, { useState } from 'react';
import Userdata from '../../hooks/Userdata';

const Users = () => {
    const [user, setUser] = Userdata();
    const [students,setStudents] = useState([]);
    const [teachers,setTeachers] = useState([]);

    
    if(user.role === 'Student'){
        setStudents(user);
    }
    return (
        <div>
            
        </div>
    );
};

export default Users;