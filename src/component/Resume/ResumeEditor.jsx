import React, { useEffect, useState } from "react";
import { FormInput } from "./FormInput";
import { Button } from "../UI/Button";

export const ResumeEditor = (props) => {
  const sections = props.sections;
  const data = props.data;

  // store the current active section key
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  // store current active section data
  const [activeData, setActiveData] = useState(
    data[sections[Object.keys(sections)[0]]]
  );

  // store the index of active section data
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);

  // store currently selected section title
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  //   store personal Info
  const [values, setValues] = useState({
    name: activeData?.details?.name || "",
    role: activeData?.details?.role || "",
    address: activeData?.details?.address || "",
    email: activeData?.details?.email || "",
    phone: activeData?.details?.phone || "",
    linkedin: activeData?.details?.linkedin || "",
    github: activeData?.details?.github || "",
  });

  // *************************************************************************************************
  // to update the changes in the Data
  // *************************************************************************************************
  const internalDataUpdateHandler = (value, index) => {
    const tempValues = { ...values };
    if (!Array.isArray(tempValues.points)) {
      tempValues.points = [];
    }
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  // Personal Info form
  const personalInfoBody = (
    <div className="flex flex-col gap-10 mt-10">
      <div className="flex flex-wrap gap-10">
        <FormInput
          className={"grow"}
          label={"Full Name"}
          value={values.name}
          placeholder={"Enter your full name"}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
        <FormInput
          className={"grow"}
          label={"Job Roles"}
          value={values.role}
          placeholder={"Enter job roles"}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              role: e.target.value,
            }))
          }
        />
      </div>
      <FormInput
        label={"Address"}
        value={values.address}
        placeholder={"Enter your address"}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            address: e.target.value,
          }))
        }
      />
      <div className="flex flex-wrap gap-10">
        <FormInput
          className={"grow"}
          label={"Email"}
          value={values.email}
          placeholder={"Enter email"}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <FormInput
          className={"grow"}
          label={"Phone"}
          value={values.phone}
          placeholder={"Enter phone number"}
          type={"tel"}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              phone: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex flex-wrap gap-10">
        <FormInput
          className={"grow"}
          label={"LinkedIn"}
          value={values.linkedin}
          placeholder={"Enter LinkedIn profile link"}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              linkedin: e.target.value,
            }))
          }
        />
        <FormInput
          className={"grow"}
          label={"Github"}
          value={values.github}
          placeholder={"Enter Github profile link"}
          type={"tel"}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              github: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );

  // About Me Form
  const aboutMeBody = (
    <div className="mt-10">
      <FormInput
        className={"[&>input]:h-32 "}
        label={"About Me"}
        placeholder={"Describe yourself and your objectives"}
        value={values.aboutme}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            aboutme: e.target.value,
          }))
        }
      />
    </div>
  );

  // Experience Form
  const experienceBody = (
    <div className="flex flex-col gap-10 mt-10">
      <div className="flex flex-wrap gap-10">
        <FormInput
          className={"grow"}
          label={"Job Title"}
          value={values.jobtitle}
          placeholder={"Enter job title"}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              jobtitle: e.target.value,
            }))
          }
        />
        <FormInput
          className={"grow"}
          label={"Company / Organization Name"}
          value={values.company}
          placeholder={"Enter phone number"}
          type={"tel"}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              company: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex flex-wrap gap-10">
        <FormInput
          className={"grow"}
          type={"date"}
          label={"Start Date"}
          value={values.startdate}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              startdate: e.target.value,
            }))
          }
        />
        <FormInput
          className={"grow"}
          type={"date"}
          label={"End Date"}
          value={values.enddate}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              enddate: e.target.value,
            }))
          }
        />
      </div>
      <FormInput
        label={"Location"}
        value={values.location}
        placeholder={"Enter job location"}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            location: e.target.value,
          }))
        }
      />

      <div className="flex flex-col gap-5">
        <FormInput
          label={"Job Description"}
          placeholder={"Line 1"}
          value={values.points ? values.points[0] : ""}
          onChange={(e) => internalDataUpdateHandler(e.target.value, 0)}
        />
        <FormInput
          placeholder={"Line 2"}
          value={values.points ? values.points[1] : ""}
          onChange={(e) => internalDataUpdateHandler(e.target.value, 1)}
        />
        <FormInput
          placeholder={"Line 3"}
          value={values.points ? values.points[2] : ""}
          onChange={(e) => internalDataUpdateHandler(e.target.value, 2)}
        />
      </div>
    </div>
  );

  // Projects Form
  const projectBody = (
    <div className="flex flex-col gap-10 mt-10">
      <FormInput
        label={"Project Title"}
        value={values.projecttitle}
        placeholder={"Enter project title"}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            projecttitle: e.target.value,
          }))
        }
      />
      <FormInput
        label={"Technologies Used"}
        value={values.tech}
        placeholder={"Enter technologies used"}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            tech: e.target.value,
          }))
        }
      />
      <div className="flex flex-wrap gap-10">
        <FormInput
          className={"grow"}
          label={"Github Link"}
          value={values.projectgithub}
          placeholder={"Enter github repository link"}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              projectgithub: e.target.value,
            }))
          }
        />
        <FormInput
          className={"grow"}
          label={"Deployed Link"}
          value={values.projectlink}
          placeholder={"Enter deployed project link"}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              projectlink: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex flex-col gap-5">
        <FormInput
          label={"Project Description"}
          placeholder={"Line 1"}
          value={values.points ? values.points[0] : ""}
          onChange={(e) => internalDataUpdateHandler(e.target.value, 0)}
        />
        <FormInput
          placeholder={"Line 2"}
          value={values.points ? values.points[1] : ""}
          onChange={(e) => internalDataUpdateHandler(e.target.value, 1)}
        />
        <FormInput
          placeholder={"Line 3"}
          value={values.points ? values.points[2] : ""}
          onChange={(e) => internalDataUpdateHandler(e.target.value, 2)}
        />
      </div>
    </div>
  );

  // Education Form
  const educationBody = (
    <div className="flex flex-col gap-10 mt-10">
      <div className="flex flex-wrap gap-10">
        <FormInput
          className={"grow"}
          label={"Course Name"}
          value={values.coursename}
          placeholder={"Enter Course"}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              coursename: e.target.value,
            }))
          }
        />
        <FormInput
          className={"grow"}
          label={"CGPA / Percentage"}
          value={values.cgpa}
          placeholder={"Enter CGPA / percentage for respective course"}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              cgpa: e.target.value,
            }))
          }
        />
      </div>

      <FormInput
        label={"Institution / School Name"}
        value={values.college}
        placeholder={"Enter institution / school name"}
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            college: e.target.value,
          }))
        }
      />

      <div className="flex flex-wrap gap-10">
        <FormInput
          className={"grow"}
          type={"date"}
          label={"Start Date"}
          value={values.startdate}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              startdate: e.target.value,
            }))
          }
        />
        <FormInput
          className={"grow"}
          type={"date"}
          label={"End Date"}
          value={values.enddate}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              enddate: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div className="flex flex-col gap-6 mt-10">
      <FormInput
        label={"Achievements"}
        placeholder="Achievement 1"
        value={values.points ? values.points[0] : ""}
        onChange={(event) => internalDataUpdateHandler(event.target.value, 0)}
      />
      <FormInput
        placeholder="Achievement 2"
        value={values.points ? values.points[1] : ""}
        onChange={(event) => internalDataUpdateHandler(event.target.value, 1)}
      />
      <FormInput
        placeholder="Achievement 3"
        value={values.points ? values.points[2] : ""}
        onChange={(event) => internalDataUpdateHandler(event.target.value, 2)}
      />
      <FormInput
        placeholder="Achievement 4"
        value={values.points ? values.points[3] : ""}
        onChange={(event) => internalDataUpdateHandler(event.target.value, 3)}
      />
    </div>
  );

  // ****************************************************************************************************************
  //Logic to generate different forms body
  // ****************************************************************************************************************
  const generateFormBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.personalInfo:
        return personalInfoBody;
      case sections.aboutme:
        return aboutMeBody;
      case sections.experience:
        return experienceBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      default:
        return null;
    }
  };

  // ****************************************************************************************************************
  // Logic ro transfer data to the parent component ResumeDashboard after save button in clicked
  // ****************************************************************************************************************
  const saveDataHandler = () => {
    // console.log(values);

    switch (sections[activeSectionKey]) {
      case sections.personalInfo: {
        const tempDetail = {
          name: values.name,
          role: values.role,
          address: values.address,
          email: values.email,
          phone: values.phone,
          linkedin: values.linkedin,
          github: values.github,
        };

        props.setData((prev) => ({
          ...prev,
          [sections.personalInfo]: {
            ...prev[sections.personalInfo],
            details: tempDetail,
            sectionTitle,
          },
        }));

        break;
      }

      case sections.aboutme: {
        const tempDetail = values.aboutme;

        props.setData((prev) => ({
          ...prev,
          [sections.aboutme]: {
            ...prev[sections.aboutme],
            details: tempDetail,
            sectionTitle,
          },
        }));

        break;
      }

      case sections.experience: {
        const tempDetail = {
          jobtitle: values.jobtitle,
          company: values.company,
          startdate: values.startdate,
          enddate: values.enddate,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...data[sections.experience]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setData((prev) => ({
          ...prev,
          [sections.experience]: {
            ...prev[sections.experience],
            details: tempDetails,
            sectionTitle,
          },
        }));

        break;
      }

      case sections.project: {
        const tempDetail = {
          projecttitle: values.projecttitle,
          tech: values.tech,
          projectgithub: values.projectgithub,
          projectlink: values.projectlink,
          points: values.points,
        };
        const tempDetails = [...data[sections.project]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setData((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: tempDetails,
            sectionTitle,
          },
        }));

        break;
      }

      case sections.eduction: {
        const tempDetail = {
          coursename: values.coursename,
          cgpa: values.cgpa,
          college: values.college,
          startdate: values.startdate,
          enddate: values.enddate,
        };
        const tempDetails = [...data[sections.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setData((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetails,
            sectionTitle,
          },
        }));

        break;
      }

      case sections.achievement: {
        const tempPoints = values.points;

        props.setData((prev) => ({
          ...prev,
          [sections.achievement]: {
            ...prev[sections.achievement],
            points: tempPoints,
            sectionTitle,
          },
        }));

        break;
      }

      default:
        break;
    }
  };

  // ****************************************************************************************************************
  // Logic to add more data(experiences/projects/education courses)
  // ****************************************************************************************************************
  const addDetailHandler = () => {
    const details = activeData?.details;
    if (!details) {
      return;
    }

    // fetch last added detail
    const lastDetail = details.slice(-1)[0];

    if (!Object.keys(lastDetail).length) {
      return;
    }

    details?.push({});

    props.setData((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...data[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };

  // ****************************************************************************************************************
  // Logic to delete curretn detail
  // ****************************************************************************************************************
  const deleteDetailHandler = (index) => {
    const details = activeData?.details ? [...activeData?.details] : "";

    if (!details) {
      return;
    }

    details.splice(index, 1);
    props.setData((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...data[sections[activeSectionKey]],
        details: details,
      },
    }));

    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };

  // ****************************************************************************************************************
  // Logic to update active section information , when we change section key
  // ****************************************************************************************************************
  useEffect(() => {
    const tempActiveData = data[sections[activeSectionKey]];
    setActiveData(tempActiveData);
    setSectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);
    
    // Logic for updating values of user input while switching sections
    setValues({
      name: tempActiveData?.details?.name || "",
      address: tempActiveData?.details?.address || "",
      role: tempActiveData?.details?.role || "",
      linkedin: tempActiveData?.details?.linkedin || "",
      github: tempActiveData?.details?.github || "",
      email: tempActiveData?.details?.email || "",
      phone: tempActiveData?.details?.phone || "",
      aboutme: typeof tempActiveData?.details !== "object" ? tempActiveData.details : "",
      
      tech: tempActiveData?.details
      ? tempActiveData.details[0]?.tech || ""
      : "",
      projectlink: tempActiveData?.details
      ? tempActiveData.details[0]?.projectlink || ""
      : "",
      projectgithub: tempActiveData?.details
      ? tempActiveData.details[0]?.projectgithub || ""
      : "",
      company: tempActiveData?.details
      ? tempActiveData.details[0]?.company || ""
      : "",
      college: tempActiveData?.details
      ? tempActiveData.details[0]?.college || ""
      : "",
      location: tempActiveData?.details
      ? tempActiveData.details[0]?.location || ""
      : "",
      startdate: tempActiveData?.details
      ? tempActiveData.details[0]?.startdate || ""
      : "",
      enddate: tempActiveData?.details
      ? tempActiveData.details[0]?.enddate || ""
      : "",
      points: tempActiveData?.details
      ? tempActiveData.details[0]?.points
          ? [...tempActiveData.details[0]?.points]
          : ""
          : tempActiveData?.points
          ? [...tempActiveData.points]
          : "",
      jobtitle: tempActiveData?.details
      ? tempActiveData.details[0]?.jobtitle || ""
      : tempActiveData?.details?.jobtitle || "",
      projecttitle: tempActiveData?.details
      ? tempActiveData.details[0]?.projecttitle || ""
      : tempActiveData?.details?.projecttitle || "",
      
      coursename: tempActiveData?.details
      ? tempActiveData.details[0]?.coursename || ""
      : "",

      // coursename: tempActiveData?.details
      // ? tempActiveData.details[0]?.coursename || ""
      // : tempActiveData?.details?.coursename || "",
      

        });
      } , [activeSectionKey]);
      
      // ****************************************************************************************************************
      // Logic to display multiple  projects / experiences / education   
      // ****************************************************************************************************************
      useEffect(() => {
        setActiveData(data[sections[activeSectionKey]]);
      } , [data]);
      
      
      // ****************************************************************************************************************
      // Logic to update active information in current detail section of multiple projects / experiences / education 
      // ****************************************************************************************************************
      useEffect(() => {
        const details = activeData?.details;
        if(!details){
          return;
        }

        const tempActiveData = data[sections[activeSectionKey]];
        setValues({
          tech: tempActiveData.details[activeDetailIndex]?.tech || "",
          projectlink: tempActiveData.details[activeDetailIndex]?.projectlink || "",
          comapny: tempActiveData.details[activeDetailIndex]?.company || "",
          location: tempActiveData.details[activeDetailIndex]?.location || "",
          startDate: tempActiveData.details[activeDetailIndex]?.startDate || "",
          endDate: tempActiveData.details[activeDetailIndex]?.endDate || "",
          points: tempActiveData.details[activeDetailIndex]?.points || "",
          jobtitle: tempActiveData.details[activeDetailIndex]?.jobtitle || "",
          projecttitle: tempActiveData.details[activeDetailIndex]?.projecttitle || "",
          role: tempActiveData.details[activeDetailIndex]?.role || "",
          coursename: tempActiveData.details[activeDetailIndex]?.coursename || "",
          linkedin: tempActiveData.details[activeDetailIndex]?.linkedin || "",
          github: tempActiveData.details[activeDetailIndex]?.github || "",
          college: tempActiveData.details[activeDetailIndex]?.college || "",
        });
      } , [activeDetailIndex]);



      // ****************************************************************************************************************
      
      return (
    <div className="bg-formBg p-16 mt-10 rounded-3xl">
      {/* list of all the sections showed as a header */}
      <ul className="flex p-4 rounded-3xl shadow-input border-solid border-2 border-white">
        {Object.keys(sections)?.map((key) => (
          <li
            key={key}
            onClick={() => setActiveSectionKey(key)}
            className={`cursor-pointer px-6 py-2 rounded-3xl tracking-wide select-none text-lg transition-all duration-200 ${
              activeSectionKey === key ? "bg-secondary text-highlight" : ""
            }`}
          >
            {sections[key]}
          </li>
        ))}
      </ul>

      <div className=" pt-10">
        <FormInput
          label={"Title"}
          value={sectionTitle}
          placeholder={"Enter section Title"}
          onChange={(e) => setSectionTitle(e.target.value)}
          className={"max-w-md"}
        />
      </div>

      

      {generateFormBody()}

      <Button
        className={
          "mt-10 text-highlight bg-secondary border-primary hover:bg-primary hover:border-secondary "
        }
        onClick={saveDataHandler}
      >
        Save
      </Button>
    </div>
  );
};
