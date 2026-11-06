import React from 'react';
import { motion } from 'motion/react';
import { Bed, Users, Crown, ArrowRight, MessageSquare, Check, Sparkles } from 'lucide-react';
import { ROOMS_DATA, RoomItem } from '../data/hostelData';

interface RoomsSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
  onViewAllRooms?: () => void;
  isStandalonePage?: boolean;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onOpenEnquiry,
  onViewAllRooms,
  isStandalonePage = false,
}) => {
  const getRoomIcon = (type: string) => {
    switch (type) {
      case 'bed':
        return <Bed className="w-5 h-5 text-[#C5A059]" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#C5A059]" />;
      case 'crown':
        return <Crown className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Bed className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  // Dedicated Rooms Page with Comprehensive Information
  if (isStandalonePage) {
    return (
      <section className="py-12 lg:py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="kicker-label justify-center mb-2">
              <span className="w-5 h-[1.5px] bg-[#C5A059]" />
              <span>ACCOMMODATION & SPECIFICATIONS</span>
              <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            </div>
            <h1 className="title-page text-[#102A1C]">
              Rooms Designed For Your Comfort
            </h1>
            <p className="mt-3 text-lead max-w-2xl mx-auto">
              Every room at ISHANVI is thoughtfully planned for students and working professionals in Ambegaon Bk, Pune—combining quiet study environments, orthopaedic bedding, and daily homestyle meals.
            </p>
          </motion.div>

          {/* Room 1: Single Room (Image on Left, Rich Specs on Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-white p-6 sm:p-10 rounded-3xl border border-[#EFEAE1] shadow-md"
          >
            <div className="lg:col-span-6 space-y-3">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-[#EFEAE1] aspect-[16/10] bg-[#FAF8F5] group">
                <img
                  src={ROOMS_DATA[0].image}
                  alt="Single Room at ISHANVI Hostel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#718096] px-1">
                <span>Verified Room Photo · Ambegaon Bk, Pune</span>
                <span className="font-semibold text-[#102A1C]">Private Lock & Key</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="kicker-label">
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>{ROOMS_DATA[0].kicker}</span>
              </div>
              <div>
                <h2 className="heading-section text-[#102A1C]">
                  {ROOMS_DATA[0].name}
                </h2>
                <p className="text-lead text-[#4A5568] mt-2">
                  {ROOMS_DATA[0].description}
                </p>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[10px] text-[#718096] uppercase font-bold">Area</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">{ROOMS_DATA[0].dimensions}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[10px] text-[#718096] uppercase font-bold">Occupancy</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">{ROOMS_DATA[0].occupancy}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[10px] text-[#718096] uppercase font-bold">Bathroom</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">Attached / Private</p>
                </div>
              </div>

              {/* Room Furnishings List */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-[#102A1C] uppercase tracking-wider">Room Furnishings & Features:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROOMS_DATA[0].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#4A5568]">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#EFEAE1] flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs italic text-[#718096]">
                  {ROOMS_DATA[0].priceNote}
                </p>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => onOpenEnquiry(ROOMS_DATA[0].name)}
                    className="btn-primary !py-2.5 !px-5 text-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://wa.me/917767058988?text=${encodeURIComponent(`Hello ISHANVI, I would like to inquire about Single Room pricing and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-[#FAF8F5] text-[#102A1C] border border-[#EFEAE1] hover:border-[#DFB76C] text-xs font-semibold transition-colors"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Room 2: Double / Sharing Room (Specs on Left, Image on Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-white p-6 sm:p-10 rounded-3xl border border-[#EFEAE1] shadow-md"
          >
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
              <div className="kicker-label">
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>{ROOMS_DATA[1].kicker}</span>
              </div>
              <div>
                <h2 className="heading-section text-[#102A1C]">
                  {ROOMS_DATA[1].name}
                </h2>
                <p className="text-lead text-[#4A5568] mt-2">
                  {ROOMS_DATA[1].description}
                </p>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[10px] text-[#718096] uppercase font-bold">Area</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">{ROOMS_DATA[1].dimensions}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[10px] text-[#718096] uppercase font-bold">Occupancy</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">{ROOMS_DATA[1].occupancy}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[10px] text-[#718096] uppercase font-bold">Bathroom</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">Attached Bath</p>
                </div>
              </div>

              {/* Room Furnishings List */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-[#102A1C] uppercase tracking-wider">Room Furnishings & Features:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROOMS_DATA[1].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#4A5568]">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#EFEAE1] flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs italic text-[#718096]">
                  {ROOMS_DATA[1].priceNote}
                </p>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => onOpenEnquiry(ROOMS_DATA[1].name)}
                    className="btn-primary !py-2.5 !px-5 text-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://wa.me/917767058988?text=${encodeURIComponent(`Hello ISHANVI, I would like to inquire about Double / Sharing Room pricing and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-[#FAF8F5] text-[#102A1C] border border-[#EFEAE1] hover:border-[#DFB76C] text-xs font-semibold transition-colors"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-3">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-[#EFEAE1] aspect-[16/10] bg-[#FAF8F5] group">
                <img
                  src={ROOMS_DATA[1].image}
                  alt="Double / Sharing Room at ISHANVI Hostel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#718096] px-1">
                <span>Verified Twin Room Photo · Ambegaon Bk, Pune</span>
                <span className="font-semibold text-[#102A1C]">Separate Wardrobes & Desks</span>
              </div>
            </div>
          </motion.div>

          {/* Room 3: Premium Room (Image on Left, Specs on Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-white p-6 sm:p-10 rounded-3xl border border-[#EFEAE1] shadow-md"
          >
            <div className="lg:col-span-6 space-y-3">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-[#EFEAE1] aspect-[16/10] bg-[#FAF8F5] group">
                <img
                  src={ROOMS_DATA[2].image}
                  alt="Premium Room at ISHANVI Hostel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#718096] px-1">
                <span>Verified Premium Suite · Ambegaon Bk, Pune</span>
                <span className="font-semibold text-[#102A1C]">Optimal Daylight & Balcony</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="kicker-label">
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>{ROOMS_DATA[2].kicker}</span>
              </div>
              <div>
                <h2 className="heading-section text-[#102A1C]">
                  {ROOMS_DATA[2].name}
                </h2>
                <p className="text-lead text-[#4A5568] mt-2">
                  {ROOMS_DATA[2].description}
                </p>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[10px] text-[#718096] uppercase font-bold">Area</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">{ROOMS_DATA[2].dimensions}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[10px] text-[#718096] uppercase font-bold">Occupancy</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">{ROOMS_DATA[2].occupancy}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE1] text-center">
                  <p className="text-[10px] text-[#718096] uppercase font-bold">Bathroom</p>
                  <p className="text-xs sm:text-sm font-bold text-[#102A1C] mt-0.5">Luxury Bath</p>
                </div>
              </div>

              {/* Room Furnishings List */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-[#102A1C] uppercase tracking-wider">Room Furnishings & Features:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROOMS_DATA[2].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#4A5568]">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#EFEAE1] flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs italic text-[#718096]">
                  {ROOMS_DATA[2].priceNote}
                </p>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => onOpenEnquiry(ROOMS_DATA[2].name)}
                    className="btn-primary !py-2.5 !px-5 text-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://wa.me/917767058988?text=${encodeURIComponent(`Hello ISHANVI, I would like to inquire about Premium Room pricing and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-[#FAF8F5] text-[#102A1C] border border-[#EFEAE1] hover:border-[#DFB76C] text-xs font-semibold transition-colors"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Informational Section 1: What is Included with Every Room */}
          <div className="rounded-3xl bg-[#FAF8F5] border border-[#EFEAE1] p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">TRANSPARENT AMENITIES</span>
              <h3 className="heading-section text-[#102A1C]">What's Included In Every Room Stay</h3>
              <p className="text-xs sm:text-sm text-[#718096]">
                All our rooms come with an all-inclusive package so students and parents face zero hidden expenses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 bg-white rounded-2xl border border-[#EFEAE1] shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center font-bold text-sm">🍽️</div>
                <h4 className="font-serif font-bold text-sm text-[#102A1C]">4 Homestyle Meals</h4>
                <p className="text-xs text-[#718096] leading-relaxed">
                  Breakfast with tea, wholesome lunch, evening snacks & high-tea, and hot balanced dinner prepared fresh daily.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#EFEAE1] shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center font-bold text-sm">⚡</div>
                <h4 className="font-serif font-bold text-sm text-[#102A1C]">Power & Wi-Fi Backup</h4>
                <p className="text-xs text-[#718096] leading-relaxed">
                  High-speed optical fiber internet across all rooms, supported by 100% generator power backup for study lamps and fans.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#EFEAE1] shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center font-bold text-sm">🧹</div>
                <h4 className="font-serif font-bold text-sm text-[#102A1C]">Daily Housekeeping</h4>
                <p className="text-xs text-[#718096] leading-relaxed">
                  Regular room sweeping, mopping, trash clearance, and washroom sanitation handled diligently by professional staff.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#EFEAE1] shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center font-bold text-sm">🛡️</div>
                <h4 className="font-serif font-bold text-sm text-[#102A1C]">24/7 Security & Warden</h4>
                <p className="text-xs text-[#718096] leading-relaxed">
                  Round-the-clock security guards at gates, continuous CCTV monitoring in corridors, and on-premise caring wardens.
                </p>
              </div>
            </div>
          </div>

          {/* Informational Section 2: 4-Step Room Booking Process */}
          <div className="rounded-3xl bg-white border border-[#EFEAE1] p-8 sm:p-12 space-y-8 shadow-sm">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">ADMISSION JOURNEY</span>
              <h3 className="heading-section text-[#102A1C]">Simple 4-Step Room Booking Process</h3>
              <p className="text-xs sm:text-sm text-[#718096]">
                Seamless, hassle-free admission for students and working professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1] space-y-2 relative">
                <span className="text-2xl font-serif font-bold text-[#C5A059]">01</span>
                <h4 className="font-serif font-bold text-sm text-[#102A1C]">Schedule Campus Tour</h4>
                <p className="text-xs text-[#718096] leading-relaxed">
                  Contact our desk or book via WhatsApp to visit the property in Ambegaon Bk, inspect rooms, and meet the warden.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1] space-y-2 relative">
                <span className="text-2xl font-serif font-bold text-[#C5A059]">02</span>
                <h4 className="font-serif font-bold text-sm text-[#102A1C]">Select Room & Bed</h4>
                <p className="text-xs text-[#718096] leading-relaxed">
                  Choose your preferred category (Single, Twin Sharing, or Premium Suite) based on study style and budget.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1] space-y-2 relative">
                <span className="text-2xl font-serif font-bold text-[#C5A059]">03</span>
                <h4 className="font-serif font-bold text-sm text-[#102A1C]">KYC & Verification</h4>
                <p className="text-xs text-[#718096] leading-relaxed">
                  Submit Aadhaar card copy, college ID / company letter, and parent emergency contact details for official registration.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE1] space-y-2 relative">
                <span className="text-2xl font-serif font-bold text-[#C5A059]">04</span>
                <h4 className="font-serif font-bold text-sm text-[#102A1C]">Move-in & Welcome</h4>
                <p className="text-xs text-[#718096] leading-relaxed">
                  Collect your room keys, Wi-Fi credentials, and mess pass. Settle into your fresh, sanitized room with ease.
                </p>
              </div>
            </div>
          </div>

          {/* Informational Section 3: Daily Mess & Hostel Timings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#EFEAE1] space-y-4">
              <h4 className="font-serif font-bold text-base text-[#102A1C]">Daily Dining & Mess Timings</h4>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-[#EFEAE1]">
                  <span className="font-semibold text-[#102A1C]">Warm Breakfast & Morning Chai</span>
                  <span className="text-[#C5A059] font-bold">7:30 AM – 9:30 AM</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#EFEAE1]">
                  <span className="font-semibold text-[#102A1C]">Homestyle Vegetarian Lunch</span>
                  <span className="text-[#C5A059] font-bold">12:30 PM – 2:30 PM</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#EFEAE1]">
                  <span className="font-semibold text-[#102A1C]">Evening High-Tea & Snacks</span>
                  <span className="text-[#C5A059] font-bold">5:00 PM – 6:30 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#102A1C]">Hot Balanced Dinner</span>
                  <span className="text-[#C5A059] font-bold">8:00 PM – 10:00 PM</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#EFEAE1] space-y-4">
              <h4 className="font-serif font-bold text-base text-[#102A1C]">Safety & Campus Guidelines</h4>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-[#EFEAE1]">
                  <span className="font-semibold text-[#102A1C]">Standard Gate Curfew Time</span>
                  <span className="text-[#102A1C] font-bold">10:00 PM (Extension with warden intimation)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#EFEAE1]">
                  <span className="font-semibold text-[#102A1C]">Parent & Visitor Visiting Hours</span>
                  <span className="text-[#102A1C] font-bold">9:00 AM – 8:00 PM (Guest Lounge)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#EFEAE1]">
                  <span className="font-semibold text-[#102A1C]">Quiet Study Hours in Corridors</span>
                  <span className="text-[#102A1C] font-bold">10:00 PM – 6:00 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#102A1C]">Warden Helpline & On-Premise Desk</span>
                  <span className="text-[#C5A059] font-bold">+91 77670 58988 (24/7 Available)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Homepage 3-Card Layout (Matching Screenshot 1)
  return (
    <section id="rooms" className="section-space bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="kicker-label mb-2">
              <span className="w-5 h-[1.5px] bg-[#C5A059]" />
              <span>OUR ROOMS</span>
            </div>
            <h2 className="heading-section text-[#102A1C]">
              Rooms Designed <br className="hidden sm:block" />
              For Your Comfort
            </h2>
          </div>

          {onViewAllRooms && (
            <button
              onClick={onViewAllRooms}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#102A1C] hover:text-[#C5A059] transition-colors cursor-pointer group self-start sm:self-auto"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </motion.div>

        {/* 3 Room Cards Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ROOMS_DATA.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => onOpenEnquiry(room.name)}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#EFEAE1] group cursor-pointer flex flex-col"
            >
              {/* Actual Room Photo with Hover Scale */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F5]">
                <img
                  src={room.image}
                  alt={`${room.name} at ISHANVI Hostel`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#102A1C] border border-[#EFEAE1] shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  <span>Ambegaon Bk, Pune</span>
                </div>
              </div>

              {/* Card Footer Bar matching screenshot */}
              <div className="p-4 sm:p-5 flex items-center justify-between bg-white border-t border-[#EFEAE1]/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center shrink-0 group-hover:bg-[#102A1C] transition-colors">
                    {getRoomIcon(room.iconType)}
                  </div>
                  <div>
                    <h3 className="heading-card text-[#102A1C] group-hover:text-[#1B3B2B] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-caption mt-0.5">{room.tagline}</p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#C5A059] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#102A1C] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
