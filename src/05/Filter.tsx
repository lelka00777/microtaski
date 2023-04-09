import { useState } from "react";
import { Button } from "../03/Button";
import { carentMoneyType } from "./FilterApp";

type filterPropsType = {
  carentMoney: Array<carentMoneyType>;
  callBack:(nameButton: filterType)=>void
};

type filterType = "RUBLS" | "Dollars" | "ALL";

export function Fulter(props: filterPropsType) {
  return (
    <div className="App">
      <ul>
        {props.carentMoney.map((el, index) => {
          return (
            <li key={index}>
              <span>{el.banknots} </span>
              <span>{el.value} </span>
              <span>{el.number} </span>
            </li>
          );
        })}
      </ul>
      <Button title={"ALL"} callBack={() =>props.callBack("ALL")} />
      <Button title={"RUBLS"} callBack={() => props.callBack("RUBLS")} />
      <Button title={"Dollars"} callBack={() => props.callBack("Dollars")} 
       />
    </div>
  );
}
