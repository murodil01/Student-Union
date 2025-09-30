import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Minus } from "lucide-react";
import coding from "../../assets/coding.jpg";
import debate from "../../assets/debate.jpg";
import holiday from "../../assets/holiday.jpg";
import leadership from "../../assets/leadership.jpg";
import music from "../../assets/music.jpg";
import paint from "../../assets/paint.jpg";
import practica from "../../assets/practica.jpg";
import sport from "../../assets/sport.jpg";
import cyber from "../../assets/cyber.jpg";
import robotics from "../../assets/robotics.jpg";
import { Link } from "react-router-dom"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // default desktop
  const containerRef = useRef(null);

  const slides = [
    {
      img: sport,
      title: "Sport klubi",
      desc: "Sog‘lom tana — sog‘lom aql! Sport musobaqalari, jismoniy faollik va jamoaviy ruh orqali hayotingizga energiya qo‘shing.",
      btn: "A’zo bo’lish",
    },
    {
      img: robotics,
      title: "Robototexnika Klubi",
      desc: "G‘oyalaringizni harakatga keltiring! Texnologiya va muhandislikka qiziqqanlar uchun ilg‘or loyihalar, musobaqalar va yaratuvchanlik markazi.",
      btn: "A’zo bo’lish",
    },
    {
      img: coding,
      title: "Dasturlash Klubi",
      desc: "Kodni o‘rgan, kelajakni yaratsang! Yangi texnologiyalar, algoritmlar va dasturlash tillarini o‘rganib, IT olamida o‘zingizni toping.",
      btn: "A’zo bo’lish",
    },
    {
      img: holiday,
      title: "Sayohat Klubi",
      desc: "O‘zingizni kashf qilish yo‘lda boshlanadi.Tabiat qo‘ynida sayohatlar, yangi joylar va unutilmas sarguzashtlar sizni kutmoqda.",
      btn: "A’zo bo’lish",
    },
    {
      img: cyber,
      title: "Cyber Sport Klubi",
      desc: "O‘yin orqali g‘alabaga! E-sport musobaqalari, strategiya va jamoaviy o‘yinlar orqali raqamli dunyoda chempion bo‘ling.",
      btn: "A’zo bo’lish",
    },
    {
      img: practica,
      title: "Amaliy Ishlash va Loyiha Yaratish Klubi",
      desc: "G‘oyadan natijaga! Real loyihalar, startaplar va innovatsion yechimlar ustida ishlash uchun imkoniyat maydoni.",
      btn: "A’zo bo’lish",
    },
    {
      img: paint,
      title: "Dizayn va San’at Klubi",
      desc: "Ijodingizga rang qo‘shing! Grafik dizayn, rasm, video montaj va san’at orqali o‘zingizni ifoda eting.",
      btn: "A’zo bo’lish",
    },
    {
      img: debate,
      title: "Kitobxonlik va Munozara Klubi",
      desc: "So‘z kuchi – fikr erkinligi. Kitoblar muhokamasi, debatlar va intellektual o‘sish uchun maydon.",
      btn: "A’zo bo’lish",
    },
    {
      img: music,
      title: "Musiqa va Drama Klubi",
      desc: "Ijod va sahna sizni kutmoqda! Qo‘shiq, teatr va chiqishlar orqali iste’dodingizni namoyon eting.",
      btn: "A’zo bo’lish",
    },
    {
      img: leadership,
      title: "Liderlik va Tadbirkorlik Klubi",
      desc: "Kelajak liderlari bu yerda shakllanadi. Shaxsiy rivojlanish, biznes g‘oyalar va boshqaruv ko‘nikmalarini rivojlantiring.",
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
      <h3
        className="text-3xl sm:text-4xl md:text-[60px] lg:text-[64px] font-bold"
      >
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
                  <Link to={"/cyber-sport"}
                   aria-label="Participation"
                    className="mt-[16px] text-center px-6 py-[12px] shadow-inner bg-[#F7F7F7] border border-[#F7F7F7] text-[#323232] text-[16px] font-[600] rounded-[24px] hover:bg-[#FFB21A] hover:border-[#FFB21A] transition cursor-pointer w-full"
                  >
                    {item.btn}
                  </Link>
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
           aria-label="Prev"
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#FFB21A] hover:border-[#FFB21A] hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
           aria-label="Next"
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
