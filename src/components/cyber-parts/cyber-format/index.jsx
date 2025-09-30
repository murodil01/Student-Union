import format1 from "../../../assets/format/format1.png";
import format2 from "../../../assets/format/format2.png";
import format3 from "../../../assets/format/format3.png";

const CyberFormat = () => {
  return (
    <div className="max-w-[1220px] px-4 mx-auto text-center py-[80px]">
      <h3 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[72px]">
        Cyber Sport Turnir <br /> Formatlari
      </h3>
      <p className="font-[400] text-base md:text-[20px] max-w-[750px] mx-auto my-[20px]">
        Raqamli jang maydoni, bu yerda strategiya, tezkorlik va jamoaviy ruh
        sinovdan o'tadi. Professional va havaskor gamerlar uchun yagona markaz!
      </p>

      {/* Cards overlap row - Desktop, flex-col - Mobile */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-16 gap-6 md:gap-0">
        {/* 1-chi (chapda, eng orqa) */}
        <div className="relative z-10 w-[280px] sm:w-[320px] md:w-[260px] lg:w-[320px]">
          <img src={format3} alt="format1" className="w-full rounded-lg shadow-xl" />
        </div>

        {/* 2-chi (o'rtada, desktopda 35% ustiga chiqqan, mobileda gap bilan) */}
        <div className="relative z-20 md:-ml-[35%] w-[280px] sm:w-[320px] md:w-[260px] lg:w-[320px]">
          <img src={format2} alt="format2" className="w-full rounded-lg shadow-xl" />
        </div>

        {/* 3-chi (o'ngda, desktopda yana 35% ustiga chiqqan, mobileda gap bilan) */}
        <div className="relative z-30 md:-ml-[35%] w-[280px] sm:w-[320px] md:w-[260px] lg:w-[320px]">
          <img src={format1} alt="format3" className="w-full rounded-lg shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default CyberFormat;