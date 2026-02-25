import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { Integrations } from "./components/Integrations";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <HowItWorks />
        <Features />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
