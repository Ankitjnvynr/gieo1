import React from "react";
import FestivalHeading from "./FestivalHeading";
import FestivalPicker from "./FestivalPicker";
import FestivalCards from "./FestivalCards";
// import GieoGitaFooter from "./GieoGitaFooter";
import Layout from "@/components/layout/Layout";
import "./Festival.css";

function FestivalPage() {
  return (
    <Layout headerStyle={3} footerStyle={3}>
    <div className="festival-container">
      <FestivalHeading />
      <FestivalPicker />
      <FestivalCards />
      {/* <GieoGitaFooter /> */}
    </div>
     </Layout>
  );
}

export default FestivalPage;