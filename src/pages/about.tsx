import DefaultLayout from "@/layouts/default";
import { 
  SiLinkedin, 
  SiPython, 
  SiReact, 
  SiFastapi, 
  SiGoogleearthengine 
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { LuGraduationCap, LuCode, LuThermometerSun, LuSatellite } from "react-icons/lu";

export default function AboutMePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center min-h-[90vh] px-6 py-20">
        
        {/* Profile Header */}
        <div className="relative mb-10 group">
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500 to-emerald-500 p-[2px] rotate-3 group-hover:rotate-6 transition-transform">
            <div className="w-full h-full rounded-3xl bg-slate-950 flex items-center justify-center -rotate-3 group-hover:-rotate-6 transition-transform">
              <LuCode className="text-5xl text-white" />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
            MSc Computing
          </div>
        </div>

        <h1 className="text-5xl font-extrabold tracking-tighter text-white mb-4">
          Sreerag Sathian
        </h1>

        <p className="text-zinc-400 text-lg max-w-xl text-center leading-relaxed mb-8">
          Software Engineer & Researcher based in Ireland. Specializing in bridging 
          <span className="text-white font-medium"> Cloud Computing</span> with 
          <span className="text-emerald-400 font-medium"> Remote Sensing</span> for climate impact analysis.
        </p>

        <div className="flex gap-4 mb-16">
          <a href="https://www.linkedin.com/in/sreerag-sathian-212305189/" target="_blank" className="p-3 rounded-full bg-zinc-900 border border-white/10 hover:border-blue-500 hover:text-blue-500 transition-all text-zinc-400">
            <SiLinkedin size={20} />
          </a>
          <a href="mailto:your-email@example.com" className="p-3 rounded-full bg-zinc-900 border border-white/10 hover:border-emerald-500 hover:text-emerald-500 transition-all text-zinc-400">
            <HiOutlineMail size={22} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
          {[
            { icon: <LuGraduationCap />, title: "Education", desc: "MSc Computing (SETU)", color: "text-blue-400" },
            { icon: <LuCode />, title: "Experience", desc: "3+ Years Industry", color: "text-emerald-400" },
            { icon: <LuSatellite />, title: "Interests", desc: "Remote Sensing", color: "text-purple-400" },
            { icon: <LuThermometerSun />, title: "Impact", desc: "Climate Science", color: "text-orange-400" },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm flex flex-col items-center text-center">
              <span className={`${item.color} text-2xl mb-3`}>{item.icon}</span>
              <h3 className="text-white font-semibold text-sm">{item.title}</h3>
              <p className="text-zinc-500 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Mini-Bar */}
        <div className="mt-16 flex items-center gap-8 text-zinc-600 grayscale hover:grayscale-0 transition-all">
          <SiPython size={24} />
          <SiGoogleearthengine size={24} />
          <SiFastapi size={24} />
          <SiReact size={24} />
        </div>
      </section>
    </DefaultLayout>
  );
}