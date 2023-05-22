import Image from "next/image";
import { ReactElement } from "react";

export default function AboutMeSection({ logo, children }: { children: ReactElement; logo?: any }) {
  return (
    <section>
      <div className="description">{children}</div>
      {logo}
    </section>
  );
}
