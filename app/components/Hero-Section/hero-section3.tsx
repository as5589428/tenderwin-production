'use client';  

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const tenderCategories = [
  { name: 'Construction Tenders', count: '28.9K', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=300' },
  { name: 'Road Tenders', count: '383', image: 'https://img.freepik.com/premium-photo/engineer-supervising-construction-asphalt-roads-generative-ai_1259709-134453.jpg?w=1380' },
  { name: 'Railway Tenders', count: '2.5K', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=400&h=300' },
  { name: 'Painting Tenders', count: '211K', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=400&h=300' },
  { name: 'Building Tenders', count: '11.4K', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=300' },
  { name: 'Fabrication Tenders', count: '9.7K', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400&h=300' },
];

const authorities = [
  { name: 'PWD Tenders', count: '7.1K', logo: 'https://scontent.fnag7-1.fna.fbcdn.net/v/t39.30808-6/279209053_297281489247943_2605412588134423445_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7gBnSLYeaQUQ7kNvgHCtmBC&_nc_zt=23&_nc_ht=scontent.fnag7-1.fna&_nc_gid=ADmyuS8DwnObKR2jNlapvAE&oh=00_AYDi0e7GFcZkbNFZ8xmPx3FvRm8SlfkPMgzOew9oZP39PA&oe=671C09B6' },
  { name: 'IREPS Tenders', count: '1K', logo: 'https://d3dhalnpawfxbg.cloudfront.net/production/bidassist/web/images/Indian_Railways_E_Procurement_System.webp' },
  { name: 'NHAI Tenders', count: '394', logo: 'data:image/jpeg;base64,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LT7LTwtx142XlTqwsFfVxUNJLUzHDYwTjtPYFJLb0h6KWmA3PXFBABllCx1TL47Bv6KQ+jd2W38g5jN3mLfgo1o25u09U1s1+g9XluNMaynld9prQSWdxA3x4dylHovpXwaVinlJ6SslkqHZ7zj+UHzV+Ralr8FM91smKIiyl4REQBERAEREBa7kvl2o/wAeTls4/mvqPCjVm0PYbS7pIqQTz8+kn9sjwHIeQWrxs6w7/UozYuejlOmLFqK426to7fQtFJXNjElROCwAMdkcJ689wKl9u9HdptVOJNS3PpIw7jMRk6GEHrzvk+OQul8I7FG6vQ1ira+StrKaWad7i49JO8gE89s4x3cl2vJdt+hOFT+TUfPPTlpj9S09ROq3D/ToYcMz2l367rV1t61PeAWmaK00xGCynPFKf/vq8sKbRaYtMLOCKnLGfsteQPcr/m7bfu3fiFVO5XwT4N/JzygtFJRPMsUZfOTl00h4nuP6eS9535qafN225z0TvxCq/N22/du/EKhVun2TSSIfC+WlkcQ3hkxjcbjwWLqwpqdO21xyY3E9pkKfN22/du/EKjs6RCnAaOmdyZsG9pWEkuJJ5k5Kmvzetv3b/wAQp83bb9278QqmMWrdt9sk6bWiFBZumApOgA+s/ie7txyH5qX/ADetv3bvxCnzdtuc9E78Qq7ZEhDnBoL3ODWgZJPIBamxmn1LqujgrOJluY101Mxw2qnN227ufu710Wt0laK2EwzxS9GTkgSuGfcV6Z9P22V1A71bgNvPFTdEeHg7turYbFWRcyiFS2yK+kmOK7VNp0/BG11bUTdJx43hjwQT5/y+CnFLTx0tNHTwtDI42hjGjqAGAF5ILHQw3ia7Nic6tmbwF7nk4btsByHLqWywM5XLvcqUJnT2VREVZMIiIAiIgCIiAKmFVEAVMKqIAiIgCIiAIiIAiIgCIiAJhEQFMBVREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf//Z' },
  { name: 'RDD Tenders', count: '1.9K', logo: 'https://e7.pngegg.com/pngimages/384/112/png-clipart-logo-usda-rural-development-organization-brand-line-line-text-logo-thumbnail.png' },
  { name: 'PHED Tenders', count: '5.5K', logo: 'https://i.pinimg.com/474x/f1/4f/a9/f14fa923871483d9373647b16c503a39.jpg' },

];

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    background: '#ffffff',
    padding: '4rem 2rem',
    fontFamily: 'Inter, sans-serif',
  },
  header: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionHeader: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#000000",
    textAlign: "center",
    marginBottom: "2rem",
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
  },
  card: {
    background: '#f9f9f9',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '1.5rem',
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#333333',
    marginBottom: '0.5rem',
  },
  cardCount: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#666666',
    marginBottom: '1rem',
  },
  viewMoreButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#ff8c00',
    color: '#ffffff',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  authorityGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
  authorityCard: {
    background: '#f9f9f9',
    borderRadius: '1rem',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  authorityLogo: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '1rem',
    objectFit: 'cover',
  },
  authorityName: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#ff8c00',
    textAlign: 'center',
    marginBottom: '0.5rem',
  },
  authorityCount: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#666666',
    marginBottom: '1rem',
  },
  navigationButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
  },
  navButton: {
    background: '#ff8c00',
    color: '#ffffff',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};


function Hero2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= tenderCategories.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tenderCategories.length - 3 : prevIndex - 1
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Explore Tenders</h1>
      
      <div>
        <h2 style={styles.sectionHeader}>Explore by Categories</h2>
        <div style={styles.cardGrid}>
          {tenderCategories.slice(currentIndex, currentIndex + 3).map((category, index) => (
            <div key={index} style={styles.card}>
              <img src={category.image} alt={category.name} style={styles.cardImage} />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{category.name}</h3>
                <p style={styles.cardCount}>{category.count} Tenders</p>
                <a href="#" style={styles.viewMoreButton}>
                  View More
                  <ArrowRight style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.navigationButtons}>
          <button style={styles.navButton} onClick={prevSlide}>
            <ChevronLeft />
          </button>
          <button style={styles.navButton} onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>
      </div>

      <div>
        <h2 style={styles.sectionHeader}>Explore by Authorities</h2>
        <div style={styles.authorityGrid}>
          {authorities.map((authority, index) => (
            <div key={index} style={styles.authorityCard}>
              <img src={authority.logo} alt={authority.name} style={styles.authorityLogo} />
              <h3 style={styles.authorityName}>{authority.name}</h3>
              <p style={styles.authorityCount}>{authority.count} Tenders</p>
              <a href="#" style={styles.viewMoreButton}>
                View More
                <ArrowRight style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} />
              </a>
            </div>
          ))}
        </div>
        <div style={styles.navigationButtons}>
          <button style={styles.navButton} onClick={prevSlide}>
            <ChevronLeft />
          </button>
          <button style={styles.navButton} onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
