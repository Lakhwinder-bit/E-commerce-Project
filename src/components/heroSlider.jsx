import { useEffect, useRef, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";

// Slides data
const slides = [
  {
    label: "Women",
    image: "/images/hero.png",
    bg: "#eef2f3",
    textTint: "rgba(0,0,0,0.06)",
  },
  {
    label: "Men",
    image: "/images/girl.png",
    bg: "#f3efe9",
    textTint: "rgba(0,0,0,0.08)",
  },
  {
    label: "Kids",
    image: "/images/hero2.png",
    bg: "#e8f1f2",
    textTint: "rgba(0,0,0,0.07)",
  },
];

function Home() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const swiperRef = useRef(null);

  // Background animation only
  useEffect(() => {
    gsap.to(containerRef.current, {
      backgroundColor: slides[active].bg,
      duration: 1.2,
      ease: "power2.inOut",
    });
  }, [active]);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background text */}
          <h1
            className="absolute inset-0 top-9 flex justify-center text-[120px] font-extrabold select-none pointer-events-none"
            style={{ color: slides[active].textTint }}
          >
            Ludhiana Hub
          </h1>

          {/* SWIPER */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActive(swiper.realIndex)}
            slidesPerView={1}
            centeredSlides
            loop
            speed={1200}
            className="relative z-10"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slide-inner flex justify-center items-center h-[560px]">
                  <img
                    src={slide.image}
                    alt={slide.label}
                    className="slide-image object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 bg-white shadow"
          >
            <MoveLeft />
          </button>

          <button
            onClick={() => swiperRef.current.slideNext()}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 bg-white shadow"
          >
            <MoveRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
