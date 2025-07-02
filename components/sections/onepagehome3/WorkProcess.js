'use client';
import Link from 'next/link';
import { MdHowToReg } from 'react-icons/md';
import { FaUserMd, FaHospitalUser } from 'react-icons/fa';

export default function WorkProcess() {
  return (
    <>
      {/* Work Process Start */}
      <section className="work-process">
        <div className="work-process__inner">
          <div className="container">
            <div className="row">
              {/* Step 1: Patient Registration */}
              <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                <div className="work-process__single">
                  <div className="work-process__count">01</div>
                  <div className="work-process__icon">
                    <MdHowToReg size={40} color="#ffff" />
                  </div>
                  <p className="work-process__text">
                    Patients arrive at Medanta Foundation camps or partner centers and complete a quick, seamless registration process.
                  </p>
                  {/* <div className="work-process__btn-box">
                    <Link href="/about" className="work-process__btn thm-btn-two">
                      Read more<span className="icon-dubble-arrow-right"></span>
                    </Link>
                  </div> */}
                </div>
              </div>

              {/* Step 2: Medical Consultation */}
              <div className="col-xl-4 col-lg-4 wow " data-wow-delay="200ms">
                <div className="work-process__single">
                  <div className="work-process__count">02</div>
                  <div className="work-process__icon">
                    <FaUserMd size={40} color="#ffff" />
                  </div>
                  <p className="work-process__text">
                    Skilled doctors perform initial diagnosis, check vitals, and recommend treatments or further investigations if needed.
                  </p>
                  {/* <div className="work-process__btn-box">
                    <Link href="/about" className="work-process__btn thm-btn-two">
                      Read more<span className="icon-dubble-arrow-right"></span>
                    </Link>
                  </div> */}
                </div>
              </div>

              {/* Step 3: Diagnosis & Treatment */}
              <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                <div className="work-process__single">
                  <div className="work-process__count">03</div>
                  <div className="work-process__icon">
                    <FaHospitalUser size={40} color="#ffff" />
                  </div>
                  <p className="work-process__text">
                    Medanta provides free diagnostics, medicines, and surgeries for eligible patients, ensuring holistic care and follow-up.
                  </p>
                  {/* <div className="work-process__btn-box">
                    <Link href="/about" className="work-process__btn thm-btn-two">
                      Read more<span className="icon-dubble-arrow-right"></span>
                    </Link>
                  </div> */}
                </div>
              </div>
              {/* Step End */}
            </div>
          </div>
        </div>
      </section>
      {/* Work Process End */}
    </>
  );
}
