import { useState } from "react";
import boglanish from "../../../assets/boglanish.png"
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

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      portfolio: e.target.files[0],
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="max-w-[1220px] mx-auto py-10 px-4 mt-[200px]">
      <div className="grid lg:grid-cols-2 gap-12 items-center p-8 border border-[#EFEFEF] rounded-[7px]">
        {/* Form Section */}
        <div className="p-8 ">
          <h3 className="text-3xl font-bold  mb-2">
            A'zolik va Faollik
          </h3>
          <p className=" mb-8">
            Har qanday savol va takliflaringiz uchun ochiqmiz.
            <br />
            Biz bilan bog'lanish va birga ishga yachim topamiz.
          </p>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="ism"
                  value={formData.ism}
                  onChange={handleInputChange}
                  placeholder="Ism"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="familiya"
                  value={formData.familiya}
                  onChange={handleInputChange}
                  placeholder="Familiya"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="fakultet"
                value={formData.fakultet}
                onChange={handleInputChange}
                placeholder="Fakultet"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <div className="relative">
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
                  className="flex items-center justify-between w-full px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 focus-within:ring-2 focus-within:ring-orange-500"
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
              </div>
            </div>

            <div>
              <textarea
                name="xabar"
                value={formData.xabar}
                onChange={handleInputChange}
                placeholder="Xabar"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#FFB21A]  font-semibold py-3 px-6 rounded-[32px] transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Yuborish
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
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
      </div>
    </div>
  );
};

export default ParticipateHero;
