import Layout from "@/components/layout/Layout";
import RoomBooking_Auditorium from "@/components/room-booking-auditorium/Main_page/RoomBooking_Auditorium";

export default function RoomBookingPage() {
  return (
    <Layout headerStyle={3} footerStyle={3}>
      <RoomBooking_Auditorium />
    </Layout>
  );
}
