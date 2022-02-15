import React from "react";

function TriangularLevel(props) {
  const { levels, active, size, triangularCallback } = props;

  const handleClick = (item) => {
    triangularCallback(item);
  };

  return (
    <div style={{ width: `${size}px`, margin: 'auto' }}>
      <div>
        {levels.map((item, index) => (
          <div
            key={item}
            className={`${
              item > active ? "inactive" : "active"
            } triangular-levels`}
            style={{
              width: `${(item * 100) / levels.length - index}%`,
              //   margin: item === 1 || item === levels.length ? "0 auto" : "20px auto",
            }}
            onClick={() => handleClick(item)}
          ></div>
        ))}
      </div>
      {/* <div
        className="triangular-border"
        style={{ borderWidth: `${size}px ${size / 2}px 0 ${size / 2}px` }}
        onClick={() => console.log('alert')}
      ></div>   */}
    </div>
  );
}

export default TriangularLevel;
