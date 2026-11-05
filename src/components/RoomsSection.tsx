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

  // Dedicated Rooms Page (Matching Screenshots 2 & 3)
  if (isStandalonePage) {
    return (
      <section className="py-12 lg:py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="kicker-label justify-center mb-2">
              <span className="w-5 h-[1.5px] bg-[#C5A059]" />
              <span>ACCOMMODATION OPTIONS</span>
              <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            </div>
            <h1 className="title-page text-[#102A1C]">
              Rooms Designed For Your Comfort
            </h1>
            <p className="mt-3 text-lead max-w-xl mx-auto">
              Explore our verified, clean, and comfortable living spaces in Ambegaon Bk, Pune.
            </p>
          </motion.div>

          {/* Room 1: Single Room (Image on Left, Text on Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10] bg-[#FAF8F5] group">
                <img
                  src={ROOMS_DATA[0].image}
                  alt="Single Room at ISHANVI Hostel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <div className="kicker-label">
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>{ROOMS_DATA[0].kicker}</span>
              </div>
              <h2 className="heading-section text-[#102A1C]">
                {ROOMS_DATA[0].name}
              </h2>
              <p className="text-lead">
                {ROOMS_DATA[0].description}
              </p>
              <p className="text-body-sm italic text-[#718096]">
                {ROOMS_DATA[0].priceNote}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry(ROOMS_DATA[0].name)}
                  className="btn-primary"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Room 2: Double / Sharing Room (Text on Left, Image on Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
              <div className="kicker-label">
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>{ROOMS_DATA[1].kicker}</span>
              </div>
              <h2 className="heading-section text-[#102A1C]">
                {ROOMS_DATA[1].name}
              </h2>
              <p className="text-lead">
                {ROOMS_DATA[1].description}
              </p>
              <p className="text-body-sm italic text-[#718096]">
                {ROOMS_DATA[1].priceNote}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry(ROOMS_DATA[1].name)}
                  className="btn-primary"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10] bg-[#FAF8F5] group">
                <img
                  src={ROOMS_DATA[1].image}
                  alt="Double / Sharing Room at ISHANVI Hostel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Room 3: Premium Room (Image on Left, Text on Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10] bg-[#FAF8F5] group">
                <img
                  src={ROOMS_DATA[2].image}
                  alt="Premium Room at ISHANVI Hostel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <div className="kicker-label">
                <span className="w-5 h-[1.5px] bg-[#C5A059]" />
                <span>{ROOMS_DATA[2].kicker}</span>
              </div>
              <h2 className="heading-section text-[#102A1C]">
                {ROOMS_DATA[2].name}
              </h2>
              <p className="text-lead">
                {ROOMS_DATA[2].description}
              </p>
              <p className="text-body-sm italic text-[#718096]">
                {ROOMS_DATA[2].priceNote}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry(ROOMS_DATA[2].name)}
                  className="btn-primary"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
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
