import { useState } from "react";
import { Button } from "@heroui/button";
import { LuTriangle } from "react-icons/lu";

// Dataset selection logic removed from here
const REGIONS = ["Global", "Himalayas", "Alps", "Greenland", "Antarctic"];
const QUALITY_PIXELS = ["default", "best", "good", "ok"];
const MASKS = ["default", "night", "ocean", "inland water", "cloud", "saturated", "all"];

export function ModisForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    region: "",
    quality: "",
    masks: ""
  });

  const isAggressiveQuality = ["best", "good", "ok"].includes(formData.quality);
  const isAggressiveMask = formData.masks !== "" && formData.masks !== "default";

  return (
    <form className="flex flex-col gap-5 w-full text-white" onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
      
      {/* Region Selection */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase text-zinc-500">Target Region</label>
        <select
          value={formData.region}
          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
          className="bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-sm focus:border-emerald-500 outline-none transition-all"
        >
          <option value="">-- Select region --</option>
          {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      {/* Quality Selection */}
      {formData.region && (
        <div className="flex flex-col gap-2 animate-in fade-in">
          <label className="text-xs font-semibold uppercase text-zinc-500">Pixel Quality</label>
          <div className="flex flex-wrap gap-2 p-2 bg-zinc-900/50 rounded-xl border border-white/5">
            {QUALITY_PIXELS.map((q) => (
              <label key={q} className="flex items-center gap-2 cursor-pointer p-1">
                <input
                  type="radio"
                  name="quality"
                  value={q}
                  checked={formData.quality === q}
                  onChange={(e) => setFormData({ ...formData, quality: e.target.value })}
                  className="accent-emerald-500"
                />
                <span className="text-xs capitalize">{q}</span>
              </label>
            ))}
          </div>
          {isAggressiveQuality && (
            <div className="flex items-start gap-2 p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-500/90">
              <LuTriangle className="mt-0.5 shrink-0 rotate-180" size={12} />
              <p className="text-[10px] leading-tight font-medium">Aggressive filtering will return less data points.</p>
            </div>
          )}
        </div>
      )}

      {/* Mask Selection */}
      {formData.quality && (
        <div className="flex flex-col gap-2 animate-in fade-in">
          <label className="text-xs font-semibold uppercase text-zinc-500">Snow Class Mask</label>
          <select
            value={formData.masks}
            onChange={(e) => setFormData({ ...formData, masks: e.target.value })}
            className="bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-sm focus:border-emerald-500 outline-none"
          >
            <option value="">-- Select Masks --</option>
            {MASKS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          {isAggressiveMask && (
            <div className="flex items-start gap-2 p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-500/90">
              <LuTriangle className="mt-0.5 shrink-0 rotate-180" size={12} />
              <p className="text-[10px] leading-tight font-medium">Class masks will reduce spatial coverage.</p>
            </div>
          )}
        </div>
      )}

      {formData.region && (
        <Button type="submit" className="mt-2 bg-white text-black font-bold rounded-xl h-10 hover:bg-zinc-200">
          Render Map
        </Button>
      )}
    </form>
  );
}