"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import MainPage from "@/components/aims-objectives/mainPage";

export default function Page() {
  return (
    <Layout headerStyle={3} footerStyle={4}>
      <MainPage />
    </Layout>
  );
} 