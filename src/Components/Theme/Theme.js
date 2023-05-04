import React, {useState, useEffect} from "react";
import "./Theme.css"

const Theme =(props)=>{

    const [theme , setTheme] = useState("darkTheme")
    const [themeIcon , setThemeIcon] = useState("fa-regular fa-sun")
    const [themeClas , setThemeClass] = useState("blackButton")

    const changeTheme =()=>{
        // alert("I will change the theme")
        if(theme === "darkTheme"){
            setTheme("lightTheme")
            setThemeIcon("fa-regular fa-moon")
            setThemeClass("themeButton")
        }
        else{
            setTheme("darkTheme")
            setThemeIcon("fa-regular fa-sun")
            setThemeClass("blackButton")
        }

    }
    useEffect(()=>{
        document.body.className = theme
    },[theme])
    return(
        <button className={themeClas}  onClick={changeTheme}><i className={themeIcon} ></i></button>
    )
}

export default Theme