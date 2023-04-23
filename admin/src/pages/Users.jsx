import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAll, create, update } from "../api/KhachHang.axios";
import Modal from "../components/Modal";
import PageHeader from "../components/PageHeader";
import server from "../api/axios";

const typeModalAction = { create: 1, edit: 2 };
const userInit = {
  hoTen: "",
  sđt: "",
  email: "",
  matKhau: "",
  gioiTinh: "1",
  gioHangs: [],
  hoaDons: [],
};
const Users = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userCurrent, setUserCurrent] = useState(null);
  const [typeModal, setTypeModal] = useState(typeModalAction.create);
  // fetch products
  useEffect(() => {
    toast.promise(getAll, {
      pending: "Loadding",
      success: {
        render({ data }) {
          setUsers(data);
          return "get all user success";
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
  const handleShowModal = (user, typeShow) => {
    setTypeModal(typeShow);
    setUserCurrent(user);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFetch = (user) => {
    if (typeModal === typeModalAction.create)
      toast.promise(create(user), {
        pending: "Loadding",
        success: {
          render({ data }) {
            setUsers([...users, data]);
            return "create user success";
          },
        },
        error: {
          render({ data }) {
            return data.message;
          },
        },
      });
    else
      toast.promise(update(user), {
        pending: "Loadding",
        success: {
          render() {
            setUsers([...users.filter((x) => x.id !== user.id), user]);
            return `update ${user.hoTen} success`;
          },
        },
        error: {
          render({ data }) {
            return data.message;
          },
        },
      });
  };
  const handleDelete = (id) => {
    server
      .delete("api/KhachHangs/" + id)
      .then(() => setUsers([...users.filter((x) => x.id !== id)]));
  };
  return (
    <>
      {showModal && (
        <ModalUser
          showModal={showModal}
          data={userCurrent}
          onClose={handleCloseModal}
          handleFetch={handleFetch}
        />
      )}
      <PageHeader title="Music" from={"musics"} to={"list"} />
      <button
        className="btn btn-primary my-3"
        onClick={() => handleShowModal(userInit, typeModalAction.create)}
      >
        Create User
      </button>
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
                      <th>ho ten</th>
                      <th>sdt</th>
                      <th>email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.hoTen}</td>
                        <td>{item.sđt}</td>
                        <td>{item.email}</td>
                        <td>
                          <button
                            className="btn btn-success mr-2"
                            onClick={() =>
                              handleShowModal(item, typeModalAction.edit)
                            }
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
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

const ModalUser = ({ showModal, data, handleFetch, ...rest }) => {
  const [_, setData] = useState(data);
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
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setData({ ..._, email: e.target.value })}
                  value={_.email}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setData({ ..._, sđt: e.target.value })}
                  value={_.sđt}
                />
              </div>
              <div className="form-group">
                <label>Ho ten</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setData({ ..._, hoTen: e.target.value })}
                  value={_.hoTen}
                />
              </div>
              <div className="form-group">
                <label>Gioi Tinh</label>
                <select
                  value={_.gioiTinh}
                  onChange={(e) => setData({ ..._, gioiTinh: e.target.value })}
                  className="form-control"
                >
                  <option value={"1"}>Nam</option>
                  <option value={"2"}>Nu</option>
                </select>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setData({ ..._, matKhau: e.target.value })}
                  value={_.matKhau}
                />
              </div>
              <button type="submit" className="btn btn-primary mr-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Users;
