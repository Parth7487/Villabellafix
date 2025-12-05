import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function TrustBadge({
  icon: Icon,
  title,
  description,
}: TrustBadgeProps) {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center border border-stone-700">
          <Icon className="text-stone-100" size={28} />
        </div>
      </div>
      <h4 className="text-stone-900 font-light text-lg">{title}</h4>
      <p className="text-stone-600 text-sm font-light">{description}</p>
    </div>
  );
}
