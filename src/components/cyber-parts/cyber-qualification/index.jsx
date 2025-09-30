import { Calendar } from "lucide-react";
import Qualification from "../../../assets/Qualification.png";

const CyberQualification = () => {
  return (
    <div className="max-w-[1220px] px-6 md:py-0 py-10 mx-auto bg-[#f6f6f6] rounded-[10px] my-[80px]">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
        {/* Left text section */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h3 className="text-2xl font-bold ">Cyber Sport Saralash Tartibi</h3>
          <p className=" leading-relaxed max-w-[500px] mx-auto md:mx-0">
            Hozir turnirlar avjida! Kibersport olamidagi eng qizg‘in janglar
            davom etmoqda. Sizni ham turnirga taklif qilamiz — raqobatni biz
            bilan birga his eting!
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-lg ">Dota 2</h4>
              <p className="flex items-center justify-center md:justify-start gap-2 ">
                <Calendar size={20} className="text-[#FFB21A]" />
                12.09.2025 – 12.10.2025
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg ">Counter-Strike 2</h4>
              <p className="flex items-center justify-center md:justify-start gap-2 ">
                <Calendar size={20} className="text-[#FFB21A]" />
                25.10.2025 – 10.10.2025
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={Qualification}
            alt="Qualification"
            className="w-full max-w-[400px] object-contain"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <a
            aria-label="Email"
            href="mailto:info@su-tuit.uz"
            className="w-[150px] md:w-[180px] text-white text-[14px] md:text-[16px] font-medium px-8 py-3 rounded-[24px] bg-[#FFB21A] shadow-[0px_4px_8px_0px_#FCB62980] transition hover:scale-105 text-center"
          >
            Qatnashish
          </a>
        </div>
      </div>
    </div>
  );
};

export default CyberQualification;
