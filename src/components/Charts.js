
import React, { useContext, useEffect, useRef } from 'react';
import Chart from 'chart.js';
import MyContext from '../context/MyContext';

export default function Charts(ChartConfig, width = undefined, height = undefined) {
  const chartContainer = useRef(null);
  const {setChartInstance} = useContext(MyContext);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, ChartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas width={`${width}px`} height={`${height}px`} ref={chartContainer} />
    </div>
  );
};
