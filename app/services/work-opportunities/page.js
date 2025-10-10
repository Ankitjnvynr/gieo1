import React from "react"
import Layout from "@/components/layout/Layout.js"
import Careers from "@/components/Careers/Careers.jsx"


export default function page() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={3} >
                <div className="main">
                    <Careers />
                </div></Layout>



        </>
    )

};