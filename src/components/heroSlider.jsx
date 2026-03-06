import { useEffect, useRef, useState } from "react";
import { Plus, MoveLeft, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";

// ================= SLIDES =================
const slides = [
  {
    id: 0,
    label: "Women",
    image: "/images/girl.png",
    bg: "#fff7ef",
  },
  {
    id: 1,
    label: "Men",
    image: "/images/hero.png",
    bg: "#fff7ef",
  },
  {
    id: 2,
    label: "Kids",
    image: "/images/kid-bg.png",
    bg: "#fff7ef",
  },
  {
    id: 3,
    label: "Gym",
    image: "/images/gym.png",
    bg: "#fff7ef",
  },
];

// ================= FEATURES =================
const features = [
  
  {
    title: "Women",
    slide: 0,
    subHadding:
      "Discover Your Perfect Look Crafted for Comfort and Confidence",
  },
  {
    title: "Men",
    slide: 1,
    subHadding: "Modern Fits. Timeless Appeal Upgrade Your Daily Style",
  },
  {
    title: "Kids",
    slide: 2,
    subHadding: "Bright Looks for Happy Kids Gentle Fabric, Big Smiles",
  },
  {
    title: "Gym Boys",
    slide: 3,
    subHadding: "Built for Sweat and Strength Move Freely, Perform Better",
  },
];

function Home() {
  const [active, setActive] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef(null);
  const swiperRef = useRef(null);
  const buttonsRef = useRef([]);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Background animation
  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      backgroundColor: slides[active],
      duration: 1.2,
      ease: "power2.inOut",
    });
  }, [active]);

  // Expand animation
  useEffect(() => {
    buttonsRef.current.forEach((btn, index) => {
      if (!btn) return;

      const content = btn.querySelector(".expand-content");

      if (openIndex === index) {
        gsap.to(btn, {
          width: isMobile ? 280 : 350,
          paddingTop: 24,
          paddingBottom: 10,
          duration: 0.8,
        });

        gsap.to(content, {
          height: 50,
          opacity: 1,
          marginTop: 12,
          duration: 0.6,
        });
      } else {
        gsap.to(btn, {
          width: isMobile ? 120 : 170,
          paddingTop: 16,
          paddingBottom: 16,
          duration: 0.5,
        });

        gsap.to(content, {
          height: 0,
          opacity: 0,
          marginTop: 0,
          duration: 0.4,
        });
      }
    });
  }, [openIndex, isMobile]);

  return (
    <section className="w-full">
      <div className="mx-auto px-4 md:px-10 py-10 md:py-14">
        <div
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden min-h-[520px] md:min-h-[640px]"
        >
          {/* ================= SWIPER ================= */}


    <div className="relative z-10">
    <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
              setActive(swiper.realIndex);
              setOpenIndex(swiper.realIndex);
            }}
              slidesPerView={1}
              centeredSlides
              loop
              speed={1200}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className=" slide-inner flex justify-center items-center h-[420px] md:h-[650px]">
                    <img
                      src={slide.image}
                      alt={slide.label}
                      className="slide-image max-h-[450px]   md:max-h-[700px] object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* // <Swiper
          //   onSwiper={(swiper) => (swiperRef.current = swiper)}
          //   onSlideChange={(swiper) => {
          //     setActive(swiper.realIndex);
          //     setOpenIndex(swiper.realIndex);
          //   }}
          //   slidesPerView={1}
          //   centeredSlides
          //   loop
          //   speed={1000}
          // >
          //   {slides.map((slide, index) => (
          //     <SwiperSlide key={index}>
          //       <div className="flex justify-center items-center h-[420px] md:h-[650px]">
          //         <img
          //           src={slide.image}
          //           alt={slide.label}
          //           className="max-h-[650px] h-[450px] md:h-[600px]  md:max-h-[800px] object-cover"
          //         />
          //       </div>
          //     </SwiperSlide>
          //   ))}
          // </Swiper> */}

          {/* ================= MOBILE ARROWS ================= */}

          <div className="absolute bottom-80 left-1/2 -translate-x-1/2  flex gap-4 justify-between w-full md:hidden z-40">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full bg-black/20 text-white flex items-center justify-center shadow-lg"
            >
              <MoveLeft size={20} className="stroke-black" />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full bg-black/20 text-white flex items-center justify-center shadow-lg"
            >
              <MoveRight size={20} className="stroke-black" />
            </button>
          </div>

          {/* ================= FEATURES ================= */}

          <div className="absolute bottom-6 left-1/2 md:-translate-x-2 -translate-x-1/2 md:left-8 md:top-1/2 md:-translate-y-1/2 z-30 space-y-3 md:space-y-4">
            {features.map((item, i) => {
              const isOpen = openIndex === i;

              // Mobile → show only active
              if (isMobile && !isOpen) return null;

              return (
                <button
                  ref={(el) => (buttonsRef.current[i] = el)}
                  key={i}
                  onClick={() => {
                     setOpenIndex(i);
  setActive(i);
  swiperRef.current?.slideToLoop(i);
                  }}
                  className="flex flex-col items-start justify-center
                  bg-black/20 backdrop-blur-xl hover:bg-black/30
                  text-black rounded-3xl overflow-hidden
                  w-[260px] md:w-[350px] px-6"
                >
                  <div className="flex w-full justify-between items-center">
                    <span className="font-bold text-lg">{item.title}</span>

                    <Plus
                      size={18}
                      className={`transition duration-300 ${
                        openIndex === i ? "opacity-0" : ""
                      }`}
                    />
                  </div>

                  <div className="expand-content text-sm md:text-md text-black overflow-hidden h-0 opacity-0">
                    {item.subHadding}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;