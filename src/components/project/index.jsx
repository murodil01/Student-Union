import agroboost from "../../assets/agroboost.png";
import foodquest from "../../assets/foodquest.png";
import robocontest from "../../assets/robocontest.png";
import freshline from "../../assets/freshline.png";
import com from "../../assets/com.png";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1220px] mx-auto px-4 py-[100px]">
      {/* Title */}
      <div className="text-center mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-[60px] gap-6">
          {/* Chap taraf */}
          <h3 className="text-2xl sm:text-3xl md:text-[50px] font-bold  mb-4 text-center md:text-left">
            Biz amalga oshirgan ajoyib loyiha
          </h3>

          {/* O‘ng taraf */}
          <div className="flex flex-col justify-end items-center md:items-end gap-[16px] text-center md:text-right">
            <p className=" text-base sm:text-lg md:text-[20px]">
              “Biz bilan birga o‘zgarishni rejalashtiring – bu yerda bilim,
              g‘oya va imkoniyatlar birlashadi.”
            </p>
            <a
              aria-label="Bog'lanish"
              href="+998908086383"
              className="bg-[#FFB21A] text-center transition hover:scale-105 w-full max-w-auto  sm:w-[180px]  text-[16px] px-6 sm:px-10 py-3 rounded-[24px] font-[600]"
            >
              Bog'laning
            </a>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-12">
        {/* 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1 text-center">
            <h3 className="text-[24px] font-bold  mb-[16px]">Agroboost UZ</h3>
            <p className=" text-[16px] font-[400] mb-[40px]">
              Agroboost fermerlarga dron monitoringi, aqlli sensorlar va
              ma’lumotlarni tahlil qilish kabi raqamli vositalarni taqdim etadi.
              U dalalardan real vaqt rejimida ma’lumot yig‘ib, sug‘orish,
              o‘g‘itlash va hosilni yig‘ib olish bo‘yicha tavsiyalar beradi.
              Asosiy foydasi — unumdorlikni oshirish, xarajatlarni kamaytirish
              va yanada barqaror qishloq xo‘jaligi amaliyotlarini yo‘lga
              qo‘yishdir. U samaradorlik pastligi va zamonaviy texnologiyalardan
              foydalanish imkoniyati cheklanganligi muammosini hal qilib,
              fermerlarga ongli qarorlar qabul qilishda yordam beradi.
            </p>
            <a
              aria-label="Batafsil"
              href="https://agroboost.uz/"
              className="bg-[#FFB21A] mx-auto block text-center transition-transform duration-300 ease-in-out hover:scale-105 max-w-[250px] text-[16px] px-[70px] py-[12px] rounded-[24px] font-[600]"
            >
              Batafsil
            </a>
          </div>
          <div className="flex-1">
            <img
              src={agroboost}
              alt="project"
              className="object-cover w-full"
            />
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-8">
          <div className="flex-1 text-center">
            <h3 className="text-[24px] font-bold  mb-[16px]">FoodQuest UZ</h3>
            <p className=" text-[16px] font-[400] mb-[40px]">
              FoodQuest ovqatlarni kashf qilishni qiziqarli va arzon qilish
              uchun gamifikatsiya, “mo‘’jizaviy chegirmalar” va dinamik narxlar
              kabi raqamli vositalardan foydalanadi. U restoranlar va ovqat
              yetkazib beruvchilarni mijozlar bilan ulab, chegirmalar,
              mukofotlar hamda taomlarning real vaqtdagi mavjudligi haqida
              ma’lumot taqdim etadigan aqlli platforma orqali ishlaydi. Asosiy
              foydalari — pastroq narxlar, hayajonli foydalanuvchi tajribasi va
              ovqat bizneslari uchun yaxshiroq ko‘rinishdir. FoodQuest yuqori
              narxlar va ortiqcha chiqindilar muammosini ortiqcha ovqatlarni
              qayta taqsimlash hamda mamlakat bo‘ylab oziq-ovqat iste’molini
              muvozanatlashtirish orqali hal qiladi.
            </p>
            <a
              aria-label="Batafsil"
              href="https://foodquest.uz/"
              className="bg-[#FFB21A] mx-auto block text-center transition-transform duration-300 ease-in-out hover:scale-105 max-w-[250px] text-[16px] px-[70px] py-[12px] rounded-[24px] font-[600]"
            >
              Batafsil
            </a>
          </div>
          <div className="flex-1">
            <img
              src={foodquest}
              alt="project"
              className="object-cover w-full"
            />
          </div>
        </div>

        {/* 3 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1 text-center">
            <h3 className="text-[24px] font-bold  mb-[16px]">Robocontest UZ</h3>
            <p className=" text-[16px] font-[400] mb-[40px]">
              Robocontest dasturlash bo‘yicha masalalar, topshiriqlar va
              avtomatlashtirilgan baholash tizimlarini taqdim etadi. U
              ishtirokchilarga topshiriqlarni yechish, musobaqalarda qatnashish
              va yechimlari yuzasidan darhol fikr-mulohaza olish imkonini
              beradigan onlayn platforma orqali ishlaydi. Asosiy foydasi —
              amaliy mashg‘ulot, ko‘nikmalarni rivojlantirish va haqiqiy hayotiy
              loyihalarga tayyorgarlikdir. U yosh dasturchilarning bilimlarini
              sinab ko‘rish va xalqaro darajada raqobatlashish imkoniyatlarining
              cheklanganligi muammosini hal qiladi.
            </p>
            <a
              aria-label="Batafsil"
              href="https://robocontest.uz/"
              className="bg-[#FFB21A] mx-auto block text-center transition-transform duration-300 ease-in-out hover:scale-105 max-w-[250px] text-[16px] px-[70px] py-[12px] rounded-[24px] font-[600]"
            >
              Batafsil
            </a>
          </div>
          <div className="flex-1">
            <img
              src={robocontest}
              alt="project"
              className=" object-cover w-full"
            />
          </div>
        </div>

        {/* 4 */}
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-8">
          <div className="flex-1 text-center">
            <h3 className="text-[24px] font-bold  mb-[16px]">Freshline</h3>
            <p className=" text-[16px] font-[400] mb-[40px]">
              Freshline yangi mahsulotlarni yetkazib berishda raqamli kuzatuv,
              yo‘nalishlarni optimallashtirish va sovuq zanjir monitoringi kabi
              logistika vositalarini taqdim etadi. U fermerlar, yetkazib
              beruvchilar va mijozlarni birlashtiradigan, mahsulotlarning o‘z
              vaqtida va xavfsiz yetib borishini ta’minlaydigan shaffof
              platforma orqali ishlaydi. Asosiy foydalari — yanada yangi
              mahsulotlar, chiqindilarni kamaytirish va biznes hamda
              iste’molchilar uchun xarajatlarning pasayishidir. U an’anaviy
              ta’minot zanjiridagi samarasizlik va mahsulot yo‘qotish muammosini
              aqlli, texnologiyaga asoslangan taqsimot orqali hal qiladi.
            </p>
            <a
              aria-label="Batafsil"
              href="http://fresh-line.uz/"
              className="bg-[#FFB21A] mx-auto block text-center transition-transform duration-300 ease-in-out hover:scale-105 max-w-[250px] text-[16px] px-[70px] py-[12px] rounded-[24px] font-[600]"
            >
              Batafsil
            </a>
          </div>
          <div className="flex-1">
            <img
              src={freshline}
              alt="project"
              className="object-cover w-full"
            />
          </div>
        </div>

        {/* 5 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="flex-1 text-center">
            <h3 className="text-[24px] font-bold  mb-[16px]">Tez kunda</h3>
            <p className=" text-[16px] font-[400] mb-[40px]">
              Biz yaratishda charchamaymiz. 🚀 Yana bir startap yo‘lda — yanada
              katta, aqlli va ilhomlantiruvchi. Kuzatib boring, kelajak
              yuklanmoqda…
            </p>
            <a
              aria-label="Batafsil"
              href="/"
              className="bg-[#FFB21A] mx-auto block text-center transition-transform duration-300 ease-in-out hover:scale-105 max-w-[250px] text-[16px] px-[70px] py-[12px] rounded-[24px] font-[600]"
            >
              Batafsil
            </a>
          </div>
          <div className="flex-1">
            <img src={com} alt="project" className=" object-cover w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
