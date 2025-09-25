import fourPeople from "../../assets/fourPeople.jpg";
import fozilChes from "../../assets/fozilChes.jpg";
import japaDiplom from "../../assets/japaDiplom.jpg";
import japanIskandar from "../../assets/japanIskandar.jpg";
import japanTogether from "../../assets/japanTogether.jpg";
import kaltaMinor from "../../assets/kaltaMinor.jpg";
import labPeople from "../../assets/labPeople.jpg";
import mushtariy from "../../assets/mushtariy.jpg";
import threePeople from "../../assets/threePeople.jpg";
import vaucher from "../../assets/vaucher.jpg";
import xivaThree from "../../assets/xivaThree.jpg";
import china from "../../assets/china.jpg";

import { Image } from "antd";

const Vacation = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-4 py-[32px] sm:py-[48px] md:py-[64px]  lg:py-[80px] text-center">
      <h3 className="text-[20px] md:text-5xl font-bold leading-snug">
        Tadbirlar va Sayohatlar
      </h3>

      <p className="text-base md:text-lg font-normal max-w-[600px] mx-auto mt-4">
        Har bir kun – yangi sarguzasht, yangi do‘stlik va unutilmas lahzalar.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {[
            fourPeople,
            threePeople,
            vaucher,
            japanTogether,
            labPeople,
            japanIskandar,
            japaDiplom,
            fozilChes,
            kaltaMinor,
            mushtariy,
            xivaThree,
            china,
          ].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full aspect-square object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default Vacation;
