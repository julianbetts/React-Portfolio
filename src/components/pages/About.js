import React from 'react';
import mtn from '../../assets/mtn.png'
export default function About() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
      <ul class="list-group project-list" >
              
            
                <li class="list-group-item list-group-item-primary"> <a href="https://julianbetts.github.io/passwordgenerator/" class="btn btn-primary">Password Generator <img src={mtn} alt="Girl in a jacket" height="200"/>
</a></li>
                <li class="list-group-item list-group-item-primary"> <a href="https://julianbetts.github.io/weather/" class="btn btn-primary">Weather App</a></li>
                <div class="text-bg-light p-3">Collaborations:</div>
                <li class="list-group-item list-group-item-primary"> <a href="https://julianbetts.github.io/tastytunage/" class="btn btn-primary">Tasty Tunage</a></li>
                <li class="list-group-item list-group-item-primary"> <a href="https://mountain-express.herokuapp.com/" class="btn btn-primary">Mountain Express</a></li>

              </ul>
      
      </p>
    </div>
  );
}
