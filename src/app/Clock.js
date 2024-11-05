"use client"; // Indica que este componente es un Client Component

import React, { useEffect, useState } from 'react';

export default function Clock({ time }) {
  const [className, setClassName] = useState('');

  useEffect(() => {
    const hours = time.getHours();
    // Establece la clase basándose en la hora actual
    if (hours >= 0 && hours < 6) {
      setClassName('night');
    } else {
      setClassName('day');
    }
  }, [time]); // Se ejecuta cuando el tiempo cambia

  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}