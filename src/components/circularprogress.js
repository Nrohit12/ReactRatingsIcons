import React from "react";

function CircularProgress(props) {
  const {
    value,
    progress,
    circleOneStroke,
    circleTwoStroke,
    size,
    strokeWidth,
  } = props;
  const [offset, setOffset] = React.useState(0);
  const circleRef = React.useRef(null);
  const circumference = 2 * Math.PI * (size / 2);
  React.useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);

    circleRef.current.style =
      "transition: stroke-dashoffset 850ms ease-in-out ";
  }, [setOffset, progress, circumference, offset]);
  return (
    <div>
      <svg className="svg" width={size} height={size}>
        <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth / 2 - 1 }
          strokeWidth={strokeWidth}
        />
        <circle
          className="svg-circle"
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth / 2}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          className="progress-text"
          x={size/2}
          y={size/2}
          transform={`translate (${300}, 0) rotate (90)`}
        >
          {value}
        </text>
      </svg>
    </div>
  );
}

export default CircularProgress;
