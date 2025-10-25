import reader_inform from "../../../assets/reader_inform.png";
import { IoArrowRedo } from "react-icons/io5";

const ReaderInform = () => {
  return (
    <div className="px-3">
      <div className="max-w-[1180px] border border-[#D1D5DB] p-4 rounded-lg md:border-none md:p-0 md:rounded-none mx-auto my-10 px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="border border-gray-300 rounded-xl p-2 shadow-sm hover:shadow-md transition-all duration-300 ">
            <img
              loading="lazy"
              src={reader_inform}
              alt="Reader"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6 ">
          <h3 className="text-xl sm:text-[34px] font-[700] leading-snug text-center md:text-left">
            Har bir kitob — yangi dunyo, har bir kitobxon — sayohatchi.
          </h3>

          <Feature
            title="Shaxsiy rivojlanish va motivatsiya"
            desc="Roman, hikoya va she’rlar orqali hayotiy voqealarni, inson ruhiyatini va yangi dunyolarni kashf etish yo‘nalishi."
          />

          <Feature
            title="Ilmiy va o‘quv adabiyotlari"
            desc="Fan, texnika va tarixiy bilimlarni chuqur o‘rganib, o‘z bilim va dunyoqarashini kengaytirish imkonini beruvchi yo‘nalish."
          />

          <Feature
            title="O‘qishga ko‘mak"
            desc="Darslarga yordamchi guruh, qo‘shimcha mashg‘ulotlar va konsultatsiyalar."
          />
        </div>
      </div>
    </div>
  );
};

const Feature = ({ title, desc }) => {
  return (
    <div className="flex items-start gap-[32px]">
      <IoArrowRedo size={28} className="text-[#FFB21A] mt-1 flex-shrink-0" />
      <div>
        <h4 className="text-[17px] sm:text-[24px] font-[400] mb-1">{title}</h4>
        <p className="text-[12px] sm:text-[16px] font-[400] leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ReaderInform;
