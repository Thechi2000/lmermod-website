import Image from "next/image";
import { ReactElement } from "react";

export default function AboutMeSection({
  logo,
  children,
}: {
  children: ReactElement;
  logo?: { src: any; alt: string };
}) {
  const img = logo === undefined ? null : <Image className="logo" src={logo.src} alt={logo.alt} />;
  return (
    <section>
      <div className="description">{children}</div>
      {img}
    </section>
  );
}
