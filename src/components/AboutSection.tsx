import React from 'react';
import { Sparkles, Heart, Sprout, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="section-space bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative leaf / botanical subtle motifs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#102A1C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Room Image with Arched Top Right matching Screenshot 074022 */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-tl-3xl rounded-tr-[5.5rem] rounded-bl-3xl rounded-br-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] group bg-[#FAF8F5]">
              <img
                src="/assets/ref/about_room.jpg"
                alt="Comfortable living room at ISHANVI"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle glow */}
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#C5A059]/15 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Content matching Screenshot 074022 */}
          <div className="lg:col-span-6 space-y-4">
            <div className="kicker-label">
              <span className="w-5 h-[1.5px] bg-[#C5A059]" />
              <span>ABOUT ISHANVI</span>
            </div>

            <h2 className="heading-section text-[#102A1C]">
              More Than Just <br className="hidden sm:block" />
              A Stay – A Better Tomorrow
            </h2>

            <p className="text-lead text-[#4A5568]">
              At Ishanvi Hostel & Accommodation, we provide a safe, comfortable and homely environment for students and working professionals. Our focus is on creating a community where you can live, learn and grow with confidence.
            </p>

            {/* 3 Pillars with gold outline icons matching Screenshot 074022 */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="space-y-2 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] mx-auto sm:mx-0 shadow-2xs">
                  <Sprout className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] leading-snug">
                  Comfortable Living
                </h4>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] mx-auto sm:mx-0 shadow-2xs">
                  <Heart className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] leading-snug">
                  Safe & Supportive Environment
                </h4>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#C5A059] mx-auto sm:mx-0 shadow-2xs">
                  <Sparkles className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-[#102A1C] leading-snug">
                  Community For Growth
                </h4>
              </div>
            </div>

            {/* Action button */}
            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="btn-primary group"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
