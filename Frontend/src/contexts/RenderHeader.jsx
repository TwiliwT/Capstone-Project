import { createContext, useState } from "react";

export const RenderContext = createContext();

export default function RenderContextProvider({ children }) {
  const [renderHeader, setRenderHeader] = useState(true);

  return (
    <RenderContext.Provider value={{ renderHeader, setRenderHeader }}>
      {children}
    </RenderContext.Provider>
  );
}