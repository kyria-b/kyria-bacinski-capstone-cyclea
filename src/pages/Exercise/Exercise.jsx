import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import CycleCalendar from '../../components/Cycle/Cycle';
import Footer from '../../components/Footer/Footer';
import '../Cycle/Cycle.scss';
import homeBg from "../../assets/images/exercise_hero.png";

function Exercise() {
  return (
    <>
      <Header />
      <Hero
      backgroundImage={homeBg}
      heading="Exercise"
      subheading="Search for movment and workout inspiration"/>
      <Footer />
    </>
  )
}

export default Exercise;