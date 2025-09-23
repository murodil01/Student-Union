import { Dot, MoveRight } from "lucide-react";
import left from "../../assets/left.png";
import dot from "../../assets/dot.svg";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-[1220px] mx-auto px-4 py-[100px] flex flex-col items-center gap-[16px]"
    >
      <h2 className="text-3xl md:text-[60px] font-[700]  text-center">
        Qisqa tanishtiruv
      </h2>
      <p className="text-base md:text-[20px] font-normal  max-w-[540px] text-center">
        “Biz bilan birga o‘zingizni rivojlantiring – bu yerda bilim, ijod va
        imkoniyatlar birlashadi..
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center w-full mt-10">
        {/* LEFT SIDE IMAGES */}
        <img
          src={left}
          alt="Image 1"
          className="w-[630px] rounded-[6px] order-last md:order-first"
        />

        {/* RIGHT SIDE TEXT */}
        <div className="flex flex-col gap-[20px] text-left order-first md:order-last">
          <h3 className="text-[24px] font-[400]">
            Toshkent Axborot Texnologiyalari Universiteti Talabalar Ittifoqi —
            bu talabalarning haqiqiy yuragi va ovozi.
          </h3>
          <p className="text-[16px] font-[400]">Bizning asosiy vazifamiz:</p>
          <ul className="flex flex-col gap-[24px]">
            <li className="flex items-center gap-[20px] text-[16px] font-[400]">
              <img src={dot} alt="Dot" className="w-[8px] h-[9px]" />
              Manfaatlarni himoya qilish – har bir talabani qo‘llab-quvvatlash
              va uning huquqlarini kafolatlash.
            </li>
            <li className="flex items-center gap-[20px] text-[16px] font-[400]">
              <img src={dot} alt="Dot" className="w-[8px] h-[9px]" />
              Yangi g‘oyalarni rivojlantirish – tashabbuslarni amaliy
              loyihalarga aylantirish.
            </li>
            <li className="flex items-center gap-[20px] text-[16px] font-[400]">
              <img src={dot} alt="Dot" className="w-[8px] h-[9px]" />
              Universitet hayotini boyitish – ilmiy, madaniy va sport
              faoliyatini yangi bosqichga ko‘tarish.
            </li>
            <li className="flex items-center gap-[20px] text-[16px] font-[400]">
              <img src={dot} alt="Dot" className="w-[8px] h-[9px]" />
              Xalqaro maydonga olib chiqish – talabalarning global
              imkoniyatlardan foydalanishini ta’minlash.
            </li>
          </ul>
          <h3 className="text-[16px] font-[400]">
            Toshkent Axborot Texnologiyalari Universiteti Talabalar Ittifoqi —
            bu barcha talabalarning yagona markazi.
          </h3>
          <button className="text-[clamp(12px,2vw,16px)] mt-7 mx-auto flex items-center gap-3 font-medium max-w-[270px] w-full px-8 py-3 rounded-[24px] bg-[#FFB21A] shadow-[0px_4px_8px_0px_#FCB62980] transition hover:scale-105">
            Konstitutsiyani o‘qish <MoveRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
