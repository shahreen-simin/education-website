import React, { useState } from 'react';

const AddBlogs = () => {
    const [creatCourse, setCreatCourse] = useState([]);
    const handleAddCourse =(e)=>{
        e.preventDefault();
        const course = {
            courseTitle: e.target.title.value,
            courseName: e.target.name.value,
            courseInstructor: e.target.Instructor.value,
            courseDuration: e.target.duration.value,
            courseLecture: e.target.lecture.value,
            courseLevel: e.target.level.value,
            courseLanguage: e.target.language.value,
            price: e.target.price.value,
            courseCertificate: e.target.certificate.value,
            courseDescription: e.target.courseDescription.value,
        }
        fetch('http://localhost:5000/courses', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(course)
        })
        .then(res=> res.json())
        .then(data=> {
          console.log(data)
          setCreatCourse(null)
        })
    }
    return (
        <div className='my-10'>
            <label htmlFor="booking-modal" className="btn btn-secondary text-white btn-sm">Add Courses</label>
            {
              creatCourse && <>
              
              <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleAddCourse}>
              <input
                type="text" name='title' placeholder='Course Title'
                className="block my-5 m-auto input-bordered input w-full max-w-sm"
              />
              <input
                type="text"  name='name'
                placeholder='Course Name' 
                className="block my-5 m-auto input-bordered input w-full max-w-sm"
              />
              <input
                type="text"  name='Instructor'
                placeholder='Instructor Name'
                className="block my-5 m-auto  input-bordered input w-full max-w-sm"
              />
              <input
                type="text" name='duration'
                placeholder='Course Duration' 
                className="block my-5 m-auto  input-bordered input w-full max-w-sm"
              />
              <input
                type="text" name='lecture'
                placeholder='Lecture Number' 
                className="block my-5 m-auto  input-bordered input w-full max-w-sm"
              />
              <select name="level" id="" className="block my-5 m-auto select select-bordered w-full max-w-sm">
                <option >Choose Course Level</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
                <option value="Higher">Higher</option>
              </select>
              <input
                type="text" name='language'
                placeholder='Course Language' 
                className="block my-5 m-auto  input-bordered input w-full max-w-sm"
              />
              <input
                type="text" name='price'
                placeholder='Course price' 
                className="block my-5 m-auto  input-bordered input w-full max-w-sm"
              />
              <select name="certificate" id="" className="block my-5 m-auto select select-bordered w-full max-w-sm">
                <option >Choose Yes/No</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <textarea
                name="courseDescription"
                className="textarea textarea-bordered h-32 block m-auto input w-full max-w-sm"
                placeholder="Enter Course Description"
              ></textarea>
              
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary block my-5 m-auto  w-full max-w-sm"
              />
            </form>
          </div>
        </div>
              
              </>
            }
        </div>
    );
};

export default AddBlogs;