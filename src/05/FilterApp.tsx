import { useState } from "react";
import { Fulter } from "./Filter";


export type carentMoneyType = {
  banknots: string;
  value: number;
  number: string;
};

export type filterType = "RUBLS" | "Dollars" | "ALL";



export function FlterApp() {

  const [money, setMoney] = useState([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);

  const [filter, setFilter] = useState<filterType>("ALL");

  let carentMoney: Array<carentMoneyType> = money;
  if (filter === "RUBLS") {
    carentMoney = money.filter((el) => el.banknots === "RUBLS");
  }
  if (filter === "Dollars") {
    carentMoney = money.filter((el) => el.banknots === "Dollars");
  }

  const onclickfiltrHandler = (nameButton: filterType) => {
    setFilter(nameButton);
  };
  return (
    <div className="App">
      <Fulter carentMoney={carentMoney}  callBack={onclickfiltrHandler} />
    </div>
  );
}
