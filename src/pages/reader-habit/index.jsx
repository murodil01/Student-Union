import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ReaderHero from "../../components/reader-parts/read-hero";
import ReaderInform from "../../components/reader-parts/reader-inform";
import Slider from "../../components/slider"
import ReaderParty from "../../components/reader-parts/reader-party";
import ReaderLinks from "../../components/reader-parts/reader-links";
const ReaderHabit = () => {
  return (
    <div>
      <Navbar />
      <ReaderHero />
      <ReaderInform/>
      <Slider/>
      <ReaderParty/>
      <ReaderLinks/>
      <Footer />
    </div>
  );
};

export default ReaderHabit;
