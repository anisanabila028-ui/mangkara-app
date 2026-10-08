import React from "react";
import { MapPin, Star, Building } from "lucide-react";

interface CompanCardProps {
  name: string;
  category: string;
  location: string;
  rating?: number;
  imageUrl?: string;
  onClick?: () => void;
}

export default function CompanCard({
  name,
  category,
  location,
  rating = 5.0,
  imageUrl,
  onClick,
}: CompanCardProps) {
  return (
    <div
      onClick={onClick}
      className="w-full bg-white rounded-2xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition cursor-pointer flex gap-4 items-center"
    >
      <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <Building className="w-7 h-7 text-sky-500" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <span className="text-[10px] font-semibold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-md">
          {category}
        </span>
        <h3 className="font-bold text-sm text-slate-800 truncate mt-1">
          {name}
        </h3>
        <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {location}
          </span>
          <span className="flex items-center gap-1 text-amber-500 font-semibold">
            <Star size={12} className="fill-amber-400 stroke-amber-400" /> {rating}
          </span>
        </div>
      </div>
    </div>
  );
}