import vacation1 from "../../assets/vacation/vacation1.png";
import vacation2 from "../../assets/vacation/vacation2.png";
import vacation3 from "../../assets/vacation/vacation3.png";
import vacation4 from "../../assets/vacation/vacation4.png";
import vacation5 from "../../assets/vacation/vacation5.png";
import vacation6 from "../../assets/vacation/vacation6.png";
import vacation7 from "../../assets/vacation/vacation7.png";
import vacation8 from "../../assets/vacation/vacation8.png";
import { Image } from "antd";

const Vacation = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-4 py-[80px] text-center">
      <h3 className="text-3xl md:text-5xl font-bold leading-snug">
        Tadbirlar va Sayohatlar
      </h3>

      <p className="text-base md:text-lg font-normal max-w-[470px] mx-auto my-4">
        “Biz bilan birga o‘zingizni rivojlantiring – bu yerda bilim, ijod va
        imkoniyatlar birlashadi..
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image
            src={vacation1}
            alt="Image"
            className="w-full h-[260px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <Image
            src={vacation2}
            alt="Image"
            className="w-full h-[260px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <Image
            src={vacation3}
            alt="Image"
            className="w-full h-[260px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <Image
            src={vacation4}
            alt="Image"
            className="w-full h-[260px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <Image
            src={vacation5}
            alt="Image"
            className="w-full h-[260px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <Image
            src={vacation6}
            alt="Image"
            className="w-full h-[260px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <Image
            src={vacation7}
            alt="Image"
            className="w-full h-[260px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <Image
            src={vacation8}
            alt="Image"
            className="w-full h-[260px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default Vacation;
