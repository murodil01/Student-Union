import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // default desktop
  const containerRef = useRef(null);

  const slides = [
    {
      img: "https://picsum.photos/400/300?random=1",
      title: "Sport klubi",
      desc: "Sog'lom turmush tarzini targ'ib etuvchi klub, va sport musobaqalari orqali birlashtiradi.",
      btn: "Qo'shilish",
    },
    {
      img: "https://picsum.photos/400/300?random=2",
      title: "Robototexnika klubi",
      desc: "Texnologiya, dasturlash kodlash va innovatsiyalarni sevuvchilar uchun ijodiy klub.",
      btn: "Qo'shilish",
    },
    {
      img: "https://picsum.photos/400/300?random=3",
      title: "Sayohat klubi",
      desc: "Dunyo va mamlakatimizning go'zal maskanlarini birgalikda kashf etish uchun tashkil etilgan klub.",
      btn: "Qo'shilish",
    },
    {
      img: "https://picsum.photos/400/300?random=4",
      title: "Sport klubi",
      desc: "Sog'lom turmush tarzini targ'ib etuvchi klub, va sport musobaqalari orqali birlashtiradi.",
      btn: "Qo'shilish",
    },
    {
      img: "https://picsum.photos/400/300?random=5",
      title: "Robototexnika klubi",
      desc: "Texnologiya, dasturlash kodlash va innovatsiyalarni sevuvchilar uchun ijodiy klub.",
      btn: "Qo'shilish",
    },
    {
      img: "https://picsum.photos/400/300?random=6",
      title: "Sayohat klubi",
      desc: "Dunyo va mamlakatimizning go'zal maskanlarini birgalikda kashf etish uchun tashkil etilgan klub.",
      btn: "Qo'shilish",
    },
  ];

  // Responsiv slidesToShow
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // mobile
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // tablet
      } else {
        setSlidesToShow(3); // desktop
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxSlides = Math.max(0, slides.length - slidesToShow);

  const next = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlides));
  };

  return (
    <div className="max-w-[1220px] mx-auto px-4 py-[80px] text-center">
      <h3 className="text-4xl md:text-[60px]  font-bold">
        Bizning Klublarimiz
      </h3>
      <p className="text-base md:text-[20px] font-normal  max-w-[540px] my-[15px] mx-auto text-center">
        "Biz bilan birga o'zingizni rivojlantiring – bu yerda bilim, ijod va
        imkoniyatlar birlashadi."
      </p>

      {/* Carousel Container */}
      <div className="overflow-hidden mt-8" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
          }}
        >
          {slides.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-2"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <div className="flex flex-col text-left p-3 h-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[262px] object-cover rounded-[7px]"
                />
                <div className="flex flex-col flex-1">
                  <h3 className="text-[24px]  font-[400] mt-[24px]">
                    {item.title}
                  </h3>
                  <p className=" text-[18px] font-[400] mt-[8px] flex-1">
                    {item.desc}
                  </p>
                  <button className="mt-[16px] px-6 py-[12px] bg-[#F7F7F7] border border-[#F7F7F7] text-[#323232] text-[16px] font-[400] rounded-[24px] hover:bg-[#FFB21A] transition cursor-pointer w-full">
                    {item.btn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom controls */}
      <div className="flex justify-between items-center mt-8">
        {/* Pagination dots (chap tomonda) */}
        <div className="flex gap-2">
          {Array.from({ length: maxSlides + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#FFB21A] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next (o'ng tomonda) */}
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#FFB21A] hover:border-[#FFB21A] hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#FFB21A] hover:border-[#FFB21A] hover:text-white transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
