import { ChangeEvent, useState } from "react";
import { MessegeType } from "../App";

type PropsType={
  addMessage:(title:string)=>void
}

export const FullInput = (props:PropsType) => {

  let [title,setTiitle]=useState('')
  // console.log(title)

const onChangeInputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
 
  setTiitle( event.currentTarget.value)
  


}
const onClickButtonHandler=()=>{
props.addMessage(title)
setTiitle('')

}

return(
  <div>

  <input  onChange={onChangeInputHandler} value={title}/>

  <button onClick={onClickButtonHandler}>+</button>

</div>

)

 

};
