import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import NewsLetter from "../Pages/NewsLetter";
import Info from "../Pages/SiteInfo";
import { getAll } from "../api/product.axios";
import COver from "../images/Home-Cover.png";
import Gift from "../images/gift-icon.png";
import Globe from "../images/globe-icon.png";
import cover2 from "../images/home-cover2.png";
import star from "../images/star-icon.png";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll().then((data) => setData(data));
  }, []);
  return (
    <div>
      <img
        src={COver}
        alt=""
        style={{ maxWidth: "100%", minWidth: "100%" }}
        height="50%"
      />

      <div className="info">
        <h2>WE ARE ELEGANT</h2>

        <p>
          <em>
            {" "}
            Elegance isn't solely defined bywhat you wear. It's how you carry
            yourself.
          </em>
        </p>

        <div className="info-sub">
          <div className="sub-inf">
            <img src={Gift} alt="Icons"></img>
            <h4>BEAUTIFUL PRODUCTS</h4>
            <p>
              I never look at other people's work. My mind has to be completely
              focused on my own illusions. It's a philosophy of life. A practice
              with no end
            </p>
          </div>

          <div className="sub-inf">
            <img src={Globe} alt="Icons"></img>

            <h4>FAST DELIVERY</h4>
            <p>
              If you do this, something will change, what will change is that
              you will change, your life will change, and if you can change you,
              you can perhaps change the world.
            </p>
          </div>

          <div className="sub-inf">
            <img src={star} alt="Icons"></img>
            <h4>100% SATISFACTION</h4>
            <p>
              I've always thought of the T-shirt as the Alpha and Omega of the
              fashion alphabet. I like the things around me to be beautiful and
              slightly dreamy.
            </p>
          </div>
        </div>
      </div>
      <hr style={{ opacity: 0.1 }} />

      <div>
        <h1 style={{ textAlign: "center" }}>
          <strong>
            <u>New In</u>
          </strong>
        </h1>

        <div className="Home">
          {data.slice(0, 4).map((val, key) => {
            return (
              <div key={val.id} className="home-con">
                <Link to={`/shoe/${val.id}`}>
                  <img src={val.anh} alt="" width="200px" />
                </Link>
                <br />
                {val.tenSanPham}
              </div>
            );
          })}
        </div>
        <img
          src={cover2}
          alt=""
          style={{ maxWidth: "100%", minWidth: "100%" }}
        />

        <NewsLetter />
        <br />
        <hr />
        <Info />
      </div>
    </div>
  );
};
export default Home;
