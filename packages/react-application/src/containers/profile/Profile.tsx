import React, { useEffect } from "react";
import "./profile.scss";
import { UserCard, Spinner } from "../../components";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchUser } from "../../store/slices/userSlice";

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.user);
  const { id } = useParams();

  useEffect(() => {
    if (!!id) {
      dispatch(fetchUser(id));
    }
  }, [id]);

  return (
    <div className="profile-container">
      {!!user && !loading && <UserCard user={user} />}
      {loading && <Spinner />}
    </div>
  );
};

export default Profile;
