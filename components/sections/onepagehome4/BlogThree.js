import Link from 'next/link';

// Example data (replace with actual data fetching logic)
const examplePosts = [
  {
    id: '1',
    slug: 'trust-experts-roof-service',
    image: '/assets/images/blog/blog-3-1.jpg',
    title: 'Trust the experts for all your roof service needs',
    author: 'admin',
    date: '23 December 2023',
    excerpt: 'Roof service involves the maintenance and repair of roofs commercial',
  },
  {
    id: '2',
    slug: 'enhance-functionality-roof-service',
    image: '/assets/images/blog/blog-3-2.jpg',
    title: 'Enhance the functionality of your our service',
    author: 'admin',
    date: '23 December 2023',
    excerpt: 'Roof service involves the maintenance and repair of roofs commercial',
  },
  {
    id: '3',
    slug: 'functionality-roof-service',
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
      {/* Blog Four Start */}
      <section className="blog-four" id="blog">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">blog & news</span>
            </div>
            <h2 className="section-title__title">
              Peak <span>Performance Roofing</span>
              <br /> the Shield Roofing
            </h2>
          </div>
          <div className="row">
            {examplePosts.map((post) => (
              <div
                key={post.id}
                className={`col-xl-4 col-lg-4 wow fadeIn${post.id % 3 === 0 ? 'Right' : post.id % 2 === 0 ? 'Up' : 'Left'}`}
                data-wow-delay={`${post.id * 100}ms`}
              >
                <div className="blog-four__single">
                  <div className="blog-four__img-box">
                    <div className="blog-four__img">
                      <img src={post.image} alt={post.title} />
                    </div>
                  </div>
                  <div className="blog-four__content">
                    <ul className="blog-four__meta list-unstyled">
                      <li>
                        <span className="icon-user"></span> By {post.author}
                      </li>
                      <li>
                        <span className="icon-callender"></span> {post.date}
                      </li>
                    </ul>
                    <h3 className="blog-four__title">
                      <Link href={`/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <div className="blog-four__btn-box">
                      <Link href={`/${post.slug}`} className="blog-four__btn">
                        Read more
                        <span className="icon-dubble-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Four End */}
    </>
  );
}
