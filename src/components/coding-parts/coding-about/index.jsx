import coding_about from "../../../assets/coding_about.png";
import coding_about2 from "../../../assets/coding_about2.png";

const CodingAbout = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-4 md:px-5 flex flex-col-reverse justify-between md:flex-row items-center gap-8 md:gap-[45px] py-10">
      {/* Chap tomonda rasm */}
      <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <img
          className="w-full max-w-[500px] h-auto object-contain"
          src={coding_about}
          alt="Coding about"
          loading="lazy"
        />
      </div>

      {/* O‘ng tomonda matn qismi */}
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <h3 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-center md:text-left leading-tight">
          Biz haqimizda
        </h3>

        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-center md:text-left leading-relaxed">
          Tech Klub — bu shunchaki klub emas, bu g‘oyalar laboratoriyasi,
          innovatsiya maydoni va kelajak muhandislarining uyi.
        </p>

        {/* 1-qator */}
        <div className="flex items-start gap-4 sm:gap-6">
          <img
            src={coding_about2}
            alt="Digital Experience"
            loading="lazy"
            className="w-[45px] sm:w-[55px] md:w-[65px] h-auto object-contain flex-shrink-0"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-left">
              Digital Experience
            </h4>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-normal text-left leading-relaxed">
              Bizning maqsadimiz — yoshlarni IT sohasida rivojlantirish,
              ularning bilimini amaliy loyihalar orqali kuchaytirish va
              jamiyatda texnologik madaniyatni shakllantirishdir.
            </p>
          </div>
        </div>

        {/* 2-qator */}
        <div className="flex items-start gap-4 sm:gap-6">
          <img
            src={coding_about2}
            alt="Digital Experience"
            loading="lazy"
            className="w-[45px] sm:w-[55px] md:w-[65px] h-auto object-contain flex-shrink-0"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-left">
              Digital Experience
            </h4>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-normal text-left leading-relaxed">
              Bizning maqsadimiz — bilim, tajriba va hamjihatlik orqali yangi IT
              avlodini tarbiyalash, o‘zgarish yasaydigan yetakchilarni
              yetishtirishdir.
            </p>
          </div>
        </div>

        {/* 3-qator */}
        <div className="flex items-start gap-4 sm:gap-6">
          <img
            src={coding_about2}
            alt="Content Management"
            loading="lazy"
            className="w-[45px] sm:w-[55px] md:w-[65px] h-auto object-contain flex-shrink-0"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-left">
              Content Management
            </h4>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] font-normal text-left leading-relaxed">
              Bizning maqsadimiz — ijodkor va texnologik fikrlovchi yoshlarni
              birlashtirish, ularning orzularini kodga, g‘oyalarini haqiqatga
              aylantirishdir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingAbout;
