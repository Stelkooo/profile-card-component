import { useEffect, useRef } from 'react';

import { animate, useMotionValue, useTransform, motion } from 'framer-motion';

type Props = {
  to: number;
};

export default function Counter({ to }: Props) {
  const spanRef = useRef<HTMLSpanElement>(null);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    latest % 1 === 0 ? Math.round(latest) : Number(latest.toFixed(1))
  );

  useEffect(() => {
    animate(count, to, { duration: 2, delay: 0.25 });
  }, []);

  return <motion.span ref={spanRef}>{rounded}</motion.span>;
}
