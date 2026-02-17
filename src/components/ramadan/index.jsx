import ramadan from "../../../public/ramadan.mp4";

const Ramadan = () => {
  return (
    <div className="w-full mt-20 md:mt-40 flex justify-center items-center bg-black">
      <video
        src={ramadan}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto max-h-screen md:h-screen object-cover"
      />
    </div>
  );
};

export default Ramadan;
