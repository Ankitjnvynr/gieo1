import Gallery from "@/components/gallery/Gallery";
import Layout from "@/components/layout/Layout";
import React from "react";

const page = () => {
  const galleryItems = [
    // --- Original Items (11) ---
    {
      imgSrc:
        "https://images.unsplash.com/photo-1753001662072-8ad5f40f34fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Meditation at Sunrise",
      description:
        "A serene moment of meditation during sunrise, symbolizing inner peace and spiritual awakening.",
      link: "/gallery/meditation-sunrise",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1597131267491-b28fc433ea3c?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Buddhist Monk in Contemplation",
      description:
        "A Buddhist monk in deep contemplation, reflecting spiritual tranquility.",
      link: "/gallery/monk-contemplation",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/105019/pexels-photo-105019.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Sacred Scriptures",
      description:
        "A close-up of sacred scriptures, representing spiritual knowledge and devotion.",
      link: "/gallery/sacred-scriptures",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1634698813343-e2b78707c06b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Candlelit Meditation",
      description:
        "A meditative setup with candles, evoking a peaceful spiritual ambiance.",
      link: "/gallery/candlelit-meditation",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1706152313145-8cab24344743?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Yoga Practice in Nature",
      description:
        "A person practicing yoga in nature, illustrating the harmony between body and spirit.",
      link: "/gallery/yoga-nature",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1753001662072-8ad5f40f34fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Meditation at Sunrise",
      description:
        "A serene moment of meditation during sunrise, symbolizing inner peace and spiritual awakening.",
      link: "/gallery/meditation-sunrise",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1597131267491-b28fc433ea3c?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Buddhist Monk in Contemplation",
      description:
        "A Buddhist monk in deep contemplation, reflecting spiritual tranquility.",
      link: "/gallery/monk-contemplation",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/105019/pexels-photo-105019.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Sacred Scriptures",
      description:
        "A close-up of sacred scriptures, representing spiritual knowledge and devotion.",
      link: "/gallery/sacred-scriptures",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1634698813343-e2b78707c06b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Candlelit Meditation",
      description:
        "A meditative setup with candles, evoking a peaceful spiritual ambiance.",
      link: "/gallery/candlelit-meditation",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1706152313145-8cab24344743?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Yoga Practice in Nature",
      description:
        "A person practicing yoga in nature, illustrating the harmony between body and spirit.",
      link: "/gallery/yoga-nature",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1706152313145-8cab24344743?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Another Yoga Practice in Nature",
      description:
        "Another person practicing yoga in nature, illustrating the harmony between body and spirit.",
      link: "/gallery/yoga-nature-2",
    },

    // --- New Unsplash Spiritual Images (60) ---
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_0",
      title: "Spiritual Scene 12",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-12",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_1",
      title: "Spiritual Scene 13",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-13",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_2",
      title: "Spiritual Scene 14",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-14",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_3",
      title: "Spiritual Scene 15",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-15",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_4",
      title: "Spiritual Scene 16",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-16",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_5",
      title: "Spiritual Scene 17",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-17",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_6",
      title: "Spiritual Scene 18",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-18",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_7",
      title: "Spiritual Scene 19",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-19",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_8",
      title: "Spiritual Scene 20",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-20",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_9",
      title: "Spiritual Scene 21",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-21",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_10",
      title: "Spiritual Scene 22",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-22",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_11",
      title: "Spiritual Scene 23",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-23",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_12",
      title: "Spiritual Scene 24",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-24",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_13",
      title: "Spiritual Scene 25",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-25",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_14",
      title: "Spiritual Scene 26",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-26",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_15",
      title: "Spiritual Scene 27",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-27",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_16",
      title: "Spiritual Scene 28",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-28",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_17",
      title: "Spiritual Scene 29",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-29",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_18",
      title: "Spiritual Scene 30",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-30",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_19",
      title: "Spiritual Scene 31",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-31",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_20",
      title: "Spiritual Scene 32",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-32",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_21",
      title: "Spiritual Scene 33",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-33",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_22",
      title: "Spiritual Scene 34",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-34",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_23",
      title: "Spiritual Scene 35",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-35",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_24",
      title: "Spiritual Scene 36",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-36",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_25",
      title: "Spiritual Scene 37",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-37",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_26",
      title: "Spiritual Scene 38",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-38",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_27",
      title: "Spiritual Scene 39",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-39",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_28",
      title: "Spiritual Scene 40",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-40",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_29",
      title: "Spiritual Scene 41",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-41",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_30",
      title: "Spiritual Scene 42",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-42",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_31",
      title: "Spiritual Scene 43",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-43",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_32",
      title: "Spiritual Scene 44",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-44",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_33",
      title: "Spiritual Scene 45",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-45",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_34",
      title: "Spiritual Scene 46",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-46",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_35",
      title: "Spiritual Scene 47",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-47",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_36",
      title: "Spiritual Scene 48",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-48",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_37",
      title: "Spiritual Scene 49",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-49",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_38",
      title: "Spiritual Scene 50",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-50",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_39",
      title: "Spiritual Scene 51",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-51",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_40",
      title: "Spiritual Scene 52",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-52",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_41",
      title: "Spiritual Scene 53",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-53",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_42",
      title: "Spiritual Scene 54",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-54",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_43",
      title: "Spiritual Scene 55",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-55",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_44",
      title: "Spiritual Scene 56",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-56",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_45",
      title: "Spiritual Scene 57",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-57",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_46",
      title: "Spiritual Scene 58",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-58",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_47",
      title: "Spiritual Scene 59",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-59",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_48",
      title: "Spiritual Scene 60",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-60",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_49",
      title: "Spiritual Scene 61",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-61",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_50",
      title: "Spiritual Scene 62",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-62",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_51",
      title: "Spiritual Scene 63",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-63",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_52",
      title: "Spiritual Scene 64",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-64",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_53",
      title: "Spiritual Scene 65",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-65",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_54",
      title: "Spiritual Scene 66",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-66",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_55",
      title: "Spiritual Scene 67",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-67",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_56",
      title: "Spiritual Scene 68",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-68",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_57",
      title: "Spiritual Scene 69",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-69",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_58",
      title: "Spiritual Scene 70",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-70",
    },
    {
      imgSrc:
        "http://googleusercontent.com/image_collection/image_retrieval/15285985835303980816_59",
      title: "Spiritual Scene 71",
      description: "An inspiring spiritual image sourced from Unsplash.",
      link: "/gallery/spiritual-image-71",
    },
  ];

  return (
    <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Gallery">
      <div className="mx-4">
        <Gallery items={galleryItems} />
      </div>
    </Layout>
  );
};

export default page;
