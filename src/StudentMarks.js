import React, { useState } from 'react';

function StudentMarks() {
  const [m1, setMarks1] = useState();
  const [m2, setMarks2] = useState();
  const [m3, setMarks3] = useState();
  const [m4, setMarks4] = useState();
  const [m5, setMarks5] = useState();
  const [tot, setTot] =  useState();
  const [average, setAvg] =  useState(); 
  const [gradee, setGrade] =  useState(); 
  var total;
  var grade;
  var avg;

  function cal(){
  total = Number(m1)+ Number(m2)+ Number(m3)+ Number(m4)+ Number(m5);
  setTot (total);

  avg = Number(total/5)

  setAvg (avg);

  if(avg > 80){
    grade="A"
  }
  else if (avg >= 70){
    grade ="B"
  }
  else if (avg >= 60){
    grade ="C"
  }
  else if (avg >= 50){
    grade ="D"
  }
  else if (avg >= 40){
    grade ="E"
  }
  else {
    grade ="F"
  }
  setGrade(grade);
  }



  return (
    <div  class="container">

      <h1>Student Marks Calculation</h1>

      <div class="form-group">
        <label>Marks 1</label>
        <input type="text" name="m1" class="form-control" onChange={(event) =>
                {
                  setMarks1(event.target.value);      
                }}>
        </input>
      </div>

      <div class="form-group">
      <label>Marks 2</label>
      <input type="text" name="m2"  class="form-control" onChange={(event) =>
              {
                setMarks2(event.target.value);      
              }}>
       </input>
       </div>


       <div class="form-group">
      <label>Marks 3</label>
      <input type="text" name="m3"  class="form-control" onChange={(event) =>
              {
                setMarks3(event.target.value);      
              }}>
       </input>
       </div>

      <div class="form-group">
      <label>Marks 4</label>
      <input type="text" name="m4" class="form-control" onChange={(event) =>
              {
                setMarks4(event.target.value);      
              }}>
      </input>
      </div>

      <div class="form-group">
      <label>Marks 5</label>
      <input type="text" name="m5" class="form-control" onChange={(event) =>
              {
                setMarks5(event.target.value);      
              }}>
      </input>
      </div>


       <div class="form-group">
       <label>Total</label>

      <input type="text"   class="form-control" value={ tot }></input>  
      </div>
      <div class="form-group">
      <label>Average</label>
      <input type="text"   class="form-control" value={ average }></input>  
      </div>
      <div class="form-group">
      <label>Grade</label>
      <input type="text"   class="form-control" value={ gradee }></input>  
      </div>
      <button onClick={cal}  class="btn btn-warning mt-4"> Click Me</button>
    </div>
    
  );
}

export default StudentMarks;