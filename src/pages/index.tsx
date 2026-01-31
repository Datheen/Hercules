import { ContactForm } from "@/components/ContactForm";
import Features from "@/components/Features";

import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Projects />
      <ContactForm/>
    </>
  );
}
