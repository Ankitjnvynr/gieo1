"use client";
import Image from "next/image";
import "./RoomBooking_Auditorium.css";
import AuditoriumDetails from "../Auditorium/AuditoriumDetails";
import BookingSection from "../Auditorium/BookingSection";
import Reviews from "../ReviewsFolder/Reviews";
import Location from "../Location/Location";

export default function RoomBooking_Auditorium() {
  return (
    <div className="rba-wrapper">
      {/* <NavBar /> */}
      <header className="rba-hero">
        <Image
          src="/assets/images/backgrounds/bgrba2.jpg"
          alt="Gita Museum"
          fill
          className="hero-bg"
          priority
        />
        <h1 className="rba-hero-text">
          GIEO GITA <br /> Auditorium & Room Stay<br/><div style={{fontSize:"20px", paddingTop:"15px"}}>ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। <br/>सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥</div>
        </h1>
      </header>

      <AuditoriumDetails />
      <BookingSection />
      <Reviews />
      <Location />
      {/* <Footer /> */}
    </div>
  );
}
