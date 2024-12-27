// import React from 'react';
import "./style.css";

const Blog = () => {
  return (
       <section className="Buzzworthy" id="class">
    <div className="section__container Buzzworthy__Blogs">
      <h2 className="section__header">Latest news and articles</h2>
    
      </div>
    <div className="text">
    <h1>Our blog</h1>
<div className="container">
    
    <div className="card">
       
      <div className="face face1">
        <div className="content">           
           <h3>Training and fitness tips</h3> 
        </div>
      </div>  
   

      <div className="face face2">  
        <div className="content">
            <h4>Share training tips and exercises to improve fitness and enhance athletic performance.</h4>
            <a href="#">Read More</a>
        </div>
         </div>
    </div>
<div className="card">
<div className="face face1">
    <div className="content">
       
        <h3>Sports nutrition tips</h3>
    </div>
</div>
<div className="face face2">
    <div className="content">
        <h4>Share tips on healthy nutrition suitable for athletes and how to improve performance through food.</h4>
        <a href="#">Read More</a>
   
    </div>
</div>
</div>
<div className="card">
<div className="face face1">
  <div className="content">     
     <h3>Reports on developments in sports technology</h3> 
  </div>
</div>  
<div className="face face2">
    <div className="content">
        <h4>Share the latest technological developments in sports such as tracking and analysis tools and new technologies in training.</h4>
        <a href="#">Read More</a>
   
    </div>
</div>
</div>
</div>
</div>
</section>
  );
}

export default Blog;
