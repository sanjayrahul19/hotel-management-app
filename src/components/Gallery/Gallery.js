import React from "react";
import style from "./Gallery.module.css";
const Gallery = () => {
  return (
    <div className={style.images}>
      <img
        className={style.image}
        src="https://images.rosewoodhotels.com/is/image/rwhg/A.CARIBjbdock:WIDE-LARGE-16-9"
        alt=""
      />
      <img
        className={style.image}
        src="https://images.rosewoodhotels.com/is/image/rwhg/RWLVP_El%20Restaurante%20(2):WIDE-LARGE-16-9"
        alt=""
      />
      <img
        className={style.image}
        src="https://images.rosewoodhotels.com/is/image/rwhg/DSC_3942-1:WIDE-LARGE-16-9"
        alt=""
      />
      <img
        className={style.image}
        src="https://images.rosewoodhotels.com/is/image/rwhg/20A707%2028A%20SM18A_PD_2K-1:WIDE-LARGE-16-9"
        alt=""
      />
      <img
        className={style.image}
        src="https://images.rosewoodhotels.com/is/image/rwhg/RWCRI_L-Etincelle-1:WIDE-LARGE-16-9"
        alt=""
      />
    </div>
  );
};

export default Gallery;
