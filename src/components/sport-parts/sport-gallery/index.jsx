import sports1 from "../../../assets/sport/sports1.png";
import sports2 from "../../../assets/sport/sports2.png";
import sports3 from "../../../assets/sport/sports3.png";
import sports4 from "../../../assets/sport/sports4.png";
import sports5 from "../../../assets/sport/sports5.png";
import sports6 from "../../../assets/sport/sports6.png";
import sports7 from "../../../assets/sport/sports7.png";
import sports8 from "../../../assets/sport/sports8.png";

const SportGallery = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-4 text-center flex flex-col gap-10">
      {/* Header */}
      <div>
        <h3 className="font-bold text-4xl md:text-5xl lg:text-[60px] mb-3">
          Galereya
        </h3>
        <p className="font-medium text-base md:text-lg lg:text-[20px] text-gray-700">
          “Biz bilan birga o‘zingizni rivojlantiring – bu yerda bilim, ijod va
          imkoniyatlar birlashadi..
        </p>
      </div>

      {/* Images */}
      <div className="flex flex-col gap-4">
        {/* First row: 384x252 */}
        <div className="flex flex-wrap justify-center gap-4">
          {[sports1, sports2, sports3, sports4, sports5, sports6].map(
            (img, idx) => (
              <img
                key={idx}
                className="rounded-[8px] w-[90%] sm:w-[384px] h-[300px]"
                src={img}
                alt={`Tadbir ${idx + 1}`}
                loading="lazy"
              />
            )
          )}
        </div>

        {/* Second row: 585x252 */}
        <div className="flex flex-wrap justify-center gap-4">
          {[sports7, sports8].map((img, idx) => (
            <img
              key={idx}
              className="rounded-[8px] w-[90%] sm:w-[585px] h-[300px]"
              src={img}
              alt={`Tadbir ${idx + 4}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportGallery;
