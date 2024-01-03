import React from 'react';
import Hero from "@/components/HeroPages/Hero/Hero";
import ProcessList from "@/app/process/ProcessList/ProcessList";
import Contact from "@/components/ContactUs/Contact";

const Page = () => {
  return (
    <>
      <Hero text="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
            title='Process of Starting the Project'/>
      <ProcessList/>
      <Contact
        text='We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.'
        title='Thank you for your Interest in SquareUp.'/>
    </>
  );
};

export default Page;