
"use client";

import React from "react";

import Layout from "@/components/layout/Layout";
import VolunteerBanner from "@/components/volunteer/VolunteerBanner";
import WhyVolunteer from "@/components/volunteer/WhyVolunteer";
import VolunteerOptions from "@/components/volunteer/VolunteerOptions";
import VolunteerEvents from "@/components/volunteer/VolunteerEvents";
import VolunteerFAQ from "@/components/volunteer/VolunteerFAQ";

import { useRouter } from "next/navigation";
 function Page() {
  const router = useRouter();

  const handleVolunteerClick = () => {
    router.push("/volunteer/volunteerform");
  };

  return (
    <Layout headerStyle={3} footerStyle={3}>
    <VolunteerBanner onJoinNowClick={handleVolunteerClick} />
    <WhyVolunteer  />
    <VolunteerOptions onJoinNowClick={handleVolunteerClick}/>
    <VolunteerEvents onJoinNowClick={handleVolunteerClick}/>
    <VolunteerFAQ/>
   
    </Layout>
  );
}

export default Page;
