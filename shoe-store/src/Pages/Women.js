import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoeContext } from "../context/shoeContext";
import { getAll } from "../api/product.axios";
import Brands from "../Mens-collection/Brands";

const Women = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll().then((data) => setData(data));
  }, []);

  return (
    <div className="Home-container">
      <h1 style={{ textAlign: "center" }}>
        <u>Men's collection</u>
      </h1>
      <Brands />
      <div className="prooo">
        {data.map((proo, ind) => (
          <div key={ind} className="pro-con">
            <Link key={ind} className="lnk" to={`/shoe/${proo.id}`}>
              <img
                src={proo.anh}
                alt=""
                title={proo.tenSanPham}
                width="200px"
                height="200px"
              />
            </Link>
            <p>
              {proo.tenSanPham} <br />
              <strong>Rs.{proo.gia}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Women;
