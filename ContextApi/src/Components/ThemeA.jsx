import { useContext } from "react";
import { ThemeContext } from "../App";
function ThemeA() {
  const { theme, setTheme } = useContext(ThemeContext); 
  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          padding: "10px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeA;