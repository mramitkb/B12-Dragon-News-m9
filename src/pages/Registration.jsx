import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast, Zoom } from "react-toastify";

const Registration = () => {
  const {
    setUser,
    setLoading,
    createUser,
    updateUserProfile,
    userEmailVerification,
    signOutUser,
  } = use(AuthContext);
  const [error, setError] = useState("");
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;

    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password Validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least 1 UPPERCASE, 1 lowercase, 1 number, 1 special character and be at least 6 characters long!",
      );
      return;
    }
    // Terms Validation
    if (!terms) {
      setError("You must accept the Terms & Conditions.");
      return;
    }
    setError("");

    // Create User
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // Update User
        updateUserProfile(displayName, photoURL).then().catch();

        // Email verification
        userEmailVerification()
          .then(() => {
            setLoading(false);
            toast.info("Verify your email to Login!", {
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
          .catch();

        // Sign Out User
        signOutUser()
          .then(() => {
            setLoading(false);
            setUser(null);
            // to login page
            navigate("/auth/login");
          })
          .catch();

        e.target.reset();
      })
      .catch((error) => {
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
    <div className="bg-base-200 min-h-screen">
      <form
        onSubmit={handleRegistration}
        className="fieldset bg-white mx-auto rounded-box w-2xl px-20 py-10 mt-20 min-h-[50vh]"
      >
        <h1 className="font-bold text-3xl text-center">
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
          required
        />
        {/* Photo URL */}
        <label className="label font-semibold text-base mt-3">Photo URL</label>
        <input
          type="url"
          name="photo"
          className="input w-full bg-base-200 border-none outline-none py-6 focus:shadow-none"
          placeholder="Enter Your Photo URL"
          required
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
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input w-full bg-base-200 border-none outline-none py-6 focus:shadow-none"
            placeholder="Enter Your Password"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-4 right-3 text-base"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        {/* T & C */}
        <label className="label mt-2">
          <input
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            name="terms"
            type="checkbox"
            className="checkbox checkbox-xs rounded-sm"
          />
          Accept Our Terms & Conditions.
        </label>
        {/* Button */}
        <button
          //   disabled={!terms}
          type="submit"
          className="btn btn-primary hover:bg-info hover:border-none hover:text-black mt-4"
        >
          Registration
        </button>
        <p className="my-4 text-center text-sm">
          Don't have an Account?{" "}
          <Link
            to="/auth/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
        {/* Message */}
        <div>
          {error && (
            <p className="text-center text-red-500 font-semibold text-sm">
              {error}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Registration;
