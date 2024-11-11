"use client";  
import { usePathname } from "next/navigation";  
import "../app/styles/global.css";  
import Footer from "./components/Footer/Footer"; 
import HeroSection from "./components/Hero-Section/hero-section";
import HeroSection2 from "./components/Hero-Section/hero-section2";
import Hero2 from "./components/Hero-Section/hero-section3"; 
import Navbar from "./components/Navbar/Navbar";
import Component from "./components/SearchBar/SearchDropdown";   
import GoToTop from "./components/GoToTop/GoToTop";
import WhatsappBot from "./components/WhatsappBot/WhatsappBot"; 
import ExploreStates from "./components/explore-state/ExploreStates";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current path

  return (
    <html lang="en">
      <body> 
        {/* Render Navbar only for specific paths */}
        {(pathname === "/" ||
          pathname === "/login" ||
          pathname === "/signup" ||
          pathname === "/competitior-analytics" ||
          pathname === "/tenders-filter" ||
          pathname === "/bid-management" ||
          pathname === "/about-us" ||
          pathname === "/gem-bidding" ||
          pathname === "/blog" ||
          pathname === "/indian-tenders" ||
          pathname === "/tender-result" ||
          pathname === "/set-preference" ||
          pathname === "/contact-us" ||
          pathname === "/pricing-package" ||
          pathname.startsWith("/subscription-check") ||
          pathname.startsWith("/tender-details") ||
          pathname.startsWith("/subscribe-package")) && <Navbar />}

        {/* Render additional components only for the homepage */}
        {pathname === "/" && (
          <>
            <Component />
            <HeroSection />
            <HeroSection2 />
            <ExploreStates />
            <Hero2 />
          </>
        )}
 

        <main>{children}</main>

        {/* Conditionally render Footer based on the current path */}
        {pathname !== "/dashboard" && <Footer />}
        <GoToTop />
        <WhatsappBot /> 
      </body>
    </html>
  );
}
