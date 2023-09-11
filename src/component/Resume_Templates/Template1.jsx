import { React, useEffect } from "react";
import { UserAuth } from "../Authentication/AuthContext";
import { BsPersonCircle, BsPersonWorkspace } from "react-icons/bs";
import { GrContactInfo , GrAchievement } from "react-icons/gr";
import { IoMdSchool } from "react-icons/io";
import { FaProjectDiagram , FaRegHandPointRight } from "react-icons/fa";
import { Linkedin } from "react-feather";


export const Template1 = () => {
  const { Sections, resumeData } = UserAuth();
  const sections = Sections;
  const getFormatedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    return `${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const data = {
    personalInfo: resumeData[sections.personalInfo],
    aboutme: resumeData[sections.aboutme],
    experience: resumeData[sections.experience],
    project: resumeData[sections.project],
    education: resumeData[sections.education],
    achievement: resumeData[sections.achievement],
  };
  // console.log(data);
  return (
    <div className="flex flex-col items-start p-5 font-template1">
      <h1 className="uppercase text-4xl font-extrabold mt-10 pb-5 leading-normal tracking-widest">
        {data.personalInfo?.detail?.name || "Your Name"}
      </h1>
      <div class="border-t border-gray-600 mb-4 w-full"></div>
      <p className="uppercase pb-3 tracking-widest font-bold">
        {data.personalInfo?.detail?.role || "Your Job Roles"}
      </p>
      <div class="border-t border-gray-600 mb-4 w-full"></div>

      <div className="flex pt-10 gap-12 w-full">
        <div className="w-2/6 flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="uppercase flex items-center gap-2 pb-2 font-semibold">
              <BsPersonCircle className="text-2xl" />{" "}
              {data.aboutme?.sectionTitle}
            </h1>
            <div class="border-t border-gray-600 mb-4 w-full"></div>
            <p className="text-xs leading-normal">{data.aboutme?.detail}</p>
          </div>

          <div className="flex flex-col">
            <h1 className="uppercase flex items-center gap-2 pb-2 font-semibold">
              <GrContactInfo className="text-2xl" /> Contact
            </h1>
            <div class="border-t border-gray-600 mb-4 w-full"></div>
            <ul className="text-xs flex flex-col gap-1">
              <li>
                <span className="font-semibold">Address : </span>
                {data.personalInfo?.detail?.address}
              </li>
              <li>
                <span className="font-semibold">Mobile : </span>
                {data.personalInfo?.detail?.phone}
              </li>
              <li>
                <span className="font-semibold">Email : </span>
                {data.personalInfo?.detail?.email}
              </li>
              <li>
                <span className="font-semibold">Linkedin : </span>
                <a href={data.personalInfo?.detail?.linkedin}>
                  {data.personalInfo?.detail?.linkedin===""? "" : "Linkedin Profile"}
                </a>
              </li>
              <li>
                <span className="font-semibold">Github : </span>
                <a href={data.personalInfo?.detail?.github}>
                  {data.personalInfo?.detail?.github}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="uppercase flex items-center gap-2 pb-2 font-semibold">
              <IoMdSchool className="text-2xl" /> {data.education?.sectionTitle}
            </h1>
            <div class="border-t border-gray-600 mb-4 w-full"></div>
            <ul className="flex flex-col text-xs gap-2">
              {data.education?.details?.map((item) => (
                <li>
                  <div className="flex justify-between">
                    <p className="font-semibold">{item.coursename}</p>
                    <span className="italic">
                      {item.cgpa} {item.cgpa > 10 ? "%" : ""}
                    </span>
                  </div>
                  <p className="italic">{item.college}</p>
                  <p>
                    {getFormatedDate(item.startdate) +
                      " - " +
                      getFormatedDate(item.enddate)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-4/6 flex flex-col gap-8">
          <div>
            <h1 className="uppercase flex items-center gap-2 pb-2 font-semibold">
              <BsPersonWorkspace className="text-2xl" />{" "}
              {data.experience?.sectionTitle}
            </h1>
            <div class="border-t border-gray-600 mb-4 w-full"></div>
            <ul className="flex flex-col text-xs gap-2">
              {data.experience?.details?.map((item) => (
                <li className="flex gap-5">
                  <div className="w-1/4 flex flex-col gap-1">
                    <p className="text-xs font-semibold">{item.jobtitle}</p>
                    <p>
                      {getFormatedDate(item.startdate) +
                        " - " +
                        getFormatedDate(item.enddate)}
                    </p>
                    <p>{item.location}</p>
                  </div>
                  <div className="w-3/4 flex flex-col gap-1">
                    <p className="text-sm font-semibold">{item.company}</p>
                    <ul className="list-disc ml-4">
                      {item.points?.map((point) => (
                        <li>{point}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
       
          <div>
            <h1 className="uppercase flex items-center gap-2 pb-2 font-semibold">
              <FaProjectDiagram className="text-2xl" /> {data.project?.sectionTitle}
            </h1>
            <div class="border-t border-gray-600 mb-4 w-full"></div>
            <ul className="flex flex-col text-xs gap-4">
              {data.project?.details.map((item) => (
                <li>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <p className=" font-semibold">{item.projecttitle}</p>
                    <p>{item.tech}</p>
                  </div>
                  <ul className="list-disc ml-4 text-xs mb-1">
                    {item.points?.map((point) => (
                      <li>{point}</li>
                    ))}
                  </ul>
                  <div className="flex gap-10 font-semibold ml-4">
                    <a href={item.projectlink}>Deployed Link</a>
                    <a href={item.projectgithub}>Github Repo</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h1 className="uppercase flex items-center gap-2 pb-2 font-semibold">
              <GrAchievement className="text-2xl" /> {data.achievement?.sectionTitle}
            </h1>
            <div class="border-t border-gray-600 mb-4 w-full"></div>
            <ul className="text-xs mb-1">
              {data.achievement?.points?.map((point) => (
                
                <li className="flex items-start gap-2 mb-1">
                  {point===""?"":<FaRegHandPointRight className="text-sm"/>} {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
