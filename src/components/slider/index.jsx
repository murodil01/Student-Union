import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Minus } from "lucide-react";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // default desktop
  const containerRef = useRef(null);

  const slides = [
    {
      img: slider1,
      title: "Sport klubi",
      desc: "Sog'lom turmush tarzini targ'ib etuvchi klub, va sport musobaqalari orqali birlashtiradi.",
      btn: "A’zo bo’lish",
    },
    {
      img: slider2,
      title: "Robototexnika klubi",
      desc: "Texnologiya, dasturlash kodlash va innovatsiyalarni sevuvchilar uchun ijodiy klub.",
      btn: "A’zo bo’lish",
    },
    {
      img: slider3,
      title: "Sayohat klubi",
      desc: "Dunyo va mamlakatimizning go'zal maskanlarini birgalikda kashf etish uchun tashkil etilgan klub.",
      btn: "A’zo bo’lish",
    },
    {
      img: "https://picsum.photos/400/300?random=4",
      title: "Sport klubi",
      desc: "Sog'lom turmush tarzini targ'ib etuvchi klub, va sport musobaqalari orqali birlashtiradi.",
      btn: "A’zo bo’lish",
    },
    {
      img: "https://picsum.photos/400/300?random=5",
      title: "Robototexnika klubi",
      desc: "Texnologiya, dasturlash kodlash va innovatsiyalarni sevuvchilar uchun ijodiy klub.",
      btn: "A’zo bo’lish",
    },
    {
      img: "https://picsum.photos/400/300?random=6",
      title: "Sayohat klubi",
      desc: "Dunyo va mamlakatimizning go'zal maskanlarini birgalikda kashf etish uchun tashkil etilgan klub.",
      btn: "A’zo bo’lish",
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

  return (
    <div
      id="service"
      className="max-w-[1220px] mx-auto px-4 py-[100px] text-center"
    >
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
              <div className="flex flex-col text-left p-6 h-full border border-[#D1D5DB] rounded-[14px]">
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
                  <button className="mt-[16px] px-6 py-[12px] shadow-inner bg-[#F7F7F7] border border-[#F7F7F7] text-[#323232] text-[16px] font-[600] rounded-[24px] hover:bg-[#FFB21A] hover:border-[#FFB21A] transition cursor-pointer w-full">
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
        {/* Pagination raqam (chap tomonda) */}
        <div className="text-[16px] flex items-center gap-2 font-medium ">
          {currentSlide + 1} <Minus /> {slides.length}
        </div>

        {/* Prev / Next (o‘ng tomonda) */}
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
