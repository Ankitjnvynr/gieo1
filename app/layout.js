import "@/node_modules/react-modal-video/css/modal-video.css";
import "../public/assets/css/style.css";
import "swiper/css";

// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { yantramanav } from "@/lib/font";
export const metadata = {
  title: "GIEO Gita Template",
  description: "Official website template for GIEO Gita, promoting spiritual education and values.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${yantramanav.variable}`}>
      <body>{children}</body>
    </html>
  );
}

