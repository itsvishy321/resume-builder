import "./App.css";
import { Routes, Route } from "react-router";
import { Header } from "./component/Header";
import { LandingPage } from "./component/LandingPage";
import { Templates } from "./component/Templates";
import { AuthContextProvider } from "./component/Authentication/AuthContext";
import { Login } from "./component/Login";
import { Footer } from "./component/Footer";
import { ResumeDashboard } from "./component/Resume/ResumeDashboard";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden">
      <AuthContextProvider>
        <Header />
        <div className="mb-auto">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resume-dashboard" element={<ResumeDashboard />} />
          </Routes>
        </div>
        <Footer/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
