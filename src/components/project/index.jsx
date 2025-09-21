
const Project = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-4 py-20">
      {/* Title */}
      <div className="text-center mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-[70px] gap-6">
          {/* Chap taraf */}
          <h3 className="text-2xl sm:text-3xl md:text-[60px] font-bold text-[#323232] mb-4 text-center md:text-left">
            Biz amalga oshirgan <br /> ajoyib loyiha
          </h3>

          {/* O‘ng taraf */}
          <div className="flex flex-col justify-end items-center md:items-end gap-[16px] text-center md:text-right">
            <p className="text-[#323232] text-base sm:text-lg md:text-[20px]">
              “Biz bilan birga o‘zgarishni rejalashtiring – bu yerda <br />{" "}
              bilim, g‘oya va imkoniyatlar birlashadi.”
            </p>
            <button className="bg-[#FFB21A] w-full sm:w-auto text-[#323232] text-[16px] px-6 sm:px-10 py-3 rounded-[24px] font-[400]">
              Batafsil
            </button>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-12">
        {/* 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center">
            <h3 className="text-[24px] font-bold text-[#323232] mb-[16px]">
              Water City Dreams
            </h3>
            <p className="text-[#323232] text-[16px] font-[400] mb-[40px]">
              Water City Dreams — bu suv va shahar uyg‘unligida yaratilayotgan
              yirik loyiha bo‘lib, zamonaviy infratuzilma, yashil hududlar va
              innovatsion arxitektura yechimlarini o‘z ichiga oladi. Loyiha
              shahar aholisi va mehmonlari uchun yangi turmush tarzini taqdim
              etadi: suv bo‘yida sokinlik, shaharda esa qulaylik va
              imkoniyatlar.
            </p>
            <button className="bg-[#FFB21A] text-[#323232] text-[16px] px-[70px] py-[12px] rounded-[24px] font-[400]">
              Batafsil
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/500/300?random=1"
              alt="project"
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="flex-1 text-center">
            <h3 className="text-[24px] font-bold text-[#323232] mb-[16px]">
              ArxPro
            </h3>
            <p className="text-[#323232] text-[16px] font-[400] mb-[40px]">
              ArxPro — zamonaviy arxitektura studiyasi va loyihalashtirish
              platformasi bo‘lib, O‘zbekiston bozorida faoliyat yuritadi.
              Ularning saytida “Projects” (loyihalar) va “Architects”
              (arxitektorlar) bo‘limlari bor, ya’ni ular mijozlarga turli uylar,
              binolar loyihalarini ko‘rsatish, arxitektorlarni tanlash imkonini
              ham berishadi
            </p>
            <button className="bg-[#FFB21A] text-[#323232] text-[16px] px-[70px] py-[12px] rounded-[24px] font-[400]">
              Batafsil
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/500/300?random=2"
              alt="project"
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>

        {/* 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center">
            <h3 className="text-[24px] font-bold text-[#323232] mb-[16px]">
              UzWorks
            </h3>
            <p className="text-[#323232] text-[16px] font-[400] mb-[40px]">
              UzWorks — bu O‘zbekistonda ish izlash va ishchi topish uchun
              yaratilgan zamonaviy onlayn platforma. Xodimlar va ish
              beruvchilarni yagona maydonda bog‘lab, qulay va tezkor xizmat
              ko‘rsatadi. Platformada turli soha va yo‘nalishlardagi bo‘sh ish
              o‘rinlari muntazam yangilanadi: ofis lavozimlaridan tortib,
              masofaviy ishlar yoki oddiy ishchi kasblarigacha.
            </p>
            <button className="bg-[#FFB21A] text-[#323232] text-[16px] px-[70px] py-[12px] rounded-[24px] font-[400]">
              Batafsil
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/500/300?random=3"
              alt="project"
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
