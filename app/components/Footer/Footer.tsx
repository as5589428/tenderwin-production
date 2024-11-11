"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const tenderStates = [
  "Uttar Pradesh",
  "Maharashtra",
  "Madhya Pradesh",
  "Bihar",
  "Rajasthan",
  "Gujarat",
  "West Bengal",
  "Karnataka",
  "Andhra Pradesh",
  "Assam",
  "Tamil Nadu",
  "Haryana",
  "Jharkhand",
  "Odisha",
  "Delhi",
  "Jammu And Kashmir",
  "Telangana",
  "Chhattisgarh",
  "Himachal Pradesh",
  "Uttarakhand",
];

const tenderCategories = [
  "Road Construction",
  "Building Construction",
  "Civil Works",
  "Other Chemicals",
  "Pipeline Projects",
  "Personal paper products",
  "Computers",
  "Development Software",
  "Furniture",
  "Road transportation",
  "Electrical components",
];

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "#474444",
    color: "#FFF",
    fontFamily: "'Poppins', sans-serif",
  },
  topGradient: {
    height: "8px",
    background: "linear-gradient(90deg, #FF6B00, #FF9E00)",
  },
  container: {
    maxWidth: "1500px",
    margin: "0 auto",
    padding: "2rem 1rem",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
    flexWrap: "wrap",
    gap: "1rem",
  },
  sectionHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#FF6B00",
    textTransform: "uppercase",
  },
  link: {
    color: "#FFF",
    textDecoration: "none",
    transition: "color 0.2s ease",
    fontSize: "0.9rem",
  },
  linkHover: {
    color: "#FF6B00",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  },
  buttonContainer: {
    marginTop: "2rem",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FF6B00",
    color: "white",
    padding: "0.75rem 2rem",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  buttonHover: {
    backgroundColor: "#FF9E00",
  },
  bottomBar: {
    marginTop: "0.5rem",
    paddingTop: "0.7rem",
    borderTop: "1px solid #E5E5E5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  socialIcons: {
    display: "flex",
    gap: "1rem",
  },
  horizontalList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem 1rem",
    alignItems: "center",
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.topGradient}></div>
      <div style={styles.container}>
        {/* Company logos */}
        {/* <div style={styles.logoContainer}>
          <img src="https://scontent.fnag7-1.fna.fbcdn.net/v/t39.30808-6/279209053_297281489247943_2605412588134423445_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7gBnSLYeaQUQ7kNvgHCtmBC&_nc_zt=23&_nc_ht=scontent.fnag7-1.fna&_nc_gid=ADmyuS8DwnObKR2jNlapvAE&oh=00_AYDi0e7GFcZkbNFZ8xmPx3FvRm8SlfkPMgzOew9oZP39PA&oe=671C09B6" alt="Company 1" style={{ height: '40px' }} />
          <img src="https://www.tender247.com/_next/static/media/icici-bank-logo.1584fda2.png" alt="Company 2" style={{ height: '40px' }} />
          <img src="https://www.tender247.com/_next/static/media/larsen-toubro-logo.d13a6c8f.png" alt="Company 3" style={{ height: '40px' }} />
          <img src="https://www.tender247.com/_next/static/media/hdfc-bank-logo.2cce2ef9.png" alt="Company 4" style={{ height: '40px' }} />
          <img src="https://www.tender247.com/_next/static/media/jsw-group-logo.c66422a3.png" alt="Company 5" style={{ height: '40px' }} />
        </div> */}

        {/* Tender by States */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={styles.sectionHeading}>Tender by States</h3>
          <div style={styles.horizontalList}>
            {tenderStates.map((state, index) => (
              <Link
                key={index}
                href={`/tenders/${state.toLowerCase().replace(/ /g, "-")}`}
                style={styles.link}
              >
                {state}
              </Link>
            ))}
            <Link
              href="/tenders/all"
              style={{ ...styles.link, fontWeight: "bold", color: "#FF6B00" }}
            >
              View All
            </Link>
          </div>
        </div>

        {/* Tender by Categories */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={styles.sectionHeading}>Tender by Categories</h3>
          <div style={styles.horizontalList}>
            {tenderCategories.map((category, index) => (
              <React.Fragment key={index}>
                <Link
                  href={`/tenders/category/${category
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  style={styles.link}
                >
                  {category}
                </Link>
                {index < tenderCategories.length - 1 && (
                  <span style={{ color: "#FF9E00" }}>|</span>
                )}
              </React.Fragment>
            ))}
            <Link
              href="/tenders/categories"
              style={{ ...styles.link, fontWeight: "bold", color: "#FF6B00" }}
            >
              View All
            </Link>
          </div>
        </div>

        {/* Main footer content */}
        <div style={styles.gridContainer}>
          <div>
            <h3 style={styles.sectionHeading}>Navigate</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <Link href="/" style={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" style={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" style={styles.link}>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/tender-guide.pdf"
                  style={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tender Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" style={styles.link}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" style={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={styles.sectionHeading}>More</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {/* <li>
                <Link href="/universal-fund" style={styles.link}>
                  Universal Fund
                </Link>
              </li> */}
              <li>
                <Link href="/subscribe-package" style={styles.link}>
                  Subscribe
                </Link>
              </li>
              <li>
                <Link href="/terms-and-condition" style={styles.link}>
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" style={styles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation-refund-policy" style={styles.link}>
                  Cancellation and Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={styles.sectionHeading}>Our Office</h3>
            <p>99708 64790</p>
            <p>info@example.com</p>
            <p>PR Plaza, Khamla Road,Khamla</p>
            <p>Nagpur, Maharashtra-440025, India</p>
          </div>
          <div>
            <h3 style={styles.sectionHeading}>Our Purpose</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={styles.bottomBar}>
          <span>Copy Rights &copy; TenderWin {new Date().getFullYear()}</span>
          <div style={styles.socialIcons}>
            <Link href="#" aria-label="Facebook">
              <Facebook size={24} color="#FFF" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter size={24} color="#FFF" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram size={24} color="#FFF" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin size={24} color="#FFF" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube size={24} color="#FFF" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
