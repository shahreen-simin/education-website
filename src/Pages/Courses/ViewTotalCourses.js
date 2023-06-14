import React, { useEffect, useState } from 'react';
import Course from './Course';
import AddCourses from './AddCourses';

const ViewTotalCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
    console.log(courses)
    return (
        <div className='mx-12'>
            <h1 className='text-3xl font-bold'>Online Courses</h1>
            <div className='flex justify-center items-center'>
            <hr className='my-5 border-y border-sky-300 border-dashed w-56'/>
            <div className='w-5 rounded-full bg-sky-400 h-5 mx-10'></div>
            <hr className='my-5  border-y border-sky-300 border-dashed w-56'/>
            </div>
            <p>You can find your favorite courses here and enrolled quickly.</p> 
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-28'>
            {
                courses.map(course=><Course key={course._id} course={course}></Course>)
            }
        </div>
            <AddCourses></AddCourses>
        </div>
    );
};

export default ViewTotalCourses;