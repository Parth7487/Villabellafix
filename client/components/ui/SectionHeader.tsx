interface SectionHeaderProps {
  label?: string;
  heading: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  heading,
  description,
  center = true,
  className = "",
}: SectionHeaderProps) {
  const containerClass = center ? "text-center" : "";
  const maxWidthClass = center ? "max-w-2xl mx-auto" : "";

  return (
    <div className={`${containerClass} ${className}`}>
      {label && (
        <p className="text-xs tracking-widest font-light text-stone-600 uppercase mb-4">
          {label}
        </p>
      )}
      <h2 className="text-5xl font-light tracking-tight text-stone-900 mb-6">
        {heading}
      </h2>
      {description && (
        <p className={`text-lg text-stone-600 font-light ${maxWidthClass}`}>
          {description}
        </p>
      )}
    </div>
  );
}
