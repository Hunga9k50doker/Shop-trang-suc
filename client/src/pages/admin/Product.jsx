import { useState, useRef, useEffect } from "react";
import Helmet from "../../components/common/Helmet";
import Table from "../../components/common/Table";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import { FormEdit, FormAdd } from "../../components/common/Forms";
import { product_img_12 } from "../../assets/img";
const dataTable_02 = [
  {
    usename: "12e1ew",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "dsas",
    id_order: "2112",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "2d2s",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12sdse1ew",
    id_order: "1312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "fwwq",
    id_order: "23123",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e134231",
    id_order: "2317",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
];
const ProductAdmin = () => {
  const initFilter = [];
  const [isActiveForm, setIsActiveForm] = useState(false);
  const [isActiveFormAdd, setIsActiveFormAdd] = useState(false);
  const [activeGold, setActiveGold] = useState(false);
  const [filterSelect, setFilterSelect] = useState(initFilter);
  const [searchItem, setSearchItem] = useState("");

  const [avatar, setAvatar] = useState();
  const goldRef = useRef(null);
  const handleEvents = {
    changMaterial: () => {
      if (goldRef.current) {
        if (goldRef.current.value === "Gold") {
          setActiveGold(true);
        } else {
          setActiveGold(false);
        }
        // console.log(goldRef.current.value);
      }
    },
    previewAvatar: (e) => {
      const file = e.target.files[0];
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    },
  };
  return (
    <Helmet title="Quản lý sản phẩm">
      <div className="product__admin">
        <div className="container mt-4">
          <div className="row">
            <div className="col col-xl-12 col-md-12 col-sm-12 ">
              <Table title="Danh sách sản phẩm">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <Button
                  onClick={() => setIsActiveFormAdd(true)}
                  content="Thêm sản phẩm"
                  classNameBtn="ms-4 btn__add"
                />
                {isActiveFormAdd ? (
                  <Modal
                    style={{
                      backgroundImage:
                        " linear-gradient(to top, #cc208e 0%, #6713d2 100%)",
                    }}
                    active={isActiveFormAdd}
                    setActive={setIsActiveFormAdd}
                  >
                    <FormAdd title="Thêm thông tin sản phẩm">
                      <li className="form__item">
                        <input
                          type="file"
                          multiple
                          accept="image/png,image/jpeg"
                          onChange={handleEvents.previewAvatar}
                        />
                        {avatar && (
                          <div className="list__img">
                            <img src={avatar.preview} alt="" width="50px" />
                          </div>
                        )}
                      </li>

                      <li className="form__item">
                        <input
                          type="text"
                          placeholder="Tên sản phẩm"
                          style={{ width: "100%" }}
                        />
                      </li>
                      <li className="form__item">
                        <p>Loại sản phẩm:</p>
                        <select name="edit__type_product" id="type_product">
                          <option value="Ring">Nhẫn</option>
                          <option value="Watch">Đồng hồ</option>
                          <option value="Glasses">Mắt kính</option>
                          <option value="Accessory">Phụ kiện</option>
                        </select>
                      </li>
                      <li className="form__item">
                        <p>Chất liệu:</p>
                        <select
                          name="edit__material"
                          id="material"
                          ref={goldRef}
                          onChange={handleEvents.changMaterial}
                        >
                          <option value="Sliver">Bạc</option>
                          <option value="Gold">Vàng</option>
                          <option value="Alloy">Hợp kim cao cấp</option>
                          <option value="Platinum">Platinum</option>
                        </select>
                      </li>
                      {activeGold === true && (
                        <li className="form__item">
                          <p>Chất liệu vàng:</p>
                          <select name="material_gold" id="material_gold">
                            <option value="18k">18kk</option>
                            <option value="22k">22k</option>
                            <option value="24k">24k</option>
                          </select>
                        </li>
                      )}
                      <li className="form__item">
                        <p>Giới tính:</p>
                        <select name="edit__gender" id="gender">
                          <option value="Nam">Nam</option>
                          <option value="Nữ">Nữ</option>
                          <option value="Unisex">Unisex</option>
                        </select>
                      </li>
                      <li className="form__item">
                        <p>Loại quà tặng</p>
                        <label htmlFor="father">Cho cha</label>
                        <input
                          className="form__type__gift"
                          name="father"
                          type="checkbox"
                        ></input>
                        <label htmlFor="mother">Cho mẹ</label>
                        <input
                          className="form__type__gift"
                          name="mother"
                          type="checkbox"
                        ></input>
                        <label htmlFor="husband">Cho chàng</label>
                        <input
                          className="form__type__gift"
                          name="husband"
                          type="checkbox"
                        ></input>
                        <label htmlFor="wife">Cho nàng</label>
                        <input
                          className="form__type__gift"
                          name="wife"
                          type="checkbox"
                        ></input>
                        <label htmlFor="baby">Cho bé</label>
                        <input
                          className="form__type__gift"
                          name="baby"
                          type="checkbox"
                        ></input>
                      </li>
                      <li className="form__item">
                        <p>Màu sắc</p>
                        <label htmlFor="yellow">Vàng</label>
                        <input
                          className="form__type__color"
                          name=""
                          type="checkbox"
                        ></input>
                        <label htmlFor="white">Trắng</label>
                        <input
                          className="form__type__color"
                          name=""
                          type="checkbox"
                        ></input>
                        <label htmlFor="pink">Hồng</label>
                        <input
                          className="form__type__color"
                          name=""
                          id="pink"
                          type="checkbox"
                        ></input>
                        <label htmlFor="yellow__white ">Vàng + Trắng</label>
                        <input
                          className="form__type__color"
                          name=" "
                          type="checkbox"
                        ></input>
                        <label htmlFor="form__type__color__pink__white">
                          Hồng + Trắng
                        </label>
                        <input
                          className="form__type__color"
                          name=""
                          id="form__type__color__pink__white"
                          type="checkbox"
                        ></input>
                        <label htmlFor="form__type__color__pink__yellow">
                          Hồng + Vàng
                        </label>
                        <input
                          className="form__type__color"
                          id="form__type__color__pink__yellow"
                          name=""
                          type="checkbox"
                        ></input>
                      </li>
                      <li className="form__item">
                        <input
                          type="number"
                          placeholder="Giá"
                          defaultValue="1000 vnđ"
                        />
                      </li>

                      <li className="form__item">
                        <textarea
                          type="text"
                          placeholder="Mô tả chi tiết sản phẩm"
                        />
                      </li>
                    </FormAdd>
                  </Modal>
                ) : (
                  ""
                )}
                <table className="p-4">
                  <thead>
                    <tr>
                      <td>ID</td>
                      <td></td>
                      <td>Tên sản phẩm</td>
                      <td>Giá</td>
                      <td>Thời gian cập nhật</td>
                      <td>Chỉnh sửa</td>
                      <td>Xóa</td>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTable_02
                      .filter((val) => {
                        if (searchItem === "") {
                          return val;
                        } else if (
                          val.product_name
                            .toLowerCase()
                            .includes(searchItem.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((e, id) => (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>
                            <img src={product_img_12} alt="" />
                          </td>
                          <td>{e.product_name}</td>
                          <td>{e.price}</td>
                          <td>{e.date}</td>
                          <td>
                            <i
                              className="bx bx-edit-alt"
                              onClick={() => setIsActiveForm(true)}
                            ></i>
                            {isActiveForm ? (
                              <Modal
                                style={{
                                  backgroundImage:
                                    " linear-gradient(to top, #cc208e 0%, #6713d2 100%)",
                                }}
                                active={isActiveForm}
                                setActive={setIsActiveForm}
                              >
                                <FormEdit title="Cập nhật thông tin sản phẩm">
                                  <li className="form__item">
                                    <input type="file" />
                                  </li>
                                  <li className="form__item">
                                    <input
                                      type="text"
                                      placeholder="Tên sản phẩm"
                                      style={{ width: "100%" }}
                                    />
                                  </li>
                                  <li className="form__item">
                                    <p>Loại sản phẩm:</p>
                                    <select
                                      name="edit__type_product"
                                      id="type_product"
                                    >
                                      <option value="Ring">Nhẫn</option>
                                      <option value="Watch">Đồng hồ</option>
                                      <option value="Glasses">Mắt kính</option>
                                      <option value="Accessory">
                                        Phụ kiện
                                      </option>
                                    </select>
                                  </li>
                                  <li className="form__item">
                                    <p>Chất liệu:</p>
                                    <select
                                      name="edit__material"
                                      id="material"
                                      ref={goldRef}
                                      onChange={handleEvents.changMaterial}
                                    >
                                      <option value="Sliver">Bạc</option>
                                      <option value="Gold">Vàng</option>
                                      <option value="Alloy">
                                        Hợp kim cao cấp
                                      </option>
                                      <option value="Platinum">Platinum</option>
                                    </select>
                                  </li>
                                  {activeGold === true && (
                                    <li className="form__item">
                                      <p>Chất liệu vàng:</p>
                                      <select
                                        name="material_gold"
                                        id="material_gold"
                                      >
                                        <option value="18k">18kk</option>
                                        <option value="22k">22k</option>
                                        <option value="24k">24k</option>
                                      </select>
                                    </li>
                                  )}
                                  <li className="form__item">
                                    <p>Giới tính:</p>
                                    <select name="edit__gender" id="gender">
                                      <option value="Nam">Nam</option>
                                      <option value="Nữ">Nữ</option>
                                      <option value="Unisex">Unisex</option>
                                    </select>
                                  </li>
                                  <li className="form__item">
                                    <p>Loại quà tặng</p>
                                    <label htmlFor="father">Cho cha</label>
                                    <input
                                      className="form__type__gift"
                                      name="father"
                                      type="checkbox"
                                    ></input>
                                    <label htmlFor="mother">Cho mẹ</label>
                                    <input
                                      className="form__type__gift"
                                      name="mother"
                                      type="checkbox"
                                    ></input>
                                    <label htmlFor="husband">Cho chàng</label>
                                    <input
                                      className="form__type__gift"
                                      name="husband"
                                      type="checkbox"
                                    ></input>
                                    <label htmlFor="wife">Cho nàng</label>
                                    <input
                                      className="form__type__gift"
                                      name="wife"
                                      type="checkbox"
                                    ></input>
                                    <label htmlFor="baby">Cho bé</label>
                                    <input
                                      className="form__type__gift"
                                      name="baby"
                                      type="checkbox"
                                    ></input>
                                  </li>
                                  <li className="form__item">
                                    <p>Màu sắc</p>
                                    <label htmlFor="yellow">Vàng</label>
                                    <input
                                      className="form__type__color"
                                      name=""
                                      type="checkbox"
                                    ></input>
                                    <label htmlFor="white">Trắng</label>
                                    <input
                                      className="form__type__color"
                                      name=""
                                      type="checkbox"
                                    ></input>
                                    <label htmlFor="pink">Hồng</label>
                                    <input
                                      className="form__type__color"
                                      name=""
                                      id="pink"
                                      type="checkbox"
                                    ></input>
                                    <label htmlFor="yellow__white ">
                                      Vàng + Trắng
                                    </label>
                                    <input
                                      className="form__type__color"
                                      name=" "
                                      type="checkbox"
                                    ></input>
                                    <label htmlFor="form__type__color__pink__white">
                                      Hồng + Trắng
                                    </label>
                                    <input
                                      className="form__type__color"
                                      name=""
                                      id="form__type__color__pink__white"
                                      type="checkbox"
                                    ></input>
                                    <label htmlFor="form__type__color__pink__yellow">
                                      Hồng + Vàng
                                    </label>
                                    <input
                                      className="form__type__color"
                                      id="form__type__color__pink__yellow"
                                      name=""
                                      type="checkbox"
                                    ></input>
                                  </li>
                                  <li className="form__item">
                                    <input
                                      type="number"
                                      placeholder="Giá"
                                      defaultValue="1000 vnđ"
                                    />
                                  </li>

                                  <li className="form__item">
                                    <textarea
                                      type="text"
                                      placeholder="Mô tả chi tiết sản phẩm"
                                    />
                                  </li>
                                </FormEdit>
                              </Modal>
                            ) : (
                              ""
                            )}
                          </td>
                          <td>
                            <i className="bx bx-trash"></i>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default ProductAdmin;
