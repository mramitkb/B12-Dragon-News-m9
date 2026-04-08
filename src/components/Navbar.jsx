import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import MyLink from "./MyLink";
import userLogo from "../assets/user.png";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { toast, Zoom } from "react-toastify";
import { ClockLoader } from "react-spinners";

const Navbar = () => {
  const { user, setUser, loading, setLoading, signOutUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setLoading(false);
        toast.success("Sign Out successful.", {
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
        setUser(null);
        navigate("/auth/login");
      })
      .catch();
  };

  return (
    <div className="flex items-center justify-between pt-6">
      <div></div>
      <div className="space-x-5 text-accent font-semibold">
        <MyLink to="/">Home</MyLink>
        <MyLink to="/about">About</MyLink>
        <MyLink to="/career">Career</MyLink>
      </div>
      <div className="flex items-center gap-3">
        { loading ? <ClockLoader color="#D72050"/> :<img
          className="rounded-full w-12"
          src={user ? user.photoURL : userLogo}
          alt=""
          title={user ? user.displayName : "Guest"}
        />}
        {
        user ? <Link
            onClick={handleSignOut}
            to={""}
            className="btn btn-secondary px-8"
          >
            SignOut
          </Link> : <Link to={"/auth/login"} className="btn btn-primary px-8">
            Login
          </Link>
            
        }
      </div>
    </div>
  );
};

export default Navbar;