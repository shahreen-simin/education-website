import React from 'react';
import { useNavigate } from 'react-router-dom';

const Course = (props) => {

    const {_id, courseTitle,courseName,courseInstructor,courseDuration,courseLecture,price} = props.course;
    const navigate  = useNavigate()
    const handleCourseDetails = id =>{
        navigate(`/Course-Details/${_id}`)
    }
    return (
        <div className='card bg-base-100 shadow-xl my-12'>
            <div className='h-36 cursor-pointer bg-blue-900 flex justify-center items-center'><h4 className='text-4xl text-white'>{courseTitle}</h4></div>
            <div className='w-20 m-auto h-20 bg-lime-400 rounded-full -my-8 flex justify-center items-center text-lg font-bold border-4 '><h4>$ {price}</h4></div>
            <div className='text-start ps-3 mt-8'>
            <p className='text-xl text-lime-700'>By: <span className='font-bold text-black'>{courseInstructor}</span></p>
            <h2  onClick={()=>handleCourseDetails(_id)} className='cursor-pointer text-2xl font-bold my-3 text-green-900'>{courseName}</h2>
            <p  className='text-yellow-500 text-lg'><small>{courseDuration} </small> <span className='text-success  m-0 p-0'>-</span> <small> {courseLecture}</small></p>
            </div>
        </div>
    );
};

export default Course;