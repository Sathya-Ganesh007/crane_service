import { ShieldCheck, HardHat, ClipboardCheck, Users } from "lucide-react";

export function Safety() {
  const points = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Certified Operators",
      description: "Highly trained professionals with years of experience in complex lifting operations."
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Regular Inspection",
      description: "Mandatory equipment health checks performed before every major operation."
    },
    {
      icon: <HardHat className="h-6 w-6" />,
      title: "Safety Standards",
      description: "Strict compliance with industrial safety guidelines and site-specific protocols."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Risk Assessment",
      description: "Comprehensive evaluation of site conditions and load dynamics before starting any task."
    }
  ];

  return (
    <section id="safety" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#f59e0b_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold mb-4">
            <ShieldCheck className="h-4 w-4" />
            Safety & Compliance
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Zero Compromise on <span className="text-amber-500">Operational Safety</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At Ganesh Crane Service, safety isn't just a protocol—it's our standard. We believe that professional lifting requires not just power, but extreme precision and caution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all hover:bg-white/[0.07]"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl bg-amber-500 flex items-center justify-center text-black transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-500 transition-colors group-hover:text-gray-300">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-amber-500 to-amber-600 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-black">
            <h3 className="text-2xl font-bold mb-2">Need a safety audit for your site?</h3>
            <p className="font-medium text-black/80 text-lg">Our experts can perform a preliminary risk assessment for your lifting requirements.</p>
          </div>
          <a 
            href="tel:+919907975530" 
            className="whitespace-nowrap px-8 py-4 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            Get Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
