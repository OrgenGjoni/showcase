import React from "react";
import "./user_card.scss";
import { FiUsers } from "react-icons/fi";

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="user-card__picture">
        <img
          src="https://dummyimage.com/250x450/000/fff.jpg&text=avatar"
          alt=""
        />
      </div>
      <div className="user-card__data">
        <h3 className="user-card__data-name">test_test</h3>
        <small className="user-card__data-username">@test_test</small>
        <span className="user-card__data-bio">
          📍 Lisbon ✈️ Flight attendant | TAP 🐶 @ben_mel_goldenretrievers 🐾
        </span>
        <span>fashion-travel-food-health</span>
      </div>
      <div className="user-card__extra">
        <FiUsers className="user-card__extra-icon" />
        <h1 className="user-card__extra-amount">20.5K</h1>
        <span>Followers</span>
      </div>
    </div>
  );
};

export default UserCard;
