import React, { useState } from 'react';
import { ArrowRight, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/hostelData';

interface GallerySectionProps {
  onViewAllGallery?: () => void;
  isStandalonePage?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onViewAllGallery,
  isStandalonePage = false,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_PHOTOS.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
    }
  };

  return (
    <section id="gallery" className="section-space bg-[#102A1C] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="kicker-label text-[#DFB76C] mb-2">
              <span className="w-5 h-[1.5px] bg-[#DFB76C]" />
              <span>GALLERY</span>
            </div>
            <h2 className="heading-section text-white">
              A Glimpse Of Our Spaces
            </h2>
          </div>

          {onViewAllGallery && (
            <button
              onClick={onViewAllGallery}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DFB76C] hover:text-white transition-colors cursor-pointer group self-start sm:self-auto"
            >
              <span>View Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>

        {/* 5-Card Row matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-black/40 border border-white/10 shadow-md cursor-pointer hover:border-[#DFB76C] transition-all"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-xs font-bold leading-tight line-clamp-1">{photo.title}</p>
                <p className="text-[10px] text-white/70 line-clamp-1 mt-0.5">{photo.caption}</p>
              </div>

              <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_PHOTOS[lightboxIndex].image}
              alt={GALLERY_PHOTOS[lightboxIndex].title}
              className="max-w-full max-h-[70vh] rounded-lg object-contain shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="text-center mt-4 text-white space-y-1">
              <h3 className="font-serif text-xl font-bold text-[#DFB76C]">
                {GALLERY_PHOTOS[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {GALLERY_PHOTOS[lightboxIndex].caption}
              </p>
              <p className="text-[11px] text-slate-400 tabular-nums">
                {lightboxIndex + 1} of {GALLERY_PHOTOS.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
