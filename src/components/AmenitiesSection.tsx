import React from 'react';
import { motion } from 'motion/react';
import {
  Wifi,
  Utensils,
  ShieldCheck,
  Shirt,
  Armchair,
  BookOpen,
  Dumbbell,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { AMENITIES_LIST } from '../data/hostelData';

interface AmenitiesSectionProps {
  isStandalonePage?: boolean;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ isStandalonePage = false }) => {
  const getAmenityIcon = (name: string) => {
    switch (name) {
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-[#C5A059]" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#C5A059]" />;
      case 'Shield':
        return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-[#C5A059]" />;
      case 'Sofa':
        return <Armchair className="w-6 h-6 text-[#C5A059]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#C5A059]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-[#C5A059]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#C5A059]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="amenities" className="section-space bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Screenshot 074113 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="kicker-label justify-center mb-2">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>AMENITIES</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            Everything You Need <br className="hidden sm:block" />
            For A Hassle-Free Stay
          </h2>
          {isStandalonePage && (
            <p className="mt-3 text-lead max-w-xl mx-auto">
              Every utility has been curated so you never have to worry about erratic Wi-Fi, food hygiene, or safety.
            </p>
          )}
        </motion.div>

        {/* 8 Amenities in an elegant row matching Screenshot 074113 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
          {AMENITIES_LIST.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center justify-center space-y-3 group cursor-default p-2"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-[#EFEAE1] shadow-2xs flex items-center justify-center group-hover:scale-110 group-hover:bg-[#102A1C] group-hover:border-[#102A1C] transition-all">
                {getAmenityIcon(item.iconName)}
              </div>
              <h3 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] leading-snug">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Extended Bento Showcase for Detailed View */}
        {isStandalonePage && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {AMENITIES_LIST.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-white border border-[#EFEAE1] shadow-sm flex items-start gap-4 hover:border-[#102A1C] transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] flex items-center justify-center shrink-0">
                  {getAmenityIcon(item.iconName)}
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#102A1C]">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-[#5A655F] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
