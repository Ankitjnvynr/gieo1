import React from "react"
import Layout from "@/components/layout/Layout.js"
import Careers from "@/components/carrers/Careers.jsx"


export default function page() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={4} >
                <div className="main">
                    <Careers />
                </div></Layout>



        </>
    )

};