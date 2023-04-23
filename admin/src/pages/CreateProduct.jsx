import { useState } from "react";
import { create } from "../api/product.axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      create({ ...product, createdbyId: 0, gioHangs: [], hoaDons: [] }),
      {
        pending: "loading ...",
        success: {
          render() {
            navigate("/products");
            return "create product success";
          },
        },
        error: {
          render({ data }) {
            return data.message;
          },
        },
      }
    );
  };
  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Basic form elements</h4>
          <p className="card-description"> Basic form elements </p>
          <form className="forms-sample" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Ten san pham</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                onChange={(e) =>
                  setProduct({ ...product, tenSanPham: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Gia Tien</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputName1"
                onChange={(e) =>
                  setProduct({ ...product, gia: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Sale</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputName1"
                onChange={(e) =>
                  setProduct({ ...product, sale: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Loai</label>
              <select
                onChange={(e) =>
                  setProduct({ ...product, loai: e.target.value })
                }
                className="form-control"
              >
                <option value={1}>Adidas</option>
                <option value={2}>Nike</option>
                <option value={3}>Chanel</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputName1">mo ta</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                onChange={(e) =>
                  setProduct({ ...product, moTa: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Anh</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                onChange={(e) =>
                  setProduct({ ...product, anh: e.target.value })
                }
              />
            </div>

            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <button className="btn btn-dark">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
