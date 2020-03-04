import React from 'react';

export default function Mark({
  angle = 0,
  length = 10,
  name,
  width = 1,
  number,
}) {
  return (
    <div
      className={`react-clock__mark react-clock__${name}-mark`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      <div
        className={`react-clock__mark__body react-clock__${name}-mark__body`}
        style={{
          width: `${width}px`,
          top: 0,
          bottom: `${100 - (length / 2)}%`,
        }}
      />
    </div>
  );
}
