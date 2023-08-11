import { title } from "process";

type PropsType={
  name:string
  callBack:()=>void

  
}
export const Button = (props:PropsType) => {


  



const onClickButtonHandler=()=>{
props.callBack()
}
// const onClickButtonHandler=()=>{
//   props.addMessage(title)
//   setTiitle('')


return(
 



  <button onClick={onClickButtonHandler}>{props.name}</button>



)


};
