import React from "react";
import { useState } from "react";
import { Button } from "./UI/Button";
import { Card } from "./UI/Card";

export const Templates = () => {
  const [index, setIndex] = useState(0);
  
  

  const selectTemplateHandler = (templateIndex) => {
    setIndex(templateIndex);
  }

  return (
    <Card>
      <div className="flex gap-10 justify-center">
        
      </div>
    </Card>
  );
};
