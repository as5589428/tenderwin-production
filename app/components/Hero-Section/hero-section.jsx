
'use client';
import React from 'react';

export default function HeroSection() {
  const containerStyle = {
    backgroundColor: '#111827',
    color: 'white',
    padding: '5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  const contentStyle = {
    maxWidth: '64rem',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    lineHeight: '1.2',
  };

  const subheadingStyle = {
    fontSize: '3.75rem',
    fontWeight: '800',
    marginBottom: '2rem',
    lineHeight: '1.1',
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
    marginBottom: '3rem',
    lineHeight: '1.5',
    maxWidth: '48rem',
    margin: '0 auto 3rem',
  };

  const buttonStyle = {
    padding: '1rem 2rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    borderRadius: '9999px',
    background: 'linear-gradient(to right, #8B5CF6, #EC4899)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(to right, #7C3AED, #DB2777)',
  };

  return (
    <section style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>
          Increase Tender Productivity with
        </h1>
        <h2 style={subheadingStyle}>
          BID MANAGEMENT SYSTEM
        </h2>
        <p style={paragraphStyle}>
          Elevate your tender submission process to secure more contracts by
          fostering collaboration and ensuring your tender proposals are focused.
        </p>
        <button 
          style={buttonStyle}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, buttonHoverStyle);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, buttonStyle);
          }}
        >
          BID BETTER WITH BID MANAGEMENT SYSTEM
        </button>
      </div>
    </section>
  );
}
