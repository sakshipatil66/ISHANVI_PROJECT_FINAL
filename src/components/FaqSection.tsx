import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, PhoneCall, MessageSquare } from 'lucide-react';
import { FAQS_DATA, HOSTEL_INFO, FaqItem } from '../data/hostelData';

interface FaqSectionProps {
  onOpenEnquiry: (roomName?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEnquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-space bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="kicker-label justify-center mb-3">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span>TRANSPARENT ANSWERS</span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="heading-section text-[#102A1C]">
            Frequently Asked Questions
          </h2>
          <p className="text-lead mt-3">
            Everything students and parents need to know about living at ISHANVI Hostel & Accommodation in Ambegaon Bk, Pune.
          </p>
        </motion.div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq: FaqItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-[#EFEAE1] overflow-hidden shadow-xs hover:border-[#102A1C]/30 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5]/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="heading-card text-base sm:text-lg text-[#102A1C] pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#102A1C] text-white rotate-180' : 'bg-[#FAF8F5] text-[#102A1C]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#5A655F] leading-relaxed border-t border-[#EFEAE1]/50 pt-4 bg-[#FAF8F5]/30">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Contact Assistance Strip */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FAF8F5] border border-[#EFEAE1] text-center space-y-3">
          <h3 className="font-serif text-lg font-bold text-[#102A1C]">
            Still have a question or specific dietary need?
          </h3>
          <p className="text-xs text-[#718096] max-w-md mx-auto">
            Our admissions warden is available directly to help students and parents with room tours and tariff queries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${HOSTEL_INFO.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#102A1C] bg-white border border-[#EFEAE1] hover:border-[#102A1C] shadow-xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call Admissions: {HOSTEL_INFO.phonePrimary}</span>
            </a>
            <button
              onClick={() => onOpenEnquiry('Admissions Query')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#102A1C] hover:bg-[#1B3B2B] shadow-xs transition-colors cursor-pointer"
            >
              Submit an Online Query
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
