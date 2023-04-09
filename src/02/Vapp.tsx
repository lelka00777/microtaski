import React, { useState } from 'react';
import { Students } from './Students';

export type VappPropsType={
  student:Array<StydentType>
}

export type StydentType={
  id: number 
  name: string 
  age:number
}


export const Vapp=(props:VappPropsType) =>{

  
  
   
  return (
    <div className="App">

          <Students student={props.student}/>
    


    </div>
  );
}


