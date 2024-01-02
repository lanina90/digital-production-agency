import HeroSection from "@/app/components/Hero/HeroSection";
import Clients from "@/app/components/Clients/Clients";
import Services from "@/app/components/Services/Services";
import WhyUs from "@/app/components/WhyUs/WhyUs";
import Testimonials from "@/app/components/Testimonials/Testimonials";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <Clients/>
      <Services/>
      <WhyUs/>
      <Testimonials/>
    </>
  )
}
