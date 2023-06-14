import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import noUser from '../../images/no-user.PNG'

const AnnounceForm = () => {
  const [creatPost, setCreatPost] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  var date = new Date("2016-01-04 10:34:23");
console.log(date);
  const handleAnnounce = e=>{
    e.preventDefault();
    const announce = {
      userName: user?.displayName,
      userIMG: user?.photoURL,
      postHeading: e.target.postHeading.value,
      postDescription: e.target.postDescription.value
    };
    fetch('http://localhost:5000/posts', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(announce)
        })
        .then(res=> res.json())
        .then(data=> {
          console.log(data)
          setCreatPost(null)
        })
  }
    return (
      <div className="w-full mx-auto my-20">
        <label
          htmlFor="my-modal-6"
          className="btn lg:w-2/5 w-2/3 bg-white border-gray-400 border-2 p-3 h-20"
        >
          <div className="avatar flex items-center">
            <div className="w-12 me-8 rounded-full">
              <img
                className=""
                src={user ? user.photoURL : noUser}
              />
            </div>
            <p>Announce something to your class!!! </p>
          </div>
        </label>
        {
          creatPost && <>
          
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-indigo-300">
            <label
              htmlFor="my-modal-6"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">
              Announce something to your class!!!
            </h3>

            <form
              onSubmit={handleAnnounce}
              className="form-control w-full max-w-sm m-auto my-8"
            >
              <label className="label">
                <span className="label-text">Post Heading</span>
              </label>
              <input
                type="text"
                name="postHeading"
                placeholder="Post Heading"
                className="block m-auto input-bordered input w-full max-w-sm"
              />
              <label className="label">
                <span className="label-text">Post Description</span>
              </label>
              <textarea
                name="postDescription"
                className="textarea textarea-bordered h-32 block m-auto input w-full max-w-sm"
                placeholder="Announce your opinion!!!"
              ></textarea>

              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary block my-5 m-auto  w-full max-w-sm"
              />
            </form>

            {/* <textarea className="textarea textarea-bordered h-32 m-5 block mx-auto input w-full max-w-xl" placeholder="Announce your opinion!!!"></textarea>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn ">
                Submit
              </label>
            </div> */}
          </div>
        </div>

          </>
        }
      </div>
    );
};

export default AnnounceForm;