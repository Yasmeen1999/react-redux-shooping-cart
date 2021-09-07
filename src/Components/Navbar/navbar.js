import React from "react";
import style from "./Navbar.module.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const numberOfItems = useSelector((state) => state.item.numberOfItems);
  const formatCount = () => {
    return numberOfItems <= 0 ? 0 : numberOfItems;
  };
  console.log("numberOfItems", numberOfItems);
  return (
    <div className={style.containerWrap}>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <h2 className={style.navbar}>My shooping store</h2>
        </div>
        <div className={style.rightContent}>
          <div className={style.cartText}>Cart</div>
          <div className={style.cartImage}>
            <img src="https://image.flaticon.com/icons/svg/102/102276.svg" />
          </div>
          <div className={style.counterNumber}>
            {formatCount(numberOfItems)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
