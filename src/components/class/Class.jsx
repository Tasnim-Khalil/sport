import "./style.css";

const Class = () => {
  
  var i = 0;
  function change() {
    var color = ["#10091D","#28193D","#46315C", "#68507B", "#8D769A","#B3A3BA"];
   document.getElementById("hh").style.color = color[i];
   i++;
    if(i>7){
    i=0;
    }
  }
  
  setInterval(change, 1000);
  
  
  return (
    <section className="popular" id="class">
    <div className="section__container popular__container">
      <h1 id="hh"className="section__header">What Do You Want To Join Today?</h1>
  <div className="class__grid">
    <div className="class__card">

      <div className="container">
        <div className="box">
          <h3>- Zumba Dance Fitness</h3>
          <p>Fun and energetic dance workout</p>
        </div>
        <div className="box">
          <h3>- Barre Fitness</h3>
          <p>Combines ballet, Pilates, and yoga for strength and flexibility</p>
        </div>
        <div className="box">
          <h3>- Bodyweight Exercises</h3>
          <p>Strength training using your body weight</p>
        </div>

        <div className="box">
          <h3>- Barbell Strength</h3>
          <p>Focuses on strength training using barbells</p>
        </div>
        <div className="box">
          <h3>- Power Yoga</h3>
          <p>Dynamic yoga practice for strength and flexibility</p>
        </div>
        <div className="box">
          <h3>- Cardio Strength</h3>
          <p>Full-body workout with cardio</p>
        </div>
      </div>
      

    </div>
    </div>
    </div>
</section>

  );
}

export default Class;
