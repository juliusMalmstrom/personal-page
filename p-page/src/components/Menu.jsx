import React from "react";
import "../styles/custom-pico.scss";
import { SocialIcon } from 'react-social-icons';
import { Outlet, Link } from "react-router-dom";

function Menu(){
    return(
      <div class="nav-container">
        <nav>
            <ul>    
              <li><h3 class ="text-gradient-name">Julius Malmström</h3></li>
            </ul>
            <ul>
              <li>
                <Link to={'/About'}>About me</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to={'/Projects'}>Projects</Link>  
              </li>
            </ul>
            <ul>
              <div class= "social-item">
              <SocialIcon url="https://www.linkedin.com/in/julius-malmstr%C3%B6m/" style={{ height: 25, width: 25 }} bgColor="#650565"/>
              </div>
            </ul>
        </nav>
          <div class='content'>
            <Outlet/>
          </div>
      </div>
    );
};
export default Menu;

