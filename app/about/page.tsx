import React from 'react';
import Hero from "@/components/HeroPages/Hero/Hero";
import AboutUs from "@/app/about/components/AboutUs";

const Page = () => {
  return (
    <>
      <Hero text="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
            title='About Us'/>
      <AboutUs/>
    </>
  );
};

export default Page;