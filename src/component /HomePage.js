import React from "react"
import { Button} from 'reactstrap';
import {Link} from "react-router-dom"


const HomePage =()=>{
    return(
        <div className="homesection">
        <div className="homecontaner">
        <Link to="/register"><h2> Inscription</h2></Link> 
             <img src="https://www.gstatic.com/devrel-devsite/prod/v1241c04ebcb2127897d6c18221acbd64e7ed5c46e5217fd83dd808e592c47bf6/firebase/images/touchicon-180.png"/>
         
            
           <Link to="/login"><h2> Connexion</h2></Link>  
           </div>
           <h3>Firebase par plateforme</h3>
           <p>Firebase vous donne les outils nécessaires pour développer des applications de haute qualité, développer votre base d'utilisateurs et gagner plus d'argent. Nous couvrons l'essentiel afin que vous puissiez monétiser votre entreprise et vous concentrer sur vos utilisateurs.
</p>

      
        </div>

    )
}
export default HomePage