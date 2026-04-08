import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { toast, Zoom } from "react-toastify";

const Login = () => {
  const {
    setUser,
    signInUser,
    setLoading,
    signOutUser,
    forgotPasswordUser,
    signInWithGoogle,
    signInWithGithub,
  } = use(AuthContext);
  const [error, setError] = useState("");

  const emailRef = useRef();

  const location = useLocation();
//   console.log(location);
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
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });

          signOutUser().then(() => {
            setLoading(false);
            // console.log("sign out");
          });

          return;
        }
        // setUser(user);
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
        navigate(location?.state || "/");
      })
      .catch(() => {
        setError("Invalid User Email/Password.");
      });
    setError("");
    e.target.reset();
  };
  const handleForgotPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      setError("Please enter your email first.");
      return;
    }

    forgotPasswordUser(email)
      .then(() => {
        setLoading(false);
        toast.info(`Password reset email sent to ${email}!`, {
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
      })
      .catch((error) => {
        setLoading(false);
        if (error.code == "auth/invalid-email") {
          toast.error("Please enter a valid Email!", {
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
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
          setLoading(false);
          const user = result.user;
          // setUser(user);
        // console.log(user);
        toast.success("Google Login successful.", {
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
        navigate(location?.state || "/");
      })
      .catch((error) => {
          setLoading(false);
        toast.error(error.code, {
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
      });
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
     .then((result) => {
        setLoading(false);
        const user = result.user;
        // setUser(user);
        // console.log(user);
        toast.success("Github Login successful.", {
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
        // setUser(user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
          setLoading(false);
        toast.error(error.code, {
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
      });
  };

  return (
    <div className="bg-white mx-auto rounded-box w-2xl px-20 py-10 mt-20 min-h-[50vh]">
      <form onSubmit={handleSignIn} className="fieldset ">
        <h1 className="font-bold text-3xl text-center">Login Your Account</h1>
        <hr className="text-base-300 my-5" />
        {/* Email */}
        <label className="label font-semibold text-base">Email</label>
        <input
          ref={emailRef}
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
          <Link
            onClick={handleForgotPassword}
            to=""
            className="link link-hover text-sm"
          >
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
        <button
          type="submit"
          className="btn btn-primary hover:bg-success hover:border-none hover:text-black mt-4"
        >
          Login
        </button>
      </form>
      {/* Login with Social */}
      <div className="mt-6 flex flex-col items-center gap-3">
        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          className="btn w-fit bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        {/* GitHub */}
        <button
          onClick={handleGithubSignIn}
          className="btn w-fit bg-black text-white border-black"
        >
          <svg
            aria-label="GitHub logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          Login with GitHub
        </button>
      </div>
      {/* for Registration */}
      <div className="my-4 text-center text-sm">
        Don't have an Account?{" "}
        <Link
          to="/auth/registration"
          className="text-red-600 font-semibold hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
