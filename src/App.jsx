import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobLisitngs from "./components/JobLisitngs";
import ViewAllJobs from "./components/ViewAllJobs";

function App() {
  return (
    <>
      <Navbar />
      <Hero  />
      <HomeCards />
      <JobLisitngs />
      <ViewAllJobs />
    </>
  );
}

export default App;
