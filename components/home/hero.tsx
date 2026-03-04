import { Phone, ArrowRight, Construction } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-crane.png"
          alt="Ganesh Crane Service Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
      </div>

      <div className="container relative z-20 px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-500 backdrop-blur-sm w-fit animate-in fade-in slide-in-from-left-4 duration-500">
            <Construction className="mr-2 h-4 w-4" />
            <span>15+ Years of Heavy Lifting Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white animate-in fade-in slide-in-from-left-8 duration-700">
            Precision Heavy-Duty <span className="text-amber-500">Crane & Hydra</span> Rental Services
          </h1>
          
          <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-in fade-in slide-in-from-left-12 duration-1000">
            Providing reliable lifting solutions for industrial plants, construction sites, and government projects in Bhilai, Chhattisgarh, and all over India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <Link
              href="tel:+919907975530"
              className="inline-flex h-12 items-center justify-center rounded-md bg-amber-500 px-8 text-sm font-bold text-black transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call +91 99079 75530
            </Link>
            <Link
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-white/10 px-8 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 hover:border-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-12 border-t border-white/10 pt-8 animate-in fade-in duration-1000">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">15+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">Certified</p>
              <p className="text-sm text-gray-400">Expert Operators</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-2xl md:text-3xl font-bold text-white">Pan-India</p>
              <p className="text-sm text-gray-400">Service Area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
