import "./style.css";
const About = () => {
  return (
    
      <div className="about" id="about">
      <div className="section__container about__container">
        <div className="about__image">
          <img src="src/images/about.png" alt="about" />
        </div>
        <div className="about__content">
          <h2 className="section__header">Ready To Make A Change?</h2>
          <p>
            Taking the first step towards a healthier, stronger you can be the
            most challenging part of the journey, but it is also the most
            rewarding. Whether you are a beginner or a seasoned athlete, our
            personalized training programs are designed to help you reach your
            goals faster and more efficiently.
          </p>
          <p>
            With our motivating trainers, energizing classes, and
            state-of-the-art equipment, you will have everything you need to stay
            committed and see real results.
          </p>
          <div className="about__btn">
            <button className="btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default About;
