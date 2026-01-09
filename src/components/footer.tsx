import { siteConfig } from "@/config/site";
import { Linkedin } from "lucide-react";

import {
  GithubIcon

} from "@/components/icons";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="h-full w-full flex flex-col gap-y-1 text-center justify-center items-center">
        
        {/* Left text */}
        <p className="text-slate-400 text-xs tracking-wide">
          Monitoring Earth. Interpreting Change.
        </p>

        {/* Center name */}
        <p className="text-slate-300 text-xs">
          © {new Date().getFullYear()} ·{" "}
          <span className=" text-white text-xs">
            Sreerag Sathian
          </span>
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.links.Linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition text-xs"
          >
            <Linkedin size={18} />
          </a>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition text-xs"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
