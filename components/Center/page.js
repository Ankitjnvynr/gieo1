import React from "react";
import Layout from "@/components/layout/Layout";
import Center from "./Center";

export default function App() {
    return (
        <Layout headerStyle={3} footerStyle={3}>
            <div className="main">
                <Center />
                
            </div>
        </Layout>
    );
}
