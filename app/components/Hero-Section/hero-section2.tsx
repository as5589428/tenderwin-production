
'use client';  
import React from 'react'

export default function HeroSection2() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      backgroundColor: '#111827',
      color: 'white',
      padding: '5rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto',
    },
    textSection: {
      flex: '1',
      paddingRight: '2rem',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, #8B5CF6, #EC4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    description: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '2rem',
    },
    imageSection: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dashboardImage: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '10px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
    },
    button: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      borderRadius: '9999px',
      background: 'linear-gradient(to right, #8B5CF6, #EC4899)',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  }

  return (
    <section style={styles.container}>
      <div style={styles.content}>
        <div style={styles.textSection}>
          <h2 style={styles.title}>Sales</h2>
          <p style={styles.description}>
            Boost your sales performance with our intuitive tools. Track progress,
            identify opportunities, and streamline the sales process to drive revenue and
            enhance customer satisfaction.
          </p>
          <button 
            style={styles.button}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Explore Sales Tools
          </button>
        </div>
        <div style={styles.imageSection}>
          <img 
            src="https://tender247.com/_next/static/media/bms01.5c85c635.png" 
            alt="Sales Dashboard" 
            style={styles.dashboardImage}
          />
        </div>
      </div>
    </section>
  )
}