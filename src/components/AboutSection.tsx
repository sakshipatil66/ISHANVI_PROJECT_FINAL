import React from 'react';
import { Home, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="section-space bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Room Image matching reference */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] group">
              <img
                src="/assets/ref/about_room.jpg"
                alt="Comfortable living room at ISHANVI"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle glow */}
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#C5A059]/15 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Content matching reference */}
          <div className="lg:col-span-6 space-y-6">
            <div className="kicker-label">
              <span className="w-5 h-[1.5px] bg-[#C5A059]" />
              <span>ABOUT ISHANVI</span>
            </div>

            <h2 className="heading-section text-[#102A1C]">
              More Than Just <br className="hidden sm:block" />
              A Stay – A Better Tomorrow
            </h2>

            <p className="text-lead">
              At Ishanvi Hostel & Accommodation, we provide a safe, comfortable and homely environment for students and working professionals. Our focus is on creating a community where you can live, learn and grow with confidence.
            </p>

            {/* 3 Pillars matching reference */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#102A1C] mx-auto sm:mx-0">
                  <Home className="w-5 h-5 text-[#102A1C]" />
                </div>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C]">Comfortable Living</h4>
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#102A1C] mx-auto sm:mx-0">
                  <Heart className="w-5 h-5 text-[#102A1C]" />
                </div>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C]">Safe & Supportive Environment</h4>
              </div>

              <div className="space-y-1.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#102A1C] mx-auto sm:mx-0">
                  <Sparkles className="w-5 h-5 text-[#102A1C]" />
                </div>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C]">Community for Growth</h4>
              </div>
            </div>

            {/* Action button */}
            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="btn-primary"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
