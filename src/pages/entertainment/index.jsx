import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import EntertainmentLinks from "../../components/entertainment-parts/entertainment-links";
import EntertainmentGallery from "../../components/entertainment-parts/entertainment-gallery";
import EntertainmentAbout from "../../components/entertainment-parts/entertainment-about";
import EntertainmentHero from "../../components/entertainment-parts/entertainment-hero";
import EntertainmentTechnology from "../../components/entertainment-parts/entertainment-technology";

const Entertainment = () => {
  return (
    <div>
      <Navbar />
      <EntertainmentHero/>
      <EntertainmentAbout/>
      <EntertainmentTechnology/>
      <EntertainmentGallery/>
      <EntertainmentLinks/>
      <Footer />
    </div>
  );
};

export default Entertainment;
