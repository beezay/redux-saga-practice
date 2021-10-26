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
  const loading = useSelector((state) => state.users.loading);
  const errors = useSelector((state) => state.users.errors);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {loading && <p>LOADING...</p>}
      {users.length > 0 &&
        !loading &&
        users.map((user) => <CardComponent user={user} key={user.id} />)}
      {errors && !loading && <p>{errors}</p>}
    </>
  );
};

export default UserComponent;
