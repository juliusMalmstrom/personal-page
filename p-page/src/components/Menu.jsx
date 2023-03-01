import React from "react";
import "../styles/custom-pico.scss";
import { SocialIcon } from 'react-social-icons';
import { Outlet, Link } from "react-router-dom";

function Menu(){
    return(
      <div class="nav-container">
        <nav>
          <ul>
            <li>
              <strong>Julius Malmström</strong>
            </li>
          </ul>
          <ul>    
            <li>
              <a href="#"><Link class= "contrast" to={'/About'}>About me</Link></a>
            </li>

            <li>
              <a href="#"><Link class= "contrast" to={'/Projects'}>Experience</Link></a>
            </li>

            <li>
              <a href="#"><Link class= "contrast" to={'/Searchbar'}>Searchbar</Link></a>
            </li>

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

