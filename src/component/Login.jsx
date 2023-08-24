import React, { useEffect } from "react";
import { Button } from "./UI/Button";
import { Card } from "./UI/Card";
import { UserAuth } from "./Authentication/AuthContext";
import { useNavigate } from "react-router";


import vectorImg from "../assets/Resumes/resume-vector.svg"
import { GoogleButton } from "./UI/GoogleButton";

export const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // when the user logsIn then navigate him to the landing page
  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user]);

  return (
    <Card>
      <div className="flex justify-center">
        <div className="flex-grow flex max-w-3xl items-center justify-center flex-col p-6 sm:p-10 white-gradient w-3/5 mt-16 text-secondary rounded-lg">
          <span className="text-3xl ">Login</span>
          <div className="w-3/4 mt-5">
            <img src={vectorImg} alt="vector image for resume" />
          </div>
          <h1 className="text-3xl sm:text-4xl my-5 font-light tracking-wide text-center">Begin your professinal journey </h1>
          <div className="pt-5">
            <GoogleButton  onClick={handleGoogleSignIn} />
          </div>
        </div>
      </div>
    </Card>
  );
};
