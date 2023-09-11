import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Button } from "./UI/Button";
import { TbLogin, TbTemplate, TbHome, TbLogout } from "react-icons/tb";
import { UserAuth } from "./Authentication/AuthContext";
import { useNavigate } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { Backdrop } from "./UI/Backdrop";

export const Header = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen();
  };

  // when user logouts then navigate him to the landing page
  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="flex justify-between px-5 md:px-10 lg:px-20 pb-5 items-center  pt-10 font-primary text-text">
      <div className="flex items-center gap-2 sm:gap-4 ">
        <img src={logo} alt="Logo" className="w-12 sm:w-16" />
        <h1 className="text-lg sm:text-3xl  whitespace-pre">
          <span className="font-secondary text-3xl sm:text-4xl">Expressive</span> Resume
        </h1>
      </div>

      

      { isOpen? <Backdrop/> : <span/>}
      
      <div className={` z-40 flex lg:items-center gap-6 lg:gap-12 transition-all duration-300 ease-in-out ${isOpen ? "flex-col gap-14 items-start absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " : "hidden lg:flex"}`}>
        <div className="group">
          <NavLink
            onClick={handleClick}
            to={"/"}
            className={
              "[&.active]:text-yellow-50 transition 100 flex items-end gap-1"
            }
          >
            <TbHome className="text-2xl" />
            <span className="group-hover:text-highlight     transition-all duration-300">
              Home
            </span>
          </NavLink>
          <span class="block max-w-0 group-hover:max-w-full group-active:max-w-full transition-all duration-300 h-0.5 mt-1 bg-highlight"></span>
        </div>

        <div className="group">
          <NavLink
            onClick={handleClick}
            to={"/templates"}
            className={
              "[&.active]:text-yellow-50 transition 100 flex items-end gap-1"
            }
          >
            <TbTemplate className="text-2xl" />
            <span className="group-hover:text-highlight transition-all duration-300">
              Templates
            </span>
          </NavLink>
          <span class="block max-w-0 group-hover:max-w-full group-active:max-w-full transition-all duration-300 h-0.5 mt-1 bg-highlight"></span>
        </div>

        {user?.displayName ? (
          <Button onClick={handleSignOut}>
            <TbLogout className="text-2xl" />
            Logout
          </Button>
        ) : (
          <NavLink 
            onClick={handleClick}
            to={"/login"}>
            <Button>
              <TbLogin className="text-2xl" /> Login
            </Button>
          </NavLink>
        )}
      </div>

      <div className="lg:hidden z-20">
      <Hamburger
              toggled={isOpen}
              toggle={setOpen}
            />
      </div>
    </div>
  );
};
