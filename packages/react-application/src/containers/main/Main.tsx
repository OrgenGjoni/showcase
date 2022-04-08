import React, { useEffect } from "react";
import "./main.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchUsers } from "../../store/slices/searchSlice";
import { SearchBar, NavBar, UserCard } from "../../components";
import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "../profile/Profile";
import { user } from "../../types/user.type";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { result, loading } = useAppSelector((state) => state.search);
  const navigate = useNavigate();

  const handleResultClick = (usr: user) => {
    navigate(`/user/${usr.id}`);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="main-container">
      <NavBar>
        <SearchBar
          results={result}
          action={handleResultClick}
          maxToShow={4}
          inputProps={{ placeholder: "Search by username" }}
        />
      </NavBar>
      <div>
        <Routes>
          <Route path="/user/:id" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
