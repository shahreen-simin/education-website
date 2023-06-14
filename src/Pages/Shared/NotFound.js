import React from "react";
import error from "../../images/error.webp";
import {Link} from 'react-router-dom'


const NotFound = () => {
  return (
    <div>
      <div className="top-banner text-start">
        <h1>Page Not Found</h1>
        <p>
          Home // <span>Error</span>
        </p>
      </div>
      <img className="img-fluid m-auto" src={error} alt="" />
      <h1 className="text-danger my-10 text-5xl text-green-800">Sorry!!!!</h1>
      <h2 className="text-danger my-10 text-3xl text-red-800">Something missing....</h2>
      <Link to='/'><button className="rounded-pill px-5 py-3 bg-warning border-0 mb-5 fs-5">Back To Home</button></Link>
    </div>
  );
};

export default NotFound;
