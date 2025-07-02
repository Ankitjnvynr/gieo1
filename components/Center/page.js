import React from "react"
import Layout from "@/components/layout/Layout.js"
import Center from "./Center.jsx"

export default function App() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={4} >
                <div className="main">
                    <Center />
                </div>
             </Layout>



        </>
    )

};