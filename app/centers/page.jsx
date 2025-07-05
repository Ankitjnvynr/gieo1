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
        backgroundColor:'#a59069',
        justifyContent:'center'
      }}>
        <img style={{
          width: "50%",
          margin: "0 auto",
          height: "300px",
          objectFit: "cover",
          mixBlendMode: "multiply",
        }} src="/assets/images/Center/mainImg.jpg" alt="" />

        <h2
        style={{position:"absolute",color:'white',}}
        >Gita Gyan Sansthanam - All Centers</h2>

      </div>

      <Info />
      <ImageGallery />
      <AshramSection />
      <LastSection />
    </Layout>
  );
}
