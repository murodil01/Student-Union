import contact from "../../assets/contact.png";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage: `url(${contact})`,
      }}
    >
      <div className="max-w-[1220px] mx-auto py-[250px] px-4 text-center flex flex-col justify-center items-center gap-[24px]">
        <h3 className="text-3xl md:text-[60px] font-[700] ">
          Fikirlaringiz bormi? <br /> Keling gaplashamiz
        </h3>

        <p className="text-base md:text-lg font-normal  max-w-2xl">
          “Biz bilan birga o‘zingizni rivojlantiring – bu yerda bilim, ijod va
          imkoniyatlar birlashadi.
        </p>

        <div className="flex items-center gap-[20px]">
          <button className="w-full sm:w-[180px] text-[16px] font-medium  px-8 py-3 rounded-[24px] bg-[#FFB21A] shadow-[0px_4px_8px_0px_#FCB62980] transition hover:scale-105">
            Bog’laning
          </button>
          <button className="w-full sm:w-[180px] text-[16px] font-medium text-[#323232] px-8 py-3 rounded-[24px] border border-[#323232] bg-white shadow-[0px_4px_8px_0px_#FCB62980] transition hover:scale-105">
            Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
