import React, { useEffect, useState } from 'react';
import cpc from '../../images/cpc_try.png'
import { Link } from 'react-router-dom';
import ViewJob from './ViewJob';

const JobPortal = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/jobs')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    }, [])
    return (
        <div>
            <div className='bg-indigo-800 flex flex-auto justify-around items-center py-5'>
                <img className='w-36' src={cpc} alt="" />
                <p className='text-white text-2xl'>Build Your Career With Us</p>
                <Link to='/Jobpost'><button className='btn w-48 text-white font-bold bg-lime-800'>Post A Job</button></Link>
            </div>

            <div>
            <h1 className='text-2xl font-bold m-4 '>Offered job</h1>
                {
                    jobs.map(job =><ViewJob job={job} key= {job._id}></ViewJob>)
                }
            </div>

        </div>
    );
};

export default JobPortal;