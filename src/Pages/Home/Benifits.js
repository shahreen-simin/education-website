import React from 'react';
import tracking from '../../images/student-tracking.PNG'
import result from '../../images/result.PNG'
import pricing from '../../images/pricing.PNG'
import digital from '../../images/digital-school.PNG'
import security from '../../images/security.PNG'
import optimized from '../../images/optimized.PNG'

const Benifits = () => {
    return (
      <div className="my-20 lg:mx-20 mx-10">
        <h1 className="text-3xl font-bold">BENEFITS OF EMS</h1>
        <div className="flex justify-center items-center">
          <hr className="my-5 border-y border-sky-300 border-dashed w-56" />
          <div className="w-5 bg-sky-400 rounded-full h-5 mx-10"></div>
          <hr className="my-5  border-y border-sky-300 border-dashed w-56" />
        </div>
        <p>
          Following are some of the benefits and how it will help you to ease
          the education precess
        </p>
        <div>
            <div className='lg:flex md:flex justify-center items-center justify-around my-10'>
                <img src={tracking} alt="" />
                <div className='text-start lg:w-2/4 md:w-2/3'>
                    <h3 className='text-xl font-bold'>How it will help to student tracking</h3>
                    <ul className='list-disc ms-10'>
                        <li>Keeping the records of students and maintaining their attendance and roll number is a big headache, that too when the students are outnumbering the administrative heads.</li>
                        <li>Adopting more hassle-free computerized methods and avoiding the old manual methods of maintaining the records is essential.</li>
                        <li>Digitizing student records help improve accessibility and retrieving of the records convenient, quick and less hectic.</li>
                    </ul>
                </div>
            </div>
            <div className='lg:flex md:flex justify-center items-center justify-around my-10'>
                <img src={result} alt="" />
                <div className='text-start lg:w-2/4 md:w-2/3'>
                    <h3 className='text-xl font-bold'>How it will help to result processing</h3>
                    <ul className='list-disc ms-10'>
                        <li>Powerful teaching and evaluation tools with grade calculation.</li>
                        <li>No longer necessary to waste time searching for manual result counting. Marks can be done quickly and gives results in seconds. All the result are stored in organized manner by class/ group/ section, and are easy to retrieve.</li>
                        <li>EMS ensures precise information and reduce human error to generate result report.</li>
                    </ul>
                </div>
            </div>
            <div className='lg:flex md:flex justify-center items-center justify-around my-10'>
                <img src={pricing} alt="" />
                <div className='text-start lg:w-2/4 md:w-2/3'>
                    <h3 className='text-xl font-bold'>How it will reduce cost</h3>
                    <ul className='list-disc ms-10'>
                        <li>Total information and records can be stored electronically, making it easy to store, transport or send them electronically to everyone who needs it. Which reduces paper printing & transport cost regarding paperless system.</li>
                        <li>Traditional medium to reach out to students/ parents is by phone or courier is costly. Integrated SMS system, reduces cost to reach out to students/ parents/ teachers/ staff for any situations.</li>
                        <li>Automated system resulting more work in less work hour.</li>
                    </ul>
                </div>
            </div>
            <div className='lg:flex md:flex justify-center items-center justify-around my-10'>
                <img src={digital} alt="" />
                <div className='text-start lg:w-2/4 md:w-2/3'>
                    <h3 className='text-xl font-bold'>How it will help to digitizing the School: Interactive Education</h3>
                    <ul className='list-disc ms-10'>
                        <li>Customized and interactive academic experience, a support guide that helps achieve student goals.</li>
                        <li>E-textbooks and e-texts, digital textbooks provide an interactive interface in which the students have access to multimedia content such as videos, interactive presentations and hyperlinks.</li>
                        <li>By offering a visual representation of the topic, students grasp the concept in a more understandable manner.</li>
                    </ul>
                </div>
            </div>
            <div className='lg:flex md:flex justify-center items-center justify-around my-10'>
                <img src={optimized} alt="" />
                <div className='text-start lg:w-2/4 md:w-2/3'>
                    <h3 className='text-xl font-bold'>How it will help to digitizing the School: Optimized System</h3>
                    <ul className='list-disc ms-10'>
                        <li>Customized and interactive academic experience, a support guide that helps achieve student goals.</li>
                        <li>Identify suitable faculty based on qualification and skills to optimally assign faculty based on course requirements.</li>
                        <li>Using faculty evaluation system capture faculty feedback across departments and courses.</li>
                    </ul>
                </div>
            </div>
            <div className='lg:flex md:flex justify-center items-center justify-around my-10'>
                <img src={security} alt="" />
                <div className='text-start lg:w-2/4 md:w-2/3'>
                    <h3 className='text-xl font-bold'>How it will help to digitizing the School: Interactive Education</h3>
                    <ul className='list-disc ms-10'>
                        <li>All the information stored on secure servers and accessed via role-based authentication system.</li>
                        <li>Only authorized management/ teachers/ staffs can able to retrieve the data (student's information, question paper, exam mark etc.), making it more secure than paper, which could fall in the wrong hands.</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Benifits;