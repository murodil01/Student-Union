import coding_hero from "../../../assets/coding_hero.png";

const CodingHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${coding_hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative min-h-[80vh] md:min-h-screen flex items-center text-white mt-[80px] sm:mt-[100px] md:mt-[150px]"
    >
      {/* Overlay (matnni tiniqroq qilish uchun) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="max-w-[1220px] mx-auto px-5 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-left">
            <div className="space-y-4">
              <h3 className="uppercase text-[28px] sm:text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] drop-shadow-lg">
                Tech <br /> Clubga Xush Kelibsiz!
              </h3>

              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] max-w-[500px] leading-relaxed drop-shadow-md">
                Raqamli jang maydoni, bu yerda strategiya, tezkorlik va jamoaviy
                ruh sinovdan o‘tadi. Professional va havaskor gamerlar uchun
                yagona markaz!
              </p>
            </div>

            <button className="bg-[#FFB21A] hover:bg-[#e5a518] text-white text-[14px] sm:text-[16px] md:text-[18px] font-semibold w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              A'zo bo'lish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingHero;
