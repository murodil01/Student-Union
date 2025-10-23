import bascet from "../../../assets/sport-hero/bascet.png";
import basketball_player from "../../../assets/sport-hero/basketball_player.png";
import basketball_sport from "../../../assets/sport-hero/basketball_sport.png";
import football from "../../../assets/sport-hero/football.png";

const SportHero = () => {
  return (
    <div className="max-w-[1220px] mx-auto py-[120px] px-4 mb-[184px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative">
        {/* LEFT SIDE — with background image */}
        <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-contain bg-center"
            style={{ backgroundImage: `url(${basketball_sport})` }}
          ></div>

          {/* Text on top of background */}
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold leading-[1]">
              SPORT <br /> CLUBGA XUSH <br /> KELIBSIZ!
            </h3>
          </div>
        </div>

        {/* RIGHT SIDE — Player and small images */}
        <div className="relative flex items-center justify-center">
          {/* Basketball player — markazda */}
          <img
            src={basketball_player}
            alt="Basketball Player"
            className="w-[90%] max-w-[500px] mx-auto relative z-10"
          />

          {/* Upper small image */}
          <img
            src={football}
            alt="Football"
            className="absolute top-0 right-20 w-[180px] h-[120px] sm:w-[216px] sm:h-[152px] object-cover rounded shadow-md"
          />

          {/* Lower small image */}
          <img
            src={bascet}
            alt="Basketball"
            className="absolute bottom-[40px] right-0 w-[150px] sm:w-[172px] h-auto shadow-md"
          />

          {/* Bottom text box */}
          <div className="absolute -bottom-50 left-0 right-0 sm:right-auto sm:w-[320px] mt-6">
            <p className="font-medium text-[16px] sm:text-[18px] mb-4 leading-snug">
              Bu yerda kuch, iroda va jamoaviy ruh birlashadi. Biz bilan sportni
              nafaqat mashg‘ulot, balki hayot tarzi sifatida kashf eting.
            </p>
            <a
              href="+998908086383"
              aria-label="Bog'lanish"
              className="bg-[#FFB21A] text-white text-center hover:scale-105 transition duration-300 inline-block w-full sm:w-[180px] text-[16px] px-6 sm:px-10 py-3 rounded-[24px] font-semibold"
            >
              A’zo bo’lish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportHero;
