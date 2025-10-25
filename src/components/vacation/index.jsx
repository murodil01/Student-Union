  import group_leaders from "../../assets/vacation/group_leaders.webp";
  import fozilChes from "../../assets/vacation/fozilChes.webp";
  import japaDiplom from "../../assets/vacation/japaDiplom.webp";
  import japanIskandar from "../../assets/vacation/japanIskandar.webp";
  import japanTogether from "../../assets/vacation/japanTogether.webp";
  import kaltaMinor from "../../assets/vacation/kaltaMinor.webp";
  import labPeople from "../../assets/vacation/labPeople.webp";
  import mushtariy from "../../assets/vacation/mushtariy.webp";
  import threePeople from "../../assets/vacation/threePeople.webp";
  import vaucher from "../../assets/vacation/vaucher.webp";
  import xivaThree from "../../assets/vacation/xivaThree.webp";
  import china from "../../assets/vacation/china.webp";
  import { Image } from "antd";

  const Vacation = () => {
    return (
      <div
        id="vacation"
        className="max-w-[1220px] mx-auto px-4 py-[32px] sm:py-[48px] md:py-[64px] lg:py-[80px] text-center"
      >
        <h3 className="text-[20px] md:text-5xl font-bold leading-snug">
          Tadbirlar va Sayohatlar
        </h3>
        <p className="text-base md:text-lg font-normal max-w-[600px] mx-auto mt-4">
          Har bir kun – yangi sarguzasht, yangi do'stlik va unutilmas lahzalar.
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
              group_leaders,
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
              <div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Tadbir va sayohat rasmi ${index + 1}`}
                  className="w-full h-full aspect-square object-cover transition-transform duration-700 ease-out hover:scale-150"
                  preview={{
                    mask: false, // Hover da preview mask ko'rinmasin
                  }}
                />
              </div>
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
    );
  };

  export default Vacation;
