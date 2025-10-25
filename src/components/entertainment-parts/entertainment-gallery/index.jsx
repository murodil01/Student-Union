
const EntertainmentGallery = () => {
  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-7xl mx-auto text-center flex flex-col gap-[50px]">
        {/* Header */}
        <div>
          <h3 className="font-bold text-4xl md:text-5xl lg:text-[60px] mb-3">
            Galereya
          </h3>
          <p className="font-medium text-base md:text-lg lg:text-[20px] text-gray-700">
            “Biz bilan birga o‘zingizni rivojlantiring – bu yerda bilim, ijod va
            imkoniyatlar birlashadi..
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Qator 1 */}
          {/* 1-rasm: Baland */}
          <div className="row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=500&fit=crop"
              alt="Gallery 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* 2-rasm: Kichik */}
          <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=240&fit=crop"
              alt="Gallery 2"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* 3-rasm: Baland */}
          <div className="row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=500&fit=crop"
              alt="Gallery 3"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* 4-rasm: Kichik */}
          <div className="row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=240&fit=crop"
              alt="Gallery 4"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* Qator 2 */}
          {/* 5-rasm: Kichik (1-ustun pastki qismi) */}
          <div className="row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=240&fit=crop"
              alt="Gallery 5"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* 6-rasm: Baland */}
          <div className="row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=240&fit=crop"
              alt="Gallery 6"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* 7-rasm: Kichik (3-ustun pastki qismi) */}
          <div className="row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=500&fit=crop"
              alt="Gallery 7"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* 8-rasm: Baland */}
          <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              loading="lazy"
              src="https://tse1.mm.bing.net/th/id/OIP.Ag_It2vnUtAZlLcIQ9emlAHaEK?cb=ucfimg2ucfimg=1&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Gallery 8"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* Qator 3 */}
          {/* 9-rasm: Kichik */}
          <div className="row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=240&fit=crop"
              alt="Gallery 9"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* 10-rasm: Kichik (2-ustun pastki qismi) */}
          <div className="row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=240&fit=crop"
              alt="Gallery 10"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* 11-rasm: Kichik */}
          <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=500&fit=crop"
              alt="Gallery 11"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* 12-rasm: Kichik (4-ustun pastki qismi) */}
          <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=240&fit=crop"
              alt="Gallery 12"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentGallery;
