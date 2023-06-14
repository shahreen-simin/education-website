import React from 'react';
import AddCourses from './AddCourses';
import ViewCourses from './ViewCourses';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div className='mx-12'>
            <h1 className='text-3xl font-bold'>Online Courses</h1>
            <div className='flex justify-center items-center'>
            <hr className='my-5 border-y border-sky-300 border-dashed w-56'/>
            <div className='w-5 rounded-full bg-sky-400 h-5 mx-10'></div>
            <hr className='my-5  border-y border-sky-300 border-dashed w-56'/>
            </div>
            <p>You can find your favorite courses here and enrolled quickly.</p> 
            <ViewCourses></ViewCourses>
            <Link to='/totalCourses'><button className='btn rounded-pill px-5 py-3 bg-success fs-5 text-white my-5'>See All The Courses</button></Link>
        </div>
    );
};

export default Courses;