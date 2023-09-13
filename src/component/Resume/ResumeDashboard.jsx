import React, { useEffect, useRef, useState } from "react";
import { Card } from "../UI/Card";
import { ResumePreview } from "./ResumePreview";
import { ResumeEditor } from "./ResumeEditor";
import ReactToPrint from "react-to-print";
import { TbDownload } from "react-icons/tb";
import { Button } from "../UI/Button";
import { UserAuth } from "../Authentication/AuthContext";

export const ResumeDashboard = () => {
  // stores current reference of resume
  const resumeRef = useRef();
  const { templateIndex } = UserAuth();

  return (
    <Card>
      <div className="flex flex-col items-center ">
          <h1 className="text-text text-3xl tracking-wider mt-10">
            Resume Dashboard
          </h1>
          

        <ResumeEditor className={"w-full shrink mb-5"} />

        <ReactToPrint
            trigger={() => {
              return (
                <Button className={"mb-5"}>
                  Download <TbDownload />
                </Button>
              );
            }}
            //store the change when button clicked
            content={() => resumeRef.current}
          />

        <ResumePreview ref={resumeRef} templateIndex={templateIndex} />
      </div>
    </Card>
  );
};
