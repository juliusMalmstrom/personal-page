import React from "react";
import "../custom-pico.scss";
import { SocialIcon } from 'react-social-icons';

function Menu(){
    return(
      <nav>
          <ul>    
            <li><h3 class ="text-gradient-name">Julius Malmström</h3></li>
          </ul>
          <ul>
            <li><a href="#" class="hy-link">About me</a></li>
          </ul>
          <ul>
            <li><a href="#" class="hy-link">Projects</a></li>
          </ul>
          <ul>
            <div class= "social-item">
            <SocialIcon url="https://www.linkedin.com/in/julius-malmstr%C3%B6m/" style={{ height: 25, width: 25 }} bgColor="#650565"/>
            </div>
          </ul>
      </nav>
    );
};
export default Menu;

