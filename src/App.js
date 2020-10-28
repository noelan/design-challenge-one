import React, { useState } from "react";
import "./main.scss";
import Header from "./Components/Header";
import SectionTwo from "./Components/Section-two";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const contextValue = {
    setTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className="App">
        <Header />
        <SectionTwo />
        <Gallery />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
