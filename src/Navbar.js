import React from "react";
import { Link } from 'react-router';

function Navbar(){
    return(
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <Link to="/projects" class="nav-link" href="/">Link</Link>
            </li>
            <li class="nav-item">
                <Link to="/home" class="nav-link" href="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/" class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</Link>
            </li>
        </ul>
    );
};

export default Navbar;

