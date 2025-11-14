import {
  IconCertificate,
  IconExperiences,
  IconHome,
  IconServices,
  IconStack,
  IconStudent,
} from "@/assets/icons";
import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type HeaderCurriculumProps = ComponentProps<"header">;

export function HeaderCurriculum({
  className,
  ...props
}: HeaderCurriculumProps) {
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
        <a href="#formacao" className="p-2" title="Formação">
          <IconStudent
            size={32}
            className="text-slate-50 hover:text-cyan-500"
          />
        </a>
        <a href="#experiencias" className="p-2" title="Experiências">
          <IconExperiences
            size={32}
            className="text-slate-50 hover:text-cyan-500"
          />
        </a>
        <a href="#stack" className="p-2" title="Tecnologias">
          <IconStack size={32} className="text-slate-50 hover:text-cyan-500" />
        </a>
        <a href="#certificados" className="p-2" title="Certificados">
          <IconCertificate
            size={32}
            className="text-slate-50 hover:text-cyan-500"
          />
        </a>
        <a href="#differences" className="p-2" title="Diferenciais">
          <IconServices
            size={32}
            className="text-slate-50 hover:text-cyan-500"
          />
        </a>
      </nav>
    </header>
  );
}
