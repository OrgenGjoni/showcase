import React, {useEffect} from "react";
import "./main.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchUsers } from "../../store/slices/searchSlice";
import { SearchBar } from "../../components";

const Main: React.FC = ()=>{

    const dispatch = useAppDispatch();
    const { result, loading } = useAppSelector( state => state.search);

    useEffect(()=>{
        dispatch(fetchUsers());
    }, []);

    return (
        <div className="main-container">
            <SearchBar results={result} />
        </div>
    );
}

export default Main;