import { useState, useRef } from "react";

const faqs = [
  {
    question: "Talabalar Ittifoqiga qanday a’zo bo‘lish mumkin?",
    answer:
      "Agar siz TATU talabasi bo‘lsangiz, Talabalar Ittifoqiga a’zo bo‘lish juda oson! Media kanallarimizga qo‘shiling, rasmiy guruhlar va klublarimizga a’zo bo‘lish orqali faoliyatimizda ishtirok etishingiz mumkin. Yangiliklar, arizalar va boshqa muhim ma’lumotlar tez orada saytimizda e’lon qilinadi.",
  },
  {
    question: "Talabalar Ittifoqining asosiy vazifalari nimalardan iborat?",
    answer:
      "Talabalar Ittifoqi – talabalar manfaatlarini himoya qilish, o‘qish va o‘qishdan tashqari faoliyatlarda ularga yordam berish uchun ishlaydi. Biz quyidagi yo‘nalishlarda yordam beramiz:* Huquqiy maslahatlar* Stajirovka va ish topishda ko‘mak* Start-up loyihalarni qo‘llab-quvvatlash* Madaniy, sport va ijtimoiy tadbirlarni tashkil qilishBarcha yangiliklar media kanallarimizda e’lon qilib boriladi.",
  },
  {
    question:
      "Talabalar Ittifoqi a’zolari uchun qanday imtiyozlar va imkoniyatlar mavjud?",
    answer:
      "Talabalar Ittifoqi a’zolari quyidagi imtiyozlarga ega bo‘ladilar: * Universitet ichidagi va tashqarisidagi eksklyuziv tadbirlarda qatnashish * Rivojlanish uchun treninglar, master-klasslar va seminarlar * Yetakchilik va jamoa boshqaruvi tajribasini oshirish * Hamkor tashkilotlar orqali stajirovka va ish imkoniyatlari * Startap va ijtimoiy loyihalarga grant yoki mentorlardan yordam olish",
  },
  {
    question: "Ichki jamoada qanday qo'shilish mumkin",
    answer:
      "Ichki jamoaga qo‘shilish uchun Talabalar Ittifoqi Prezidenti yoki jamoa vakillariga murojaat qilishingiz mumkin. Sizdan qisqacha ariza va suhbat asosida tanlovdan o‘tiladi. Ichki a’zolik qoidalari bilan saytimiz yoki rasmiy kanallar orqali tanishib chiqing.",
  },
];

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleStepClick = (index) => {
    setOpenIndex(index);
  };

  return (
    <div id="faq" className="py-[100px]">
      <div className="max-w-[1220px] mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {/* Left side */}
        <div className="flex-1">
          <h3 className="text-4xl md:text-6xl font-bold leading-tight">
            Ko'p beriladigan savollar
          </h3>
          <p className="text-lg md:text-xl mt-5 leading-relaxed">
            "Biz bilan birga o'zingizni rivojlantiring - bu yerda bilim, ijod va
            imkoniyatlar birlashadi."
          </p>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <div className="flex flex-col">
            {faqs.map((faq, idx) => (
              <div key={idx} className="flex gap-8 relative">
                {/* Step number with line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm cursor-pointer bg-[#FFB21A] text-white z-10"
                    onClick={() => handleStepClick(idx)}
                  >
                    {idx + 1}
                  </div>

                  {/* Line har bir step uchun */}
                  <div
                    className="w-0.5 bg-[#FFB21A] transition-all duration-500"
                    style={{ flexGrow: 1, minHeight: "40px" }}
                  ></div>
                </div>

                {/* FAQ item */}
                <div
                  ref={(el) => (faqRefs.current[idx] = el)}
                  className={`flex-1 cursor-pointer border rounded-lg p-6 transition-all duration-300 mb-8`}
                  style={{
                    borderColor: openIndex === idx ? "#FFB21A" : "#e5e7eb",
                    boxShadow:
                      openIndex === idx ? "0 4px 6px rgba(0,0,0,0.1)" : "none",
                  }}
                  onClick={() => toggleFAQ(idx)}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-base  sm:text-lg md:text-xl  lg:text-2xl font-medium pr-4">
                      {faq.question}
                    </h4>
                    <div
                      className={`transform transition-transform duration-300 ${
                        openIndex === idx ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <svg
                        className="w-6 h-6 text-[#FFB21A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === idx
                        ? "max-h-96 opacity-100 mt-4"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
