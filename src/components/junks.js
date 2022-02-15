import React from "react";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/styles";

const ButtonSelector = styled(Button)(({ theme }) => ({
  height: "40px",
  //   borderRadius: "15px",
  backgroundColor: "white",
  display: "block",
  padding: "0",
  borderWidth: "0",
}));

function TriangularLevel(props) {
  const { levels, active, size, triangularCallback } = props;

  const [count, setCount] = React.useState(0);

  const handleClick = (item) => {
    if (item === count) setCount(count - 1);
    setCount(item);

    console.log("hello");
  };

  return (
    <div className="triangular-div" style={{ width: `${size}px` }}>
      <div
        className="triangular-border"
        style={{ borderWidth: `${size}px ${size / 2}px 0 ${size / 2}px` }}
        
      ></div>
      <div className="buttons">
        {levels.map((item, index) => (
          <ButtonSelector
            key={item}
            style={{
              width: `${(item * 100) / levels.length - index}%`,
              opacity: item > count ? 1 : 1,
              margin:
                item === 1 || item === levels.length ? "0 auto" : "20px auto",
            }}
            onClick={() => {
              alert("clicked");
            }}
          ></ButtonSelector>
        ))}
      </div>
    </div>
  );
}

export default TriangularLevel;
