import { useState } from "react";
import boglanish from "../../../assets/boglanish.png";
import { toast } from "react-hot-toast";

const ParticipateHero = () => {
  const [formData, setFormData] = useState({
    ism: "",
    familiya: "",
    email: "",
    fakultet: "",
    portfolio: null,
    xabar: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleFileChange = (e) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     portfolio: e.target.files[0],
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("ism", formData.ism);
    data.append("familiya", formData.familiya);
    data.append("email", formData.email);
    data.append("fakultet", formData.fakultet);
    data.append("xabar", formData.xabar);
    if (formData.portfolio) {
      data.append("portfolio", formData.portfolio);
    }

    try {
      const response = await fetch("https://formspree.io/f/xrbyzrzq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Muvaffaqiyatli yuborildi!");
        setFormData({
          ism: "",
          familiya: "",
          email: "",
          fakultet: "",
          portfolio: null,
          xabar: "",
        });
      } else {
        toast.error("Xatolik yuz berdi. Qayta urinib ko‘ring.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("⚠️ Serverga ulanib bo‘lmadi.");
    }
  };

  return (
    <div className="max-w-[1220px] mx-auto pt-10 pb-40 px-4 mt-[60px] sm:mt-[100px] md:mt-[150px] lg:mt-[200px]">
      <div className="grid lg:grid-cols-2 gap-12 items-center p-8 border border-[#EFEFEF] rounded-[7px]">
        {/* Image Section */}
        <div className="relative order-1 lg:order-2">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
            <img
              src={boglanish}
              alt="Hands holding smartphone"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Floating elements for visual interest */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
        </div>

        {/* Form Section */}
        <div className="p-4 sm:p-6 md:p-8  order-2 lg:order-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            A'zolik va Faollik
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8">
            Har qanday savol va takliflaringiz uchun ochiqmiz.
            <br />
            Biz bilan bog'lanish va birga ishga yachim topamiz.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Ism va Familiya */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="ism"
                value={formData.ism}
                onChange={handleInputChange}
                placeholder="Ism"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="text"
                name="familiya"
                value={formData.familiya}
                onChange={handleInputChange}
                placeholder="Familiya"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />

            {/* Fakultet */}
            <input
              type="text"
              name="fakultet"
              value={formData.fakultet}
              onChange={handleInputChange}
              placeholder="Fakultet"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />

            {/* File Upload */}
            {/* <div className="relative">
              <input
                type="file"
                name="portfolio"
                onChange={handleFileChange}
                className="hidden"
                id="portfolio-upload"
                accept=".pdf,.doc,.docx"
              />
              <label
                htmlFor="portfolio-upload"
                className="flex items-center justify-between w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 focus-within:ring-2 focus-within:ring-orange-500"
              >
                <span
                  className={
                    formData.portfolio ? "text-gray-900" : "text-gray-500"
                  }
                >
                  {formData.portfolio
                    ? formData.portfolio.name
                    : "CV/Portfolio yuklash"}
                </span>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </label>
            </div> */}

            {/* Xabar */}
            <textarea
              name="xabar"
              value={formData.xabar}
              onChange={handleInputChange}
              placeholder="Xabar"
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#FFB21A] font-semibold text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-[28px] sm:rounded-[32px] transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParticipateHero;
