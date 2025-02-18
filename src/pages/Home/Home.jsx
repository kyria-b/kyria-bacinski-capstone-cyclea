import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import MainContent from "../../components/MainContent/MainContent";
import Footer from '../../components/Footer/Footer';
import Cyclea from '../../assets/images/hero_leaves.png';
import '../Home/Home.scss';

function Home() {
  return (
    <>
      <Header />
      <Hero
      backgroundImage={Cyclea}
      heading="Cyclea"
      subheading="Nurturing Women's Health Naturally"/>
      <About />
      <MainContent/>
      <Footer />
    </>
  )
}

export default Home;