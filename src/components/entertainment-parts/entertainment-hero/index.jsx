import entertainment_hero from "../../../assets/entertainment_hero.png";

const EntertainmentHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${entertainment_hero})`,
        backgroundPosition: "right center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className="relative"
    >
      {/* Content */}
      <div className="max-w-[1220px] mx-auto px-5 pt-[100px] sm:pt-[120px] md:pt-[150px] lg:pt-[250px] pb-[60px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1]">
                Entertainment
                <br />
                Club
              </h3>

              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] max-w-[500px] mx-auto lg:mx-0 leading-relaxed">
                Bu zavq va dam olish olami. Bu yerda film tomosha qilasan,
                musiqa eshitasan, o'yin o'ynaysan va sayohat qilasan. Har lahza
                — yangi his, yangi kayfiyat!
              </p>
            </div>

            <button className="bg-[#FFB21A] hover:bg-[#e5a518] text-white text-[14px] sm:text-[16px] md:text-[18px] font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              A'zo bo'lish
            </button>
          </div>

          {/* Right Images (hidden on small, visible on md+) */}
          <div className="flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
            <div className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
              {/* Image Collage */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                {/* Left Column */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* Top Image */}
                  <div className="rounded-[180px] overflow-hidden w-[140px] sm:w-[180px] md:w-[200px] h-[190px] sm:h-[230px] md:h-[250px]">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
                      alt="Happy person"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom Image */}
                  <div className="rounded-t-[150px] overflow-hidden w-[140px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[190px] md:h-[210px]">
                    <img
                      src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop"
                      alt="Concert"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-[140px] sm:w-[180px] md:w-[220px] relative">
                  <div className="bg-[#FFB21A] rounded-t-[150px] overflow-hidden aspect-[3/4]">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
                      alt="Person with microphone"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentHero;
