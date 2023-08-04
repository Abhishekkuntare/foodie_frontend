import React from "react";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.webp";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";
import a3 from "../../assets/home/a3.png";
import a7 from "../../assets/home/a7.png";
import a1 from "../../assets/home/a1.png";
import a8 from "../../assets/home/a8.png";
import "../../styles/store.css";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader";

const Store = () => {
  const { loading } = useSelector((state) => state.user);

  return (
    <>
      {loading === false ? (
        <div className="store_main">
          <h1 className="store_h1">Love Every Bite</h1>
          <div className="store">
            <div className="store_imgs">
              <img src={b1} alt="img" />
              <img src={b2} alt="img" />
              <img src={b3} alt="img" />
            </div>
            <div>
              <img className="store_img_a3" src={a3} alt="img" />
              <img className="store_img_a7" src={a7} alt="img" />
            </div>

            <div className="store_big_burger">
              <img src={b4} alt="img" />
            </div>
            <div className="store_veg">
              <img className="store_veg_img" src={b5} alt="img" />
              <p>
                We serving the greatest burgers on the planet.paying the way for
                delicous burgers.flame on !
              </p>
              <img className="store_img_a1" src={a1} alt="img" />
              <img className="store_img_a8" src={a8} alt="img" />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Store;
