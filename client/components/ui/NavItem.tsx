import { Link } from "react-router-dom";

interface NavItemProps {
  label: string;
  href: string;
  isScrolled: boolean;
  onClick?: () => void;
  mobile?: boolean;
}

export default function NavItem({
  label,
  href,
  isScrolled,
  onClick,
  mobile = false,
}: NavItemProps) {
  if (mobile) {
    return (
      <Link
        to={href}
        onClick={onClick}
        className={`block font-light text-sm uppercase tracking-wide py-2 sm:py-3 px-4 transition-all duration-300 rounded hover:pl-5 sm:hover:pl-6 ${
          isScrolled
            ? "text-stone-700 hover:text-stone-900 hover:bg-stone-100"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      to={href}
      className={`relative px-4 lg:px-6 py-3 font-light text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden group ${
        isScrolled ? "text-stone-700" : "text-white/80 hover:text-white"
      }`}
    >
      <span
        className={`absolute inset-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out ${
          isScrolled ? "bg-stone-100" : "bg-white/10"
        }`}
      />
      <span className="relative block">{label}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-stone-600 to-stone-500 group-hover:w-full transition-all duration-500 ease-out" />
    </Link>
  );
}
