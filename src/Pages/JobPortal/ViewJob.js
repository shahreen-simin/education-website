import React from 'react';

const ViewJob = ({job}) => {
    const {JobTitle , CompanyName, VacancyNumber, Deadline, Result, Salary, OfficeHour, JobLocation, Experience, Program} = job
    return (
        <div className='card mx-auto my-5 bg-lime-100 lg:w-4/5 w-11/12 p-5 bg-base-100 shadow-xl'>
           <h1 className='text-2xl text-blue-800 mb-5'>{JobTitle}</h1>
           <div className='lg:grid md:grid grid-cols-3 '>
            <p><b>Company: </b>{CompanyName}</p>
            <p><b>Deadline: </b>{Deadline}</p>
            <p><b>Vacancy: </b>{VacancyNumber}</p>
            <p><b>Salary: </b>{Salary}</p>
            <p><b>Office Hour: </b>{OfficeHour}</p>
            <p><b>Result: </b>{Result}</p>
           </div>
           <button className='btn w-32 mx-auto btn-sm bg-blue-800 text-white mt-3'>View Details</button>
        </div>
    );
};

export default ViewJob;