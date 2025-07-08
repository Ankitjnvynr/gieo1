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
              {/* Step 1: Registration */}
              <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                <div className="work-process__single">
                  <div className="work-process__count">01</div>
                  <div className="work-process__icon">
                    <MdHowToReg size={40} color="#ffffff" />
                  </div>
                  <p className="work-process__text">
                    Patients visit the Medanta Foundation OPD Centre and register for services through a streamlined and accessible process.
                  </p>
                </div>
              </div>

              {/* Step 2: Consultation */}
              <div className="col-xl-4 col-lg-4 wow" data-wow-delay="200ms">
                <div className="work-process__single">
                  <div className="work-process__count">02</div>
                  <div className="work-process__icon">
                    <FaUserMd size={40} color="#ffffff" />
                  </div>
                  <p className="work-process__text">
                    Experienced doctors conduct medical consultations — general, cardiac, or dental — and advise on further care.
                  </p>
                </div>
              </div>

              {/* Step 3: Diagnostics & Support */}
              <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                <div className="work-process__single">
                  <div className="work-process__count">03</div>
                  <div className="work-process__icon">
                    <FaHospitalUser size={40} color="#ffffff" />
                  </div>
                  <p className="work-process__text">
                    Patients undergo tests like ECG, TMT, ECHO, and PFT, followed by free medicine distribution and telemedicine support if needed.
                  </p>
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
