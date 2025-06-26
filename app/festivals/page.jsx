import React from "react";
import FestivalHeading from "./FestivalHeading";
import FestivalPicker from "./FestivalPicker";
import FestivalCards from "./FestivalCards";
// import GieoGitaFooter from "./GieoGitaFooter";
import Layout from "@/components/layout/Layout";
import "./App.css";

function App() {
  return (
    <Layout headerStyle={3} footerStyle={4}>
    <div className="festival-container">
      <FestivalHeading />
      <FestivalPicker />
      <FestivalCards />
      {/* <GieoGitaFooter /> */}
    </div>
     </Layout>
  );
}

export default App;