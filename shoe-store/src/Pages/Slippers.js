import React, { useContext } from "react";
import { ShoeContext } from "../context/shoeContext";
import { AuthContext } from "../context/userContext";
import { DeleteCart } from "../api/cart.axios";

const Slippers = (props) => {
  let { data } = useContext(ShoeContext);
  const { user, loadCookies } = useContext(AuthContext);
  const handleDelete = (id) => {
    DeleteCart(id).then(() => {
      loadCookies();
    });
  };
  return (
    <div className="Home-container">
      <h1 style={{ textAlign: "center" }}>
        <u>Slippers</u>
      </h1>

      <div className="prooo">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hinh ANh</th>
              <th scope="col">Ten SP</th>
              <th scope="col">Gia</th>
              <th scope="col">Sale</th>
              <th scope="col">Gỡ</th>
            </tr>
          </thead>
          <tbody>
            {user.gioHangs.map(({ id, sanPham }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <img src={sanPham.anh} alt="" width={50} />
                  </td>
                  <td>{sanPham.tenSanPham}</td>
                  <td>{sanPham.gia}</td>
                  <td>{sanPham.sale}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Slippers;
