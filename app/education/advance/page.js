
import React from "react"
import Layout from "@/components/layout/Layout.js"
import "@/components/Education/advance.css"

export default function page() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={4} >
                <div className="text-image-container">

                    <div className="image-container">
                        <img
                            src="/assets/images/education/bal.jpg "
                            alt="Company office"
                            className="responsive-image"
                        />
                    </div>
                    <div className="text-content">
                        <h2>Bal Sanskar Program</h2>
                        <p>
                            🌺 "The most important need of today is that our future generations become cultured and rooted in our traditions and scriptures."
                            With this vision, under the divine guidance of Pujya Gurudev, Gita Manishi Swami Shri Gyananand Ji Maharaj, GIEO Gita has launched a special initiative — the "Bal Sanskaar Yojana".

                            Under this initiative, weekly one-hour classes are planned for children aged 5 to 15 years in various neighborhoods, sectors, streets, and localities of every town. In many towns, these classes have already started from the last Sunday of May.

                            💫 Women’s groups are playing a vital role in this campaign.
                            🌻 Therefore, a special appeal is made to the conveners, presidents, and office bearers of all other committees to coordinate with their local women’s groups and help initiate this campaign in as many areas of their town as possible. Let us contribute to this noble mission of instilling values in our children and fulfill our duty towards our town, society, and nation.
                        </p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                </div>








            </Layout>



        </>
    )

};