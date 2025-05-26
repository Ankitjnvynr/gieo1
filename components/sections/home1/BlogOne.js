import Link from "next/link";

// Define the blog posts data outside of the component
const blogPosts = [
  {
    id: 1,
    author: "admin",
    date: "23 December 2023",
    title: "Trust the experts for all your roof service needs",
    link: "/blog-details",
    image: "/assets/images/blog/blog-1-1.jpg" // Note the leading slash for public assets
  },
  {
    id: 2,
    author: "admin",
    date: "23 December 2023",
    title: "Enhance the beauty and functionality of your roof",
    link: "/blog-details",
    image: "/assets/images/blog/blog-1-2.jpg"
  },
  {
    id: 3,
    author: "admin",
    date: "23 December 2023",
    title: "Functionality of your roof with our service",
    link: "/blog-details",
    image: "/assets/images/blog/blog-1-3.jpg"
  }
];

export default function BlogOne() {
  return (
    <>
      {/* Blog One Start */}
      <section className="blog-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">blog &amp; News</span>
            </div>
            <h2 className="section-title__title">
              Quality roofing <span>solutions</span> <br />
              every time
            </h2>
          </div>
          <div className="row">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`col-xl-4 col-lg-4 wow fadeIn${index % 3 === 0 ? 'Right' : index % 2 === 0 ? 'Up' : 'Left'}`}
                data-wow-delay={`${index * 100}ms`}
              >
                <div className="blog-one__single">
                  <div className="blog-one__img-box">
                    <div className="blog-one__img">
                      <img src={post.image} alt={post.title} />
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled">
                      <li>
                        <span className="icon-user" />
                        By {post.author}
                      </li>
                      <li>
                        <span className="icon-callender" />
                        {post.date}
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <Link href={post.link}>
                        {post.title}
                      </Link>
                    </h3>
                    <div className="blog-one__btn-box">
                      <Link href={post.link} className="blog-one__btn thm-btn-two">
                        Read more
                        <span className="icon-dubble-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog One End */}
    </>
  );
}
