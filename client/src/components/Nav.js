import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { async } from "@firebase/util";
import Search from "./Search";

const Nav = () => {
  // const {createUser} = UserAuth()
  const { user } = UserAuth();
  const { logOut } = UserAuth();
  // console.log('user',user)
  const handleLogout = async (event) => {
    try {
      await logOut();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <nav className="flex items-center border-b-2 border-orange-200 m-0 pl-10 pr-10 pt-5 pb-5 w-full sticky left-0 top-0 bg-white">
      <Link className="mr-64" to="/">
        <div className="text-5xl mr-auto font-nunito ">
          <span className="bg-orange-500 pl-5 rounded-md text-white text-right">
            li
          </span>
          <span className="text-gray-600 ">zwe</span>
        </div>
      </Link>
      <Search />
      {user && <h4 className="mr-5 text-orange-500">{user.email}</h4>}
      {/* <FontAwesomeIcon icon={faMagnifyingGlass}/> */}
      {/* <p className='text-orange-600 mr-2 font-nunito'>{user.email}</p> */}
      {user ? (
        <Link to="/login">
          <button
            onClick={handleLogout}
            className="mr-5 text-orange-500"
          >
            <FontAwesomeIcon icon={faToggleOn} size="2x"/>
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="mr-5">
          <FontAwesomeIcon icon={faToggleOff} size="2x"/>
          </button>
        </Link>
      )}
      <FontAwesomeIcon icon={faFaceSmile} size="2x" />
    </nav>
  );
};

export default Nav;
