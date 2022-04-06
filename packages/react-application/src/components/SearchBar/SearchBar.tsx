import React from "react";
import "./search_bar.scss";

interface SearchBarProps {
    results: any[]
}

const SearchBar: React.FC<SearchBarProps> = ({results})=>{

    return (
        <div
            className="search-bar"
        >
            <input
                type="text"
                className="search-bar__input"
                tabIndex={0}
            />
            <ul
                className="search-bar__results"
            >
                {results.map((el: string, idx: number)=>(
                    <li key={idx}>{el}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;