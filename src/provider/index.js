import React, { useState } from "react";

// Context
import MyContext from "../context/MyContext";

export default function Provider({ children }) {
  const [visible, setVisible] = useState(false);
  const [ChartInstance, setChartInstance] = useState(null);

  const context = {
    visible,
    setVisible,
    ChartInstance,
    setChartInstance,
  };

  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
}
