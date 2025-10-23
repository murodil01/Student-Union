import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import SportHero from "../../components/sport-parts/sport-hero";
import SportLinks from "../../components/sport-parts/sport-links";
import SportGallery from "../../components/sport-parts/sport-gallery";
import Slider from "../../components/slider"
import SportCategory from "../../components/sport-parts/sport-category";

const Sport = () => {
  return (
    <div>
      <Navbar />
      <SportHero/>
      <SportCategory/>
      <Slider/>
      <SportGallery/>
      <SportLinks/>
      <Footer />
    </div>
  );
};

export default Sport;
