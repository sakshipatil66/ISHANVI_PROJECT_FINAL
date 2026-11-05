import React from 'react';
import { MessageSquare, ArrowRight, Phone, MapPin } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface BottomCtaSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const BottomCtaSection: React.FC<BottomCtaSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-16 lg:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Bottom Card from Reference Screenshot */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FAF6ED] via-[#F4EFE6] to-[#EAE3D2] border border-[#EFEAE1] shadow-xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading, Subtitle, Enquire Button */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="heading-section text-[#102A1C]">
                Start Your Better <br />
                Tomorrow With Ishanvi
              </h2>

              <p className="text-lead">
                {HOSTEL_INFO.tagline}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry()}
                  className="btn-primary"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Room Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-[4/3] bg-white group">
                <img
                  src="/assets/ref/cta_room.jpg"
                  alt="Cozy room at ISHANVI"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Official Contact & Location Banner Strip matching Banner Image */}
        <div className="mt-8 bg-[#102A1C] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#DFB76C] text-[#102A1C] flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-[#DFB76C] font-semibold uppercase tracking-wider">
                Call Now for Enquiry
              </p>
              <a
                href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
                className="text-xl sm:text-2xl font-serif font-bold text-white hover:text-[#DFB76C] transition-colors"
              >
                {HOSTEL_INFO.phonePrimary}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left">
            <MapPin className="w-5 h-5 text-[#DFB76C] shrink-0" />
            <div className="text-xs text-slate-200">
              <p className="font-semibold text-white">Campus Location</p>
              <p>{HOSTEL_INFO.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
