import Layout from "@/components/layout/Layout";
import CTASection from "@/components/common/CTASection";
import React from "react";
import EbookCard from "@/components/download/EbookCard";

// ebooksData.js (can be separated into a file if needed)
export const ebooksData = [
  {
    imgSrc: "https://m.media-amazon.com/images/I/81QP0fx+R-L._SY425_.jpg",
    title: "Bhagavad Gita for Life",
    author: "Swami Gyananand Ji Maharaj",
    description:
      "An inspiring commentary on the timeless wisdom of the Bhagavad Gita, guiding modern life with ancient truths.",
    downloadLink: "/downloads/ebook-1.pdf",
    animationDirection: "Left",
    delay: 100,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/81QP0fx+R-L._SY425_.jpg",
    title: "Essence of Karma Yoga",
    author: "Swami Gyananand Ji Maharaj",
    description:
      "Understand the path of selfless action and how Karma Yoga transforms daily living into spiritual practice.",
    downloadLink: "/downloads/ebook-2.pdf",
    animationDirection: "Right",
    delay: 200,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/81QP0fx+R-L._SY425_.jpg",
    title: "Meditation and Mindfulness",
    author: "Swami Gyananand Ji Maharaj",
    description:
      "A practical guide to cultivating inner peace and balance through meditation, based on Gita wisdom.",
    downloadLink: "/downloads/ebook-3.pdf",
    animationDirection: "Left",
    delay: 300,
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/81QP0fx+R-L._SY425_.jpg",
    title: "Leadership Through the Gita",
    author: "Swami Gyananand Ji Maharaj",
    description:
      "How the teachings of the Bhagavad Gita can inspire ethical leadership and decision-making in modern times.",
    downloadLink: "/downloads/ebook-4.pdf",
    animationDirection: "Right",
    delay: 400,
  },
];

const EbooksPage = () => {
  return (
    <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="E-Books Library">
      {/* E-Books Section Start */}
      <section className="ebook-one">
        <div className="container">
          <div className="row mt-5">
            {ebooksData.map((book, index) => (
              <EbookCard key={index} data={book} />
            ))}
          </div>
        </div>
      </section>
      {/* E-Books Section End */}

      
    </Layout>
  );
};

export default EbooksPage;
