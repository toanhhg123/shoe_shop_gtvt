import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { getAll, update } from "../api/product.axios";
import { toast } from "react-toastify";
import Modal from "../components/Modal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productCurrent, setProductCurrent] = useState(null);

  // fetch products
  useEffect(() => {
    toast.promise(getAll, {
      pending: "Loadding",
      success: {
        render({ data }) {
          setProducts(data);
          return "getall product success";
        },
      },
      error: {
        render({ data }) {
          return data.message;
        },
      },
    });
  }, []);

  //show modal
  const handleShowModaledit = (product) => {
    setProductCurrent(product);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  //update product in modal
  const handleUpdate = (product) => {
    toast.promise(update(product), {
      pending: "loading ...",
      success: {
        render({ data }) {
          setProducts([...products.filter((p) => p.id !== data.id), data]);
          return "create product success";
        },
      },
      error: {
        render({ data }) {
          return data.message;
        },
      },
    });
  };

  return (
    <>
      {showModal && (
        <MoalEditProduct
          showModal={showModal}
          product={productCurrent}
          onClose={handleCloseModal}
          handleFetch={handleUpdate}
        />
      )}
      <PageHeader title="Music" from={"musics"} to={"list"} />
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Products</h4>

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Ten San Pham</th>
                      <th>Gia</th>
                      <th>sale</th>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.tenSanPham}</td>
                        <td>{item.gia}</td>
                        <td>{item.sale}</td>
                        <td>
                          <img src={item.anh} />
                        </td>
                        <td>
                          <button
                            className="btn btn-success mr-2"
                            onClick={() => handleShowModaledit(item)}
                          >
                            Edit
                          </button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MoalEditProduct = ({ showModal, product, handleFetch, ...rest }) => {
  const [_, setProduct] = useState(product);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { onClose } = rest;
    handleFetch(_);
    onClose();
  };
  return (
    <Modal show={showModal} {...rest}>
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
                  value={_.tenSanPham}
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
                  value={_.gia}
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
                  value={_.sale}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Loai</label>
                <select
                  value={_.loai}
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
                  value={_.moTa}
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
                  value={_.anh}
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
    </Modal>
  );
};

export default Products;
