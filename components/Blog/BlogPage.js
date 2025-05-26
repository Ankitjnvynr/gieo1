import React from 'react';
import Link from 'next/link';

const BlogPage = ({ blogs }) => {
  return (
    <section className="blog-page">
      <div className="container">
        <div className="row">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`col-xl-4 col-lg-4 wow fadeIn${blog.animationDirection}`}
              data-wow-delay={`${blog.delay}ms`}
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img src={blog.imgSrc} alt={blog.title} />
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <span className="icon-user" /> By {blog.author}
                    </li>
                    <li>
                      <span className="icon-callender" /> {blog.date}
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link href={blog.link}>{blog.title}</Link>
                  </h3>
                  <div className="blog-one__btn-box">
                    <Link href={blog.link} className="blog-one__btn thm-btn-two">
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
  );
};

export default BlogPage;
