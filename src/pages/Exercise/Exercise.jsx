import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Workout from '../../components/Exercise/Exercise';
import ExerciseLogging from '../../components/ExerciseLogging/ExerciseLogging';
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
      subheading="Search for exercise activities and log workouts"/>
      <Workout />
      <ExerciseLogging />
      <Footer />
    </>
  )
}

export default Exercise;