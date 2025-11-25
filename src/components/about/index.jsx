// import {  MoveRight } from "lucide-react";
// import union from "../../assets/union.JPG";

// const About = () => {
//   return (
//     <div
//       id="about"
//       className="max-w-[1220px] mx-auto px-4 py-[100px] flex flex-col items-center gap-[16px]"
//     >
//       <h2 className="text-3xl md:text-[60px] font-[700]  text-center">
//         Biz haqimizda
//       </h2>
//       <p className="text-base md:text-[20px] font-normal  max-w-[1000px] text-center">
//         Talabalar Ittifoqi — bu sizning loyihalaringizni boshlash, o‘z
//         klublaringizni yaratish, sayohatlarda ishtirok etish va universitet
//         hayotida faol rol o‘ynash uchun maydon.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-start w-full mt-10">
//         {/* LEFT SIDE IMAGES */}
//         <img
//           src={union}
//           alt="Image 1"
//           className="w-[630px] rounded-[6px] order-last md:order-first"
//         />

//         {/* RIGHT SIDE TEXT */}
//         <div className="flex flex-col gap-[20px] text-left order-first md:order-last">
//           {/* <h3 className="text-[24px] font-[400]">
//             Toshkent Axborot Texnologiyalari Universiteti Talabalar Ittifoqi —
//             bu barcha talabalarning yagona markazi.
//           </h3> */}
//           <h3 className="text-[24px] font-[400]">Bizning asosiy vazifamiz :</h3>
//           {/* <p className="text-[16px] font-[400]">Bizning asosiy vazifamiz:</p> */}
//           <ul className="flex flex-col gap-[24px]">
//             <li className="flex items-center gap-[20px] text-[16px] font-[400]">
//               🎓 Manfaatlarni himoya qilish – har bir talabani
//               qo‘llab-quvvatlash va uning huquqlarini kafolatlash.
//             </li>
//             <li className="flex items-center gap-[20px] text-[16px] font-[400]">
//               🎓 Yangi g‘oyalarni rivojlantirish – tashabbuslarni amaliy
//               loyihalarga aylantirish.
//             </li>
//             <li className="flex items-center gap-[20px] text-[16px] font-[400]">
//               🎓 Universitet hayotini boyitish – ilmiy, madaniy va sport
//               faoliyatini yangi bosqichga ko‘tarish.
//             </li>
//             <li className="flex items-center gap-[20px] text-[16px] font-[400]">
//               🎓 Xalqaro maydonga olib chiqish – talabalarning global
//               imkoniyatlardan foydalanishini ta’minlash.Xalqaro hamkorliklarni
//               kengaytirish.
//             </li>
//           </ul>

//           <h3 className="text-[16px] font-[400]">
//             💡 Bizni yanada chuqurroq bilish uchun Konstitutsiyani o‘qib chiqing{" "}
//           </h3>

//           <button
//             onClick={() =>
//               window.open(
//                 "/files/Toshkent_Axborot_Texnologiyalari_Universiteti_Talabalar_Ittifoqi.pdf",
//                 "_blank"
//               )
//             }
//             className="text-[clamp(14px,2vw,16px)] mt-7 mx-auto flex items-center gap-3 font-medium max-w-[270px] w-full px-8 py-3 rounded-[24px] bg-[#FFB21A] shadow-[0px_4px_8px_0px_#FCB62980] transition hover:scale-105"
//           >
//             Konstitutsiyani o‘qish <MoveRight size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// import { MoveRight } from "lucide-react";
import union from "../../assets/union.webp";
import { FaTelegram } from "react-icons/fa6";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-[1220px] mx-auto px-4 pb-[10px] md:pb-[100px] flex flex-col items-center gap-[16px]"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-[60px] font-bold text-center">
        Biz haqimizda
      </h2>

      {/* Description */}
      <p className="text-base md:text-[20px] font-normal max-w-[1000px] text-center">
        Talabalar Ittifoqi — bu sizning loyihalaringizni boshlash, o‘z
        klublaringizni yaratish, sayohatlarda ishtirok etish va universitet
        hayotida faol rol o‘ynash uchun maydon.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-start w-full mt-10">
        <img
          src={union}
          alt="Talabalar ittifoqi rasmi"
          width={630}
          height={400}
          className="w-[630px] rounded-[6px]"
          loading="eager"
          fetchPriority="high"
        />

        {/* RIGHT SIDE TEXT */}
        <div className="flex flex-col gap-[20px] text-left">
          <h3 className="text-[24px] font-normal">
            Bizning asosiy vazifamiz :
          </h3>

          <ul className="flex flex-col gap-[24px]">
            <li className="flex items-center gap-[20px] text-[16px] font-normal">
              🎓 Manfaatlarni himoya qilish – har bir talabani
              qo‘llab-quvvatlash va uning huquqlarini kafolatlash.
            </li>
            <li className="flex items-center gap-[20px] text-[16px] font-normal">
              🎓 Yangi g‘oyalarni rivojlantirish – tashabbuslarni amaliy
              loyihalarga aylantirish.
            </li>
            <li className="flex items-center gap-[20px] text-[16px] font-normal">
              🎓 Universitet hayotini boyitish – ilmiy, madaniy va sport
              faoliyatini yangi bosqichga ko‘tarish.
            </li>
            <li className="flex items-center gap-[20px] text-[16px] font-normal">
              🎓 Xalqaro maydonga olib chiqish – talabalarning global
              imkoniyatlardan foydalanishini ta’minlash va xalqaro
              hamkorliklarni kengaytirish.
            </li>
          </ul>

          <h3 className="text-[16px] font-normal">
            💡 Bizni yanada chuqurroq bilish uchun Konstitutsiyani o‘qib chiqing
          </h3>

          {/* Button */}
          {/* <button
            aria-label="Konstitutsiya"
            onClick={() =>
              window.open(
                "/files/Toshkent_Axborot_Texnologiyalari_Universiteti_Talabalar_Ittifoqi.pdf",
                "_blank"
              )
            }
            className="cursor-pointer text-[clamp(14px,2vw,16px)] mt-7 mx-auto flex items-center gap-3 font-medium max-w-[270px] w-full px-8 py-3 rounded-[24px] bg-[#FFB21A] shadow-[0px_4px_8px_0px_#FCB62980] transition hover:scale-105"
          >
            Konstitutsiyani o‘qish <MoveRight size={20} />
          </button>  */}

          <a
            href="https://t.me/SU_TUIT"
            aria-label="Konstitutsiya"
            className="cursor-pointer text-[clamp(14px,2vw,16px)] mt-7 mx-auto flex justify-center items-center gap-3 font-medium max-w-[270px] w-full px-8 py-3 rounded-[24px] bg-[#FFB21A] shadow-[0px_4px_8px_0px_#FCB62980] transition hover:scale-105"
          >
            Telegram <FaTelegram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
