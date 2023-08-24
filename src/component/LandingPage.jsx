import { Card } from "./UI/Card";
import React from "react";
import resume1 from "../assets/Resumes/resume1.jpg";
import { Button } from "./UI/Button";
import { UserAuth } from "./Authentication/AuthContext";
import { useNavigate } from "react-router";

export const LandingPage = () => {

  const {user} = UserAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if(user === null){
      navigate('/login')    
    }
    else{
      navigate('/resume-dashboard')
    }
  }

  return (
    <Card >
      <div className="flex justify-center pt-5 sm:mx-5 flex-wrap mt-28 motion-safe:animate-fadeIn">
        <h1 className="text-text text-6xl lg:text-8xl font-semibold tracking-tight">
          Build a Professional <span className="text-highlight ">Resume.</span>
        </h1>
        <p className="text-text font-light text-2xl pt-11 text-center tracking-wide">
          &#8223; More Than a Template: Curate Your Journey with Our Dynamic
          Resume Builder &#8221;
        </p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-16 mt-44 motion-safe:animate-fadeIn  justify-start items-center">
        <div className="max-w-2xl">
          <img src={resume1} alt="a sample resume img" />
        </div>
        <div className="flex flex-col items-center sm:items-start text-text mt-32">
          <p className="text-2xl text-wide font-light break-words mb-10 tracking-wide">
            Elevate your job search with ExpressResume, a cutting-edge online
            platform designed to simplify and enhance your resume creation
            process. ExpressResume empowers you to craft a standout resume that
            captures your potential and opens doors to new career opportunities.
          </p>
          <h1 className="text-4xl">
            Begin your journey with a single click!
          </h1>

          <div className="mt-10">
            <Button onClick={handleGetStarted}>Get Started</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
