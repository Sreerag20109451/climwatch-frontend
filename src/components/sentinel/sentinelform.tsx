import { useState } from "react";
import { Button } from "@heroui/button";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import { PiArrowFatLineDown   } from "react-icons/pi";

const REGIONS = ["Himalayas", "Alps", "Greenland", "Antarctic"];
const MASKS = ["no masks" , "mask clouds"];
const THRESHOLDS = ["no threshold" , "apply thresholds" ]

export function SentinelForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    region: "",
    mask: "",
    threshold : ""
  });

  const [hideController, setHideController] = useState(false)

  const hidecontrollerfunc = () => {

        setHideController(true)
  }

  const opencontrollerfunc = () => {

    setHideController(false)
  }


  return (

    <div className="flex flex-col gap-y-2 items-center">
        {hideController && formData.threshold  &&
      <div id='hide-icon'><button onClick={opencontrollerfunc} className="lg:hidden"> <PiArrowFatLineDown /> </button></div>
      }
    { !hideController && <form className="flex flex-col gap-5 w-full text-white" onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
      
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


      {/* Mask Selection */}
      {formData.region && (
        <div className="flex flex-col gap-2 animate-in fade-in">
          <label className="text-xs font-semibold uppercase text-zinc-500">Snow Class Mask</label>
          <select
            value={formData.mask}
            onChange={(e) => setFormData({ ...formData, mask: e.target.value })}
            className="bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-sm focus:border-emerald-500 outline-none"
          >
            <option value="">-- Select Masks --</option>
            {MASKS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      )}
         {formData.mask && (
        <div className="flex flex-col gap-2 animate-in fade-in">
          <label className="text-xs font-semibold uppercase text-zinc-500">Apply snow threshold</label>
          <select
            value={formData.threshold}
            onChange={(e) => setFormData({ ...formData, threshold: e.target.value })}
            className="bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-sm focus:border-emerald-500 outline-none"
          >
            <option value="">-- Set NDSI threshold --</option>
            {THRESHOLDS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      )}
   
      {formData.threshold && (
        <Button type="submit" className="mt-2 bg-white text-black font-bold rounded-xl h-10 hover:bg-zinc-200">
          Render Map
        </Button>
      )}
    </form>
    }
    {!hideController && formData.threshold  &&
      <div id='hide-icon'><button onClick={hidecontrollerfunc} className="lg:hidden"> <PiArrowFatLinesUpFill/> </button></div>
      }
    </div>
  );
}