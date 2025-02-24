import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import CycleCalendar from '../../components/Cycle/Cycle';
import Footer from '../../components/Footer/Footer';
import '../Cycle/Cycle.scss';
import homeBg from "../../assets/images/cycle_hero.png";

function Cycle() {
  return (
    <>
      <Header />
      <Hero
      backgroundImage={homeBg}
      heading="Cycle Calendar"
      subheading="Track your cycle effortlessly"/>
      <CycleCalendar />
      <Footer />
    </>
  )
}

export default Cycle;