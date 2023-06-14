import React, { useEffect, useState } from 'react';
import Course from './Course';

const ViewCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
    console.log(courses)
    
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-28'>
            {
                courses.map(course=><Course key={course._id} course={course}></Course>).slice(0,3)
            }
        </div>
    );
};

export default ViewCourses;