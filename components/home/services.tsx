import { Truck, Factory, Building2, Pickaxe } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-amber-500" />,
      title: "Crane Rental with Operator",
      description: "High-capacity crane services for industrial plants, construction projects, and bridge work. All our cranes come with certified operators.",
      tags: ["High-Capacity", "Stable", "Precision"]
    },
    {
      icon: <Factory className="h-8 w-8 text-amber-500" />,
      title: "Hydra (Pick & Carry) Rental",
      description: "Efficient on-site lifting, equipment shifting, and material handling solutions. Perfect for moving heavy loads across factory floors.",
      tags: ["Versatile", "Fast", "Mobile"]
    },
    {
      icon: <Building2 className="h-8 w-8 text-amber-500" />,
      title: "Industrial Machinery Installation",
      description: "Specialized lifting and positioning for steel plant machinery, heavy equipment, and factory installations.",
      tags: ["Heavy Duty", "Plant Support", "Expert Handling"]
    },
    {
      icon: <Pickaxe className="h-8 w-8 text-amber-500" />,
      title: "Infrastructure Projects",
      description: "Professional lifting support for highways, bridges, metro, and large-scale public sector construction projects.",
      tags: ["Bridges", "Highways", "Public Sector"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-block rounded-lg bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-600 dark:text-amber-500">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Heavy-Duty Lifting <span className="text-zinc-500 dark:text-zinc-400">Solutions</span>
          </h2>
          <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-lg">
            Reliable, safe, and efficient crane services tailored for industrial and infrastructure excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 transition-all hover:-translate-y-2 hover:shadow-xl dark:shadow-amber-500/5"
            >
              <div className="mb-6 inline-block rounded-xl bg-zinc-100 dark:bg-zinc-900 p-3 transition-colors group-hover:bg-amber-500/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white transition-colors group-hover:text-amber-500">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex}
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
