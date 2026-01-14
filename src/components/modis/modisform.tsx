// components/ModisForm.tsx
import {  useState } from "react";
import { Button } from "@heroui/button";

interface ModisFormProps {
  onSubmit: (data: ModisParams) => void;
}

export interface ModisParams {
  dataset: string;
  region: string;
  quality: string;
  masks: string;
}

const DATASETS = ["Modis Snow Cover"];
const REGIONS = ["Global", "Himalayas", "Alps", "Greenland", "Antarctic"];
const QUALITY_PIXELS = ["default", "best", "good", "ok"];
const MASKS = ["default", "night", "ocean", "inland water", "cloud", "saturated", "all"];

export function ModisForm({ onSubmit }: ModisFormProps) {
  const [formData, setFormData] = useState<ModisParams>({
    dataset: "",
    region: "",
    quality: "",
    masks: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="flex flex-col gap-6 w-full max-w-md text-white" onSubmit={handleSubmit}>
      {/* Dataset Selection */}
      <div className="flex flex-col gap-2">
        <label className="text-sm">Select Dataset</label>
        <select
          value={formData.dataset}
          onChange={(e) => setFormData({ ...formData, dataset: e.target.value, region: "", quality: "", masks: "" })}
          className="bg-black border border-gray-500 rounded px-3 py-2"
        >
          <option value="">-- Select dataset --</option>
          {DATASETS.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      {/* Region Selection */}
      {formData.dataset && (
        <div className="flex flex-col gap-2">
          <label className="text-sm">Select Region</label>
          <select
            value={formData.region}
            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            className="bg-black border border-gray-500 rounded px-3 py-2"
          >
            <option value="">-- Select region --</option>
            {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      )}

      {/* Quality Selection (Radio) */}
      {formData.region && (
        <div className="flex flex-col gap-2">
          <label className="text-sm">Set Pixel Quality</label>
          <div className="flex flex-row md:flex-col gap-2">
            {QUALITY_PIXELS.map((q) => (
              <div key={q} className="text-sm flex flex-row gap-2 items-center">
                <input
                  type="radio"
                  name="quality"
                  value={q}
                  checked={formData.quality === q}
                  onChange={(e) => setFormData({ ...formData, quality: e.target.value })}
                />
                <span className="capitalize">{q}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mask Selection */}
      {formData.quality && (
        <div className="flex flex-col gap-2">
          <label className="text-sm">Select Masks</label>
          <select
            value={formData.masks}
            onChange={(e) => setFormData({ ...formData, masks: e.target.value })}
            className="bg-black border border-gray-500 rounded px-3 py-2"
          >
            <option value="">-- Select Masks --</option>
            {MASKS.map((m) => <option key={m} value={m} className="capitalize">{m}</option>)}
          </select>
        </div>
      )}

      {formData.region && (
        <Button type="submit" color="primary" className="mt-4">
          Update Map
        </Button>
      )}
    </form>
  );
}