import Navbar from "../../components/navbar";
import About from "../../components/about";
import Hero from "../../components/hero";
import Slider from "../../components/slider";
import Vacation from "../../components/vacation";
import Footer from "../../components/footer";
import Contact from "../../components/contact";
import Question from "../../components/question";
import Project from "../../components/project";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <Vacation />
      <Project />
      <Question />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
