import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  // **********************************************************************

  const Sections = {
    personalInfo: "Personal Infomation",
    aboutme: "About me",
    experience: "Experiences",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
  };

  const [resumeData, setResumeData] = useState({
    [Sections.personalInfo]: {
      id: Sections.personalInfo,
      sectionTitle: Sections.personalInfo,
      detail: [], // this object will store extra user details eg: phone number email ids etc.
    },
    [Sections.aboutme]: {
      id: Sections.aboutme,
      sectionTitle: Sections.aboutme,
      detail: [], // this object will store extra user details eg:
    },
    [Sections.experience]: {
      id: Sections.experience,
      sectionTitle: Sections.experience,
      details: [], // this object will store extra user details eg: multiple jobs
    },
    [Sections.project]: {
      id: Sections.project,
      sectionTitle: Sections.project,
      details: [], // this object will store extra user details eg: multiple jobs
    },
    [Sections.education]: {
      id: Sections.education,
      sectionTitle: Sections.education,
      details: [], // this object will store extra user details eg: multiple degrees
    },
    [Sections.achievement]: {
      id: Sections.achievement,
      sectionTitle: Sections.achievement,
      points: [], // this object will store extra user details eg:
    },
  });

  const getFormatedDate = (value) => {
    if(!value) return "";
    const date = new Date(value);
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  };

  const [templateIndex, setTemplateIndex] = useState(0);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log('User' , currentUser)
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const updateTemplateIndex = (newValue) => {
    setTemplateIndex(newValue);
  };

  const setData = (newValue) => {
    setResumeData(newValue);
  };

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        logOut,
        user,
        templateIndex,
        updateTemplateIndex,
        Sections,
        resumeData,
        setData,
        getFormatedDate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
