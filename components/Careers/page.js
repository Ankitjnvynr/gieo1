import React from "react"
import Layout from "@/components/layout/Layout.js"
import Careers from "./Center.jsx"

export default function App() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={3} >
                <div className="main">
                    <Careers />
                </div>


            </Layout>



        </>
    )

};