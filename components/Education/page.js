import React from "react"
import Layout from "@/components/layout/Layout.js"
import Education from "./Education"



export default function page() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={4} >
                <div className="main">
                    <Education />
                </div></Layout>



        </>
    )

};