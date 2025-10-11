import EventDetails from '@/components/EventDetails';
import Layout from '@/components/layout/Layout';
import React from 'react';

// ✅ Function to fetch event data from external API
async function getEventData(slug) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${slug}`, {
      cache: 'no-store', // ensures SSR fresh data each time
    });

    if (!res.ok) throw new Error('API Error');

    return await res.json();
  } catch (error) {
    console.error('⚠️ API Fetch Failed, using dummy data:', error.message);

    // ✅ Dummy fallback event data
    return {
      title: "Trust Roof Service for Quality and Reliability",
      date: "October 19, 2022",
      author: "By Admin",
      category: "Roofing",
      description: "Learn how Trust Roof provides top-tier roofing solutions that ensure safety, durability, and customer satisfaction.",
      content: [
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        "It has survived not only five centuries, but also the leap into electronic typesetting."
      ],
      client: {
        name: "Sakib Hasan",
        title: "Developer",
        text: "It is a long established fact that a reader will be distracted by the readable content when looking at its layout."
      },
      images: [
        "/assets/images/blog/blog-details-img-1.jpg",
        "/assets/images/blog/blog-details-img-box-img-1.jpg",
        "/assets/images/blog/blog-details-img-box-img-2.jpg"
      ],
      tags: ["Roof Revive", "Roofing Solutions", "Roofing Services"],
      socialLinks: [
        { href: "#", icon: "icon-facebook-f" },
        { href: "#", icon: "icon-instagram" },
        { href: "#", icon: "icon-twitter" },
        { href: "#", icon: "icon-linkedin-in" }
      ],
      previous: "#",
      next: "#",
      comments: [
        {
          name: "Cameron Williamson",
          date: "April 16, 2024",
          text: "A reader will be distracted by the readable content when looking at its layout.",
          imgSrc: "/assets/images/blog/comment-1-1.jpg"
        }
      ]
    };
  }
}

// ✅ Dynamic Metadata for SEO and sharing
export async function generateMetadata({ params }) {
  const { slug } = params;
  const event = await getEventData(slug);

  return {
    title: event.title || 'Event Details',
    description: event.description || 'Read about our latest events and updates.',
    openGraph: {
      title: event.title,
      description: event.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/${slug}`,
      images: [
        {
          url: event.images?.[0] || '/assets/images/default.jpg',
          width: 800,
          height: 600,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.description,
      images: [event.images?.[0] || '/assets/images/default.jpg'],
    },
  };
}

// ✅ SSR Page Component
export default async function Page({ params }) {
  const { slug } = params;
  const eventData = await getEventData(slug);

  return (
    <Layout headerStyle={3} footerStyle={3} breadcrumbTitle={eventData.title}>
        {slug}
      <EventDetails blogData={eventData} />
    </Layout>
  );
}
