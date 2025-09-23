import logo from "../../assets/logo.svg";
import { FaFacebook, FaTelegram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-white footer-top">
        <div className="max-w-[1220px]  mx-auto px-4 py-[80px] flex flex-col lg:flex-row gap-x-53 gap-y-10 items-start justify-between">
          {/* Logo & Contact */}
          <div className="flex flex-col gap-4 max-w-[300px] w-full">
            <img
              className="w-[100px] sm:w-[120px] md:w-[132px] lg:w-[150px] h-auto object-contain"
              src={logo}
              alt="Logo"
            />
            <a className="text-[16px] font-[400]" href="#">
              info@su-tuit.uz
            </a>
            <a className="text-[14px] font-[400]" href="#">
              TATU, Talabalar Ittifoqi Ofisi <br /> Toshkent shahri, Amir Temur
              ko‘chasi, ___-uy
            </a>
            <a className="text-[16px] font-[400]" href="#">
              +998 (__) --_
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
                  href="#"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  className="text-white hover:text-[#916802]  cursor-pointer hover:border-2 border-2 border-[#916802] hover:border[#916802] hover:bg-white bg-[#916802] rounded-[6px] p-3 flex items-center justify-center"
                  href="#"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  className="text-white hover:text-[#916802]  cursor-pointer hover:border-2 border-2 border-[#916802] hover:border[#916802] hover:bg-white bg-[#916802] rounded-[6px] p-3 flex items-center justify-center"
                  href="#"
                >
                  <IoLogoLinkedin size={20} />
                </a>
                <a
                  className="text-white hover:text-[#916802]  cursor-pointer hover:border-2 border-2 border-[#916802] hover:border[#916802] hover:bg-white bg-[#916802] rounded-[6px] p-3 flex items-center justify-center"
                  href="#"
                >
                  <FaTelegram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#916802] footer-bottom  py-[14px]">
        <h3 className="text-center text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-[#FFFFFF] font-[400] px-2">
          Mualliflik huquqi © 2025 Agency Creative. Barcha huquqlar
          himoyalangan.
        </h3>
      </div>
    </>
  );
};

export default Footer;
