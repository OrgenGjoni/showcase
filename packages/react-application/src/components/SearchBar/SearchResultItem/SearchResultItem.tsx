import React from "react";
import { user } from "../../../types/user.type";
import "./search_result_item.scss";
import { normalizeAmount } from "../../../utils";
import { MdOutlineAlternateEmail, MdPeopleOutline } from "react-icons/md";

interface SearchResultItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  user: user;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  user,
  ...props
}) => {
  return (
    <li {...props} className="result-item">
      <div className="result-item__inner">
        <img src={user.profilePicSrc} loading="lazy" />
        <div className="result-item__inner-data">
          <span>
            <MdOutlineAlternateEmail className="result-item__inner-data__icon" />
            {user.username}
          </span>
          <small>
            <MdPeopleOutline className="result-item__inner-data__icon" />
            &nbsp;{normalizeAmount(user.followersAmount)}
          </small>
        </div>
      </div>
    </li>
  );
};

export default SearchResultItem;
