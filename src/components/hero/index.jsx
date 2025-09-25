import hero_bg from "../../assets/hero_bg.png";
import { motion } from "framer-motion";

const Hero = () => {
  const text = "Talabalarning ovozi, kelajakning yo‘lboshchisi.".split(" ");

  // Har bir so‘z varianti
  const word = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.6, // har so‘z navbatma-navbat chiqadi
      },
    }),
  };

  return (
    <div
      className="relative bg-no-repeat bg-center bg-contain min-h-screen"
      style={{
        backgroundImage: `url(${hero_bg})`,
      }}
    >
      <div
        className="max-w-[1220px] mt-[50px] mx-auto pt-[120px] sm:pt-[150px] md:pt-[200px] lg:pt-[250px] pb-[80px] px-4 text-center flex flex-col justify-center items-center gap-[30px]"
      >
        {/* Title animatsiya bilan */}
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug">
          {text.map((wordText, index) => (
            <motion.span
              key={index}
              variants={word}
              initial="hidden"
              animate="visible"
              custom={index} // delay uchun
              className="inline-block mr-2"
            >
              {wordText}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg font-normal max-w-2xl">
          TATU Talabalar Ittifoqi – tashabbus, ijod va imkoniyatlar markazi.
        </p>

        {/* Button */}
        <a href="https://t.me/+NfuwV4a6Lzg2OTg6" className="text-[20px] font-[700] max-w-[400px] w-full px-8 py-3 rounded-[24px] bg-[#FFB21A] shadow-[0px_4px_8px_0px_#FCB62980] transition hover:scale-105">
          A'ZO BO'LISH
        </a>

        {/* Responsive YouTube video */}
        {/* <div className="mt-10 w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] aspect-video rounded-[16px] overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/2xjygHcPgOE?autoplay=1&mute=1&loop=1&playlist=2xjygHcPgOE&controls=1&modestbranding=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
