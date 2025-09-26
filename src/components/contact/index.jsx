import contact from "../../assets/contact.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="relative bg-no-repeat bg-center bg-contain px-4 sm:px-6 lg:px-10"
      style={{
        backgroundImage: `url(${contact})`,
        backgroundOrigin: "content-box",
        backgroundSize: "contain",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div
        className="max-w-[1220px] mx-auto 
        py-[80px] sm:py-[120px] md:py-[180px] lg:py-[250px] 
        text-center flex flex-col justify-center items-center gap-[24px]"
      >
        <h3 className="text-[clamp(24px,5vw,60px)] font-[700]">
          Fikrlaringiz bormi? <br /> Keling gaplashamiz
        </h3>

        <p className="text-base md:text-lg font-normal max-w-2xl">
          “Biz bilan birga o‘zingizni rivojlantiring – bu yerda bilim, ijod va
          imkoniyatlar birlashadi.
        </p>

        <div className="flex items-center gap-[20px]">
          <Link
          aria-label="Bog'laning"
            to={"/participate"}
            className="md:w-[180px] w-[150px] md:text-[16px] text-[14px] font-medium px-8 py-3 rounded-[24px] bg-[#FFB21A] shadow-[0px_4px_8px_0px_#FCB62980] transition hover:scale-105 text-center"
          >
            Bog’laning
          </Link>
          <a
          aria-label="Email"
            href="mailto:info@su-tuit.uz"
            className="md:w-[180px] w-[150px] md:text-[16px] text-[14px] font-medium text-[#323232] px-8 py-3 rounded-[24px] border border-[#323232] bg-white shadow-inner transition hover:scale-105 text-center"
          >
            Pochta
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
