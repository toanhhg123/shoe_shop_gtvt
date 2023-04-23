import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../api/product.axios";
import { AuthContext } from "../context/userContext";
import { AddToCart } from "../api/cart.axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Details = () => {
  const params = useParams();
  const { id } = params;
  const { user, loadCookies } = useContext(AuthContext);
  const history = useHistory();
  const [shoe, setShose] = useState({});
  useEffect(() => {
    getProductId(id).then((data) => setShose(data));
  }, [id]);

  const handleAddToCart = () => {
    if (!user) alert("ban chua login");
    else
      AddToCart(id).then(() => {
        loadCookies();
        history.push("/Slippers");
      });
  };
  // console.log(shoe)
  return (
    <div className="details-main">
      <div className="detail-sub">
        <h1>
          <u>{shoe.tenSanPham}</u>
        </h1>

        <p>
          <strong>Description:</strong> <br />
          {shoe.moTa}
        </p>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td colSpan="2">
                <strong>Details:</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Price:</strong>
              </td>
              <td>Rs.{shoe.gia}/-</td>
            </tr>
            <tr>
              <td>
                <strong>sale:</strong>
              </td>
              <td>[{shoe.sale}]</td>
            </tr>
            <tr>
              <td>
                <strong>Avalibility:</strong>
              </td>
              <td>
                {shoe.Available === true ? "Item Available" : "Out of Stock"}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Available Items:</strong>
              </td>
              <td>{shoe.items_Left}</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
        <button className="btn btn-success" onClick={handleAddToCart}>
          Thêm vào giỏi hàng
        </button>
      </div>
      <div className="detail-sub">
        <img src={shoe.anh} alt="" width="300px" height="300px" />
      </div>
    </div>
  );
};

export default Details;
