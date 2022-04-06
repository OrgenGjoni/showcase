import React from "react";
import "./main.scss";
import { SearchBar } from "../../components";

interface Props{
    children: JSX.Element | JSX.Element[]
}

const Main: React.FC<Props> = ({children})=>{

    return (
        <div className="main-container">
            <SearchBar results={["aaaa", "bbbbbb"]} />
        </div>
    );
}

export default Main;