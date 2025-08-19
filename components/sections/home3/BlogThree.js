import Link from 'next/link';

// Example data (replace with actual data fetching logic)
const examplePosts = [
  {
    id: '1',
    image: '/assets/images/blog/blog-3-1.jpg',
    title: 'Trust the experts for all your roof service needs',
    author: 'admin',
    date: '23 December 2023',
    excerpt: 'Roof service involves the maintenance and repair of roofs commercial',
  },
  {
    id: '2',
    image: '/assets/images/blog/blog-3-2.jpg',
    title: 'Enhance the functionality of your our service',
    author: 'admin',
    date: '23 December 2023',
    excerpt: 'Roof service involves the maintenance and repair of roofs commercial',
  },
  {
    id: '3',
    image: '/assets/images/blog/blog-3-3.jpg',
    title: 'Functionality of your roof with our service',
    author: 'admin',
    date: '23 December 2023',
    excerpt: 'Roof service involves the maintenance and repair of roofs commercial',
  },
];

export default function BlogThree() {
  return (
    <>
      {/* Blog Three Start */}
      <section className="blog-three">
        <div className="container">
          <div className="blog-three__top">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">blog & News</span>
              </div>
              <h2 className="section-title__title">
                Quality roofing <span>solutions</span><br /> every time
              </h2>
            </div>
            <div className="blog-three__btn-box">
              <Link href="/blog" className="blog-three__btn thm-btn-two">
                View All Post<span className="icon-dubble-arrow-right"></span>
              </Link>
            </div>
          </div>
          <div className="row">
            {examplePosts.map((post, index) => (
              <div
                key={post.id || index}
                className={`col-xl-4 col-lg-4 wow ${index % 3 === 0 ? 'fadeInLeft' : index % 3 === 1 ? 'fadeInUp' : 'fadeInRight'}`}
                data-wow-delay={`${(index + 1) * 100}ms`}
              >
                <div className="blog-three__single">
                  <div className="blog-three__img-box">
                    <div className="blog-three__img">
                      {/* Replacing Next.js Image with standard HTML img tag */}
                      <img src={post.image} alt={post.title} />
                    </div>
                  </div>
                  <div className="blog-three__content">
                    <ul className="blog-three__meta list-unstyled">
                      <li>
                        <span className="icon-user"></span>{post.author}
                      </li>
                      <li>
                        <span className="icon-callender"></span>{post.date}
                      </li>
                    </ul>
                    <h3 className="blog-three__title">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="blog-three__text">{post.excerpt}</p>
                  </div>
                  <div className="blog-three__btn-box-two">
                    <Link href={`/blog/${post.id}`} className="blog-three__btn-two thm-btn-two">
                      Read more<span className="icon-dubble-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Three End */}
    </>
  );
}
