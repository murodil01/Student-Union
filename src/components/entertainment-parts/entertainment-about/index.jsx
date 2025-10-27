const EntertainmentAbout = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-5 py-16">
      {/* Title */}
      <h3 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold !mb-[24px] sm:!mb-[28px] md:!mb-[30px] lg:!mb-[32px] text-center">
        Biz Haqimizda
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images */}
        <div className="relative flex items-center gap-[30px] order-2 lg:order-1">
          {/* Large Image - Left */}
          <div className="row-span-2">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=500&fit=crop"
              alt="Concert crowd"
              className="w-[174px] h-[220px] sm:w-[220px] sm:h-[260px] md:w-[250px] md:h-[290px] lg:w-[345px] lg:h-[400px] rounded-tr-[40px] sm:rounded-tr-[60px] md:rounded-tr-[70px] lg:rounded-tr-[100px]"
            />
          </div>

          <div className="flex flex-col gap-[25px]">
            {/* Small Image - Top Right */}
            <div>
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=240&fit=crop"
                alt="Window climbing"
                className="w-[130px] h-[160px] sm:w-[1800px] sm:h-[200px] md:w-[200px] md:h-[250px] lg:w-[225px] lg:h-[290px] rounded-tr-[40px] sm:rounded-tr-[60px] md:rounded-tr-[70px] lg:rounded-tr-[120px]"
              />
            </div>

            {/* Small Image - Bottom Right */}
            <div>
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=240&fit=crop"
                alt="People dancing"
                className="w-[180px] h-[180px] sm:w-[220px] sm:h-[260px] md:w-[250px] md:h-[290px] lg:w-[276px] lg:h-[307px] rounded-tl-[40px] sm:rounded-tl-[60px] md:rounded-tl-[70px] lg:rounded-tl-[120px]"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-6 order-1 lg:order-2">
          <h3 className="text-[12px] md:text-left text-center sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold leading-snug sm:leading-tight md:leading-[1.2] lg:leading-tight">
            Biz — sizning ko'ngil ochish markazingiz!
          </h3>

          <p className="text-[12px] text-left  sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed">
            Bu yerda sayohat ilhomi, kino sehrlari, picnic vibes va eng trend
            o'yinlar bir joyda. Entertainment — bu shunchaki platforma emas, bu
            dam olishning yangi formati. Har kuni yangi hislar, yangi tajribalar
            va yangi kayfiyat uchun shu yerdamiz.
          </p>

          <a
            href="+998908086383"
            aria-label="Bog'lanish"
            className="bg-[#FFB21A] hover:bg-[#e5a518] text-white text-center hover:scale-105 transition duration-300 inline-block w-full sm:w-auto text-[16px] px-10 py-3 rounded-full font-semibold"
          >
            A'zo bo'lish
          </a>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentAbout;
