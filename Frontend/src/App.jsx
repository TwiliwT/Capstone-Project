import { useState } from "react";

import TokenContextProvider from "./contexts/TokenContext";
import Header from "./components/header/Header";

import "./App.css";

function App() {
  return (
    <TokenContextProvider>
      <Header />
    </TokenContextProvider>
  );
}

export default App;
