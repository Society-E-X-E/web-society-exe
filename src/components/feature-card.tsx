import type { ElementType, ReactNode } from "react";

interface FeatureCardProps {
  icon: ElementType;
  eyebrow: string;
  title: string;
  children: ReactNode;
}
  
export function FeatureCard({
  icon: Icon,
  eyebrow,
  title,
  children,
}: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-[#11141A] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/35 hover:bg-[#11141A] sm:p-8">
      <div className="mb-9 flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-[#22D3EE]/20 bg-[#22D3EE]/[0.07] text-[#22D3EE] transition group-hover:bg-[#22D3EE]/[0.12]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#718083]">
          {eyebrow}
        </span>
      </div>
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#f0f4f4]">
        {title}
      </h3>
      <p className="max-w-lg text-sm leading-7 text-[#98a4a6]">{children}</p>
    </article>
  );
}

export default FeatureCard;