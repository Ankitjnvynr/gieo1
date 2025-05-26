'use client'
import Link from 'next/link'
import CountUp from 'react-countup';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  pagination: {
    el: '#main-slider-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '#main-slider__swiper-button-next',
    prevEl: '#main-slider__swiper-button-prev'
  },
  autoplay: {
    delay: 8000
  }
}

export default function Banner() {
  return (
    <section className="main-slider" id="home">
      <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
        <SwiperSlide className="swiper-slide">
          <div
            className="main-slider__bg"
            style={{ backgroundImage: 'url(/assets/images/backgrounds/slider-1-1.jpg)' }}
          />
          <div className="main-slider__shape-1" />
          <div
            className="main-slider__shape-2"
            style={{ backgroundImage: 'url(/assets/images/shapes/main-slider-shape-2.png)' }}
          />
          <div className="main-slider__img">
            <img src="/assets/images/resources/main-slider-img-1-1.png" alt="" />
          </div>
          <div className="container">
            <div className="main-slider__content">
              <div className="main-slider__content-shape-1">
                <img src="/assets/images/shapes/main-slider-content-shape-1.png" alt="" />
              </div>
              <h2 className="main-slider__title">
                Crafting <span>roofs</span> <br /> that withstand <br /> the test time
              </h2>
              <ul className="list-unstyled main-slider__counter">
                <li>
                  <div className="main-slider__counter-single">
                    <div className="main-slider__count count-box">
                      <h3 className="count-text">
                        <CountUp end={30} duration={1.5} />
                      </h3>
                      <span>k</span>
                      <span>+</span>
                    </div>
                    <p className="main-slider__count-text">Project Completed</p>
                  </div>
                </li>
                <li>
                  <div className="main-slider__counter-single">
                    <div className="main-slider__count count-box">
                      <h3 className="count-text">
                        <CountUp end={2} duration={1.5} />
                      </h3>
                      <span>k</span>
                      <span>+</span>
                    </div>
                    <p className="main-slider__count-text">Our Team Member</p>
                  </div>
                </li>
              </ul>
              <div className="main-slider__btn-and-call-box">
                <div className="main-slider__btn-box">
                  <Link href="/services" className="thm-btn-two main-slider__btn">
                    get service <span className="icon-dubble-arrow-right" />
                  </Link>
                </div>
                <div className="main-slider__call">
                  <div className="main-slider__call-icon">
                    <span className="icon-call" />
                  </div>
                  <div className="main-slider__call-number">
                    <p>Need help?</p>
                    <h5>
                      <Link href="tel:8085550111">(808) 555-0111</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div
            className="main-slider__bg"
            style={{ backgroundImage: 'url(/assets/images/backgrounds/slider-1-2.jpg)' }}
          />
          <div className="main-slider__shape-1" />
          <div
            className="main-slider__shape-2"
            style={{ backgroundImage: 'url(/assets/images/shapes/main-slider-shape-2.png)' }}
          />
          <div className="main-slider__img">
            <img src="/assets/images/resources/main-slider-img-1-2.png" alt="" />
          </div>
          <div className="container">
            <div className="main-slider__content">
              <div className="main-slider__content-shape-1">
                <img src="/assets/images/shapes/main-slider-content-shape-1.png" alt="" />
              </div>
              <h2 className="main-slider__title">
                Crafting <span>roofs</span> <br /> that withstand <br /> the test time
              </h2>
              <ul className="list-unstyled main-slider__counter">
                <li>
                  <div className="main-slider__counter-single">
                    <div className="main-slider__count count-box">
                      <h3 className="count-text">
                        <CountUp end={30} duration={1.5} />
                      </h3>
                      <span>k</span>
                      <span>+</span>
                    </div>
                    <p className="main-slider__count-text">Project Completed</p>
                  </div>
                </li>
                <li>
                  <div className="main-slider__counter-single">
                    <div className="main-slider__count count-box">
                      <h3 className="count-text">
                        <CountUp end={2} duration={1.5} />
                      </h3>
                      <span>k</span>
                      <span>+</span>
                    </div>
                    <p className="main-slider__count-text">Our Team Member</p>
                  </div>
                </li>
              </ul>
              <div className="main-slider__btn-and-call-box">
                <div className="main-slider__btn-box">
                  <Link href="/services" className="thm-btn-two main-slider__btn">
                    get service <span className="icon-dubble-arrow-right" />
                  </Link>
                </div>
                <div className="main-slider__call">
                  <div className="main-slider__call-icon">
                    <span className="icon-call" />
                  </div>
                  <div className="main-slider__call-number">
                    <p>Need help?</p>
                    <h5>
                      <Link href="tel:8085550111">(808) 555-0111</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div
            className="main-slider__bg"
            style={{ backgroundImage: 'url(/assets/images/backgrounds/slider-1-3.jpg)' }}
          />
          <div className="main-slider__shape-1" />
          <div
            className="main-slider__shape-2"
            style={{ backgroundImage: 'url(/assets/images/shapes/main-slider-shape-2.png)' }}
          />
          <div className="main-slider__img">
            <img src="/assets/images/resources/main-slider-img-1-3.png" alt="" />
          </div>
          <div className="container">
            <div className="main-slider__content">
              <div className="main-slider__content-shape-1">
                <img src="/assets/images/shapes/main-slider-content-shape-1.png" alt="" />
              </div>
              <h2 className="main-slider__title">
                Crafting <span>roofs</span> <br /> that withstand <br /> the test time
              </h2>
              <ul className="list-unstyled main-slider__counter">
                <li>
                  <div className="main-slider__counter-single">
                    <div className="main-slider__count count-box">
                      <h3 className="count-text">
                        <CountUp end={30} duration={1.5} />
                      </h3>
                      <span>k</span>
                      <span>+</span>
                    </div>
                    <p className="main-slider__count-text">Project Completed</p>
                  </div>
                </li>
                <li>
                  <div className="main-slider__counter-single">
                    <div className="main-slider__count count-box">
                      <h3 className="count-text">
                        <CountUp end={2} duration={1.5} />
                      </h3>
                      <span>k</span>
                      <span>+</span>
                    </div>
                    <p className="main-slider__count-text">Our Team Member</p>
                  </div>
                </li>
              </ul>
              <div className="main-slider__btn-and-call-box">
                <div className="main-slider__btn-box">
                  <Link href="/services" className="thm-btn-two main-slider__btn">
                    get service <span className="icon-dubble-arrow-right" />
                  </Link>
                </div>
                <div className="main-slider__call">
                  <div className="main-slider__call-icon">
                    <span className="icon-call" />
                  </div>
                  <div className="main-slider__call-number">
                    <p>Need help?</p>
                    <h5>
                      <Link href="tel:8085550111">(808) 555-0111</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div id="main-slider-pagination" className="swiper-pagination" />
    </section>
  )
}
