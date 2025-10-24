import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CodingLinks from "../../components/coding-parts/coding-links";
import Slider from "../../components/slider"
import CodingGallery from "../../components/coding-parts/coding-gallery";
import CodingHero from "../../components/coding-parts/coding-hero";
import CodingAbout from "../../components/coding-parts/coding-about";

const Coding = () => {
  return (
    <div>
      <Navbar />
      <CodingHero/>
      <CodingAbout/>
      <Slider/>
      <CodingGallery/>
      <CodingLinks/>
      <Footer />
    </div>
  );
};

export default Coding;
