import React from "react";
import "./all_results.scss";
import { useAppSelector, useAppDispatch } from "../../hooks";
import SearchResultItem from "../../components/SearchBar/SearchResultItem/SearchResultItem";
import { useNavigate } from "react-router-dom";
import { user } from "../../types/user.type";

const AllResults: React.FC = () => {
  const dispatch = useAppDispatch();
  const { matches } = useAppSelector((state) => state.search);
  const navigate = useNavigate();

  const renderAllResults = () => {
    if (matches !== null) {
      return matches.map((el: user, idx: number) => {
        const handleItemClick = () => {
          return navigate(`/user/${el.id}`);
        };

        return (
          <SearchResultItem user={el} key={idx} onClick={handleItemClick} />
        );
      });
    } else {
      return null;
    }
  };

  return (
    <div className="results-container">
      <ul className="results-container__inner">{renderAllResults()}</ul>
    </div>
  );
};

export default AllResults;
