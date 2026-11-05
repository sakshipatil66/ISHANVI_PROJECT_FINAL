import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/hostelData';

export const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevReview = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS_LIST.length - 1));
  };

  const nextReview = () => {
    setStartIndex((prev) => (prev < TESTIMONIALS_LIST.length - 1 ? prev + 1 : 0));
  };

  const visibleReviews = [
    TESTIMONIALS_LIST[startIndex % TESTIMONIALS_LIST.length],
    TESTIMONIALS_LIST[(startIndex + 1) % TESTIMONIALS_LIST.length],
    TESTIMONIALS_LIST[(startIndex + 2) % TESTIMONIALS_LIST.length],
  ];

  return (
    <section id="testimonials" className="section-space bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="kicker-label mb-2">
              <span className="w-5 h-[1.5px] bg-[#C5A059]" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="heading-section text-[#102A1C]">
              What Our Residents Say
            </h2>
          </div>

          {/* Navigation Controls matching reference screenshot */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={prevReview}
              className="w-9 h-9 rounded-full border border-[#EFEAE1] bg-white text-[#102A1C] hover:bg-[#F4EFE6] flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextReview}
              className="w-9 h-9 rounded-full border border-[#EFEAE1] bg-white text-[#102A1C] hover:bg-[#F4EFE6] flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleReviews.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EFEAE1] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
            >
              <p className="text-sm text-[#4A5568] leading-relaxed italic">
                "{t.quote}"
              </p>

              <div className="pt-3 border-t border-[#EFEAE1]/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EFEAE1] flex items-center justify-center text-[#102A1C] shrink-0 font-bold text-xs">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102A1C]">{t.author}</h4>
                    <p className="text-xs text-[#718096]">{t.role} · {t.roomType}</p>
                  </div>
                </div>

                <div className="flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#DFB76C] text-[#DFB76C]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
