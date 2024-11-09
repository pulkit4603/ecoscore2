import React, { useState, useEffect } from "react";
import { Navigation } from "../components/landing/navigation";
import { Header } from "../components/landing/header";
import { Features } from "../components/landing/features";
import { About } from "../components/landing/about";
import { Services } from "../components/landing/services";
import { Gallery } from "../components/landing/gallery";
import { Testimonials } from "../components/landing/testimonials";
import { Team } from "../components/landing/Team";
import { Contact } from "../components/landing/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "./landing.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default function LandingPage() {
  return <div> LandingPage </div>;
}
