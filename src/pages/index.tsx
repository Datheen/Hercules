import { ContactForm } from "@/components/ContactForm";
import Features from "@/components/Features";
import { Footer } from "@/components/Footer";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Projects />
      <ContactForm></ContactForm>
      <Footer/>
    </>
  );
}
