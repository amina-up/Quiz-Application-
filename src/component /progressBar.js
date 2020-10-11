import React from "react"


const ProgressBar =({idQuestion,maxQuestion})=>{

const getPrecent=(totalQuestions,questionId)=>{

  return(100/totalQuestions)*questionId
}


  const actuelQuestion=idQuestion+1

  const progressPorcent=getPrecent(maxQuestion,actuelQuestion)
  
  return(
        <div className="container pt-5">
   <div class="row justify-content-around">
    <div class="bg-info text-dark col-4 text-center">
      
      {`Question:${idQuestion+1}/${maxQuestion}`}
    </div>
    <div class=" bg-info text-dark col-4 text-center">
    
      {` progression: ${progressPorcent}%`}
    </div>
  </div>
  <br/>
  <div className="container">
  <div class="progress">
  <div class="progress-bar bg-warning p-3" role="progressbar" 
  style={{width:`${progressPorcent}%`}} aria-valuenow="25" 
  aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>
</div>


      
    )
}
export default React.memo(ProgressBar)