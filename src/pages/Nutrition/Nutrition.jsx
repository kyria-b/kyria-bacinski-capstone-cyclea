import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Food from '../../components/Nutrition/Nutrition';
import FoodLogging from '../../components/FoodLogging/FoodLogging';
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
      subheading="Search for nutrtion information and log meals"/>
      <Food />
      <FoodLogging />
      <Footer />
    </>
  )
}

export default Nutrition;