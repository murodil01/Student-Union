import format1 from "../../../assets/format/format1.png";
import format2 from "../../../assets/format/format2.png";
import format3 from "../../../assets/format/format3.png";

const CyberFormat = () => {
  return (
    <div className="max-w-[1220px] px-4 mx-auto text-center pt-[80px] md:pb-[80px] pb-0">
      <h3 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[72px]">
        Cyber Sport Turnir <br /> Formatlari
      </h3>

      {/* Cards overlap row */}
      <div className="flex flex-col md:flex-row justify-center items-center md:mt-0 mt-10 gap-6 md:gap-0">
        {/* 1-chi rasm — eng oldinda */}
        <div className="relative z-30 w-[90%] sm:w-[80%] md:w-[480px] lg:w-[520px] transition-all duration-500 ease-in-out hover:scale-105 hover:z-50 hover:-translate-y-3">
          <img
            loading="lazy"
            src={format1}
            alt="format1"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>

        {/* 2-chi rasm — orqa tomonda */}
        <div className="relative md:mt-10 z-20 md:-ml-[20%] w-[90%] sm:w-[80%] md:w-[480px] lg:w-[520px] transition-all duration-500 ease-in-out hover:scale-105 hover:z-50 hover:-translate-y-3">
          <img
            loading="lazy"
            src={format2}
            alt="format2"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>

        {/* 3-chi rasm — eng orqada */}
        <div className="relative md:mt-30 mt-0 z-10 md:-ml-[20%] w-[90%] sm:w-[80%] md:w-[480px] lg:w-[520px] transition-all duration-500 ease-in-out hover:scale-105 hover:z-50 hover:-translate-y-3">
          <img
            loading="lazy"
            src={format3}
            alt="format3"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CyberFormat;
