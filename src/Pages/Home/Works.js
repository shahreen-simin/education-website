import React from 'react';
import student from '../../images/students.jpg'
import teacher from '../../images/teachers.jpg'
import stuffs from '../../images/staffs.jpg'

const Works = () => {
    return (
      <div>
        <h1 className='text-3xl font-bold'>HOW IT WORKS</h1>
        <div className="flex justify-center items-center">
          <hr className="my-5 border-y border-sky-300 border-dashed w-56" />
          <div className="w-5 bg-sky-400 rounded-full h-5 mx-10"></div>
          <hr className="my-5  border-y border-sky-300 border-dashed w-56" />
        </div>
        <p>Description of Education Management System</p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 lg:mx-28 m-16'>
            <div className='text-start bg-gray-200'>
                <img className='w-full p-4 h-72' src={student} alt="" />
                <h1 className='text-2xl font-bold p-4'>Students</h1>
                <p className='px-4 mb-5'>Students enter the school with Proximity Card/ Finger Print and automatic SMS send to parent mobile phones. Students exit the school with Proximity Card/ Finger Print and automatic SMS send to parent mobile phones. Students can access download course materials, submit assignments 24/7 online etc.</p>
            </div>
            <div className='text-start bg-gray-200'>
                <img className='w-full p-4 h-72' src={teacher} alt="" />
                <h1 className='text-2xl font-bold p-4'>Teachers</h1>
                <p className='px-4 mb-5'>Teachers manage subjects, class routine, exam / semester listing, marks (edit/ update) and attendance exam, class & student wise, exam grades, class routine etc.</p>
            </div>
            <div className='text-start bg-gray-200'>
                <img className='w-full p-4 h-72' src={stuffs} alt="" />
                <h1 className='text-2xl font-bold p-4'>Staffs</h1>
                <p className='px-4 mb-5'>Staffs manage payment for student, manage library, manage transportation, manage hostel, manage notice board of school etc.</p>
            </div>

        </div>
      </div>
    );
};

export default Works;