import "./App.css";
import Header from "./conponents/Header";
import Container from "@material-ui/core/Container";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useState } from "react";
import { render } from "react-dom";

function App() {
  const [blue, setblue] = useState(100);
  const [red, setred] = useState(100);
  const [tiyufkvgjmhbn, tiyufkvgjmhbne] = useState("AMONGUSBATTLEOFIMPOSTAS");
  const attackBlue = () => {
    if (blue < 0) {
      alert("red win !");
      
    } else {
      var num1=Math.floor(Math.random() * 15);
      tiyufkvgjmhbne("Attack blue by " +  num1);
      setblue(blue - num1);
    }
  };
  const attackRed = () => {
    if (red < 0) {
      alert("blue win !");
    } else {
      var num = Math.floor(Math.random() * 15);
      setred(red - num);
      tiyufkvgjmhbne("Attack red by " + num);
    }
  };
  const healBlue = () => {
    if (blue > 100) {
      alert("you can't heal no more");
    } else {
      setblue(blue + Math.floor(Math.random() * 15));
    }
  };
  const healRed = () => {
    if (red > 100) {
      alert("you can't heal no more");
    } else {
      setred(red + Math.floor(Math.random() * 15));
    }
  };
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <h1 className="title" id="tiyufkvgjmhbn">
          {tiyufkvgjmhbn}
        </h1>
      </Container>
      <div className="bob-the-builder">
        <div className="bob-the-player">
          <h1>Blue Imposter</h1>
          <Button variant="outline-success" onClick={healBlue}>
            Heal
          </Button>{" "}
          <Button variant="outline-danger" onClick={attackRed}>
            Attack
          </Button>{" "}
          <ProgressBar striped variant="success" key={1} animated now={blue} />
          <img
            src="https://media2.giphy.com/media/I2flwH2OIk1iJmeQo4/giphy.webp?cid=ecf05e472wzxap3iyk50jgkgr2sxvopuf6ytsx1jqxl7paub&rid=giphy.webp"
            alt=""
          />
        </div>

        <div className="bob-the-monster">
          <h1>Red Imposter</h1>
          <Button variant="outline-success" onClick={healRed}>
            Heal
          </Button>{" "}
          <Button variant="outline-danger" onClick={attackBlue}>
            Attack
          </Button>{" "}
          <ProgressBar striped variant="success" key={1} animated now={red} />
          <img
            className="imposta"
            src="https://media2.giphy.com/media/ipDBtBngV1dubObG9N/giphy.webp?cid=ecf05e47v7wcx8uzcaavva1pyomy631ek858le0k3fu64dtz&rid=giphy.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
