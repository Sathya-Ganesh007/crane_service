import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/home/navbar";
import { About } from "@/components/home/about";
import { Services } from "@/components/home/services";
import { Safety } from "@/components/home/safety";
import { Contact } from "@/components/home/contact";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white dark:bg-zinc-950 overflow-x-hidden">
      {/* Header / Navbar */}
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div id="hero">
          <Hero />
        </div>
        
        {/* Featured Partners / Trusted By (Optional branding) */}
        <section className="py-12 border-y border-zinc-100 dark:border-zinc-900 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="text-xl font-black text-zinc-900 dark:text-white tracking-widest">CONTRACT WORK EXPERTISE</span>
              <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                <span className="text-lg font-bold">STEEL PLANTS</span>
                <span className="text-lg font-bold">INFRASTRUCTURE</span>
                <span className="text-lg font-bold">GOVERNMENT PROJECTS</span>
                <span className="text-lg font-bold">CONSTRUCTION</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />
        
        {/* Services Section */}
        <Services />
        
        {/* Safety Section */}
        <Safety />
        
        {/* Contact & Map Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden scale-animate">
        <a 
          href="tel:+919907975530" 
          className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-black shadow-2xl shadow-amber-500/50 hover:scale-110 active:scale-95 transition-all"
          aria-label="Call Now"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
