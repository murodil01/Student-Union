import bascet from "../../../assets/sport-hero/bascet.png";
import basketball_player from "../../../assets/sport-hero/basketball_player.png";
import ball from "../../../assets/sport-hero/ball.svg";
import football from "../../../assets/sport-hero/football.png";

const SportHero = () => {
  return (
    <div className="max-w-[1220px] mx-auto py-[150px] px-4 mb-[250px] lg:mb-0 relative">
      {/* Basketball player — markazda */}
      <img
        loading="lazy"
        src={basketball_player}
        alt="Basketball Player"
        className="absolute left-1/2 -bottom-30 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[500px] lg:w-[600px] z-10 pointer-events-none"
      />

      {/* Grid structure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative z-20">
        {/* LEFT SIDE — with background image */}
        <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-contain bg-center"
            style={{ backgroundImage: `url(${ball})` }}
          ></div>

          {/* Text on top of background */}
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold leading-[1]">
              SPORT <br /> CLUBGA XUSH <br /> KELIBSIZ!
            </h3>
          </div>
        </div>

        {/* RIGHT SIDE — football, basketball, and text */}
        <div className="relative flex items-center justify-center">
          {/* Basketball image */}
          <img
            loading="lazy"
            src={bascet}
            alt="Football"
            className="absolute hidden md:block top-0 right-0 w-[150px] sm:w-[172px] h-auto object-cover rounded shadow-md"
          />

          {/* Football image */}
          <img
            src={football}
            loading="lazy"
            alt="Basketball"
            className="absolute hidden md:block bottom-[40px] right-30 w-[180px] h-[120px] sm:w-[216px] sm:h-[152px] shadow-md"
          />

          {/* Bottom text box */}
          <div className="absolute -bottom-90 left-0 right-0 sm:right-auto sm:w-[440px] mt-6">
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
