
import { useState } from "react";
import "./App.css";
import { FullInput } from "./components/FullInput";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

export type MessegeType={
   message:string
}

function App() {
   const [message, setMessage] = useState<MessegeType[]>([

      {message: 'message1'},

      {message: 'message2'},

      {message: 'message3'},

      {message: 'message4'},

      {message: 'message5'}

    ]
    
   

)
let [title,setTiitle]=useState('')

const addMessage=(title:string)=>{
let newMessage ={message:title}
setMessage([newMessage,...message])

}

const callBackButtonHandler=()=>{
   addMessage(title)
  setTiitle('')
}



   

         

return (

 <div>
   
   {/* <FullInput addMessage={addMessage}/> */}
   <Input title={title} setTiitle={setTiitle}/>
   <Button name={'+'} callBack={callBackButtonHandler} />
   {message.map((el)=>{
      return(
         <div>{el.message}</div>
      )
   })}
   <div>
 
   </div>
 </div>

)





   

 

   
      
  
}

export default App;
