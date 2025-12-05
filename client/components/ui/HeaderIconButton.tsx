import { LucideIcon } from "lucide-react";
import React from "react";

interface HeaderIconButtonProps {
  icon: LucideIcon;
  isScrolled: boolean;
  label: string;
  onClick?: () => void;
  badge?: number;
  hidden?: boolean;
}

export default function HeaderIconButton({
  icon: Icon,
  isScrolled,
  label,
  onClick,
  badge,
  hidden = false,
}: HeaderIconButtonProps) {
  const iconClass = hidden ? "hidden" : "";
  const baseClass = `transition-all duration-300 ${iconClass} sm:flex items-center justify-center p-2 rounded-full hover:scale-110`;
  const colorClass = isScrolled
    ? "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
    : "text-white/70 hover:text-white hover:bg-white/10";

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${colorClass} relative`}
      aria-label={label}
    >
      <Icon size={18} className="sm:w-5 sm:h-5" />
      {badge !== undefined && (
        <span
          className={`absolute -top-1 -right-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-light ${
            isScrolled ? "bg-stone-900" : "bg-white/40"
          }`}
        >
          {badge}
        </span>
      )}
    </button>
  );
}
