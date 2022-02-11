import React from "react";
import style from "./Card.module.css";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/actions/action";
import { useNavigate } from "react-router";

const Card = ({ user, id }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(user.name)
  console.log(user)
  console.log("this is id = "+id)

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h1 className={style.title}>Customer Details</h1>
        <div className={style.input}>
          <label className={style.label}>Name:</label>
          <p className={style.para}>{user.name}</p>
        </div>
        <div className={style.input}>
          <label className={style.label}>email:</label>
          <p className={style.para}>{user.email}</p>
        </div>
        <div className={style.input}>
          <label className={style.label}>Mobile No:</label>
          <p className={style.para}>{user.mobileNo}</p>
        </div>
        <div className={style.input}>
          <label className={style.label}>Aadhar No:</label>
          <p className={style.para}>{user.aadharNo}</p>
        </div>
        <div className={style.input}>
          <label className={style.label}>Address:</label>
          <p className={style.para}>{user.address}</p>
        </div>
        <div className={style.input}>
          <label className={style.label}>Check-In</label>
          <p className={style.para}>{user.date}</p>
        </div>
        <div className={style.input}>
          <label className={style.label}>Days:</label>
          <p className={style.para}>{user.days}</p>
        </div>
        <div className={style.button}>
          <button
            className={style.editButton}
            onClick={() => navigate(`/update/${id}`)}
          >
            Edit
          </button>
          <button
            className={style.deleteButton}
            onClick={() => dispatch(deleteUser(id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
