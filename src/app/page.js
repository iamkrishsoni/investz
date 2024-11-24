import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Testimonials from "@/Components/Home/Testimonials";
import Section1 from "@/Components/Home/Section1";
import Section2 from "@/Components/Home/Section2";
import Section3 from "@/Components/Home/Section3";
import Section4 from "@/Components/Home/Section4";
import Section5 from "@/Components/Home/Section5";
import Section6 from "@/Components/Home/Section6";
import Section7 from "@/Components/Home/Section7";
import Section8 from "@/Components/Home/Section8";
import Section9 from "@/Components/Home/Section9";
import FAQSection from "@/Components/Home/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Testimonials />
      <FAQSection />
      <Footer />
    </>
  );
}
