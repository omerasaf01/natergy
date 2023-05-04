import {React, useState, useEffect} from "react";
import ComputerMenu from "./computerMenu";
import "./menu.css";
import MobileMenu from "./mobileMenu";

export default function Menu() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [state, setState] = useState({
        auth: undefined
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        var userDatas = JSON.parse(localStorage.getItem("UserAccess"));
        if (userDatas != null) {
            setState({auth: true})
        } else {
            setState({auth: false})
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (windowSize.width <= 900) return (<MobileMenu auth={state.auth} />) 
    else return (<ComputerMenu auth={state.auth} />)
}
