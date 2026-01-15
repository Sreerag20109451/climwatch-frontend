import DefaultLayout from "@/layouts/default";
import { LuBrainCircuit, LuHistory, LuRadioTower, LuConstruction } from "react-icons/lu";

export default function RoadmapPage() {
  const steps = [
    { 
      icon: <LuBrainCircuit />, 
      title: "Sentinel-2 Integration", 
      status: "Currently Learning",
      desc: "Integrating high-res sentinel imagery for NDSI Calculation." 
    },
    { 
      icon: <LuHistory />, 
      title: "Regional Pixel Values", 
      status: "Yet to Implement",
      desc: "User can read the pixel values at any point in the map." 
    },
    { 
      icon: <LuRadioTower />, 
      title: "SAR Data Fusion", 
      status: "Yet to Implement",
      desc: "Combining Optical MODIS with Sentinel-1 Radar for all-weather monitoring." 
    }
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center min-h-[90vh] px-6">
        <div className="flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest">
          <LuConstruction /> Feature Roadmap
        </div>
        
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Advanced Analytics <br/> <span className="text-zinc-500 italic">In Development</span>
        </h2>

        <div className="space-y-4 w-full max-w-2xl">
          {steps.map((step, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-start gap-6 hover:bg-zinc-900/80 transition-all">
              <div className="p-4 rounded-xl bg-white/5 text-blue-400 text-2xl group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <span className="text-[9px] px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-400 font-mono">
                    {step.status}
                  </span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-zinc-600 text-xs animate-pulse">
            System status: Developing ML Backend...
        </p>
      </section>
    </DefaultLayout>
  );
}