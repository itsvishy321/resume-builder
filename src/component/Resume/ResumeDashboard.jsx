import React, { useEffect, useRef, useState } from "react";
import { Card } from "../UI/Card";
import { ResumeTemplate } from "./ResumeTemplate";
import { ResumeEditor } from "./ResumeEditor";

export const ResumeDashboard = () => {
  // stores current reference of resume
  const resumeRef = useRef();

  // resume sections by name key:value pair
  const sections = {
    personalInfo: "Personal Infomation",
    aboutme: "About me",
    experience: "Experiences",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
  };

  const [resumeData, setResumeData] = useState({
    [sections.personalInfo]: {
      id: sections.personalInfo,
      sectionTitle: sections.personalInfo,
      details: [], // this object will store extra user details eg: phone number email ids etc.
    },
    [sections.aboutme]: {
      id: sections.aboutme,
      sectionTitle: sections.aboutme,
      details: [], // this object will store extra user details eg:
    },
    [sections.experience]: {
      id: sections.experience,
      sectionTitle: sections.experience,
      details: [], // this object will store extra user details eg: multiple jobs
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [], // this object will store extra user details eg: multiple jobs
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [], // this object will store extra user details eg: multiple degrees
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      details: [], // this object will store extra user details eg:
    },
  });

  
  // when resume data changes sections information will be updated
  useEffect(() => {}, [resumeData]);
  console.log(resumeData);

  return (
    <Card>
      <div className="flex flex-col items-center ">
        <h1 className="text-text text-3xl tracking-wider mt-10">
          Resume Dashboard
        </h1>

        <ResumeEditor sections={sections} data={resumeData} setData={setResumeData}/>

        <ResumeTemplate ref={resumeRef} sections={sections} data={resumeData} />
      </div>
    </Card>
  );
};
