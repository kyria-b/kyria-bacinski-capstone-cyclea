import "./Hero.scss";

function Hero({ backgroundImage, heading, subheading }) {
  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-banner__container">
        <h1 className="hero-banner__heading">{heading}</h1>
        <h3 className="hero-banner__subheading">{subheading}</h3>
      </div>
    </section>
  );
}

export default Hero;
