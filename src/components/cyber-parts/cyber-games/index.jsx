import cyber1 from "../../../assets/cyber/cyber1.png";
import cyber2 from "../../../assets/cyber/cyber2.png";
import cyber3 from "../../../assets/cyber/cyber3.png";
import cyber4 from "../../../assets/cyber/cyber4.png";
import cyber5 from "../../../assets/cyber/cyber5.png";

const cyber = [
  {
    id: "1",
    image: cyber1,
    button: "Dota 2",
  },
  {
    id: "2",
    image: cyber2,
    button: "Mobile Legends: Bang Bang",
  },
  {
    id: "3",
    image: cyber3,
    button: "PUBG MOBILE",
  },
  {
    id: "4",
    image: cyber4,
    button: "Clash Royale",
  },
  {
    id: "5",
    image: cyber5,
    button: "Counter-Strike 2",
  },
];

const CyberGames = () => {
  return (
    <div className="text-center px-4 max-w-[1220px] mx-auto">
      <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[60px] font-bold leading-snug">
        Cyber Sport O’yinlari
      </h3>
      <p className="text-base md:text-[20px] font-normal max-w-[700px] mx-auto mt-[20px] mb-[60px]">
        Sevimli o‘yinlaringizni bir joyda jamladik. Har bir kartani bosib,
        virtual jang maydoniga kirib boring va haqiqiy raqobat zavqini his
        eting.
      </p>

      {/* Cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 place-items-center">
        {cyber.map((item) => (
          <div
            key={item.id}
            className="games-card bg-[#FAFAFA] border border-[#DDD] rounded-[16px] p-4 flex flex-col items-center shadow-sm hover:shadow-lg transition w-full max-w-[400px]"
          >
            <img
              src={item.image}
              alt={item.button}
              className="w-full h-[250px] object-contain rounded-[12px] mb-[70px]"
            />
            <button
              className="games-btn relative text-[18px] w-full px-6 py-[16px] rounded-[8px] font-normal transition border border-[rgba(209,213,219,0.80)] backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(270deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 178, 26, 0.08) 25%, rgba(198, 168, 107, 0.12) 37.5%, rgba(199, 166, 102, 0.08) 50%, rgba(255, 255, 255, 0.01) 100%)",
              }}
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberGames;
