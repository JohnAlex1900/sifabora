import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ProcessSection from "@/components/home/ProcessSection";
import SuccessStoriesSection from "@/components/home/SuccessStoriesSection";
import NewsSection from "@/components/home/NewsSection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sifabora | Digital Reputation Protection Services</title>
        <meta
          name="description"
          content="Sifabora helps individuals and businesses protect and restore their digital reputation with specialized services including defamation removal, content suppression, and ongoing protection."
        />
        <meta
          property="og:title"
          content="Sifabora | Digital Reputation Protection Services"
        />
        <meta
          property="og:description"
          content="Protect and restore your online reputation with Sifabora's specialized digital reputation protection services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sifabora.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <SuccessStoriesSection />
      <NewsSection />
      <ContactSection />
    </>
  );
};

export default Home;
