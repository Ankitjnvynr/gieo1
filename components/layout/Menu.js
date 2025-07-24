import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>
        <ul className="main-menu__list">
            <li >
                <Link href="/">Home</Link>
                <ul>
                {/* <li>
                    <Link href="/">Home One</Link>
                </li> */}
                {/* <li>
                    <Link href="/index-2">Home Two</Link>
                </li> */}
                {/* <li>
                    <Link href="/index-3">Home Three</Link>
                </li> */}
                {/* <li>
                    <Link href="/index-4">Home Four</Link>
                </li> */}
                {/* <li className="dropdown">
                    <a href="#">Header Styles</a>
                    <ul>
                    <li>
                        <Link href="/">Header One</Link>
                    </li>
                    <li>
                        <Link href="/index-2">Header Two</Link>
                    </li>
                    <li>
                        <Link href="/index-3">Header Three</Link>
                    </li>
                    <li>
                        <Link href="/index-4">Header Four</Link>
                    </li>
                    </ul>
                </li> */}
                {/* <li className="dropdown">
                    <a href="#">One Page Styles</a>
                    <ul>
                    <li>
                        <Link href="/index-one-page">One Page Styles One</Link>
                    </li>
                    <li>
                        <Link href="/index2-one-page">One Page Styles Two</Link>
                    </li>
                    <li>
                        <Link href="/index3-one-page">One Page Styles Three</Link>
                    </li>
                    <li>
                        <Link href="/index4-one-page">One Page Styles Four</Link>
                    </li>
                    </ul>
                </li> */}
                </ul>
            </li>
            <li>
                <Link href="/">About Us</Link>
            </li>
            <li >
                <a href="#">Pages</a>
                {/* <ul>
                <li>
                    <Link href="/team">Team</Link>
                </li>
                <li>
                    <Link href="/team-details">Team Details</Link>
                </li>
                <li>
                    <Link href="/testimonials">Testimonials</Link>
                </li>
                <li>
                    <Link href="/faq">Faq</Link>
                </li>
                <li>
                    <Link href="/404">404 Error</Link>
                </li>
                </ul> */}
            </li>
            <li >
                <a href="#">Services</a>
                {/* <ul>
                <li>
                    <Link href="/">Services</Link>
                </li>
                <li>
                    <Link href="/peak-performance-roofing">Peak Performance Roofing</Link>
                </li>
                <li>
                    <Link href="/skyline-roofing-solutions">Skyline Roofing Solutions</Link>
                </li>
                <li>
                    <Link href="/sure-guard-roofing-services">
                    Sure Guard Roofing Services
                    </Link>
                </li>
                <li>
                    <Link href="/reliable-roof-repair">Reliable Roof Repair</Link>
                </li>
                <li>
                    <Link href="/top-notch-roofing-restoration">
                    Top Notch Roofing Restoration
                    </Link>
                </li>
                </ul> */}
            </li>
            <li>
                <a href="#">Projects</a>
                {/* <ul>
                <li>
                    <Link href="/project">Projects</Link>
                </li>
                <li>
                    <Link href="/project-details">Project Details</Link>
                </li>
                </ul> */}
            </li>

             <li>
                <a href="#">Festivals</a>
                {/* <ul>
                <li>
                    <Link href="/festivals">Festivals</Link>
                </li>
                <li>
                    <Link href="/festivals-details">Festival Details</Link>
                </li>
                </ul> */}
            </li>

            
            <li >
                <a href="#">Blog</a>
                {/* <ul>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/blog-list">Blog List</Link>
                </li>
                <li>
                    <Link href="/blog-details">Blog Details</Link>
                </li>
                </ul> */}
            </li>
            <li>
                <Link href="/">Contact</Link>
            </li>
        </ul>

        </>
    )
}
