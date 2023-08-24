import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Button } from "./UI/Button";
import {TbLogin , TbTemplate , TbHome , TbLogout} from 'react-icons/tb';

import { UserAuth } from "./Authentication/AuthContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error)
    }
  }

  // when user logouts then navigate him to the landing page
  useEffect(() => {
    if(user === null){
      navigate('/')
    }
   
  }, [user])
  

  return (
    <div className="flex justify-between px-10 lg:px-20 pb-5 items-center  pt-10 font-primary text-text">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-16" />
        <h1 className="text-3xl  whitespace-pre">
          <span className="font-secondary text-4xl">Expressive</span> Resume
        </h1>
      </div>

      <div className="flex items-center gap-6 lg:gap-12">
        <div className="group">
          <NavLink
            to={"/"}
            className={"[&.active]:text-yellow-50 transition 100 flex items-end gap-1"}
          >
            <TbHome className="text-2xl"/>
            <span className="group-hover:text-highlight     transition-all duration-300">
              Home
            </span>
          </NavLink>  
          <span class="block max-w-0 group-hover:max-w-full group-active:max-w-full transition-all duration-300 h-0.5 mt-1 bg-highlight"></span>
        </div>

        <div className="group">
          <NavLink
            to={"/templates"}
            className={"[&.active]:text-yellow-50 transition 100 flex items-end gap-1"}
          >
            <TbTemplate className="text-2xl"/>
            <span className="group-hover:text-highlight transition-all duration-300">
              Templates
            </span>
          </NavLink>
          <span class="block max-w-0 group-hover:max-w-full group-active:max-w-full transition-all duration-300 h-0.5 mt-1 bg-highlight"></span>
        </div>

        {user?.displayName ? (
          <Button onClick={handleSignOut}><TbLogout className="text-2xl"/>Logout</Button>
        ) : (
          <NavLink to={"/login"}>
            <Button><TbLogin className="text-2xl"/> Login</Button>
          </NavLink>
        )}
      </div>
    </div>
  );
};
