import React, { useEffect } from "react";
import { Button } from "./UI/Button";
import { Card } from "./UI/Card";
import { UserAuth } from "./Authentication/AuthContext";
import { useNavigate } from "react-router";
import { GoogleButton } from "./UI/GoogleButton";

import vectorImg from "../assets/Resumes/resume-vector.svg"

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
        <div className="flex items-center flex-col p-10 white-gradient w-1/2 mt-20 text-secondary rounded-lg">
          <span className="text-3xl ">Login</span>
          <div className="w-3/5">
            <img src={vectorImg} alt="vector image for resume" />
          </div>
          <h1 className="text-4xl my-5 font-light tracking-wide">Begin your professinal journey </h1>
          <div className="pt-5">
            <GoogleButton text={"Sign In with google"} onClick={handleGoogleSignIn} />
          </div>
        </div>
      </div>
    </Card>
  );
};
