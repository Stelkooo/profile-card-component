import Image from 'next/image';

import Card from 'public/images/bg-pattern-card.svg';

import Info from '@/components/info/info.component';
import Stats from '@/components/stats/stats.component';

export default function Home() {
  return (
    <main className="h-full">
      <div className="grid h-full place-content-center">
        <article className="w-full max-w-xs overflow-hidden rounded-[15px] bg-white shadow-profile lg:max-w-[350px]">
          <Image src={Card} alt="Profile Background" className="h-[140px]" />
          <div>
            <Info />
            <Stats />
          </div>
        </article>
      </div>
    </main>
  );
}
