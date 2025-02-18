import "./About.scss";

function About() {
  return (
    <div>
      <section className="about__container">
        <h2 className="about__about">About</h2>
        <h4 className="about__quote">
          “Inspired by nature & plant growth cycles, Cyclea encourages a balanced approach to health, acknowledging that just as plants thrive in harmony with the seasons, women can optimize their wellness by understanding their body's natural rhythms.”
        </h4>
        <h3 className="about__quote-lead">- Kyria Bacinski, Founder & CEO</h3>

        <div className="about__article">
          <h3 className="about__description about__description--1">
            Cyclea is a holistic health & wellness application designed to help women align their fitness, nutrition, & well-being with their natural cycle.
          </h3>
          <h3 className="about__description about__description--2">
            Our Mission is to embrace the interconnection between nature, movement, & well-being, helping women flourish in every phase of their cycle.
          </h3>
        </div>
      </section>
    </div>
  );
}

export default About;
