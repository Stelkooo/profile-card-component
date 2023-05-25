'use client';

import Image from 'next/image';

import { motion, Variants } from 'framer-motion';

import Card from 'public/images/bg-pattern-card.svg';

import Info from '@/components/info/info.component';
import Stats from '@/components/stats/stats.component';

export default function Home() {
  const mainVariants: Variants = {
    bgColor: {
      backgroundColor: ['hsl(185, 75%, 39%)', 'hsla(185, 75%, 39%, 0)'],
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };
  const articleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.main className="h-full">
      <div className="grid h-full place-content-center">
        <motion.article
          variants={articleVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xs overflow-hidden rounded-[15px] bg-white shadow-profile lg:max-w-[350px]"
        >
          <Image src={Card} alt="Profile Background" className="h-[140px]" />
          <div>
            <Info />
            <Stats />
          </div>
        </motion.article>
      </div>
    </motion.main>
  );
}
