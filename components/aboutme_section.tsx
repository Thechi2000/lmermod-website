import Image from 'next/image'
import { ReactElement } from 'react';

export default function AboutMeSection({logo, reversed, children}: {children: ReactElement; logo?: {src: any, alt: string}; reversed: boolean}){
    const img = logo === undefined ? null : <Image className='logo' src={logo.src} alt={logo.alt} />;
    return (
        <section>
          {reversed ? img : null}
          <div className="description">{children}</div>
          {reversed ? null : img}          
        </section>
    )
}