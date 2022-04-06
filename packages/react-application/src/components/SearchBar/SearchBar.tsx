import React, { useState } from "react";
import "./search_bar.scss";
import { user } from "../../types/user.type";

interface SearchBarProps {
    results: user[] | null
}

const SearchBar: React.FC<SearchBarProps> = ({results})=>{
    const [matches, setMatches] = useState<user[] | null>(null);

    const renderList = ()=>{
        if(matches){
            return matches.map((el: user, idx: number)=>(
                <li key={idx}>{el.username}</li>
                ));
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(results !== null){
            const regexp = new RegExp(`${e.target.value}`, "i");
            const  match = results.filter(el => el.username.match(regexp) );

            setMatches( e.target.value.length > 0 ? match : null);
        }
    }

    return (
        <div
            className="search-bar"
        >
            <input
                type="text"
                className="search-bar__input"
                onChange={handleChange}
                tabIndex={0}
            />
            <ul
                className="search-bar__results"
            >
                {
                    renderList()
                }
            </ul>
        </div>
    );
}

export default SearchBar;