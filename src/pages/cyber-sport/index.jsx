import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CyberHero from "../../components/cyber-parts/cyber-hero";
import CyberSlider from "../../components/cyber-parts/cyber-slider";
import CyberGames from "../../components/cyber-parts/cyber-games";
import CyberFormat from "../../components/cyber-parts/cyber-format";
import CyberQualification from "../../components/cyber-parts/cyber-qualification";
import CyberLink from "../../components/cyber-parts/cyber-link";

const CyberSport = () => {
  return (
    <div>
      <Navbar />
      <CyberHero />
      <CyberSlider />
      <CyberGames />
      <CyberFormat />
      <CyberQualification />
      <CyberLink />
      <Footer />
    </div>
  );
};

export default CyberSport;
