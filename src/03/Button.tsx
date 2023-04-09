// type PropsType={
//   title:string
//   onClikHandler:() => void
// }
type ByttonType={
  title:any
  callBack:()=>void
}


  export const Button = (props:ByttonType) => {
  
    const onClikHandler=()=>{
    
    props.callBack()
     
     }
 
      return (
    
      <button onClick={onClikHandler}>{props.title}</button>

      )

   
    
                     
  };
  