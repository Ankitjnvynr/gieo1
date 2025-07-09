
"use client"
import React, { useState } from 'react';
import BookCard from './BookCard';
import LibraryHeader from './LibraryHeader';
import BookDetailsModal from './detail';
import LibraryHero from './Path';
import TestimonialSection from './testimonial';
import './LibraryPage.css';

const LibraryPage = () => {
  const [filter, setFilter] = useState('all');
  const [selectedBook, setSelectedBook] = useState(null);
  
  const books = [
    {
      id: 1,
      title: "Geeta Prerna",
      author: "Swami Gyanananda Maharaj Ji",
      image: "/assets/library_images/geeta_prerna.jpg",    
      category: "Spiritual",
      coverColor: "#5d4037",
      description: "This book is a collection of inspiring verses from the Bhagavad Gita, offering guidance in a modern context",
      featured: true,
      pages: 608,
      language: "Hindi(With Sanskrit Shlokas)",
      publisher: "Manoj Publications", 
      publicationYear: 2015,
      isbn: "978-81-7505-306-2",
      chapters: 18,
      verses:null,
      rating: 4.9,
      Buy: "https://www.amazon.in/Hardbound-Manishi-Gyananand-Maharaj-Pustake/dp/B08JVH2D5F",
      tags: ["Dharma", "Karma", "Moksha", "Yoga"],
      longDescription: "Geeta Prerna is a spiritually uplifting book that presents the timeless wisdom of the Bhagavad Gita in a way that resonates with the challenges and demands of modern life. Swami Gyananand Ji Maharaj carefully selects inspirational shlokas (verses) from the Gita and provides deep, thought-provoking commentary that brings out their practical relevance for today's world",
    },
    {
      id: 2,
      title: "Geeta Prerna, Part 2",
      author: "Swami Gyanananda Maharaj Ji",
      image: "/assets/library_images/geeta_prerna2.jpg",
      category: "Spiritual",
      coverColor: "#5d4037",
      description: "It delves into the Bhagavad Gita, focusing on divine manifestations, paths of devotion, wisdom, and the unveiling of ultimate liberation.",
      featured: true,
      pages: 416,
      language: "Hindi(With Sanskrit Shlokas and modern commentary) ",
      publisher: "Manoj Publications",
      publicationYear: 2003,
      isbn: "978-0-87612-039-7",
      chapters: 8,
      verses: null,
      rating: 5.0,
      tags: ["Personal Growth", "Dharma", "Devotion", "Selfless Action"],
      longDescription: "Geeta Prerna – Bhag 2 (Part 2) by Geeta Manishi Swami Gyananand Ji Maharaj is a powerful continuation of his inspiring commentary on the Bhagavad Gita. Building upon the foundation set in Part 1, this volume delves into the deeper chapters of the Gita (typically Chapters 10 to 18), exploring themes such as divine manifestations, paths of devotion, selfless action, and ultimate liberation. With his trademark clarity and spiritual insight, Swami Gyananand Ji unpacks selected Sanskrit shlokas and presents their meanings in simple, relatable Hindi, making the eternal wisdom of the Gita accessible to readers of all ages and backgrounds.",
    },
    {
      id: 3,
      title: "Gyan Sadhna",
      author: "Swami Gyanananda Maharaj Ji",
      image: "/assets/library_images/gyan_sadhna.jpeg",
      category: "Spiritual",
      coverColor: "#5d4037",
      description: "A deep and practical guide on spiritual knowledge (gyan) and inner discipline (sadhana).",
      featured: false,
      pages: 200,
      language: "Hindi",
      publisher: "Manoj Publications",
      publicationYear: 2010,
      isbn: "978-1-58638-026-7",
      chapters: 10,
      verses: null,
      rating: 4.6,
      tags: ["Gyan Yoga", "inner Disciplines", "Vedantic Wisdom", "Spiritual Growth"],
      longDescription: "“Gyan Sadhana” offers profound guidance on how to balance knowledge and practice. Swami Gyananand Ji emphasizes that true wisdom (gyan) must be supported by consistent practice (sadhana) to bring inner peace and transformation. The book explores how one can conquer mental restlessness, ego, and distractions through meditation, contemplation, and disciplined living, as taught in the Bhagavad Gita. It’s ideal for seekers committed to walking a serious spiritual path.."
    },
    {
      id: 4,
      title: "Kripa",
      author: "Swami Gyanananda Maharaj Ji",
      image: "/assets/library_images/kripa.png",
      category: "Spiritual",
      coverColor: "#5d4037",
      description: "This book explores how God's mercy becomes the most powerful force for transformation in a devotee's life.",
      featured: false,
      pages: 200,
      language: "Hindi",
      publisher: "Manoj Publications",
      publicationYear: 2010,
      isbn: "978-93-80087-23-1",
      chapters: 12,
      verses: null,
      rating: 4.6,
      tags: ["Divine Mercy", "Bhakti Literature", "God's Grace"],
      longDescription: "In “Kripa”, Swami Gyananand Ji Maharaj shares heartfelt insights on divine compassion — how it heals, uplifts, and protects. Drawing from the Bhagavad Gita and personal spiritual reflections, this book presents stories, anecdotes, and reflections that remind readers that even a drop of divine grace can change one’s life forever. It's a call to trust, surrender, and open oneself to the Lord’s unfailing mercy"
    },
    {
      id: 5,
      title: "Bana lo Geeta, Jeevan Geet",
      author: "Swami Gyanananda Maharaj Ji",
      image: "/assets/library_images/jeevan_geet.png",
      category: "Spiritual",
      coverColor: "#5d4037",
      description: "An invitation to live the Bhagavad Gita as a song of life, not just read it as a scripture.",
      featured: true,
      pages: 200,
      language: "Hindi",
      publisher: "Manoj Publications",
      publicationYear: 2010,
      isbn: "978-81-7052-056-5",
      chapters: 14,
      verses: null,
      rating: 4.6,
      tags: ["Living Gita", "Bhakti Path", "karma Yoga"],
      longDescription: "“Bana Lo Geeta Jeevan Geet” means “Make the Gita the Song of Your Life”. This book motivates readers to integrate Gita's teachings into every breath, every decision, and every relationship. Swami Gyananand Ji Maharaj presents the Gita as a living dialogue, guiding one through karma (action), bhakti (devotion), and jnana (wisdom). It encourages turning philosophy into personal practice — transforming the Gita into a joyful, melodic way of living.."
    },
    {
      id: 6,
      title: "Geeta Padho - Padhao Geeta",
      author: "Swami Gyanananda Maharaj Ji",
      image: "/assets/library_images/geeta_padHo.png",
      category: "Spiritual",
      coverColor: "#5d4037",
      description: "The Gita is presented here as a transformative tool for the modern mind, helping individuals to live with clarity, purpose, and spiritual discipline.",
      featured: false,
      pages: 32-48,
      language: "Hindi",
      publisher: "Gita Sansthan",
      publicationYear: 2020,
      isbn: "978-0-14-342884-5",
      chapters: 18,
      verses: null,
      rating: 4.8,
      tags: ["Cosmic Order", "Sanatana Dharma", "Life Purpose"],
      longDescription: "This Patrika includes selected verses from all 18 chapters, with accessible Hindi explanations, and practical interpretations meant to inspire introspection, moral clarity, and spiritual growth. Whether you’re a new reader of the Gita or a lifelong devotee, this book will ignite a deeper connection with Lord Krishna’s teachings and inspire you to carry the light of Dharma into your daily life."
    },
    // {
    //   id: 7,
    //   title: "Divine Love Poetry",
    //   author: "Mirabai",
    //   image: "/assets/library_images/geeta.jpeg",
    //   category: "Bhakti",
    //   coverColor: "#5d4037",
    //   description: "Ecstatic verses of devotion from the legendary poet-saint who merged with the divine.",
    //   featured: true,
    //   pages: 176,
    //   language: "Hindi/English",
    //   publisher: "Sahitya Akademi",
    //   publicationYear: 2016,
    //   isbn: "978-81-260-4855-5",
    //   chapters: null,
    //   verses: 153,
    //   rating: 4.9,
    //   tags: ["Poetry", "Mysticism", "Divine Union"],
    //   longDescription: "This collection brings together the most beloved poems of Mirabai, the 16th-century Rajput princess who renounced worldly comforts to become a wandering devotee of Lord Krishna. Her ecstatic verses express the intense longing, devotion, and ultimate union with the divine. This bilingual edition presents the original Braj Bhasha verses alongside sensitive English translations, capturing the passionate spirituality that continues to inspire seekers centuries later."
    // },
    // {
    //   id: 8,
    //   title: "Vedanta for Beginners",
    //   author: "Swami Prabhavananda",
    //   image: "/assets/library_images/geeta.jpeg",
    //   category: "Philosophy",
    //   coverColor: "#5d4037",
    //   description: "An accessible introduction to the non-dualistic philosophy that underlies Hindu thought.",
    //   featured: false,
    //   pages: 192,
    //   language: "English",
    //   publisher: "Ramakrishna Math",
    //   publicationYear: 2019,
    //   isbn: "978-81-7120-455-3",
    //   chapters: 9,
    //   verses: null,
    //   rating: 4.7,
    //   tags: ["Advaita", "Non-duality", "Self-Inquiry"],
    //   longDescription: "Swami Prabhavananda provides a clear and accessible introduction to Vedanta, the philosophical foundation of Hinduism. This book explains complex concepts like Brahman, Atman, Maya, and Moksha in straightforward language suitable for modern readers. Through logical explanations, analogies, and practical guidance, beginners can grasp the essential teachings of non-dualistic philosophy and apply them to their spiritual journey."
    // }
  ];

  const filteredBooks = filter === 'all' 
    ? books 
    : books.filter(book => book.category.toLowerCase() === filter.toLowerCase());

  const categories = [
    { id: 'all', name: 'All Books' },
    { id: 'spiritual', name: 'Spiritual' },
    { id: 'bhakti', name: 'Devotion' },
    { id: 'philosophy', name: 'Philosophy' },
    { id: 'meditation', name: 'Meditation' },
    { id: 'yoga', name: 'Yoga' }
  ];

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="library-page">
      <LibraryHeader />
      <LibraryHero/>
     

       <div className="books-section">
        <div className="section-header">
          <h2>Spiritual Book Collection</h2>
          <p>Discover profound wisdom from ancient traditions</p>
        </div>
        </div>

    
      
      <div className="books-container">
        {filteredBooks.map(book => (
          <BookCard 
            key={book.id} 
            book={book} 
            onSelect={handleBookSelect} 
          />
        ))}
      </div>

      <TestimonialSection />
      
      {selectedBook && (
        <BookDetailsModal book={selectedBook} onClose={closeModal} />
      )}
    </div>
  );
};

export default LibraryPage;