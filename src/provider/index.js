import React, { useState, useEffect } from "react";

// Context
import MyContext from "../context/MyContext";

export default function Provider({ children }) {
  const [visible, setVisible] = useState(false);

  const context = {
    visible,
    setVisible,
  };

  return <MyContext.Provider value={context}>{children}</MyContext.Provider>;
}
