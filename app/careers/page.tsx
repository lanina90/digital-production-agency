'use client'

import React from 'react';
import Hero from "@/components/HeroPages/Hero/Hero";
import CallToAction from "@/components/CTA/CallToAction";
import Career from "@/app/careers/components/Careers/Career";

const Page = () => {
  return (
    <div>
      <Hero title='Join Our Team at SquareUp' text='Unlock your potential and join our team of innovators and problem solvers.'/>
      <Career/>
      <CallToAction/>
    </div>
  );
};

export default Page;