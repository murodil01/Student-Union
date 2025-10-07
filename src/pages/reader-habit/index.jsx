import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ReaderHero from "../../components/reader-parts/read-hero";
import ReaderInform from "../../components/reader-parts/reader-inform";

const ReaderHabit = () => {
  return (
    <div>
      <Navbar />
      <ReaderHero />
      <ReaderInform/>
      <Footer />
    </div>
  );
};

export default ReaderHabit;
