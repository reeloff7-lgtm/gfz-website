import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const reviews = [
  {
    id: 1,
    name: "Rahul Mehta",
    review:
      "Got my Steam key quickly after payment confirmation. Smooth process and the prices are way better than other sites!",
    rating: 3,
  },
  {
    id: 2,
    name: "Priya Sharma",
    review:
      "At first I was unsure, but once I completed the payment and got the confirmation, the key was delivered instantly. Very reliable!",
    rating: 4,
  },
  {
    id: 3,
    name: "Arjun Singh",
    review:
      "The service is trustworthy. They deliver only after payment confirmation, which actually makes it feel more secure. Totally worth it!",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Patel",
    review:
      "Quick and hassle-free! I got my key right after payment was confirmed. Will definitely buy again from here.",
    rating: 3,
  },
  {
    id: 5,
    name: "Rajkumar",
    review:
      "S3xy Bhaii !! Got my games within 2 hrs after confirming the payment",
    rating: 5,
  },

];

function ReviewCard({ review }) {
  return (
    <div className="bg-zinc-100 rounded-2xl shadow-md p-6 h-full flex flex-col justify-between text-center min-h-[250px]">
      <h3 className="text-lg font-semibold">{review.name}</h3>
      <p className="text-gray-700 my-3">{review.review}</p>
      <div className="flex justify-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < review.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ReviewSlider() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((r) => (
          <SwiperSlide key={r.id} className="flex justify-center">
            <ReviewCard review={r} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
