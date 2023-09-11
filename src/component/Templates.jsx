import React from "react";
import { useState } from "react";
import { Button } from "./UI/Button";
import { Card } from "./UI/Card";
import { useNavigate } from "react-router";
import { UserAuth } from "./Authentication/AuthContext";
import img from "../assets/Resumes/resume1.jpg"

export const Templates = () => {
  const navigate = useNavigate();
  // const [index, setIndex] = useState(0);
  const {user , updateTemplateIndex} = UserAuth();

  const selectTemplateHandler = (index) => {
    if(user === null){
      navigate('/login')    
    }
    else{

      updateTemplateIndex(index);
      navigate("/resume-dashboard");
    }
  }

  return (
    <Card>
      <div className="flex gap-10 justify-center">
        <div className="max-w-md flex flex-col gap-4 items-center">
          <img src={img} alt="template 1" />
          <Button className={"max-w-md"} onClick={() => selectTemplateHandler(0)}>Template 1</Button>
        </div>
      </div>
    </Card>
  );
};
