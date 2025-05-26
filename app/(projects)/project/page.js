"use client"; // Add this line at the top
import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import CTASection from '@/components/common/CTASection';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Isotope = require('isotope-layout');

      const masonryLayout = document.querySelector('.masonary-layout');
      const postFilter = document.querySelector('.post-filter');

      if (masonryLayout) {
        new Isotope(masonryLayout, {
          layoutMode: 'masonry',
        });
      }

      if (postFilter) {
        postFilter.querySelectorAll('li .filter-text').forEach((filterText) => {
          filterText.addEventListener('click', (event) => {
            event.preventDefault();
            const Self = event.currentTarget;
            const selector = Self.parentElement.getAttribute('data-filter');
            postFilter.querySelectorAll('li').forEach((li) => li.classList.remove('active'));
            Self.parentElement.classList.add('active');

            new Isotope(masonryLayout, {
              filter: selector,
              animationOptions: {
                duration: 500,
                easing: 'linear',
                queue: false,
              },
            });
          });
        });

        // Dynamic filter counter logic
        const activeFilterItem = postFilter.querySelectorAll('li');
        activeFilterItem.forEach((item) => {
          const filterElement = item.getAttribute('data-filter');
          const count = masonryLayout.querySelectorAll(filterElement).length;
          item.querySelector('.filter-text').innerHTML += `<span class="count">${count}</span>`;
        });
      }
    }
  }, []);

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Projects">
        <div>
          {/* Project Page Start */}
          <section className="project-page">
            <div className="container">
              <div className="row masonary-layout">
                {[1, 2, 4, 3].map((item, index) => (
                  <div className="col-xl-6" key={index}>
                    <div className="project-page__single">
                      <div className="project-page__img">
                        {/* Use standard <img> */}
                        <img
                          src={`/assets/images/project/project-page-1-${item}.jpg`}
                          alt={`Project Image ${item}`}
                        />
                        <div className="project-page__icon">
                          <a className="img-popup" href={`/assets/images/project/project-page-1-${item}.jpg`}>
                            <span className="fas fa-plus"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Project Page End */}

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
