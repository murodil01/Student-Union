import logo from "../../assets/logo.svg";
import { FaFacebook, FaTelegram, FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="bg-white footer-top">
        <div className="max-w-[1220px]  mx-auto px-4 py-[80px] flex flex-col lg:flex-row gap-x-40 gap-y-10 items-start justify-between">
          {/* Logo & Contact */}
          <div className="flex flex-col gap-4 max-w-[315px] w-full">
            <img
              className="w-[100px] sm:w-[120px] md:w-[132px] lg:w-[150px] h-auto object-contain"
              src={logo}
              alt="Logo"
            />
            <a href="mailto:info@su-tuit.uz" className="text-[16px] font-[400]">
              info@su-tuit.uz
            </a>
            <a
              className="text-[14px] font-[400]"
              href="https://www.google.com/maps/place/Tashkent+University+of+Information+Technologies/@41.3409302,69.2867291,17z/data=!4m6!3m5!1s0x38ae8b534175ed31:0x52a8f9d9414a2ad8!8m2!3d41.3409302!4d69.2867291!16s%2Fm%2F02x8vhy?entry=tts&g_ep=EgoyMDI1MDUxMy4xIPu8ASoASAFQAw%3D%3D&skid=7fad99e4-6c88-4f5e-95c5-6636cb65a97d"
            >
              TATU, Talabalar Ittifoqi Ofisi <br /> Toshkent shahri, Amir Temur
              ko‘chasi, 108-uy
            </a>
            <a className="text-[16px] font-[400]" href="tel:+998908086383">
              +998 90 808 63 83
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row md:flex-nowrap gap-8 md:gap-[40px] lg:gap-[70px] w-full">
            {/* Home Links */}
            <div className="flex flex-col gap-2 text-left ">
              <h3 className=" text-[18px] font-[700]">Home</h3>
              <a className=" text-[16px]" href="#">
                Biz haqimizda
              </a>
              <a className=" text-[16px]" href="#">
                Bizning klublarimiz
              </a>
              <a className=" text-[16px]" href="#">
                Bizning tadbirlarimiz
              </a>
              <a className=" text-[16px]" href="#">
                Ko’p uchraydigan savollar
              </a>
            </div>

            {/* About Links */}
            <div className="flex flex-col gap-2 text-left ">
              <h3 className=" text-[18px] font-[700]">Biz haqimizda</h3>
              <a className=" text-[16px]" href="#">
                A’zo bo’lish
              </a>
              <a className=" text-[16px]" href="#">
                Natijalar
              </a>
              <a className=" text-[16px]" href="#">
                Jamoamiz
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col gap-4 text-left ">
              <h3 className=" text-[18px] font-[700]">Ijtimoiy tarmoqlar</h3>
              <div className="flex gap-3 flex-wrap">
                <a
                  className="text-white hover:text-[#916802]  cursor-pointer hover:border-2 border-2 border-[#916802] hover:border[#916802] hover:bg-white bg-[#916802] rounded-[6px] p-3 flex items-center justify-center"
                  href="https://t.me/+NfuwV4a6Lzg2OTg6"
                >
                  <FaTelegram size={20} />
                </a>
                <a
                  className="text-white hover:text-[#916802]  cursor-pointer hover:border-2 border-2 border-[#916802] hover:border[#916802] hover:bg-white bg-[#916802] rounded-[6px] p-3 flex items-center justify-center"
                  href="https://www.instagram.com/tuitstudentsunion?igsh=dmt4MHl2bjE1YjRu"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  className="text-white hover:text-[#916802]  cursor-pointer hover:border-2 border-2 border-[#916802] hover:border[#916802] hover:bg-white bg-[#916802] rounded-[6px] p-3 flex items-center justify-center"
                  href="https://www.linkedin.com/in/"
                >
                  <IoLogoLinkedin size={20} />
                </a>
                <a
                  className="text-white hover:text-[#916802]  cursor-pointer hover:border-2 border-2 border-[#916802] hover:border[#916802] hover:bg-white bg-[#916802] rounded-[6px] p-3 flex items-center justify-center"
                  href="https://www.facebook.com/"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#916802] footer-bottom  py-[14px]">
        <h3 className="text-center text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-[#FFFFFF] font-[400] px-2">
         © 2025 TATU Talabalar Ittifoqi.
        </h3>
      </div>
    </>
  );
};

export default Footer;
