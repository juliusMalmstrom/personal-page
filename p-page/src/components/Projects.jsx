import React, { useEffect, useState } from "react"
import Axios from "axios"

function Projects (){

    const [joke, setJoke] = useState("");

    const getJoke = () => { Axios.get("https://official-joke-api.appspot.com/random_joke").then(
            (response) => {
                setJoke(response.data.setup + "..." + response.data.punchline)
            }
        );
    }

    return(
        <div>
            <button onClick={getJoke}> Get joke </button>
            {joke}
        </div>

    );
}
export default Projects