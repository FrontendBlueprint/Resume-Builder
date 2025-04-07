import React from "react";
import "./index.css";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import CreateResume from "./Pages/CreateResume";
import UpdateResume from "./Pages/UpdateResume";
import { Navigate, Route, Routes } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import SignInPage from "./Pages/SignInPage";

function App() {
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="w-full h-screen flex justify-center items-center text-primary text-5xl">Loading...</div>;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/sign-in" 
          element={isSignedIn ? <Navigate to="/dashboard" /> : <SignInPage />} 
        />
        <Route 
          path="/dashboard" 
          element={isSignedIn ? <Dashboard /> : <Navigate to="/sign-in" />} 
        />
        <Route 
          path="/createresume" 
          element={isSignedIn ? <CreateResume /> : <Navigate to="/sign-in" />} 
        />
        <Route 
          path="/updateResume" 
          element={isSignedIn ? <UpdateResume /> : <Navigate to="/sign-in" />} 
        />
      </Routes>
    </>
  );
}

export default App;