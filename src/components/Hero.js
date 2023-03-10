import Button from "./Button";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__image">
        <img src="./images/hero.jpg" alt="Intro" />
      </div>
      <div className="textbox textbox--hero">
        <h2>Waves</h2>
        <h4>Space Time and Clouds of uncertainity</h4>
        <Button text="Join Us"></Button>
      </div>
    </div>
  )
}

export default Hero;
