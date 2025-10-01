import React from "react";

const CyberHero = () => {
  return (
    <div className="max-w-[1220px] mx-auto pt-[120px] sm:pt-[150px] md:pt-[200px] lg:pt-[250px] pb-[50px] px-4 text-center flex flex-col justify-center items-center gap-[30px]">
      <h3 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[72px]">Cyber Sport Klubi</h3>
      <p className="font-[400] text-base md:text-[20px] max-w-[750px]">
        Raqamli jang maydoni, bu yerda strategiya, tezkorlik va jamoaviy ruh
        sinovdan o‘tadi. Professional va havaskor gamerlar uchun yagona markaz!
      </p>
      <a
        aria-label="Participate"
        href="https://t.me/+NfuwV4a6Lzg2OTg6"
        className="text-base sm:text-lg md:text-[20px] font-[700] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:mt-6 px-6 sm:px-8 py-2 sm:py-3 rounded-[24px] bg-[#FFB21A] shadow-[0px_4px_8px_0px_#FCB62980] transition hover:scale-105"
      >
        A'ZO BO'LISH
      </a>
    </div>
  );
};

export default CyberHero;
