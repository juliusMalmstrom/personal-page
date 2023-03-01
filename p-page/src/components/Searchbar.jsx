import React from "react";
import Data from '../data/mock-data.json'

function Searchbar (){

    return (
      Data.map((data) =>(
          <div key={data.id}>
              <p>{data.id + '. ' + data.first_name+ ' ' +data.last_name}</p>
          </div>
      ))    
    );
};

export default Searchbar