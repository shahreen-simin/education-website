import React from 'react';

const SinglePost = (props) => {
    const {postHeading,postDescription,userName,userIMG} = props.post
    return (
        <div className="card mx-auto my-10 bg-lime-100 lg:w-2/5 w-2/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className='flex items-center'>
          <img className='w-12 rounded-full' src={userIMG} alt="" />
          <span className='mx-5 uppercase'>{userName}</span>
          </div>
          <h2 className="card-title">{postHeading}</h2>
          <p className="text-start">{postDescription}</p>
        </div>
      </div>
    );
};

export default SinglePost;