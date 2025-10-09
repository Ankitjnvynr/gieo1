import Link from 'next/link';

// Example data (replace with actual data fetching logic)
const examplePosts = [
  {
    id: '1',
    slug: 'gieogita-event-success-tips',
    image: '/assets/images/blog/blog-3-1.jpg',
    title: 'Top Tips for a Successful Event with GIEO Gita',
    author: 'admin',
    date: '12 April 2024',
    excerpt: 'Learn how Gieogita transforms ordinary events into extraordinary experiences with expert planning.',
  },
  {
    id: '2',
    slug: 'why-choose-gieogita-events',
    image: '/assets/images/blog/blog-3-2.jpg',
    title: 'Why Choose Gieogita for Your Event Management Needs',
    author: 'admin',
    date: '18 April 2024',
    excerpt: 'Discover what sets Gieogita apart in delivering seamless and innovative event solutions.',
  },
  {
    id: '3',
    slug: 'gieogita-creative-event-designs',
    image: '/assets/images/blog/blog-3-3.jpg',
    title: 'Creative Event Designs That Wow – Powered by Gieogita',
    author: 'admin',
    date: '25 April 2024',
    excerpt: 'From concept to execution, see how Gieogita brings visionary event designs to life.',
  },
];

export default function BlogThree() {
  return (
  <>
    {/* Blog Four Start */}
    <section className="blog-four">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Gieogita Blog & News</span>
          </div>
          <h2 className="section-title__title">
            Inspiring <span>Events & Creativity</span>
            <br /> with GIEO Gita’s Expertise
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
