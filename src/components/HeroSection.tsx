import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Heart,
  MapPin,
  Bed,
  Wifi,
  Utensils,
  Users,
  ChevronLeft,
  ChevronRight,
  Phone,
  Maximize2,
  ExternalLink,
} from 'lucide-react';
import { HOSTEL_INFO, FLOATING_FEATURES } from '../data/hostelData';

interface HeroSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
  onExploreRooms?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, onExploreRooms }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const totalSlides = 2;
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay every 6 seconds, pause on hover
  useEffect(() => {
    if (!isPaused) {
      slideTimerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [isPaused, nextSlide]);

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

  return (
    <section
      className="relative pt-3 pb-8 sm:pt-5 sm:pb-10 bg-[#FDFBF7] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Glow */}
      <div className="absolute top-4 right-1/4 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-4 left-10 w-80 h-80 bg-[#102A1C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Sliding Carousel Frame */}
        <div className="relative min-h-[460px] sm:min-h-[480px] lg:min-h-[500px] flex items-center">
          {/* Subtle Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous Hero Slide"
            className="absolute -left-2 sm:left-1 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-md border border-[#EFEAE1] text-[#102A1C] hover:bg-[#102A1C] hover:text-[#DFB76C] hover:border-[#102A1C] flex items-center justify-center shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Hero Slide"
            className="absolute -right-2 sm:right-1 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-md border border-[#EFEAE1] text-[#102A1C] hover:bg-[#102A1C] hover:text-[#DFB76C] hover:border-[#102A1C] flex items-center justify-center shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slides Container */}
          <div className="w-full relative overflow-hidden">
            <AnimatePresence mode="wait">
              {/* SLIDE 1: Interactive Website Hero (Screenshot 2026-11-06 074003.png) */}
              {currentSlide === 0 && (
                <motion.div
                  key="slide-0"
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left Column Text & Actions */}
                    <div className="lg:col-span-6 space-y-4">
                      {/* Kicker */}
                      <div className="kicker-label">
                        <span className="w-6 h-[1.5px] bg-[#C5A059]" />
                        <span>{HOSTEL_INFO.heroKicker}</span>
                      </div>

                      {/* Display Heading */}
                      <h1 className="title-page text-[#102A1C]">
                        Premium Hostel & <br className="hidden sm:block" />
                        Accommodation
                      </h1>

                      {/* Subtitle */}
                      <p className="text-lead max-w-lg text-[#4A5568]">
                        {HOSTEL_INFO.heroSubtitle}
                      </p>

                      {/* Action Button */}
                      <div className="pt-1 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => onOpenEnquiry()}
                          className="btn-primary group !py-2.5 !px-6 text-xs font-semibold shadow-md"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-[#DFB76C]" />
                          <span>Enquire Now</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </button>

                        <button
                          onClick={nextSlide}
                          className="btn-secondary text-xs"
                        >
                          <span>View Official Brochure Flyer →</span>
                        </button>
                      </div>

                      {/* 3 Trust Badges exactly matching Screenshot 074003 */}
                      <div className="pt-3 grid grid-cols-3 gap-3 max-w-lg">
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                          <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#102A1C] shadow-2xs">
                            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                          </div>
                          <h4 className="font-serif text-xs font-bold text-[#102A1C] leading-tight">
                            Safe & Secure <br /> Environment
                          </h4>
                        </div>

                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                          <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#102A1C] shadow-2xs">
                            <Heart className="w-4 h-4 text-[#C5A059]" />
                          </div>
                          <h4 className="font-serif text-xs font-bold text-[#102A1C] leading-tight">
                            Homely & Friendly <br /> Community
                          </h4>
                        </div>

                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                          <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#102A1C] shadow-2xs">
                            <MapPin className="w-4 h-4 text-[#C5A059]" />
                          </div>
                          <h4 className="font-serif text-xs font-bold text-[#102A1C] leading-tight">
                            Prime Location <br /> & Easy Access
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Student Resident Photo in front of ISHANVI 3D reception emblem */}
                    <div className="lg:col-span-6 relative">
                      <div
                        onClick={() => setIsLightboxOpen(true)}
                        className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#FAF8F5] to-[#EAE3D2] border-2 border-white aspect-[4/3] sm:aspect-[14/11] group cursor-pointer"
                      >
                        <img
                          src="/assets/ref/hero_student.jpg"
                          alt="Student resident at ISHANVI Hostel"
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
                          referrerPolicy="no-referrer"
                        />
                        {/* Soft left gradient blend matching Screenshot 074003 */}
                        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FDFBF7]/80 via-[#FDFBF7]/25 to-transparent pointer-events-none hidden sm:block" />

                        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-[11px] flex items-center gap-2">
                          <span className="font-semibold">Slide 1 of 2: Resident Life & Reception</span>
                          <span className="text-[#DFB76C] text-[10px]">Click to Zoom</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* SLIDE 2: Official Property Showcase Banner (WhatsApp Image 2026-11-05 at 11.09.47 AM.jpeg) */}
              {currentSlide === 1 && (
                <motion.div
                  key="slide-1"
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#DFB76C]/60 shadow-2xl bg-[#0D2619] group">
                    {/* The Original Uploaded Official Flyer Image */}
                    <img
                      src="/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.09.47_AM_48669e14.jpeg"
                      alt="ISHANVI Hostel & Accommodation Official Brochure & Rooms Showcase"
                      className="w-full h-auto max-h-[520px] object-contain sm:object-cover bg-[#FFFDF9] mx-auto block cursor-pointer transition-transform duration-700 group-hover:scale-[1.01]"
                      onClick={() => setIsLightboxOpen(true)}
                      referrerPolicy="no-referrer"
                    />

                    {/* Interactive Floating Quick Actions on the Flyer */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 pointer-events-auto">
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#102A1C]/90 text-white text-xs font-semibold border border-[#DFB76C] shadow-md hover:bg-[#1B3B2B] transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#DFB76C]" />
                          <span>Call: {HOSTEL_INFO.phonePrimary}</span>
                        </a>

                        <button
                          onClick={() => onOpenEnquiry('Official Flyer')}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#DFB76C] text-[#102A1C] text-xs font-bold shadow-md hover:bg-[#EAC885] transition-colors cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Enquire for Room</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setIsLightboxOpen(true)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs hover:bg-black/90 transition-colors"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-[#DFB76C]" />
                          <span className="hidden sm:inline">Inspect High-Res</span>
                        </button>

                        <button
                          onClick={prevSlide}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 text-[#102A1C] text-xs font-semibold hover:bg-white transition-colors"
                        >
                          <span>← Back to Slide 1</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Indicators (Dots & Labels) */}
        <div className="flex items-center justify-center gap-2.5 mt-5">
          <button
            onClick={() => setCurrentSlide(0)}
            className={`transition-all duration-300 rounded-full cursor-pointer flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold ${
              currentSlide === 0
                ? 'bg-[#102A1C] text-white shadow-sm'
                : 'bg-[#FAF8F5] text-[#718096] hover:text-[#102A1C] border border-[#EFEAE1]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${currentSlide === 0 ? 'bg-[#DFB76C]' : 'bg-[#CBD5E0]'}`} />
            <span>01 · Resident Life (Screenshot 074003)</span>
          </button>

          <button
            onClick={() => setCurrentSlide(1)}
            className={`transition-all duration-300 rounded-full cursor-pointer flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold ${
              currentSlide === 1
                ? 'bg-[#102A1C] text-white shadow-sm'
                : 'bg-[#FAF8F5] text-[#718096] hover:text-[#102A1C] border border-[#EFEAE1]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${currentSlide === 1 ? 'bg-[#DFB76C]' : 'bg-[#CBD5E0]'}`} />
            <span>02 · Official Property Flyer (WhatsApp Image)</span>
          </button>
        </div>

        {/* Floating Feature Strip matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-[#EFEAE1]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EFEAE1]/60">
            {FLOATING_FEATURES.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center justify-center p-1.5 cursor-default ${
                  idx > 0 ? 'sm:pl-3' : ''
                }`}
              >
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center mb-1.5 shadow-2xs">
                  {getFloatingIcon(item.icon)}
                </div>
                <span className="text-[11px] font-semibold text-[#102A1C] leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for Full Image Inspection */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="max-w-5xl max-h-[92vh] flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={
                currentSlide === 0
                  ? '/assets/ref/hero_student.jpg'
                  : '/assets/aistudio/WhatsApp_Image_2026-11-05_at_11.09.47_AM_48669e14.jpeg'
              }
              alt="High resolution preview"
              className="max-w-full max-h-[78vh] rounded-xl object-contain shadow-2xl border border-white/20"
              referrerPolicy="no-referrer"
            />

            <div className="mt-3 text-center text-white space-y-2">
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#DFB76C]">
                {currentSlide === 0
                  ? 'Slide 1: Student Resident Life & Reception (Screenshot 074003)'
                  : 'Slide 2: ISHANVI Hostel Official Brochure Banner (WhatsApp Image)'}
              </h3>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}
                  className="px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-semibold"
                >
                  Switch to {currentSlide === 0 ? 'Slide 2 (Official Flyer)' : 'Slide 1 (Resident Life)'}
                </button>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="px-4 py-1.5 rounded-full bg-[#C5A059] text-white text-xs font-semibold cursor-pointer"
                >
                  Close Lightbox
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
