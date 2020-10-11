

// import React, { Component } from "react"
// import {QuizMarvel} from "./questions/quiz"
// import Levels from "./levels"
// import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import QuizOver from "./quizOver/quizOver"
// import ProgressBar from "./progressBar"


// toast.configure()

// class Home extends Component{
//     constructor(){
//         super()
//        this.initialState={
//             levelNames:["debutant","confirmer","expert"],
//              quizLevel:0,
//              maxquestion:10,
//              storedQuestions:[],
//              idQuestion:0,
//              question:null,
//              disabled:true,
//         options:[],
//         userAnswer:null,
//         score:0,
//         saywelcome:false,
//         quizEnd:false,
//         percent:null
//        }  
//            this.state= this.initialState
        
//            this.storeRef=React.createRef()
//     }

  

// laodQuestion=(quizz)=>{
//   const fetchArray= QuizMarvel[0].quizz[quizz]
// if(fetchArray.length>=this.state.maxquestion){

//     this.storeRef.current=fetchArray
//   const newArray=  fetchArray.map(({answer,...keepRest})=>keepRest)
//   this.setState({storedQuestions:newArray})

// }else{
//    console.log("pas d'assez de question") 
// }
// }
// componentDidMount(){
// this.laodQuestion(this.state.levelNames[this.state.quizLevel])
// }
// componentDidUpdate(prevprops,prevState){
//     if(this.state.storedQuestions !==prevState.storedQuestions ){
      
    
//     this.setState({
//         question:this.state.storedQuestions[this.state.idQuestion].question,
//         options:this.state.storedQuestions[this.state.idQuestion].options
//     })
//     }

//     if(this.state.idQuestion !==prevState.idQuestion){
//         this.setState({
//             question:this.state.storedQuestions[this.state.idQuestion].question,
//             options:this.state.storedQuestions[this.state.idQuestion].options,
//             userAnswer:null,
//             disabled:true
//         })
//     }
//     if(this.props.userData.name){
//         this.showwelcome(this.props.userData.name)
//     }
// }
// submitAnswer=(optionselected)=>{
// this.setState({
//     userAnswer:optionselected,
//     disabled:false
// })

// }
// nexQuestion=()=>{
//     if(this.state.idQuestion===this.state.maxquestion-1){

//      this.gameOver()
//     }else{
//         this.setState((prevstate)=>({
//           idQuestion:prevstate.idQuestion+1  
//         }))
//     }
//   const goodAnswer= this.storeRef.current[this.state.idQuestion]
    
//     if(this.state.userAnswer===goodAnswer){
//         this.setState((prevstate)=>({
//         score:prevstate.score+1
//         }))
//         toast.success('Bravo +1', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             bodyClassName: "grow-size",
//             });

//     }else{
//         toast.error('Raté 0', {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             bodyClassName: "grow-size",
//             });
//     }
// }
// showwelcome=(name)=>{
//     if(!this.state.saywelcome){

//         this.setState({
//             saywelcome:true
//         })
//         toast.warn(`welcome${name} and good luck`, {
//             position: "top-center",
//             autoClose: 5000,
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: false,
//             progress: undefined,
//             });
//     }
   
// }
// getPercent=(maxQuest,ourScore) =>(ourScore/maxQuest)*100

// gameOver=()=>{
// const greatepercent=this.getPercent(this.state.maxquestion,
// this.state.score)
// if(greatepercent>=50){
// this.setState({
//  quizLevel:this.state.quizLevel+1 ,
//  percent:greatepercent,
//  quizEnd:true
// })
// }else{
//     this.setState({
//         percent:greatepercent,
//         quizEnd:true
//        })
// }


// } 
// loadLevelQuestion=(param)=>{
// this.setState({...this.initialState,quizLevel:param })
// this.laodQuestion(this.state.levelNames[param])
// }
// render(){
   
// const displayOPtion=this.state.options.map(el=>{
    
//     return(
//     <div className={`container bg-secondary p-3 mt-3 ${this.state.userAnswer===el?"hovered":null}`}
//     style={{cursor: "pointer"}}
//     onClick={()=>{this.submitAnswer(el)}}
//     ><h4>{el}</h4></div>)
// })

