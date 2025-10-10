"use client";

import React from "react";
import VolunteerForm from "@/components/volunteer/VolunteerForm";
import Layout from "@/components/layout/Layout";

export default function Page() {
  return (
    <Layout headerStyle={3} footerStyle={3}>
      <VolunteerForm />
    </Layout>
  );
}
