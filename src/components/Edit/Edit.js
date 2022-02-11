import React, { useState } from "react";
import style from "./Edit.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { editUser } from "../../store/actions/action";

const Edit = () => {
  const user = useSelector((state) => state.data.users);

  const { id } = useParams();

  const tempData = user[id];
  const [userInfo, setUserInfo] = useState(tempData);

  console.log(userInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdd = () => {
    dispatch(editUser(userInfo, id));
    navigate("/customer");
  };
  return (
    <div className={style.container}>
      <div className={style.details}>
        <h1 className={style.title}>Customer Details</h1>
        <div className={style.input}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
        </div>
        1 <br />
        <div className={style.input}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className={style.input}>
          <label htmlFor="mobileNo">Mobile No</label>
          <input
            type="text"
            name="mobileNo"
            value={userInfo.mobileNo}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className={style.input}>
          <label htmlFor="aadharNo">Aadhar No</label>
          <input
            type="text"
            name="aadharNo"
            value={userInfo.aadharNo}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className={style.input}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className={style.input}>
          <label htmlFor="checkIn">Check-In</label>
          <input
            type="date"
            name="date"
            placeholder="Select Your Date"
            value={userInfo.date}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className={style.input}>
          <label htmlFor="days">No of Days</label>
          <input
            type="text"
            name="days"
            value={userInfo.days}
            onChange={handleChange}
          />
        </div>
        <div className={style.updateUser}>
          <button
            className={style.updateUserButton}
            onClick={() => handleAdd(id)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
