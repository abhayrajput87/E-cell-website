import Hero from "./components/Home/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./components/Home/AboutUs";
import Vision from "./components/Home/Vision";
import Passion from "./components/Home/Passion";
import Achievements from "./components/Home/Achievements";
import Partners from "./components/Home/Partners";
import Touch from "./components/Touch";
import Footer from "./components/Footer";
import Rights from "./components/Rights";
import Gallery from "./components/Gallery/Gallery"
function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Vision/>
      <Passion/>
      <Achievements/>
      <Partners/>
      <Touch/>
      <Footer/>
      <Rights/> 

    </div>
  );
}

export default App;
