import React, { useEffect, useState } from 'react';

const JobData = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=> res?.json())
        .then(data => setJobs(data))
    },[])
    return ([jobs, setJobs]);
};

export default JobData;