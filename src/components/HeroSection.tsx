import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowRight, ShieldCheck, Heart, MapPin, Bed, Wifi, Utensils, Users, Building, Sparkles, ChevronDown } from 'lucide-react';
import { HOSTEL_INFO, FLOATING_FEATURES } from '../data/hostelData';

interface HeroSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
  onExploreRooms?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, onExploreRooms }) => {
  const [activeHeroView, setActiveHeroView] = useState<'resident' | 'campus'>('resident');

  const getFloatingIcon = (name: string) => {
    switch (name) {
      case 'Bed':
        return <Bed className="w-5 h-5 text-[#C5A059]" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-[#C5A059]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#C5A059]" />;
      case 'Shield':
        return <ShieldCheck className="w-5 h-5 text-[#C5A059]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#C5A059]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  const scrollToNext = () => {
    const el = document.getElementById('about');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-6 pb-16 lg:pt-12 lg:pb-20 bg-[#FDFBF7] overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#102A1C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Kicker with golden accent line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="kicker-label"
            >
              <span className="w-8 h-[1.5px] bg-[#C5A059]" />
              <span>{HOSTEL_INFO.heroKicker}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="title-page text-[#102A1C]"
            >
              Premium <br />
              Hostel & <br />
              Accommodation
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lead max-w-xl"
            >
              {HOSTEL_INFO.heroSubtitle}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <button
                onClick={() => onOpenEnquiry()}
                className="btn-primary group"
              >
                <MessageSquare className="w-4 h-4 text-[#DFB76C]" />
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {onExploreRooms && (
                <button
                  onClick={onExploreRooms}
                  className="btn-secondary"
                >
                  <span>Explore Rooms</span>
                </button>
              )}
            </motion.div>

            {/* 3 Trust Badges from Reference */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-[#EFEAE1]"
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#102A1C] mb-1">
                  <ShieldCheck className="w-5 h-5 text-[#102A1C]" />
                </div>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] leading-tight">
                  Safe & Secure Environment
                </h4>
                <p className="text-caption">24x7 guarded premises</p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#102A1C] mb-1">
                  <Heart className="w-5 h-5 text-[#102A1C]" />
                </div>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] leading-tight">
                  Homely & Friendly Community
                </h4>
                <p className="text-caption">Supportive living culture</p>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#102A1C] mb-1">
                  <MapPin className="w-5 h-5 text-[#102A1C]" />
                </div>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] leading-tight">
                  Prime Location & Easy Access
                </h4>
                <p className="text-caption">Near ISMS Sankalp</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Image Block with River Smile Mask Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#FAF8F5] to-[#EAE3D2] border-4 border-white aspect-[4/3] sm:aspect-[14/11] group">
              <AnimatePresence mode="wait">
                {activeHeroView === 'resident' ? (
                  <motion.img
                    key="resident"
                    src="/assets/ref/hero_student.jpg"
                    alt="Student resident at ISHANVI Hostel"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <motion.img
                    key="campus"
                    src="/assets/images/hero_ishanvi_facade_1793879538556.jpg"
                    alt="ISHANVI Hostel campus building"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Watermark Logo badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl shadow-md border border-[#EFEAE1]">
                <img
                  src={HOSTEL_INFO.logoUrl}
                  alt="ISHANVI Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Perspective Switcher */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 p-1 bg-black/50 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px]">
                <button
                  onClick={() => setActiveHeroView('resident')}
                  className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                    activeHeroView === 'resident'
                      ? 'bg-[#C5A059] text-white shadow-sm'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  Resident Life
                </button>
                <button
                  onClick={() => setActiveHeroView('campus')}
                  className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                    activeHeroView === 'campus'
                      ? 'bg-[#C5A059] text-white shadow-sm'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  Campus View
                </button>
              </div>

              {/* Bottom Location Inscription */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-end justify-between">
                <div>
                  <p className="font-serif font-bold text-sm text-[#DFB76C]">Near ISMS Sankalp Business School</p>
                  <p className="text-[11px] text-slate-200">Ambegaon Bk, Pune - 411066</p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-full text-[10px] text-white/90">
                  <Sparkles className="w-3 h-3 text-[#DFB76C]" />
                  Admissions Open
                </span>
              </div>
            </div>

            {/* Corner Decorative Glow */}
            <div className="absolute -top-8 -right-8 w-44 h-44 bg-[#C5A059]/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-[#102A1C]/15 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* Floating Feature Strip matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 lg:mt-16 bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-[#EFEAE1]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#EFEAE1]/60">
            {FLOATING_FEATURES.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className={`flex flex-col items-center text-center justify-center p-2 cursor-default ${
                  idx > 0 ? 'sm:pl-4' : ''
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center mb-2 shadow-xs">
                  {getFloatingIcon(item.icon)}
                </div>
                <span className="text-xs font-semibold text-[#102A1C] leading-snug">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="flex justify-center pt-8">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-1 text-[11px] font-semibold text-[#718096] hover:text-[#102A1C] transition-colors cursor-pointer group"
          aria-label="Scroll down to About section"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 text-[#C5A059] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
