import Link from 'next/link';

// Medanta-specific blog content based on actual initiatives
const examplePosts = [
  {
    id: '1',
    image: '/assets/images/blog/blog-3-1.jpg',
    title: 'Inauguration of Medanta OPD Centre at Kurukshetra',
    author: 'Medanta Foundation',
    date: '05 Sept 2024',
    excerpt: 'The Medanta OPD Centre, launched in collaboration with Gieo Gita and RJ Foundation, marks a new era of accessible and affordable healthcare for underserved communities.',
  },
  {
    id: '2',
    image: '/assets/images/blog/blog-3-2.jpg',
    title: 'Telemedicine: Bridging Distance with Care',
    author: 'Dr. Neha Kapoor',
    date: '12 June 2024',
    excerpt: 'Our telemedicine initiative enables virtual consultations for elderly and rural patients, ensuring continuity of care from Medanta experts through secure digital platforms.',
  },
  {
    id: '3',
    image: '/assets/images/blog/blog-3-3.jpg',
    title: 'Delivering Free Dental and Diagnostic Services',
    author: 'Community Health Team',
    date: '28 May 2024',
    excerpt: 'Routine check-ups, X-rays, ECG, and PFT are now available at the Medanta OPD Centre, supporting early diagnosis and preventive health management.',
  },
];

export default function BlogThree() {
  return (
    <>
      {/* Blog Three Start */}
      <section className="blog-three" id="blog">
        <div className="container">
          <div className="blog-three__top">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">News & Updates</span>
              </div>
              <h2 className="section-title__title">
                Medanta Foundation <span>In Action</span><br /> Stories that Inspire
              </h2>
            </div>
            <div className="blog-three__btn-box">
              <Link href="/blog" className="blog-three__btn thm-btn-two">
                View All Posts<span className="icon-dubble-arrow-right"></span>
              </Link>
            </div>
          </div>
          <div className="row">
            {examplePosts.map((post, index) => (
              <div
                key={post.id || index}
                className={`col-xl-4 col-lg-4 wow ${
                  index % 3 === 0 ? 'fadeInLeft' : index % 3 === 1 ? 'fadeInUp' : 'fadeInRight'
                }`}
                data-wow-delay={`${(index + 1) * 100}ms`}
              >
                <div className="blog-three__single">
                  <div className="blog-three__img-box">
                    <div className="blog-three__img">
                      <img src={post.image} alt={post.title} />
                    </div>
                  </div>
                  <div className="blog-three__content">
                    <ul className="blog-three__meta list-unstyled">
                      <li>
                        <span className="icon-user"></span> {post.author}
                      </li>
                      <li>
                        <span className="icon-callender"></span> {post.date}
                      </li>
                    </ul>
                    <h3 className="blog-three__title">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
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
