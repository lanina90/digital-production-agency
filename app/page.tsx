import HeroSection from "@/app/components/Hero/HeroSection";
import Clients from "@/app/components/Clients/Clients";
import Services from "@/app/components/Services/Services";
import WhyUs from "@/app/components/WhyUs/WhyUs";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <Clients/>
      <Services/>
      <WhyUs/>
    </>
  )
}
