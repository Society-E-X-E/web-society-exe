import type { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <article className="grid content-start px-0">
      <h3 className="mb-2 text-xl font-semibold text-slate-800">{title}</h3>
      <p className="font-normal">{children}</p>
    </article>
  );
}

export default InfoCard;