// return (this.state.quizEnd?(<QuizOver 
// ref={this.storeRef}
// levelNames={this.state.levelNames}
// score={this.state.score}
// maxquestion={this.state.maxquestion}
// quizLevel={this.state.quizLevel}
// percent={this.state.percent }
// loadLevelQuestion={this.loadLevelQuestion}
// />):(
// <>
//     <h2>Name:{this.props.userData.name}</h2> 
//     <Levels/>
//     <ProgressBar idQuestion={this.state.idQuestion} 
//     maxQuestion={this.state.maxquestion}/>
//     <h3>{this.state.question}</h3>
  

//     {displayOPtion}
    

// <button type="button"
// onClick={()=>this.nexQuestion()}
// disabled={this.state.disabled} 
// class="btn btn-success " style={{float:"right"}}>
// {this.state.idQuestion
// <this.state.maxquestion-1?"Suivant":"Terminer"}

// </button>
// </>)  
// )}

// }
// export default Home


import React,{Component} from "react"
import Levels from "./levels"
import  ProgressBar  from "./progressBar"
import {QuizMarvel} from './questions/quiz'

class Home extends Component {

    state={
           
    levelNames:["debutant","confirme","expert"],
    quizLevel:0,
    maxQuestions:10,
    storedQuestions:[],
    question:null,
    option:[],
    idQuestion:0,
    disabled:true,
    userAnswer:null,
    score:0
}
  storeRef=React.createRef()
    
    loadQuestions=(quiz)=>{
const fetchArray=QuizMarvel[0].quizz[quiz]

if(fetchArray.length>=this.state.maxQuestions){

    this.storeRef.current=fetchArray
const newArray=fetchArray.map(({answer,...keepRest})=>keepRest)
this.setState({
    storedQuestions:newArray
})
}else{
    console.log("pas d'assez de question")
}
    }
    componentDidMount(){
        this.loadQuestions(this.state.levelNames[this.state.quizLevel])
    }
    componentDidUpdate(prevProps,prevState) {
       if(this.state.storedQuestions !==prevState.storedQuestions){
        this.setState({
         question:this.state.storedQuestions[this.state.idQuestion].question,
          option:this.state.storedQuestions[this.state.idQuestion].options
          }) 
      
       }
       if(this.state.idQuestion !==prevState.idQuestion){
        this.setState({
            question:this.state.storedQuestions[this.state.idQuestion].question,
          option:this.state.storedQuestions[this.state.idQuestion].options,
       disabled:true
        })
    }
    }
    nextQuestion=()=>{
   if(this.state.idQuestion===this.state.maxQuestions-1){


   }else{
       this.setState(prevState=>({
           idQuestion:prevState.idQuestion+1
       }))

   }
  const goodAnswer=this.storeRef.current[this.state.idQuestion].answer
    if(this.state.userAnswer===goodAnswer){
        this.setState(prevState=>({
            score: prevState.score+1
        }))
    }
   
}
    submitAnswer=(selectedOption)=>{
this.setState({
    userAnswer:selectedOption,
    disabled:false
})

    }
    render(){
        console.log('score',this.state.score)
const displayOPtion=this.state.option.map((el,index)=>{
    
    return(
    <div key={index}
     className={`container bg-secondary p-3 mt-3 
     ${this.state.userAnswer===el?"hovered":null}`}
     style={{cursor: "pointer"}}
     onClick={()=>{this.submitAnswer(el)}}

    ><h4>{el}</h4>
    </div>)
})
return(
<div>
    <h2>Name: {this.props.userData.name}</h2>
    <Levels/>
    <ProgressBar/>
<h2>{this.state.question}</h2>
    <div className="container bg-secondary p-3 mt-3"
     style={{cursor: "pointer"}}>
         
         
         
        
         {displayOPtion}
         
         
         </div>
    <button class="btn btn-success "
    disabled={this.state.disabled}
    onClick={()=>this.nextQuestion()}
     style={{float:"right"}}>suivant</button>
</div>
)

    }
}
    export default Home 