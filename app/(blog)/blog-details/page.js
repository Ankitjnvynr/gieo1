import Layout from "@/components/layout/Layout";
import CTASection from '@/components/common/CTASection';
import Search from "@/components/wizard/search";
import Post from "@/components/wizard/post";
import Category from "@/components/wizard/category";
import Tags from "@/components/wizard/tags";
import Link from "next/link";

// Mock data for demo purposes. Replace with data fetching logic.
const blogData = {
    title: "Trust Roof Service for Quality and Reliability Trust Roof repair",
    date: "October 19, 2022",
    author: "By admin",
    category: "Category",
    content: [
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.'",
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    ],
    client: {
        name: "Sakib Hasan",
        title: "Developer",
        text: "It is a long established fact that a reader will be distracted by the readable content of looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using 'Content here.'"
    },
    images: [
        "/assets/images/blog/blog-details-img-1.jpg",
        "/assets/images/blog/blog-details-img-box-img-1.jpg",
        "/assets/images/blog/blog-details-img-box-img-2.jpg"
    ],
    tags: ["Roof Revive", "Roofing Solutions", "Roofing Services"],
    socialLinks: [
        { href: "#", icon: "icon-facebook-f" },
        { href: "#", icon: "icon-instagram" },
        { href: "#", icon: "icon-twitter" },
        { href: "#", icon: "icon-linkedin-in" }
    ],
    previous: "#",
    next: "#",
    comments: [
        {
            name: "Cameron Williamson",
            date: "April 16, 2024",
            text: "Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol acted Aliquam eros",
            imgSrc: "/assets/images/blog/comment-1-1.jpg"
        }
    ]
};

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog_Details">
                <div>
                    {/* Blog Details Start */}
                    <section className="blog-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="blog-details__left">
                                        <div className="blog-details__img">
                                            <img src={blogData.images[0]} alt="Blog Details" />
                                        </div>
                                        <div className="blog-details__content">
                                            <ul className="blog-details__meta list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-callender" />
                                                    </div>
                                                    <Link href="#">{blogData.date}</Link>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-user-2" />
                                                    </div>
                                                    <Link href="#">{blogData.author}</Link>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-file" />
                                                    </div>
                                                    <Link href="#">{blogData.category}</Link>
                                                </li>
                                            </ul>
                                            <h3 className="blog-details__title-1">{blogData.title}</h3>
                                            {blogData.content.map((text, index) => (
                                                <p key={index} className={`blog-details__text-${index + 1}`}>
                                                    {text}
                                                </p>
                                            ))}
                                            <h3 className="blog-details__title-2">Experience Roof Service Excellence</h3>
                                            <p className="blog-details__text-3">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </p>
                                            <div className="blog-details__client-info">
                                                <div className="blog-details__client-quote">
                                                    <span className="icon-quote-2" />
                                                </div>
                                                <h3 className="blog-details__client-name">{blogData.client.name}</h3>
                                                <p className="blog-details__client-sub-title">{blogData.client.title}</p>
                                                <p className="blog-details__client-text">{blogData.client.text}</p>
                                            </div>
                                            <div className="blog-details__img-box">
                                                <div className="row">
                                                    {blogData.images.slice(1).map((imgSrc, index) => (
                                                        <div key={index} className="col-xl-6">
                                                            <div className="blog-details__img-box-img">
                                                                <img src={imgSrc} alt="Blog Details" />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="blog-details__tag-and-social">
                                                <div className="blog-details__tag">
                                                    <span>Tags:</span>
                                                    {blogData.tags.map((tag, index) => (
                                                        <Link key={index} href="#">{tag}</Link>
                                                    ))}
                                                </div>
                                                <div className="blog-details__social">
                                                    {blogData.socialLinks.map((link, index) => (
                                                        <Link key={index} href={link.href}>
                                                            <span className={link.icon} />
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="blog-details__pagenation-box">
                                                <ul className="list-unstyled blog-details__pagenation">
                                                    <li>
                                                        <div className="icon">
                                                            <Link href={blogData.previous}>
                                                                <span className="icon-arrow-left" />
                                                            </Link>
                                                        </div>
                                                        <p>Previous</p>
                                                    </li>
                                                    <li>
                                                        <p>Next</p>
                                                        <div className="icon">
                                                            <Link href={blogData.next}>
                                                                <span className="icon-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="comment-one">
                                                <h3 className="comment-one__title">{blogData.comments.length} Comment</h3>
                                                {blogData.comments.map((comment, index) => (
                                                    <div key={index} className="comment-one__single">
                                                        <div className="comment-one__image">
                                                            <img src={comment.imgSrc} alt="Commenter" />
                                                        </div>
                                                        <div className="comment-one__content">
                                                            <h3>
                                                                {comment.name}<span>{comment.date}</span>
                                                            </h3>
                                                            <div className="comment-one__social">
                                                                {blogData.socialLinks.map((link, i) => (
                                                                    <Link key={i} href={link.href}>
                                                                        <span className={link.icon} />
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                            <p>{comment.text}</p>
                                                            <div className="comment-one__btn-box">
                                                                <Link
                                                                    href="/blog-details"
                                                                    className="comment-one__btn thm-btn-two"
                                                                >
                                                                    reply
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="comment-form">
                                                <h3 className="comment-form__title">Leave A Comment</h3>
                                                <form
                                                    className="contact-form-validated comment-form__form"
                                                    action="assets/inc/sendemail.php"
                                                    method="post"
                                                    noValidate="novalidate"
                                                >
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="comment-form__input-box">
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    placeholder="Your Name"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="comment-form__input-box">
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    placeholder="Your Email"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="comment-form__input-box">
                                                                <input
                                                                    type="text"
                                                                    name="phone"
                                                                    placeholder="Your Number"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6">
                                                            <div className="comment-form__input-box">
                                                                <div className="select-box">
                                                                <select className="selectmenu wide" defaultValue="Choose a Option">
                                                                    <option>Choose a Option</option>
                                                                    <option>Type Of Service 01</option>
                                                                    <option>Type Of Service 02</option>
                                                                    <option>Type Of Service 03</option>
                                                                    <option>Type Of Service 04</option>
                                                                    <option>Type Of Service 05</option>
                                                                </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <div className="comment-form__input-box text-message-box">
                                                                <textarea
                                                                    name="message"
                                                                    placeholder="Message here.."
                                                                />
                                                            </div>
                                                            <div className="comment-form__btn-box">
                                                                <button
                                                                    type="submit"
                                                                    className="thm-btn-two comment-form__btn"
                                                                >
                                                                    Appointment Now
                                                                    <span className="icon-dubble-arrow-right" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="result" />
                                            </div>
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
                                    {/* Optional Sidebar or Other Content */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Blog Details End */}
                    
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
        </>
    );
}
