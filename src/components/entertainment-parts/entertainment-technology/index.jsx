import { useState, useEffect } from "react";
import entertainment_technology from "../../../assets/entertainment_technology.png";
import entertainment1 from "../../../assets/entertainment/entertainment1.png";
import entertainment2 from "../../../assets/entertainment/entertainment2.png";
import entertainment3 from "../../../assets/entertainment/entertainment3.png";
import entertainment4 from "../../../assets/entertainment/entertainment4.png";
import entertainment5 from "../../../assets/entertainment/entertainment5.png";

const EntertainmentTechnology = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = entertainment_technology;
    img.onload = () => setIsLoaded(true);
  }, []);

  const images = [
    { src: entertainment1, width: 220, height: 200 },
    { src: entertainment2, width: 240, height: 223 },
    { src: entertainment3, width: 220, height: 200 },
    { src: entertainment4, width: 250, height: 236 },
    { src: entertainment5, width: 400, height: 265 },
  ];

  return (
    <div
      className={`cyber-qualification relative w-full min-h-[600px] transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: isLoaded ? `url(${entertainment_technology})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Matn */}
      <div className="max-w-[1220px] mx-auto px-5 text-center py-8 md:py-[90px]">
        <h3 className="text-2xl sm:text-3xl text-left md:text-[65px] capitalize font-bold drop-shadow-lg">
          Ko'ngilochar olam va aqlli texnologiya birlashdi!
        </h3>
      </div>

      {/* Rasmlar - doim bir qatorda */}
      <div className="w-full overflow-x-auto pb-8 md:pb-16">
        <div className="flex justify-center items-end gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 min-w-max mx-auto">
          {images.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-shrink-0"
              style={{
                width: `${item.width}px`,
                height: `${item.height}px`,
              }}
            >
              <img
                src={item.src}
                alt={`Entertainment ${index + 1}`}
                loading="lazy"
                width={item.width}
                height={item.height}
                className="w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient bloklar - xuddi rasmlar kabi scroll bo‘lsin */}
      <div className="w-full overflow-x-auto">
        <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-5 px-4 min-w-max mx-auto pt-8 md:pt-[90px]">
          <div className="bg-gradient-to-b from-[#893D35] to-[#FFB21A] w-[190px] h-[195px] rounded-t-[20px] flex justify-center items-center flex-shrink-0">
            <p className="text-white font-bold text-[24px]">Kino</p>
          </div>
          <div className="bg-gradient-to-b from-[#893D35] to-[#FFB21A] w-[190px] h-[195px] rounded-t-[20px] flex justify-center items-center flex-shrink-0">
            <p className="text-white font-bold text-[24px]">Picnik</p>
          </div>
          <div className="bg-gradient-to-b from-[#893D35] to-[#FFB21A] w-[190px] h-[140px] rounded-t-[20px] flex justify-center items-center flex-shrink-0">
            <p className="text-white font-bold text-[24px]">Park</p>
          </div>
          <div className="bg-gradient-to-b from-[#893D35] to-[#FFB21A] w-[190px] h-[140px] rounded-t-[20px] flex justify-center items-center flex-shrink-0">
            <p className="text-white font-bold text-[24px]">Picniklar</p>
          </div>
          <div className="bg-gradient-to-b from-[#893D35] to-[#FFB21A] w-[190px] h-[140px] rounded-t-[20px] flex justify-center items-center flex-shrink-0">
            <p className="text-white font-bold text-[24px]">Tadbirlar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentTechnology;
