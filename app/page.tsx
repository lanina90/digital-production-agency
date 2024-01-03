import HeroSection from "@/app/components/Hero/HeroSection";
import Clients from "@/app/components/Clients/Clients";
import Services from "@/app/components/Services/Services";
import WhyUs from "@/app/components/WhyUs/WhyUs";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import AskedQuestions from "@/app/components/FAQ/AskedQuestions";
import Contact from "@/components/ContactUs/Contact";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <Clients/>
      <Services/>
      <WhyUs/>
      <Testimonials/>
      <AskedQuestions/>
      <Contact text='We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the
            different ways you can get in touch with us.' title='Thank you for your Interest in SquareUp.'/>
    </>
  )
}
