import reader_party1 from "../../../assets/reader/reader_party1.png";
import reader_party2 from "../../../assets/reader/reader_party2.png";
import reader_party3 from "../../../assets/reader/reader_party3.png";
import reader_party4 from "../../../assets/reader/reader_party4.png";
import reader_party5 from "../../../assets/reader/reader_party5.png";

const ReaderParty = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-4 text-center flex flex-col gap-10">
      {/* Header */}
      <div>
        <h3 className="font-bold text-4xl md:text-5xl lg:text-[60px] mb-3">
          Bizning Tadbirlarimiz
        </h3>
        <p className="font-medium text-base md:text-lg lg:text-[20px] text-gray-700">
          “Biz bilan birga o‘zingizni rivojlantiring – bu yerda bilim, ijod va
          imkoniyatlar birlashadi.”
        </p>
      </div>

      {/* Images */}
      <div className="flex flex-col gap-4">
        {/* First row: 384x252 */}
        <div className="flex flex-wrap justify-center gap-4">
          {[reader_party1, reader_party2, reader_party3].map((img, idx) => (
            <img
              key={idx}
              className="rounded-[8px] w-[90%] sm:w-[384px] h-[252px] object-cover"
              src={img}
              alt={`Tadbir ${idx + 1}`}
              loading="lazy"
            />
          ))}
        </div>

        {/* Second row: 585x252 */}
        <div className="flex flex-wrap justify-center gap-4">
          {[reader_party4, reader_party5].map((img, idx) => (
            <img
              key={idx}
              className="rounded-[8px] w-[90%] sm:w-[585px] h-[252px] object-cover"
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

export default ReaderParty;
