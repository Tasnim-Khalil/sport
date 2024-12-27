import "./style.css";

const Service = () => {
  return (
    <section className="service" id="service">
    <div className="section__container service__container">
      <h2 className="section__header">Services We Provide</h2>
      <div className="service__grid">
        <div className="service__card">
          <span>01</span>
          <h4>Fitness Training</h4>
          <p>
            Our fitness training programs are tailored to help you build
            strength, improve endurance, and achieve your personal fitness
            goals.
          </p>
        </div>
        <div className="service__card">
          <span>02</span>
          <h4>Yoga</h4>
          <p>
            Perfect for all levels, our sessions focus on improving
            flexibility, balance, and mental clarity while helping you manage
            stress.
          </p>
        </div>
        <div className="service__card">
          <span>03</span>
          <h4>Gymnastics</h4>
          <p>
            Our gymnastics classes are designed to boost coordination,
            flexibility, and core strength through a series of fun and
            challenging exercises.
          </p>
        </div>
        <div className="service__card">
          <span>04</span>
          <h4>Zumba</h4>
          <p>
          It is an exercise that combines dancing and fitness, 
          and burns calories. It is considered one of the famous dance exercises that offers many health 
          and physical benefits.
          </p>
        </div>
      
        <div className="service__card">
          <span>05</span>
          <h4>Sports machines and equipment</h4>
          <p>
          Treadmill,Exercise bike (elliptical or air),Roller Pro,
          Strength machine (weight machines),Weight lifting equipment (weight racks and dumbbells),

          </p>
        </div>
        <div className="service__card">
          <span>06</span>
          <h4>Pilates exercises</h4>
          <p>
          It is a type of exercise that focuses on strengthening core muscles,
           improving flexibility and balance,reducing stress, and improving concentration and breathing.

          </p>
        </div>
        
      </div>
    </div>
  </section>
  );
}

export default Service;
