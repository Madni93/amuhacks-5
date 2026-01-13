import { useState, useEffect, useCallback } from 'react';

const HorizontalImageSlider = () => {
  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: { key: string; }) => {
      if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#F0EAD6] m-0 p-0 font-sans">
      
      <div 
        className="flex h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div 
            key={index} 
            className="h-full min-w-full flex-shrink-0"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover select-none"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#93E9BE]/20 via-transparent to-[#F0EAD6]/20 pointer-events-none" />
      
      <button
        onClick={goToPrevious}
        className="absolute left-10 top-1/2 z-50 -translate-y-1/2 rounded-full border-2 border-[#F0EAD6] bg-[#93E9BE]/30 p-5 text-[#F0EAD6] backdrop-blur-md transition-all hover:bg-[#93E9BE] hover:scale-110 active:scale-90 shadow-lg shadow-[#93E9BE]/20"
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-10 top-1/2 z-50 -translate-y-1/2 rounded-full border-2 border-[#F0EAD6] bg-[#93E9BE]/30 p-5 text-[#F0EAD6] backdrop-blur-md transition-all hover:bg-[#93E9BE] hover:scale-110 active:scale-90 shadow-lg shadow-[#93E9BE]/20"
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute left-12 top-12 z-50">
        <div className="flex items-center space-x-4">
          <div className="h-1 w-12 bg-[#93E9BE] rounded-full" />
          <h1 className="text-[#F0EAD6] text-sm font-black uppercase tracking-[0.5em] drop-shadow-md">
            AMU HACKS 5.0
          </h1>
        </div>
      </div>

      <div className="absolute bottom-12 w-full z-50 flex flex-col items-center space-y-8">
        <div className="flex items-center space-x-5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative flex items-center justify-center p-2"
            >
              <div className={`transition-all duration-700 rounded-full ${
                index === currentIndex 
                  ? 'w-12 h-1.5 bg-[#93E9BE]' 
                  : 'w-2 h-2 bg-[#F0EAD6]/60 hover:bg-[#F0EAD6]'
              }`} />
            </button>
          ))}
        </div>

        <div className="bg-[#93E9BE]/20 backdrop-blur-xl border border-[#F0EAD6]/30 px-8 py-3 rounded-full flex items-center space-x-6">
           <span className="text-[#F0EAD6] text-xs font-bold uppercase tracking-widest">Slide</span>
           <div className="flex items-baseline space-x-1">
             <span className="text-[#F0EAD6] text-2xl font-bold">{currentIndex + 1}</span>
             <span className="text-[#93E9BE] text-sm">/</span>
             <span className="text-[#F0EAD6]/70 text-sm font-medium">{images.length}</span>
           </div>
        </div>
      </div>

      <div className="absolute inset-6 border-[0.5px] border-[#F0EAD6]/20 pointer-events-none rounded-xl" />
    </div>
  );
};

export default HorizontalImageSlider;