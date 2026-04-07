import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { toast, Zoom } from "react-toastify";

const Login = () => {
  const { setUser, signInUser, setLoading, signOutUser } = use(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        setLoading(false);
        const user = result.user;

        if (!user.emailVerified) {
          toast.info("Email address must be verified!", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });

          signOutUser()
          .then(() => {
            setLoading(false);
            console.log("sign out");
          })

          return;
        }
        setUser(user);
        toast.success("Sign In successful.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        navigate("/");

    })
    .catch(() => {
        setError("Invalid User Email/Password.");
    });
    setError("");
    e.target.reset();
  };
  return (
    <div>
      <form
        onSubmit={handleSignIn}
        className="fieldset bg-white mx-auto rounded-box w-2xl px-20 py-10 mt-20 min-h-[50vh]"
      >
        <h1 className="font-bold text-3xl text-center">Login Your Account</h1>
        <hr className="text-base-300 my-5" />
        {/* Email */}
        <label className="label font-semibold text-base">Email</label>
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
          required
        />
        {/* Forgot Password */}
        <div className="mt-2">
          <Link to="" className="link link-hover text-sm">
            Forgot password?
          </Link>
        </div>
        {/* Message */}
        <div>
          {error && (
            <p className="text-center text-red-500 font-semibold text-sm">
              {error}
            </p>
          )}
        </div>
        {/* Button */}
        <button type="submit" className="btn btn-primary mt-4">
          Login
        </button>
        <p className="my-4 text-center text-sm">
          Don't have an Account?{" "}
          <Link
            to="/auth/registration"
            className="text-red-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
