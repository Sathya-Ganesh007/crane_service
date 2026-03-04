import { CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react";

export function About() {
  const values = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-amber-500" />,
      title: "Safety First",
      description: "Rigorous safety protocols and certified operators to ensure risk-free execution."
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      title: "On-Time Completion",
      description: "We understand industrial timelines and pride ourselves on punctuality."
    },
    {
      icon: <Award className="h-6 w-6 text-amber-500" />,
      title: "Reliable Solutions",
      description: "Over 15 years of trust in heavy lifting for prestigious government and private projects."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl">
              About <span className="text-amber-500">Ganesh Crane Service</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Ganesh Crane Service is a Bhilai-based crane and hydra rental agency with over 15 years of industry experience. We specialize in taking lifting contracts for factories, steel plants, and infrastructure projects.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              We provide equipment with skilled operators to handle your on-site shifting and heavy lifting needs across Chhattisgarh and surrounding regions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-500" />
                <span className="font-medium text-zinc-900 dark:text-white">Certified Operators</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-500" />
                <span className="font-medium text-zinc-900 dark:text-white">Modern Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-500" />
                <span className="font-medium text-zinc-900 dark:text-white">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-500" />
                <span className="font-medium text-zinc-900 dark:text-white">Risk Assessment</span>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-lg"
              >
                <div className="mt-1 bg-amber-500/10 p-2 rounded-lg">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-zinc-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
