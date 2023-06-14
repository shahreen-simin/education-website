import React from 'react';
import CourseData from '../../hooks/CourseData';
import { Link } from 'react-router-dom';
import JobData from '../../hooks/JobData';
import PostData from '../../hooks/PostData';
import Userdata from '../../hooks/Userdata';

const Dashboard = () => {
    const [courses, setCourses] = CourseData();
    const [jobs, setJobs] = JobData();
    const [posts, setPosts] = PostData();
    const [user, setUser] = Userdata();

    return (
        <div className='grid md:grid-cols-3 grid-cols-2'>
            <div className='bg-indigo-500  my-10 mx-16 rounded-xl'>
                <h2 className='text-white font-bold text-2xl my-8'>User Number: {user.length}</h2>
                <Link to='/User'><p className='bg-indigo-300 rounded-b-xl'>Click here for user info---</p></Link>
            </div><div className='bg-red-600  my-10 mx-16 rounded-xl'>
                <h2 className='text-white font-bold text-2xl my-8'>Total Courses: {courses.length}</h2>
                <Link to='/TotalCourses'><p className='bg-red-400 rounded-b-xl'>Click here for course info---</p></Link>
            </div>
            <div className='bg-lime-600  my-10 mx-16 rounded-xl'>
                <h2 className='text-white font-bold text-2xl my-8'>Job Available: {jobs.length}</h2>
                <Link to='/JobPortal'><p className='bg-lime-400 rounded-b-xl'>Click here for jobs info---</p></Link>
            </div>
            <div className='bg-orange-600  my-10 mx-16 rounded-xl'>
                <h2 className='text-white font-bold text-2xl my-8'>Total Posts: {posts.length}</h2>
                <Link to='/Post'><p className='bg-orange-400 rounded-b-xl'>Click here for posts info---</p></Link>
            </div>
            
            
        </div>
    );
};

export default Dashboard;