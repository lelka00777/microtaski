import { ChangeEvent, useState } from "react";

type InputPropsType={
  title:string
  setTiitle:(title:string)=>void
}


export const Input = (props:InputPropsType) => {




  console.log(props.title)

const onChangeInputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
 
  props.setTiitle( event.currentTarget.value)
  


}
  


return(
  

  <input  
  onChange={onChangeInputHandler}
  value={props.title}/>




)


};
