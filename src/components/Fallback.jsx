import React from 'react';
import glitchImage from '../assets/images/Glitch.gif';

export default function Fallback() {
  return (
    <div>
      <img
        src={glitchImage}
        alt="Oops there is a technical glitch"
        style={{
          width: '-webkit-fill-available',
          height: '-webkit-fill-available'
        }}
      />
    </div>
  );
}
