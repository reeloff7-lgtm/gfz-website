import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const reels = [
  { id: 1, src: "/videos/reel1.mp4" },
  { id: 1, src: "/videos/reel2.mp4" },
];

export default function HorizontalReels() {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);

    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === swiper.activeIndex) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  };

  return (
    <div
      className="w-full mt-10 min-h-max bg-zinc-800 flex items-center justify-center"
    >
      {/* Wrapper with inset shadow */}
      <div className="relative w-[90%] md:w-[50%] h-[600px] rounded-3xl overflow-hidden">
  {/* Vignette Overlay */}
  <div className="pointer-events-none absolute inset-0 z-20">
    {/* Left shadow */}
    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[oklch(27.4%_0.006_286.033)]/100 to-transparent"></div>
    {/* Right shadow */}
    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[oklch(27.4%_0.006_286.033)]/100 to-transparent"></div>
  </div>

  {/* Swiper Content */}
  <Swiper
    slidesPerView={2.5}
    centeredSlides={true}
    spaceBetween={20}
    onSlideChange={handleSlideChange}
    onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
    className="w-full h-full relative z-10"
  >
    {reels.map((reel, index) => (
      <SwiperSlide key={reel.id} className="flex items-center justify-center">
        <div
          className={`w-full transition-all duration-300 rounded-xl overflow-hidden bg-black ${
            index === activeIndex ? "h-[600px]" : "h-[350px]"
          }`}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={reel.src}
            className="w-full h-full object-cover"
            loop
            playsInline
            muted
            controls
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  );
}
