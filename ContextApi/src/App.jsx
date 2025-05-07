import { createContext, useState } from "react";
import ThemeA from "./Components/ThemeA";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      hello

      
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{
            backgroundColor: theme === "light" ? "red" : "black",
            color: theme === "light" ? "black" : "white",            
            padding: "20px", 
            minHeight: "100vh", 
          }}
        >                                                                                                              
          <ThemeA />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
export { ThemeContext };