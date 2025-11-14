import { IconHome, IconMobile, IconSite } from "@/assets/icons";
import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type HeaderPortfolioProps = ComponentProps<"header">;

export function HeaderPortfolio({ className, ...props }: HeaderPortfolioProps) {
  return (
    <header
      className={twMerge(
        "sticky top-0 z-[999] flex items-center justify-center border-b-2 border-b-slate-50 bg-zinc-950 p-4",
        className,
      )}
      {...props}
    >
      <nav className="flex gap-2">
        <Link href="/" className="p-2">
          <IconHome size={32} className="text-slate-50 hover:text-cyan-500" />
        </Link>
        <a href="#front-end" className="p-2" title="Projetos Front-end">
          <IconSite size={32} className="text-slate-50 hover:text-cyan-500" />
        </a>
        <a href="#mobile" className="hidden p-2" title="Projetos Mobile">
          <IconMobile size={32} className="text-slate-50 hover:text-cyan-500" />
        </a>
      </nav>
    </header>
  );
}
