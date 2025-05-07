import { useContext } from "react";
import { ThemeContext } from "../App";



function ThemeC(){
    const [theme,setTheme] = useContext(ThemeContext);
    const changeTheme = ()=>{
        if(theme === 'light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
    return(
        <div>
          <button onClick={changeTheme}>change theme</button>
        </div>
    )
}

export default ThemeC;