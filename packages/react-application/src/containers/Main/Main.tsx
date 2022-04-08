import React, { useEffect } from "react";
import "./main.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchUsers, setAllMatches } from "../../store/slices/searchSlice";
import { SearchBar, NavBar, UserCard } from "../../components";
import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "../profile/Profile";
import AllResults from "../AllResults/AllResults";
import { user } from "../../types/user.type";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { result, loading } = useAppSelector((state) => state.search);
  const navigate = useNavigate();

  const handleResultClick = (usr: user) => {
    navigate(`/user/${usr.id}`);
  };

  const handleShowAllClick = (data: user[] | null) => {
    dispatch(setAllMatches(data));
    navigate("/search-results");
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="main-container">
      <NavBar>
        <SearchBar
          results={result}
          selectAction={handleResultClick}
          showAllAction={handleShowAllClick}
          maxToShow={4}
          inputProps={{ placeholder: "Search by username" }}
        />
      </NavBar>
      <Routes>
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/search-results" element={<AllResults />} />
      </Routes>
    </div>
  );
};

export default Main;
