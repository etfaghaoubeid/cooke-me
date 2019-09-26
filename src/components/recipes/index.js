import React from 'react'
import Recipe from '../search';
let element = [{name: "atigh", id:1},{name: "atigh", id:1},{name: "atigh", id:1}];
function Recipes() {
   return  element.map(el=><Recipe id= {el.id} name= {el.name}/>)

}

export default  Recipes;
