import React, { useEffect, useState } from 'react';
import {
    FaPause,
    FaStar,
    FaMale,
    FaTimes,
    FaVideo,
    FaBook,
    FaCertificate,
    FaGripLinesVertical,
    FaCalendarTimes,
    FaFacebookF,
    FaSkype,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import CourseData from '../../hooks/CourseData';
import "./courses.css";
import "./CourseDetails.css";

const CourseDetails = () => {
    const [show, setShow] = useState("video-container");
    const [courses, setCourses] = CourseData();
    const { courseId } = useParams();
    console.log(courseId);
    
    let details = courses?.find(course=> course?._id === courseId)
    
    console.log(details);
    if(!details){
      return <p>Loading</p>
  }

  const {_id,courseTitle ,courseName ,courseInstructor ,courseDuration ,courseLecture ,courseLevel ,courseLanguage ,courseCertificate ,courseDescription,price} = details
      // const {courseCertificate} = details;
    // setData(details);
    // console.log(data)
    
    let video = "video-container show";
    let hide = "video-container";

    const handleShow = () => {
      setShow(video);
    };
    const handleHide = () => {
      setShow(hide);
    };

  return (
    <div className="">
      <div className="top-banner text-start">
        <h1>Courses Details</h1>
        <p>
          Home // <span>Courses Details</span>
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 CourseDetails gap-5">
        <div className="col-span-2 details-image text-start">
          <div className='bg-blue-600 lg:h-80 md:h-48 h-36 flex justify-center items-center'><h1 className='text-5xl text-white'>{courseTitle}</h1></div>
          <div className='flex justify-center items-center -m-12 mb-16'>
            <hr className='border-4 w-36 border-lime-500'/>
          <a onClick={handleShow} href="#" className="text-3xl text-white mx-8 bg-yellow-200 p-2 rounded-full" id="videolink">
            <FaPause></FaPause>
          </a>
          <hr className='border-4 w-36 border-lime-500'/>
          </div>
          <div id="videostory" className={show}>
            <span onClick={handleHide} className="close">
              &#10006;
            </span>
            <iframe
              width="875"
              height="480"
              src="https://www.youtube.com/embed/c06dTj0v0sM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h1 className='text-4xl'>{courseName}</h1>
          <div className="flex justify-between items-center mt-5">
            <div className="flex justify-between items-center">
              <img className="instructor" src={courseInstructor} alt="" />
              <p className="p-0 m-0 mx-3 text-muted fs-5">
                By: <span className="text-dark">{courseInstructor}</span>
              </p>
              <p className="p-0 m-0  text-muted">||</p>
              <small className=" mx-3  text-muted">
                <span className="text-warning">286</span> Enrolled Students
              </small>
            </div>
            <div className=''>
              <p className="p-0 m-0 flex items-center  text-muted">
                4.9{" "}
                <span className="text-success flex ms-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <FaStar /> {" "}(5,764 Rating)
              </p>
            </div>
          </div>
          <div className="buttons text-center">
            <button className="enroll btn rounded-pill mx-4 my-2 px-4 py-2 text-white fs-5 ">
              Description
            </button>
            <button className="enroll btn rounded-pill mx-4 my-2 px-4 py-2 text-white fs-5 ">
              Instructors
            </button>
            <button className="enroll btn rounded-pill mx-4 my-2 px-4 py-2 text-white fs-5 ">
              Reviews
            </button>
          </div>
          <div>
            <h2 className="fw-light fs-3">Description: </h2>
            <p>
            Course Description:
This course is designed to provide an in-depth understanding of nutrition for children and teach the basics of cooking healthy and delicious meals for kids. The course will cover the principles of nutrition, food groups, and dietary requirements for children of different ages.
<br />
Participants will learn how to prepare healthy and tasty meals that meet the nutritional needs of children. They will learn about food safety, kitchen hygiene, and the proper techniques for preparing and cooking food. Participants will also learn how to involve children in the cooking process to create a fun and engaging learning experience.
<br />
The course will cover a range of topics, including:
<ul>
    <li>The importance of a balanced diet for children</li>
    <li>Nutritional requirements for children of different ages</li>
    <li>Food groups and their role in a healthy diet</li>
    <li>Techniques for cooking healthy meals for children</li>
    <li>Strategies for introducing new and healthy foods to picky eaters</li>
    <li>Kitchen hygiene and food safety practices</li>
</ul>
<p>By the end of the course, participants will have the knowledge and skills necessary to prepare healthy and delicious meals for children that meet their nutritional needs. They will also have an understanding of the importance of involving children in the cooking process and the benefits it can have for their overall health and well-being.</p>
            </p>
          </div>
        </div>
        <div className="details-course-info w-full lg:col-span-1 col-span-1 md:col-span-2">
          <h2 className="text-4xl font-bold text-green-700 price m-4">${price}</h2>
          <hr className="w-10/12 m-auto" />
          <div className="flex justify-between items-center text-lg my-1 my-4">
            <p className='flex justify-between items-center'>
              <span className="text-warning me-5">
                <FaMale></FaMale>{" "}
              </span>{" "}
              Instructor
            </p>
            <p className="text-muted">{courseInstructor}</p>
          </div>
          <hr className="w-75 m-auto m-0 p-0" />
          <div className='flex justify-between items-center fs-6 my-1 my-4'>
            <p  className='flex justify-between items-center'>
              <span className="text-warning  me-5">
                <FaCalendarTimes></FaCalendarTimes>{" "}
              </span>{" "}
              Duration
            </p>
            <p className="text-muted">{courseDuration}</p>
          </div>
          <hr className="w-75 m-auto  m-0 p-0" />
          <div className="flex justify-between items-center fs-6 my-1 my-4">
            <p className='flex justify-between items-center'>
              <span className="text-warning me-5">
                <FaVideo></FaVideo>{" "}
              </span>{" "}
              Lectures
            </p>
            <p className="text-muted">{courseLecture}</p>
          </div>
          <hr className="w-75 m-auto" />
          <div className="flex justify-between items-center fs-6 my-1 my-4">
            <p className = 'flex justify-between items-center'>
              <span className="text-warning me-5">
                <FaGripLinesVertical></FaGripLinesVertical>{" "}
              </span>{" "}
              Level
            </p>
            <p className="text-muted">{courseLevel}</p>
          </div>
          <hr className="w-75 m-auto" />
          <div className="flex justify-between items-center className = 'flex justify-between items-center' fs-6 my-1 my-4">
            <p className = 'flex justify-between items-center'>
              <span className="text-warning me-5">
                <FaBook></FaBook>{" "}
              </span>{" "}
              Language
            </p>
            <p className="text-muted">{courseLanguage}</p>
          </div>
          <hr className="w-75 m-auto" />
          <div className="flex justify-between items-center fs-6 my-1 my-4">
            <p className='flex justify-between items-center'>
              <span className="text-warning me-5">
                <FaCertificate></FaCertificate>{" "}
              </span>{" "}
              Certificate
            </p>
            <p className="text-muted">{courseCertificate}</p>
          </div>
          <hr className="w-75 m-auto" />
          <Link to='/checkout'><button className="enroll h-16 btn rounded-full px-8 py-3 text-white text-xl font-bold m-10">
            Enroll Now
          </button></Link>

          <h3 className="mb-5 text-2xl font-bold">Share Course</h3>
          <div className="icon-social flex justify-between items-center">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaSkype />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;