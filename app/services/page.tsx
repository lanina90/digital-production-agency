import React from 'react';
import Hero from "@/components/HeroPages/Hero/Hero";
import ServicesList from "@/app/services/components/ServicesList/ServicesList";


const Page = () => {
  return (
    <>
      <Hero text="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      title='Our Services'/>
      <ServicesList/>
    </>
  );
};

export default Page;