import React from "react";
import style from "./Home.module.css";
import {
  HotelOutlined,
  Apartment,
  EmojiFoodBeverage,
  Wifi,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/booking"); // note
  };
  return (
    <div className={style.home}>
      <div className={style.headerContent}>
        <h1 className={style.headerTitle}>
          EXPERIENCE A GOOD STAY,ENJOY FANTASTIC OFFERS
        </h1>
        <h3 className={style.headerSubTitle}>
          FIND OUR FRIENDLY WELCOMING RECEPTION
        </h3>
      </div>
      <div className={style.icons}>
        <div className={style.hotelIcons}>
          <HotelOutlined className={style.hotelIcon} />
          <h4 className={style.iconName}>MASTER BEDROOMS</h4>
        </div>
        <div className={style.apartmentIcons}>
          <Apartment className={style.apartmentIcon} />
          <h4 className={style.iconName}>SEA VIEW BALCONY</h4>
        </div>
        <div className={style.foodBeverageIcons}>
          <EmojiFoodBeverage className={style.foodBeverageIcon} />
          <h4 className={style.iconName}>LARGE CAFE</h4>
        </div>
        <div className={style.wifiIcons}>
          <Wifi className={style.wifiIcon} />
          <h4 className={style.iconName}>WIFI COVERAGE</h4>
        </div>
      </div>
      <div className={style.article}>
        <h1 className={style.aboutTitle}>About Our Hotel</h1>
        <p className={style.aboutPara}>
          Rosewood Hotels & Resorts® manages 29 one-of-a-kind luxury hotels,
          resorts and residences in 17 countries, with 24 new properties under
          development. Each Rosewood property embraces the brand’s A Sense of
          Place® philosophy to reflect the individual location’s history,
          culture and sensibilities. The Rosewood collection includes some of
          the world’s most legendary hotels and resorts, including The Carlyle,
          A Rosewood Hotel in New York, Rosewood Mansion on Turtle Creek in
          Dallas and Hôtel de Crillon, A Rosewood Hotel in Paris, as well as new
          classics such as Rosewood Hong Kong.For those who wish to stay a
          little longer, Rosewood Residences offer a distinct opportunity for
          ownership or rent in extraordinary destinations within the brand’s
          wide-ranging portfolio.
        </p>
      </div>
      <div className={style.images}>
        <img
          src="https://images.rosewoodhotels.com/is/image/rwhg/thierry-samuel8960:WIDE-LARGE-16-9"
          alt="hotel"
          className={style.imageOne}
        />
        <img
          src="https://images.rosewoodhotels.com/is/image/rwhg/RWCRI_Grand-Premier-Suite-512-bedroom-1:WIDE-LARGE-16-9"
          alt="room"
          className={style.imageTwo}
        />
      </div>
      <div className={style.button}>
        <Link
          to="/booking"
          className={style.bookingButton}
          onClick={handleClick}
        >
          Click Here To Book
        </Link>
      </div>
    </div>
  );
};

export default Home;
