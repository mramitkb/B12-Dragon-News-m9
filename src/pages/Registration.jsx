import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

const Registration = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="w-10/12 mx-auto ">
        <Navbar></Navbar>

        <form className="fieldset bg-white mx-auto rounded-box w-2xl px-20 py-10 mt-20 min-h-[50vh]">
          <h1 className="font-bold text-3xl text-center text-accent">
            Register Your Account
          </h1>
          <hr className="text-base-300 my-5" />
          {/* Name */}
          <label className="label font-semibold text-base">Name</label>
          <input
            type="name"
            name="name"
            className="input w-full bg-base-200 border-none outline-none py-6 focus:shadow-none"
            placeholder="Enter Your Name"
          />
          {/* Photo URL */}
          <label className="label font-semibold text-base mt-3">Photo URL</label>
          <input
            type="url"
            name="photo"
            className="input w-full bg-base-200 border-none outline-none py-6 focus:shadow-none"
            placeholder="Enter Your Photo URL"
          />
          {/* Email */}
          <label className="label font-semibold text-base mt-3">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full bg-base-200 border-none outline-none py-6 focus:shadow-none"
            placeholder="Enter Your Email"
            required
          />
          {/* Password */}
          <label className="label font-semibold text-base mt-3">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full bg-base-200 border-none outline-none py-6 focus:shadow-none"
            placeholder="Enter Your Password"
          />

          <button className="btn btn-primary mt-4">Login</button>
          <p className="my-4 text-center text-sm">
            Don't have an Account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
