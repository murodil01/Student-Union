import reader_hero from "../../../assets/reader_hero.png";

const ReaderHero = () => {
  return (
    <div className="max-w-[1220px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-16 lg:gap-16 px-4 pt-[100px] sm:pt-[150px] md:pt-[100px] lg:pt-[150px] pb-[50px]">
      {/* Text Section */}
      <div className="flex flex-col text-center lg:text-left gap-[20px] sm:gap-[25px] md:gap-[30px]">
        <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] leading-tight">
          Kitobxonlik va Munozara Klubi
        </h3>

        <p className="font-[400] text-sm sm:text-base md:text-[18px] lg:text-[20px] max-w-[600px] mx-auto lg:mx-0">
          Raqamli jang maydoni, bu yerda strategiya, tezkorlik va jamoaviy ruh
          sinovdan o‘tadi. Professional va havaskor gamerlar uchun yagona
          markaz!
        </p>

        <a
          aria-label="Participate"
          href="https://t.me/+NfuwV4a6Lzg2OTg6"
          className="mx-auto text-center lg:mx-0 text-sm sm:text-base md:text-[16px] font-[600] w-full max-w-[180px] px-5 sm:px-8 py-2 sm:py-3 rounded-[24px] bg-[#FFB21A] shadow-[0px_4px_8px_0px_#FCB62980] transition-transform duration-300 hover:scale-105"
        >
          A'ZO BO'LISH
        </a>
      </div>

      {/* Image Section */}
      <div className="flex justify-center transform transition-transform duration-300 hover:scale-105">
        <img
          loading="lazy"
          src={reader_hero}
          alt="Girl"
          className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]  h-auto"
        />
      </div>
    </div>
  );
};

export default ReaderHero;
