import "./App.css";
import { Routes, Route } from "react-router";
import { Header } from "./component/Header";
import { LandingPage } from "./component/LandingPage";
import { Templates } from "./component/Templates";
import { AuthContextProvider } from "./component/Authentication/AuthContext";
import { Login } from "./component/Login";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header />
        <div className="h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </div>
  );
}

export default App;
