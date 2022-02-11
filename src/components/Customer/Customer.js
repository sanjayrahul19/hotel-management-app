import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import style from "./Customer.module.css";

const Customer = () => {
  const user = useSelector((state) => {
    return state.data.users;
  });
  return (
    <div className={style.card}>
      {user.length === 0 ? (
        <h1 className={style.title}>No Customers Added</h1>
      ) : (
        user.map((user, index) => {
          return <Card key={index} user={user} id={index} />;
        })
      )}
    </div>
  );
};

export default Customer;
