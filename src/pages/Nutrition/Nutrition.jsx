import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import '../Cycle/Cycle.scss';
import homeBg from "../../assets/images/hero_vegetables.png";

function Nutrition() {
  return (
    <>
      <Header />
      <Hero
      backgroundImage={homeBg}
      heading="Nutrition"
      subheading="Search for nutrtion information"/>
      <Footer />
    </>
  )
}

export default Nutrition;