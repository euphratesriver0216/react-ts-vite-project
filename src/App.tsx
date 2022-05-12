import { useState } from "react";
import "./App.css";

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Person = {
  naem: string;
  age: number;
  // age?: number; type을 옵션으로 넣을 수 있다.
};

let person: Person = {
  //타입지정 후
  naem: "haemin",

  age: 5,
  //타입 지정 앞에 age?: number; 옵션지정 할경유우
};

role = [5, "haein"];

function App() {
  return <div className="App">haemin app</div>;
}

export default App;
