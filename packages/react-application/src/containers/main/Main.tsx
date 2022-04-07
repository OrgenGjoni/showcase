import React, { useEffect } from "react";
import "./main.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchUsers } from "../../store/slices/searchSlice";
import { SearchBar, NavBar } from "../../components";
import { Routes, Route } from "react-router-dom";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { result, loading } = useAppSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="main-container">
      <NavBar>
        <SearchBar
          results={result}
          action={() => {
            console.log("test");
          }}
          maxToShow={4}
          inputProps={{ placeholder: "Search by username" }}
        />
      </NavBar>
      <div>
        <Routes>
          <Route path="/" element={<div>Test</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
