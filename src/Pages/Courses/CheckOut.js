import React from "react";
import { Link } from "react-router-dom";
import "./CheckOut.css";

const CheckOut = () => {
  return (
    <div>
      <div className="top-banner text-start">
        <h1>Checkout</h1>
        <p>
          Home // <span>Checkout</span>
        </p>
      </div>
      <div className="">
        <h1 className="m-5 pt-5 text-4xl font-bold">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 checkout gap-5">
            <div className="col-span-2 text-start mb-5">
                <p className="text-xl m-4">Buyer Info</p>
                <hr className="w-100"/>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                    <div className="p-3">
                        <p>Full Name</p>
                        <input className="w-full p-2 border-2 border-green-300 rounded " type="text" placeholder="Enter Name" name="" id="" />
                    </div>
                    <div className="p-3">
                        <p>Email</p>
                        <input className="w-full p-2 border-2 border-green-300 rounded " type="email" placeholder="Enter email"  name="" id="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                    <div className=" p-3">
                        <p>Address</p>
                        <input className="w-full p-2 border-2 border-green-300 rounded " type="text" placeholder="Enter Address" name="" id="" />
                    </div>
                    <div className=" p-3">
                        <p>Contact</p>
                        <input className="w-full p-2 border-2 border-green-300 rounded " type="email" placeholder="Enter phone number"  name="" id="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                    <div className=" p-3">
                        <p>Country</p>
                        <input className="w-full p-2 border-2 border-green-300 rounded " type="text" placeholder="Enter Country" name="" id="" />
                    </div>
                    <div className="p-3">
                        <p>City</p>
                        <input className="w-full p-2 border-2 border-green-300 rounded" type="email" placeholder="Enter City"  name="" id="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                    <div className=" p-3">
                        <p>State</p>
                        <input className="w-full p-2 border-2 border-green-300 rounded" type="text" placeholder="Enter State" name="" id="" />
                    </div>
                    <div className=" p-3">
                        <p>Zip Code</p>
                        <input className="w-full p-2 border-2 border-green-300 rounded" type="email" placeholder="Enter Zip Code"  name="" id="" />
                    </div>
                    <div className="col-span-2 p-3">
                        <p>Note</p>
                        <input className="w-full p-2 border-2 border-green-300 rounded" type="text" placeholder="Enter Note" name="" id="" />
                    </div>
                </div>
            </div>
            <div className="border-2 border-green-400 p-5  m-auto">
                <h3 className="my-3 p-2 text-2xl font-bold">Your Order Summary</h3>
                <div className="flex justify-between my-5">
                    <p>Nutrition Course</p>
                    <p>Price</p>
                </div>
                <hr />
                <div className="flex justify-between my-5">
                    <p>Subtotal</p>
                    <p>Price</p>
                </div>
                <div className="flex justify-between my-5">
                    <p>Shipping</p>
                    <p>Price</p>
                </div>
                <div className="flex justify-between my-5">
                    <p>Tax</p>
                    <p>Price</p>
                </div>
                <hr />
                <div className="flex justify-between my-5">
                    <p>Total</p>
                    <p>Price</p>
                </div>
                <hr />
                <h4 className="text-2xl font-bold">Payment</h4>
                <div className="mt-5 bank">
                    <button className="py-2 text-white btn-primary btn  border-0 rounded-pill m-2 fs-5 px-3">Credit Card</button>
                    <button className="py-2 text-white btn-primary btn  border-0 rounded-pill m-2 fs-5 px-3">Bank Transfer</button>
                    <button className="py-2 text-white btn-primary btn  border-0 rounded-pill m-2 fs-5 px-3">Paypal</button>
                </div>
                <button  className="py-2 text-white w-100 btn bg-success border-0 rounded-pill mt-3 fs-5 px-3">CheckOut</button>
                <p className="pt-4"><Link to='/courses' className="text-decoration-none text-dark">Back to Cart</Link></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
