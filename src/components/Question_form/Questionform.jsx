import React from "react";
import './Questionform.css';
import Icon from "./Icon";

function Questionform(){ 
    return (
     <section class="qsection">
      <div class="question"> 
           <div class="question-content">
            <h1> Got a question? </h1>
         <p> Fill up the form and our Team will get back to you within 24 hours. </p>
         <div class="contact"> <p> <Icon/> 7489484942 </p></div>
         <p>  <i class="fa fa-envelope"></i> parkfinder@gmail.com </p>
        </div> 
       
       
        


    <div className="form-box">
      <div className="text">
        Contact us Form
      </div>
      <form action="#">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label>First Name</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label>Last Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label>Email Address</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label>Website Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea rows="8" cols="80" required></textarea>
            <div className="underline"></div>
            <label>Write your message</label>
          </div>
        </div>
        <div id="btn" className="form-row">
          <div className="input-data">
            <input type="submit" value="submit" />
          </div>
        </div>
      </form>
    </div>


 </div>

        
     </section>
    );
}

export default Questionform;