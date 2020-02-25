import React from 'react';

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight]; 
  const style = {
    border: '1px solid black',
  };
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
      style={style}
    >
      <circle cx={0} cy={0} r={50} />
    </svg>
  );
};

export default Canvas;