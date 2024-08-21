import React from "react";
import Style from "./Demo1.module.css"

const Demo1=()=>
{
    return(
        <>
        <h1>This Is Module</h1>
        <nav className="Demo1.navContainer">
            <ul>
                <li >Home</li>
                <li id="listContainer">Contact</li>
                <li>About</li>
            </ul>
        </nav>
        </>
    )
}
export default Demo1