import { useEffect, useRef, useState } from "react";
import { MoveLeft, MoveRight, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";

// ================= SLIDES =================
const slides = [
  
  {
    id:0,
    label: "Women",
    image: "/images/girl.png",
    bg: "#fff7ef",
    textTint: "#ffee4f",
  },
  {
     id:1,
    label: "Men",
    image: "/images/hero.png",
    bg: "#fff7ef",
    textTint: "#ffc35c",
  },
  {
     id:2,
    label: "Kids",
    image: "/images/kid-bg.png",
    bg: "#fff7ef",
    textTint: "rgba(255,255,255,0.05)",
  },
    {
       id:3,
    label: "Gym",
    image: "/images/gym.png",
    bg: "#fff7ef",
    textTint: "rgba(255,255,255,0.05)",
  },


];

// ================= FEATURES (mapped to slides) =================
const features = [
  { title: "Women", slide: 0, subHadding:"Discover Your Perfect LookCrafted for Comfort and Confidence", },
  
  { title: "Men", slide: 1, subHadding:"Modern Fits. Timeless AppealUpgrade Your Daily Style" },
  { title: "Kids", slide: 2, subHadding:"Bright Looks for Happy KidsGentle Fabric, Big Smiles" },
  { title: "Gym Boys", slide: 3, subHadding:"Built for Sweat and StrengthMove Freely, Perform Better" },
  
 
];

function Home() {
  const [active, setActive] = useState(0);
  const [openIndex, setOpenIndex] = useState(0); // first open by default
  const containerRef = useRef(null);
  const swiperRef = useRef(null);
  const buttonsRef = useRef([]);
  // 🔥 Background animation
  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      backgroundColor: slides[active].bg,
      duration:  1.2,
      ease: "power2.inOut",
    });
  }, [active]);

  useEffect(() => {
    buttonsRef.current.forEach((btn, index) => {
      if (!btn) return;

      const content = btn.querySelector(".expand-content");

      if (openIndex === index) {
        gsap.to(btn, {
          width: 350,
          paddingTop: 24,
          paddingBottom: 10,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.to(content, {
          height: 50,
          opacity: 1,
          marginTop: 12,
          duration: 0.6,
          ease: "power3.out",
        });
      } 
      else 
        {
        gsap.to(btn, {
          width: 170,
          paddingTop: 16,
          paddingBottom: 16,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(content, {
          height: 0,
          opacity: 0,
          marginTop: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });
  }, [openIndex]);
  return (
    <section className="w-full">
      <div className="mx-auto  px-10 py-14">
        <div
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden  min-h-[640px]"
        >
          {/* ================= BIG BACKGROUND TEXT ================= */}
          {/* <h1
            className="absolute inset-0 top-10 flex justify-center opacity-30 text-[120px] font-extrabold pointer-events-none select-none z-0"
            style={{ color: slides[active].textTint }}
          >
            Ludhiana Hub
          </h1> */}

          {/* ================= SWIPER ================= */}
          <div className="relative z-10">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActive(swiper.realIndex)}
              slidesPerView={1}
              centeredSlides
              loop
              speed={1200}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className=" slide-inner flex justify-center items-center h-[650px] ">
                    <img
                      src={slide.image}
                      alt={slide.label}
                      className="slide-image max-h-[700px]   object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ================= FLOATING FEATURES ================= */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30 space-y-4">
            {features.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <button
                  ref={(el) => (buttonsRef.current[i] = el)}
                  key={i}
                  onClick={() => {
                    setOpenIndex(i);
                    swiperRef.current?.slideToLoop(item.slide);
                  }}
                  className="flex flex-col items-start justify-center
             bg-black/20 backdrop-blur-xl hover:bg-black/30
             text-black rounded-3xl overflow-hidden w-[260px] px-6"
                >
                  {/* Top row */}
                  <div className="flex w-full justify-between items-center">
                    <span className="font-xl font-bold">{item.title}</span>

                    <Plus
                      size={18}
                      className={`transition-transform duration-300 ${
                        openIndex === i ? "opacity-0" : ""
                      }`}
                    />
                  </div>

                  {/* Expand content */}
                  <div className="expand-content text-start text-md text-black overflow-hidden h-0 opacity-0">
                    {item.subHadding}
                  </div>
                </button>
              );
            })}
          </div>

          {/* ================= CONTROLS ================= */}
        </div>
      </div>
    </section>
  );
}

export default Home;
