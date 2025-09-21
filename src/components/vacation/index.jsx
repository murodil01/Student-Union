const Vacation = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-4 py-[80px] text-center">
      <h3 className="text-3xl md:text-5xl font-bold  leading-snug">
        Tadbirlar va Sayohatlar
      </h3>

      <p className="text-base md:text-lg font-normal  max-w-[470px] mx-auto my-4">
        “Biz bilan birga o‘zingizni rivojlantiring – bu yerda bilim, ijod va
        imkoniyatlar birlashadi..
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <img
          src="https://avatars.mds.yandex.net/i?id=9f2dbe3a4a5905ce4971ce62053ae2951077331d-12608033-images-thumbs&n=13"
          alt="Image"
          className="w-full h-48 object-cover rounded-lg"
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=b31bdfbe74a1bdc5b4ca6dc13c509d94737c9e79-12716743-images-thumbs&n=13"
          alt="Image"
          className="w-full h-48 object-cover rounded-lg"
        />
        <img
          src="https://i.pinimg.com/originals/c6/4d/ef/c64defa4de648b461456e1c06fdc4e18.jpg"
          alt="Image"
          className="w-full h-48 object-cover rounded-lg"
        />
        <img
          src="https://i.pinimg.com/originals/c6/4d/ef/c64defa4de648b461456e1c06fdc4e18.jpg"
          alt="Image"
          className="w-full h-48 object-cover rounded-lg"
        />
        <img
          src="https://wallpapers.com/images/hd/beach-scenes-desktop-wl184s6x0w5dmkwj.jpg"
          alt="Image"
          className="w-full h-48 object-cover rounded-lg"
        />
        <img
          src="https://wallpapers.com/images/hd/pretty-beach-2500-x-1562-iqfn2e9s0ktbyb2t.jpg"
          alt="Image"
          className="w-full h-48 object-cover rounded-lg"
        />
        <img
          src="https://i.pinimg.com/736x/c8/55/9b/c8559b9ad29cb437141ddb3045db6e23.jpg"
          alt="Image"
          className="w-full h-48 object-cover rounded-lg"
        />
        <img
          src="https://i.pinimg.com/originals/2f/5b/fa/2f5bfa5b2ad5285ec974c77ad9150d91.jpg"
          alt="Image"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Vacation;
