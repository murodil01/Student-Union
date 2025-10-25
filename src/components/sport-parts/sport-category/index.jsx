import ping_pong from "../../../assets/sport-category/ping_pong.png";
import badmenton from "../../../assets/sport-category/badmenton.png";
import soccer from "../../../assets/sport-category/soccer.png";
import basketball from "../../../assets/sport-category/basketball.png";

const SportCategory = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-4 sm:px-6 py-8">
      <h3 className="text-left font-normal text-[24px] sm:text-[28px] mb-6">
        Kategoriya
      </h3>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Football */}
        <div className="flex flex-col gap-6 items-center">
          <div className="w-full bg-[#EBEEF3] py-4 sm:py-5 text-center rounded-md">
            <p className="uppercase text-[#B8C2CE] text-[24px] sm:text-[30px] md:text-[34px] lg:text-[37px] font-bold tracking-wide">
              football
            </p>
          </div>
          <img
            loading="lazy"
            src={soccer}
            alt="soccer"
            className="w-full h-auto rounded-[6px]"
          />
        </div>

        {/* Basketball */}
        <div className="flex flex-col gap-6 items-center">
          <img
            loading="lazy"
            src={basketball}
            alt="basketball"
            className="w-full h-[300px] sm:h-[220px] md:h-[235px] rounded-[6px]"
          />
          <div className="w-full bg-[#EBEEF3] py-4 sm:py-5 text-center rounded-md">
            <p className="uppercase text-[#B8C2CE] text-[24px] sm:text-[30px] md:text-[34px] lg:text-[37px] font-bold tracking-wide">
              basket ball
            </p>
          </div>
        </div>

        {/* Badminton */}
        <div className="flex flex-col gap-6 items-center">
          <div className="w-full bg-[#EBEEF3] py-4 sm:py-5 text-center rounded-md">
            <p className="uppercase text-[#B8C2CE] text-[24px] sm:text-[30px] md:text-[34px] lg:text-[37px] font-bold tracking-wide">
              badminton
            </p>
          </div>
          <img
            loading="lazy"
            src={badmenton}
            alt="badminton"
            className="w-full h-auto rounded-[6px]"
          />
        </div>

        {/* Table Tennis */}
        <div className="flex flex-col gap-6 items-center">
          <img
            loading="lazy"
            src={ping_pong}
            alt="ping_pong"
            className="w-full h-[300px] sm:h-[220px] md:h-[235px] rounded-[6px]"
          />
          <div className="w-full bg-[#EBEEF3] py-4 sm:py-5 text-center rounded-md">
            <p className="uppercase text-[#B8C2CE] text-[24px] sm:text-[30px] md:text-[34px] lg:text-[37px] font-bold tracking-wide">
              table tennis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportCategory;
