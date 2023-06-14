import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobData from '../../hooks/JobData';

const JobDetails = () => {

    const [jobs, setJobs] = JobData();
    const {jobId}  = useParams();

    const job = jobs?.find(j => j._id=== jobId);

    console.log(job);
    if(!job){
        return <p>Loading</p>
    }
  
    const {CompanyName, JobTitle, VacancyNumber,Deadline ,Result , Salary,OfficeHour ,JobLocation ,Program ,Context ,Responsibility, Benefits,Remarks, Procedure } = job;
    
    return (
        <div className='text-start w-10/12 mx-auto my-16'>
            <h1 className='text-5xl '>{JobTitle}</h1>
            <h1 className='text-3xl font-bold my-5'>{CompanyName}</h1>
            <h1 className='text-lg my-5'><b>Vacancy Number: </b> {VacancyNumber}</h1>
            <h1 className='text-lg my-5'><b>Deadline: </b>{Deadline}</h1>
            <h1 className='text-lg my-5'><b>CGPA Requirement: </b>{Result}</h1>
            <h1 className='text-lg my-5'><b>Salary: </b>{Salary}</h1>
            <h1 className='text-lg my-5'><b>Office Hour: </b>{OfficeHour}</h1>
            <h1 className='text-lg my-5'><b>Job Location: </b>{JobLocation}</h1>
            <h1 className='text-lg my-5'><b>Program: </b>{Program}</h1>
            <h1 className='text-xl my-5'><b>Context: </b><br /><p className='text-lg mt-5'>{Context}</p> </h1>
            <h1 className='text-xl my-5'><b>Responsibility: </b> <br /><p className='text-lg mt-5'>{Responsibility}</p></h1>
            <h1 className='text-xl my-5'><b>Benefits: </b> <br /><p className='text-lg mt-5'>{Benefits}</p></h1>
            <h1 className='text-xl my-5'><b>Remarks: </b> <br /><p className='text-lg mt-5'>{Remarks}</p></h1>
            <h1 className='text-xl my-5'><b>Procedure: </b> <br /><p className='text-lg mt-5'>{Procedure}</p></h1>
        </div>
    );
};

export default JobDetails;