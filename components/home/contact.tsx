import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Ready to Lift Your <span className="text-amber-500">Project?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-[500px]">
                Get in touch with us for a free quote or to discuss your heavy lifting requirements. We're available 24/7 for emergency shifting.
              </p>
            </div>

            <div className="grid gap-6">
              <a 
                href="tel:+919907975530" 
                className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="bg-amber-500 p-3 rounded-xl transition-transform group-hover:scale-110">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Call Us Anytime</p>
                  <p className="text-xl font-bold">+91 99079 75530</p>
                </div>
              </a>

              <a 
                href="https://wa.me/919907975530" 
                className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="bg-green-500 p-3 rounded-xl transition-transform group-hover:scale-110">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">WhatsApp Support</p>
                  <p className="text-xl font-bold">+91 99079 75530</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="bg-zinc-700 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Our Location</p>
                  <p className="text-lg font-bold leading-tight">
                    Power House Area, Infront of Maa Karma Electrical,<br />
                    Bhilai, Chhattisgarh – 490001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-center gap-8">
            <h3 className="text-2xl font-bold mb-4">Service Area</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Bhilai", "Durg", "Raipur", "Entire Chhattisgarh", "All Over India"].map((area, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 text-amber-500 mb-4">
                <Clock className="h-5 w-5" />
                <span className="font-bold">Available for Long-term Projects</span>
              </div>
              <p className="text-sm text-gray-500">
                Serving the industrial needs of Chhattisgarh since over 15 years with professionalism and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
