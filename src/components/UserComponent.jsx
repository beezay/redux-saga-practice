import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";
import CardComponent from "./CardComponent";

const data = [
  {
    id: 1,
    name: "Beezay",
    company: { name: "Zeura", catchPhrase: "Aspirant" },
  },
];

const UserComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {users.length > 0 &&
        users.map((user) => <CardComponent user={user} key={user.id} />)}
    </>
  );
};

export default UserComponent;
