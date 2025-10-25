import shohjahon from "../../../assets/shohjahon.png";
import { GoArrowUpRight } from "react-icons/go";

const EntertainmentLinks = () => {
  const email = "shovon.khan0099@gmail.com";

  // Emailga xat yuborish tugmasi bosilganda
  const handleSendEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="cyber-qualification bg-[rgb(246,246,246)] max-w-[1220px] my-[25px] mx-auto flex gap-5 flex-col md:flex-row items-center justify-between rounded-2xl px-6 md:px-10 pt-10 overflow-hidden">
      {/* Chap tomonda matn va input */}
      <div className="text-center md:text-left space-y-6 md:space-y-8 w-full md:w-1/2 mt-8 md:mt-0">
        <h3 className="text-4xl md:text-[60px] font-bold leading-tight uppercase">
          <span className="text-[#3C3C3C] uppercase block">Shohjahon</span>
          <span className="text-[#828282] uppercase font-semibold block">
            Karimov
          </span>
        </h3>

        {/* Email input va tugma */}
        <div className="flex items-center border-2 border-[#FFB21A] rounded-md overflow-hidden max-w-[545px] mx-auto md:mx-0 bg-white">
          <input
            type="text"
            value="shovon.khan0099@gmail.com"
            readOnly
            className="flex-1 px-4 py-2 text-gray-600 text-[15px] outline-none cursor-default bg-transparent"
          />
          <button
            onClick={handleSendEmail}
            className="bg-[#FFB21A] px-4 py-3 text-white text-lg flex items-center justify-center"
          >
            <GoArrowUpRight />
          </button>
        </div>
      </div>

      {/* O‘ng tomonda rasm */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2 relative">
        <img
          loading="lazy"
          src={shohjahon}
          alt="Javlonbek"
          className="w-[240px] md:w-[300px] h-auto object-contain md:mr-4 transition-transform duration-500 hover:scale-105 drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default EntertainmentLinks;
