import React from 'react';
import Hero from "@/components/HeroPages/Hero/Hero";
import Contact from "@/components/ContactUs/Contact";
import ProjectsList from "@/app/portfolio/components/ProjectsList";

const Page = () => {
  return (
    <>
      <Hero text="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
            title='Our Works'/>
      <ProjectsList/>

      <Contact
        text='No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.'
        title='Let us Bring your Ideas to Life in the Digital World.'/>
    </>
  );
};

export default Page;