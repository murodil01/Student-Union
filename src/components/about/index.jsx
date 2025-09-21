import { Dot } from "lucide-react";
import about1 from "../../assets/about/about1.png";
import about2 from "../../assets/about/about2.png";
import about3 from "../../assets/about/about3.png";

const About = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-4 py-[80px] flex flex-col items-center gap-[16px]">
      <h2 className="text-3xl md:text-[60px] font-[700]  text-center">
        Biz haqimizda
      </h2>
      <p className="text-base md:text-[20px] font-normal  max-w-[540px] text-center">
        “Biz bilan birga o‘zingizni rivojlantiring – bu yerda bilim, ijod va
        imkoniyatlar birlashadi..
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center w-full">
        {/* LEFT SIDE IMAGES */}
        <div className="flex flex-col  items-center md:items-end">
          <img
            src={about1}
            alt="Image 1"
            className="w-[500px] rounded-lg shadow-lg object-cover md:self-end "
          />
          <img
            src={about2}
            alt="Image 2"
            className="w-[500px] rounded-lg shadow-lg object-cover md:self-start -mt-[150px]"
          />
          <img
            src={about3}
            alt="Image 3"
            className="w-[500px] rounded-lg shadow-lg object-cover md:self-end -mt-[150px]"
          />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="flex flex-col gap-[20px] text-left">
          <h3 className=" text-[24px] font-[400]">
            Toshkent Axborot Texnologiyalari Universiteti Talabalar Ittifoqi —
            bu talabalarning haqiqiy yuragi va ovozi.
          </h3>
          <p className=" text-[16px] font-[400]">Bizning asosiy vazifamiz:</p>
          <ul className="flex flex-col gap-[24px]">
            <li className="flex items-center gap-[20px]  text-[16px] font-[400]">
              <Dot size={20} className="text-[#FFB21A]" />
              Manfaatlarni himoya qilish – har bir talabani qo‘llab-quvvatlash
              va uning huquqlarini kafolatlash.
            </li>
            <li className="flex items-center gap-[20px]  text-[16px] font-[400]">
              <Dot size={20} className="text-[#FFB21A]" />
              Yangi g‘oyalarni rivojlantirish – tashabbuslarni amaliy
              loyihalarga aylantirish.
            </li>
            <li className="flex items-center gap-[20px]  text-[16px] font-[400]">
              <Dot size={20} className="text-[#FFB21A]" />
              Universitet hayotini boyitish – ilmiy, madaniy va sport
              faoliyatini yangi bosqichga ko‘tarish.
            </li>
            <li className="flex items-center gap-[20px]  text-[16px] font-[400]">
              <Dot size={20} className="text-[#FFB21A]" />
              Xalqaro maydonga olib chiqish – talabalarning global
              imkoniyatlardan foydalanishini ta’minlash.
            </li>
          </ul>
          <h3 className=" text-[16px] font-[400]">
            Toshkent Axborot Texnologiyalari Universiteti Talabalar Ittifoqi —
            bu barcha talabalarning yagona markazi.
          </h3>
          <button className="text-[16px] font-medium  max-w-[180px] w-full px-8 py-3 rounded-[24px] bg-[#FFB21A] shadow-[0px_4px_8px_0px_#FCB62980] transition hover:scale-105">
            Qo’shilish
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
