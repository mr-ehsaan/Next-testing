'use client';
import { motion, MotionProps } from 'framer-motion';

interface IAnimatedBox extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const animationVariant = {
  initial: { opacity: 0, y: 30 },
  inView: { opacity: 1, y: 0 },
};

export const AnimatedBox = ({
  children,
  delay = 0,
  className = '',
  ...rest
}: IAnimatedBox) => {
  return (
    <motion.div
      className={className}
      variants={animationVariant}
      initial='initial'
      whileInView='inView'
      transition={{ delay: delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
