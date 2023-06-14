import React from 'react';
import user from '../../images/user-management.PNG'
import academic from '../../images/academic-management.PNG'
import result from '../../images/result management.PNG'
import employee from '../../images/employee management.PNG'
import financial from '../../images/financial management.PNG'

const Features = () => {
    return (
        <div className='my-20 lg:mx-20 mx-10'>
            <h1 className='text-3xl font-bold'>FEATURES OF EMS</h1>
            <div className='flex justify-center items-center'>
            <hr className='my-5 border-y border-sky-300 border-dashed w-56'/>
            <div className='w-5 rounded-full bg-sky-400 h-5 mx-10'></div>
            <hr className='my-5  border-y border-sky-300 border-dashed w-56'/>
            </div>
            <p>Following are some of the basic modules, more custom modules can also be added</p>
            <div className='lg:flex md:flex justify-center items-center justify-around my-10'>
                <img src={user} alt="" />
                <div className='text-start lg:w-2/4 md:w-2/3'>
                    <h3 className='text-xl font-bold'>User management</h3>
                    <ul className='list-disc ms-10'>
                        <li>Add / edit / delete unlimited users</li>
                        <li>View user profile</li>
                        <li>Role-wise user authentication (Student, Teacher, Staff, Parent)</li>
                        <li>Managing role capabilities</li>
                        <li>Custom user role</li>
                        <li>Custom profile fields</li>
                    </ul>
                </div>
            </div>
            <div className='lg:flex md:flex justify-center items-center justify-around my-10'>
                <img src={academic} alt="" />
                <div className='text-start lg:w-2/4 md:w-2/3'>
                    <h3 className='text-xl font-bold'>Academic Management</h3>
                    <ul className='list-disc ms-10'>
                        <li>Manage student admission</li>
                        <li>Manage courses and batches</li>
                        <li>Time-table & Event Calendar</li>
                        <li>Manage examination setting (grade, mark, schedule, attendance)</li>
                        <li>Manage class routine & syllabus</li>
                        <li>Assign student & teacher to group, shift, section and class</li>
                    </ul>
                </div>
            </div>
            <div className='lg:flex md:flex justify-center items-center justify-around my-10'>
                <img src={result} alt="" />
                <div className='text-start lg:w-2/4 md:w-2/3'>
                    <h3 className='text-xl font-bold'>Result management</h3>
                    <ul className='list-disc ms-10'>
                        <li>Group, shift, section and class wise exam result generate</li>
                        <li>Results based on total marks with merit position and GPA</li>
                        <li>Set percentage (%) for pass mark</li>
                        <li>Custom grading point table</li>
                        <li>Print result sheet of class/section and individual student</li>
                        <li>Manage Progress Card</li>
                    </ul>
                </div>
            </div>
            <div className='lg:flex md:flex justify-center items-center justify-around my-10'>
                <img src={employee} alt="" />
                <div className='text-start lg:w-2/4 md:w-2/3'>
                    <h3 className='text-xl font-bold'>Employee Management</h3>
                    <ul className='list-disc ms-10'>
                        <li>Manage Teacher/staff HR information.</li>
                        <li>Manage Teacher/staff payroll.</li>
                        <li>Manage Teacher/staff leave</li>
                        <li>Manage Teacher/staff attendance.</li>
                    </ul>
                </div>
            </div>
            <div className='lg:flex md:flex justify-center items-center justify-around my-10'>
                <img src={financial} alt="" />
                <div className='text-start lg:w-2/4 md:w-2/3'>
                    <h3 className='text-xl font-bold'>Financial Management</h3>
                    <ul className='list-disc ms-10'>
                        <li>Manage student payments.</li>
                        <li>General Accounts (Journal Entries, Payment Entries, Account Summary, General Ledger etc.).</li>
                        <li>Manage multiple accounts (cash, bank, bkash etc.).</li>
                        <li>Print invoice and send SMS for each transaction.</li>
                        <li>Manage class-wise balance sheet.</li>
                        <li>Manage overdue list.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Features;