import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  kicker: string;
  title: string;
  subtitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ kicker, title, subtitle }) => {
  return (
    <div className="pt-10 pb-4 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <div className="kicker-label justify-center">
          <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          <span>{kicker}</span>
          <span className="w-5 h-[1.5px] bg-[#C5A059]" />
        </div>
        <h1 className="title-page text-[#102A1C]">
          {title}
        </h1>
        <p className="text-lead max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
};
