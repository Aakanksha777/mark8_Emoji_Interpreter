import React, { useState } from "react";
import "./styles.css";

//create-database;
const dataBase = {
  "😀": "Happiness",
  "😂": "Tears of Joy",
  "😇": "Prayers and Blessings",
  "😜": "Fun, Excitement",
  "😨": "Fear",
  "😬": "Discomfort",
  "😎": "Cool, Chill, Easy-going",
  "😋": "Delicious",
  "😌": "Contentment, Calm, Peace",
  "😝": "Anger"
};

//-----------------------------------
let ChooseWords = Object.keys(dataBase);
//-----------------------------------
export default function App() {
  //useState:
  const [enteredWordMeaning, setenteredWordMeaning] = useState("");
  //-----------------------------------

  function inputHandler(event) {
    //okay func 1.
    //processing:
    let userEntered = event.target.value; // jo user enter karega.

    let enteredWordMeaning = dataBase[userEntered];

    setenteredWordMeaning(enteredWordMeaning);
    // console.log("clicked", userEntered, enteredWordMeaning);// ye sirf clg mein show hoga
    // browser pr show krne ke liye , useState use hoga.
    //-----------------------------------
  }

  // function2 :
  function displayWords(word) {
    let enteredWordMeaning = dataBase[word];

    setenteredWordMeaning(enteredWordMeaning);
  }

  //----------------------------------
  return (
    // jsx js inside it.
    <div className="App">
      <>
        <div className="container">
          <h1>Emoji Interpreter</h1> {/*okay*/}
          <h4>
            Welcome User, Select Any Emoji of your choice and get meaning of it.
          </h4>{" "}
          {/*okay*/}
          <input onChange={inputHandler} /> {/*okay*/}
          <h2>{enteredWordMeaning} </h2> {/*okay*/}
          <div className="input1">
            {/* Words We Know : okay */}
            {ChooseWords.map(function (word) {
              return (
                <ul
                  onClick={() => displayWords(word)}
                  style={{ cursor: "pointer" }}
                  key={word}
                >
                  {" "}
                  {word}
                </ul>
              );
            })}
          </div>
        </div>
      </>
    </div>
  );
}
