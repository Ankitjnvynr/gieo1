import React from "react";
import Layout from "@/components/layout/Layout";
import Info from "@/components/Center/Info";
import AshramSection from "@/components/Center/AshramSection";
import ImageGallery from "@/components/Center/Imagegallary";
import LastSection from "@/components/Center/LastSection";


export default function page() {
  return (
    <Layout headerStyle={3} footerStyle={4}>
      <div style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}>
        <img style={{
          width: "50%",
          margin: "0 auto",
          height: "300px",
          objectFit: "cover",
          backgroundPosition: 'top'
        }} src="/assets/images/Center/mainImg.jpg" alt="" />
      </div>

      <Info />
      <ImageGallery />
      <AshramSection />
      <LastSection />
    </Layout>
  );
}
