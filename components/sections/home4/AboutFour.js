import Link from 'next/link';
import { FaChild } from 'react-icons/fa';
import { GiCow } from 'react-icons/gi';

export default function AboutFour() {
  return (
    <>
      {/* About Four Start */}
      <section className="about-four">
        <div
          className="about-four__bg"
          style={{ backgroundImage: 'url(assets/images/backgrounds/1.jpg)' }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-10">
              <div className="about-four__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">About Us</span>
                  </div>
                  <h2 className="section-title__title">
                    Elevating Lives Through Gita Wisdom
                  </h2>
                </div>

                <p className="about-four__text">
                  GIEO Gita is a spiritual mission dedicated to spreading the timeless wisdom of the Bhagavad Gita. Our aim is to cultivate values,
                  inspire transformation, and serve society with love, devotion, and selfless service.
                </p>

                <ul className="about-four__points-box list-unstyled">
                  <li>
                    <div className="icon">
                      <FaChild size={32} color="#ff7f47" />
                    </div>
                    <div className="content">
                      <h3>Bal Sanskar</h3>
                      <p>
                        Nurturing young minds through cultural education, Vedic stories, and moral values to create a strong foundation for life.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <GiCow size={32} color="#ff7f47" />
                    </div>
                    <div className="content">
                      <h3>Gaushala Seva</h3>
                      <p>
                        Serving and protecting cows as a sacred duty, fostering compassion and sustainability within our communities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Four End */}
    </>
  );
}
