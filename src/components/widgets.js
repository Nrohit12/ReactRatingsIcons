import React from "react";
import CircularProgress from "./circularprogress";
import TriangularLevel from "./triangularlevels";
import Slider from "@material-ui/core/Slider";
import { styled } from "@material-ui/styles";
import Banner from "./banner";


const RangeSlider = styled(Slider)(({ theme }) => ({
  width: 300,
  color: "#495371",
  height: "20px",
  "& .MuiSlider-thumb": {
    height: "30px",
    width: "30px",
    marginLeft: "-16px",
  },
  "& .MuiSlider-track": {
    height: "20px",
    borderRadius: "15px",
  },
  "& .MuiSlider-rail": {
    height: "20px",
    color: "white",
    borderRadius: "15px",
    opacity: 1,
  },
}));

const levels = [5, 4, 3, 2, 1];

function Widgets() {
  const [circular, setCircular] = React.useState(5);
  const [triangular, setTriangular] = React.useState(5);
  const maxCircularLabel = 5;
  const [modalClose, setModalClose] = React.useState(false)

  const handleSlider = (event, newValue) => {
    setCircular(newValue);
  };
  const handleTriangularCallback = (item) => {
    setTriangular(item);
  };
const handleModalCallback = (item) => {
    setModalClose(item);
  };

  const showBanner = () => {
    setModalClose(true)
  };

  return (
    <div>
      <div className="widgets">
        <div className="labels-div">
          <CircularProgress
            value={circular}
            progress={(circular * 100) / maxCircularLabel}
            circleOneStroke={"#d9edfe"}
            circleTwoStroke={"#495371"}
            size={300}
            strokeWidth={25}
          />
          <RangeSlider
            value={circular}
            onChange={handleSlider}
            aria-labelledby="continuous-slider"
            min={0}
            max={maxCircularLabel}
          />
        </div>
        <div className="rate-yourself">
          <img
            src="https://c.tenor.com/K6CBFbqfQiUAAAAM/wow-motu.gif"
            alt="Samosa Jalebi"
            className="samosa-gif"
          />
          <p>
            Rate yourself on a scale of 1 to 5 on both the scales for eating
            Samosas + Jalebi (sweets). I had already rated myself and set the
            label to 5.
          </p>
          <span>
            PS :- If you haven't tried them, rate 5 and lets try them together 😍.
          </span>
        </div>
        <div className="labels-div">
          <TriangularLevel
            triangularCallback={handleTriangularCallback}
            active={triangular}
            levels={levels}
            size={300}
          />
        </div>
      </div>
      <div className="submit-button">
        <button onClick={() => showBanner()}>Already Rated? Submit!!</button>
        <Banner rating={{ triangular: triangular, circular: circular }} handleModalCallback={handleModalCallback} modalClose={modalClose}/>
      </div>
    </div>
  );
}

export default Widgets;
