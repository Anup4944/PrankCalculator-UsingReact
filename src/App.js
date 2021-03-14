import logo from './logo.svg';
import './App.css';
import {useState} from 'react' // to store the value
import {Display} from './components/display/Display'
import {Buttons} from './components/buttonContainer/Buttons'

const App = () => {
  // declare local variable or display text
const [displayText, setDisplayText] = useState("");
const [history, setHistory] = useState("")
const [total, setTotal] = useState();
const [calculatorOn, setcalculatorOn] = useState()

  // recieve value when button is clicked
  const handleOnButtonClick = (buttonValue) => {

    if(total){
      setTotal(null);
    }

    // total and return

    if(buttonValue===  "="){
      const ttl = eval(displayText);

      // make prank calculator
      let extra = Math.ceil(Math.random()*10);
      if(extra > 3){
        extra = 0;
       }

      setTotal(ttl + extra);
      setHistory(displayText);
      setDisplayText("");
      return setTotal(ttl);
    }
    // back space on C click

    if(buttonValue === "C"){
      const str = displayText.slice(0, -1);
      return setDisplayText(str);
    }
    // for AC 
    if(buttonValue === "AC"){
      return setDisplayText("");
    }

    // off button
    if(buttonValue === "OFF"){
      return setcalculatorOn(false);
    }

    

    setDisplayText(displayText + buttonValue);
  }
   console.log(displayText);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' , color:"blue"}}> Prank Calculator</h1>
      <div className="container">
        
        <div className="calculator">
          <div style= {{textAlign:"right" }}>{total && history}</div>

        <Display txtDisplay = {displayText} 
        total = {total}
        history={history}/>
        {calculatorOn ? (
        <Buttons buttonclick = {handleOnButtonClick} />) : (
          <button className= "btnOn" onClick = {() => setcalculatorOn(true)}>ON</button>
        )}


        </div>
      </div>
      </div>

  )}

export default App;
