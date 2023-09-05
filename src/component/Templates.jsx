import React from "react";
import { useState } from "react";
import { Button } from "./UI/Button";
import { Card } from "./UI/Card";
import { useNavigate } from "react-router";
import { UserAuth } from "./Authentication/AuthContext";

export const Templates = () => {
  const navigate = useNavigate();
  // const [index, setIndex] = useState(0);
  const {templateIndex , updateTemplateIndex} = UserAuth();

  const selectTemplateHandler = (index) => {
    updateTemplateIndex(index);
    navigate("/resume-dashboard");
  }

  return (
    <Card>
      <div className="flex gap-10 justify-center">
        <Button onClick={() => selectTemplateHandler(0)}>Template 1</Button>
        <Button onClick={() => selectTemplateHandler(1)}>Template 2</Button>
        <Button onClick={() => selectTemplateHandler(2)}>Template 3</Button>
        <Button onClick={() => selectTemplateHandler(3)}>Template 4</Button>
      </div>
    </Card>
  );
};
