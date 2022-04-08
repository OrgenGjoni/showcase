import React from "react";
import "./user_card.scss";
import { FiUsers } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { user } from "../../types/user.type";
import { normalizeAmount, serializeTopics } from "../../utils";

interface UserCardProps {
  user: user;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card__picture">
        <img src={user.profilePicSrc} alt="" />
        <AiFillInstagram />
      </div>
      <div className="user-card__data">
        <h3 className="user-card__data-name">{user.username}</h3>
        <small className="user-card__data-username">@{user.username}</small>
        <span className="user-card__data-bio">{user.bio}</span>
        <span className="user-card__data-topics">
          {serializeTopics(user.topics)}
        </span>
        <span className="user-card__data-location">
          {user.location} &nbsp; <IoMail />
        </span>
      </div>
      <div className="user-card__extra">
        <FiUsers className="user-card__extra-icon" />
        <h1 className="user-card__extra-amount">
          {normalizeAmount(user.followersAmount)}
        </h1>
        <span>Followers</span>
      </div>
    </div>
  );
};

export default UserCard;
