import React ,{useEffect,useState}from "react"




const QuizOver=React.forwardRef(({levelNames,score,maxQuestion,quizLevel,percent},ref)=>{
    const[asked,setAsked]=useState([])
    console.log(asked)
    useEffect(()=>{
        setAsked(ref.current)
        
        },[ref])

        //score >=5 (maxquestion=10)
        const average=maxQuestion/2
       const decision = score >= average?(
           
           <>
           {quizLevel < levelNames.length?(
            <>
            <p  class="text-warning">passez a niveau suivant </p>
               <button>Niveau Suivant</button>
               <div>Reussite:{percent}%</div>
       <div>Note:{score}/{maxQuestion}</div>
           
            </>
           ):(
            <>
            <p>Brovo, vous etes un expert </p>
            <button>Niveau Suivant</button>
            <div>Reussite:{percent}%</div>
       <div>Note:{score}/{maxQuestion}</div>
           
            </>
           )}
          </>
       ):(
           <>
            <p class="text-danger">Vous avez échoué </p>
            <button>Niveau Suivant</button>
        <div>Reussite:{percent}%</div>
       <div>Note:{score}/{maxQuestion}</div>
           </>
       )
       
       //average 
       

    const questionAnswer=score>=average? ( asked.map(question=>{
        return (
    
            <tr key={question.id}>
                <td>
                   {question.question} 
                </td>
                <td>
                   {question.answer} 
                </td>
                <td>
                   <button>Infos</button>
                </td>
            </tr>
        )
    })
):(
    <>
    <tr key="">
  <p style={{textAlign:'center',color:"red"}}>
      pas de réponses 
  </p>
</tr> 
</>
)

        return (
            <>
            <div>
   {decision}
                <hr/>
                <p>les reponses aux questions posées:</p>
           <div className="container">
           <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Question</th>
      <th scope="col">Réponses</th>
      <th scope="col">Infos</th>
   
    </tr>
  </thead>
  <tbody>

  {questionAnswer}
    
  </tbody>
</table>
           </div>
            </div>
            </>
        )
    
    })


  
// pour ne pas recharger le composant de type function 
export default React.memo(QuizOver)