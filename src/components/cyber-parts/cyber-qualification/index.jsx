import Qualification from "../../../assets/Qualification.png";

const CyberQualification = () => {
  return (
    <div className="lg:px-40 px-4">
      <div className="cyber-qualification bg-[#f6f6f6] max-w-[1220px] px-6 md:py-0 py-10 mx-auto   rounded-[10px] my-[80px]">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
          {/* Left text section */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold ">
              Cyber Sport Saralash Tartibi
            </h3>
            <p className=" leading-relaxed ">
              Hozir turnirlar avjida! Kibersport olamidagi eng qizg‘in janglar
              davom <br /> etmoqda. Sizni ham turnirga taklif qilamiz —
              raqobatni biz bilan birga his eting!
            </p>
          </div>

          {/* Image */}
          <div className="md:block hidden">
            <img
              loading="lazy"
              src={Qualification}
              alt="Qualification"
              className="w-full max-w-[240px]  h-[250px]"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <a
              aria-label="Email"
              href="mailto:info@su-tuit.uz"
              className="w-[180px] text-white text-[14px] md:text-[16px] font-medium px-8 py-3 rounded-[24px] bg-[#FFB21A] shadow-[0px_4px_8px_0px_#FCB62980] transition hover:scale-105 text-center"
            >
              Qatnashish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberQualification;
