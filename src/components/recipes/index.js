import React from 'react'
import Recipe from '../recipe';
let element = [{name: "atigh", id:1},{name: "atigh", id:1},{name: "atigh", id:1}];
function Recipes() {
   return  (
    <div class="results">
       <ul  class="results__list"> 
       {element.map(el=><Recipe id= {el.id} name= {el.name}/>)}
       </ul>
    </div>   
       )

}

export default  Recipes;
