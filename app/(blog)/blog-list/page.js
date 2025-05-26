import Layout from "@/components/layout/Layout";
import CTASection from '@/components/common/CTASection';
import Search from "@/components/wizard/search";
import Post from "@/components/wizard/post";
import Category from "@/components/wizard/category";
import Tags from "@/components/wizard/tags";
import Link from "next/link";

// Example blog posts data
const blogPosts = [
    {
        id: 1,
        date: "October 19, 2022",
        author: "admin",
        category: "Category",
        title: "Crafting Structures that is a Stand the of Time",
        excerpt: "Roof Service is a category that encompasses a range of services related to roofs These services include roof installation repair maintenance and inspection",
        image: "assets/images/blog/blog-list-1-1.jpg",
        detailLink: "blog-details",
    },
    {
        id: 2,
        date: "October 19, 2022",
        author: "admin",
        category: "Category",
        title: "Roof Service for Quality and Reliability Trust Roof repair",
        excerpt: "Roof Service is a category that encompasses a range of services related to roofs These services include roof installation repair maintenance and inspection",
        image: "assets/images/blog/blog-list-1-2.jpg",
        detailLink: "blog-details",
    },
    {
        id: 3,
        date: "October 19, 2022",
        author: "admin",
        category: "Category",
        title: "Service is a category that encompass a range of services related",
        excerpt: "Roof Service is a category that encompasses a range of services related to roofs These services include roof installation repair maintenance and inspection",
        image: "assets/images/blog/blog-list-1-3.jpg",
        detailLink: "blog-details",
    },
];

export default function Home() {
    return (
        <div>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog List">
                <div>
                    {/* Blog List Start */}
                    <section className="blog-list">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="blog-list__left">
                                        {blogPosts.map(post => (
                                            <div key={post.id} className="blog-list__single">
                                                <div className="blog-list__img-box">
                                                    <div className="blog-list__img">
                                                        <img src={post.image} alt={post.title} />
                                                    </div>
                                                </div>
                                                <div className="blog-list__content">
                                                    <ul className="blog-list__meta list-unstyled">
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-callender" />
                                                            </div>
                                                            <Link href="#">{post.date}</Link>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-user-2" />
                                                            </div>
                                                            <Link href="#">By {post.author}</Link>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-file" />
                                                            </div>
                                                            <Link href="#">{post.category}</Link>
                                                        </li>
                                                    </ul>
                                                    <h3 className="blog-list__title">
                                                        <Link href={post.detailLink}>
                                                            {post.title}
                                                        </Link>
                                                    </h3>
                                                    <p className="blog-list__text">
                                                        {post.excerpt}
                                                    </p>
                                                    <div className="blog-list__btn-box">
                                                        <Link
                                                            href={post.detailLink}
                                                            className="blog-list__btn thm-btn-two"
                                                        >
                                                            Read more
                                                            <span className="icon-dubble-arrow-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="blog-list__pagination">
                                            <ul className="pg-pagination list-unstyled">
                                                <li className="count">
                                                    <Link href="/blog-details">1</Link>
                                                </li>
                                                <li className="count">
                                                    <Link href="/blog-details">2</Link>
                                                </li>
                                                <li className="count">
                                                    <Link href="/blog-details">3</Link>
                                                </li>
                                                <li className="next">
                                                    <Link href="#" aria-label="Next">
                                                        <i className="icon-dubble-arrow-right" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="sidebar">
                                        <Search/>
                                        <Post/>
                                        <Category/>
                                        <Tags/>
                                        {/* Sidebar content */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Blog List End */}
                    
                    {/* CTA Two Start */}
                        <CTASection
                        backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
                        imgSrc="assets/images/resources/cta-two-img-1.png"
                        title="One Shingle at a Time"
                        text="Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings."
                        buttonText="Contact Us"
                        buttonLink="/contact"
                        />
                    {/* CTA Two End */}
                </div>
            </Layout>
        </div>
    );
}
