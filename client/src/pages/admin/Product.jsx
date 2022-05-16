import React, { useState, useRef, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import Helmet from "../../components/common/Helmet";
import Table from "../../components/common/Table";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import { numberWithCommas } from "../../utils/utils";
import { FormEdit, FormAdd } from "../../components/common/Forms";
import { ProductContext } from "../../provider/context/ProductContext";

// data render ui for color, gift
const dataInput = [
  {
    type: "color",
    title: "Vàng",
    value: "Vàng",
  },
  {
    type: "color",
    title: "Hồng",
    value: "Hồng",
  },
  {
    type: "color",
    title: "Trắng",
    value: "Trắng",
  },
  {
    type: "color",
    title: "Hồng + Trắng",
    value: "Hồng Trắng",
  },
  {
    type: "color",
    title: "Vàng + Trắng",
    value: "Vàng Trắng",
  },
  {
    type: "color",
    title: "Hồng + Vàng",
    value: "Hồng Vàng",
  },
  {
    type: "gift",
    title: "Cho cha",
    value: "Cho cha",
  },
  {
    type: "gift",
    title: "Cho mẹ",
    value: "Cho mẹ",
  },
  {
    type: "gift",
    title: "Cho chàng",
    value: "Cho chàng",
  },
  {
    type: "gift",
    title: "Cho nàng",
    value: "Cho nàng",
  },
  {
    type: "gift",
    title: "Cho bé",
    value: "Cho bé",
  },
];
const ProductAdmin = () => {
  const [isActiveForm, setIsActiveForm] = useState(false);
  const [isActiveFormAdd, setIsActiveFormAdd] = useState(false);
  const [activeGold, setActiveGold] = useState(false);
  const [cateJewel, setCateJewel] = useState(true);
  const [cateWatch, setCateWatch] = useState(false);
  const [cateAccessory, setCateAccessory] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [avatar, setAvatar] = useState([]);
  const goldRef = useRef(null);
  const typeRef = useRef(null);
  const { addProducts, deleteProducts } = useContext(ProductContext);
  
  const [, setImgs] = useState([]);
  const {
    productState: { products },
  } = useContext(ProductContext);
  const dataInit = {
    imgsUrl: [],
    type: "Trang sức",
    category: {
      brand: "",
      jewel_type: "Nhẫn",
      jewel_line: "Kim cương",
      material: "Bạc",
      materialGold: "18k",
      accessory_type: "",
    },
    price: "",
    gender: "Nam",
    name: "",
    color: ["Vàng"],
    isCouple: false,
    gift: [],
    description: "",
    disableGift: true,
  };
  const [data, setData] = useState(dataInit);

  const notify = () =>
    toast(() => {
      if (
        data.imgsUrl.length === 0 ||
        data.price === "" ||
        data.description === ""
      ) {
        return "Thêm thất bại, hãy kiểm tra lại!";
      } else {
        return "Thêm thành công!";
      }
    });
  const notifyDel = () => toast("Xóa thành công");
  useEffect(() => {
    if (typeRef.current) {
      if (typeRef.current.value === "Trang sức") {
        setCateJewel(true);
        setCateWatch(false);
        setCateAccessory(false);
      }
    }
  }, []);

  const handleEvents = {
    // gold, sliver, platinum, alloy
    changMaterial: (e) => {
      if (goldRef.current) {
        if (goldRef.current.value === "Vàng") {
          setActiveGold(true);
          
        } else {
          setActiveGold(false);
        }
      }
    },
    // jewels, watch, glasses, accessories
    changType: (e) => {
      if (typeRef.current) {
        if (typeRef.current.value === "Trang sức") {
          setCateJewel(true);
          setCateWatch(false);
          setCateAccessory(false);
         
        } else if (typeRef.current.value === "Đồng hồ") {
          setCateJewel(false);
          setCateWatch(true);
          setCateAccessory(false);
        } else {
          setCateJewel(false);
          setCateWatch(false);
          setCateAccessory(true);
        }
      }
      handleEvents.getData(e);
    },
    // add images
    changeImg: (e) => {
      if (e.target.files && !data.imgsUrl.includes(e.target.files[0].name)) {
        const fileArray = Array.from(e.target.files).map((file) =>
          URL.createObjectURL(file)
        );

        setAvatar((prevImg) => prevImg.concat(fileArray));
        setImgs(avatar);
        Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
      }
      handleEvents.getData(e);
    },
    previewAvatar: (img) => {
      return img.map((e, id) => {
        return (
          <div
            key={id}
            className="col col-xxl-3 col-xl-3 col-md-4 col-sm-6 mt-4"
            style={{ overflow: "hidden", border: "1px solid #ccc" }}
          >
            <img src={e} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
        );
      });
    },

    //get data
    getData: (e) => {
      if (
        [
          "brand",
          "jewel_type",
          "jewel_line",
          "material",
          "materialGold",
          "accessory_type",
        ].includes(e.target.className)
      ) {
        setData({
          ...data,
          category: {
            ...data.category,
            [e.target.className]: e.target.value,
          },
        });
      } else {
        if (["color", "gift"].includes(e.target.className)) {
          const className = e.target.className;
          if (e.target.checked) {
            setData({
              ...data,
              [className]: [...data[className], e.target.value],
            });
          } else {
            setData({
              ...data,

              [className]: data[className].filter((v) => v !== e.target.value),
            });
          }
        } else if (e.target.className === "custom__input__file__form__add") {
          setData({
            ...data,
            imgsUrl: [...data.imgsUrl, e.target.files[0].name],
          });
        } else
          setData({
            ...data,
            [e.target.className]: e.target.value,
          });
      }
    },
    // submit
    submit: () => {
      addProducts(data);
    },
    checkValid: (e) => {
      e.preventDefault();
      if (
        data.imgsUrl.length === 0 ||
        data.price === "" ||
        data.description === ""
      ) {
      } else {
        handleEvents.submit(e);
      }
    },
  };

  console.log(data);
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

                {/* =============add product ================== */}

                {isActiveFormAdd ? (
                  <Modal
                    style={{
                      backgroundImage:
                        "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)",
                    }}
                    active={isActiveFormAdd}
                    setActive={setIsActiveFormAdd}
                  >
                    <FormAdd
                      handleClick={notify}
                      title="Thêm thông tin sản phẩm"
                      onSubmit={(e) => handleEvents.checkValid(e)}
                    >
                      <li className="form__item">
                        <input
                          type="file"
                          className="custom__input__file__form__add"
                          id="custom__input__file__form__add"
                          multiple
                          accept="image/png,image/jpeg"
                          onChange={(e) => handleEvents.changeImg(e)}
                        />
                        <label
                          htmlFor="custom__input__file__form__add"
                          className="label__custom__input__file__form__add"
                        >
                          Thêm ảnh
                        </label>
                      </li>
                      <li className="form__item">
                        <div className="row ">
                          {handleEvents.previewAvatar(avatar)}
                        </div>
                      </li>
                      <li className="form__item mt-4">
                        <input
                          onChange={(e) => handleEvents.getData(e)}
                          value={data.name}
                          type="text"
                          placeholder="Tên sản phẩm"
                          style={{ width: "100%" }}
                          className="name"
                        />
                      </li>
                      <li className="form__item">
                        <p>Loại sản phẩm:</p>
                        <select
                          ref={typeRef}
                          onChange={(e) => {
                            handleEvents.changType(e);
                            handleEvents.getData(e);
                          }}
                          value={data.type}
                          name="edit__type_product"
                          id="type_product"
                          className="type"
                        >
                          <option value="Trang sức">Trang sức</option>
                          <option value="Đồng hồ">Đồng hồ</option>
                          <option value="Phụ kiện">Phụ kiện</option>
                        </select>
                      </li>
                      <li className="form__item form__item__category">
                        {cateJewel === true && (
                          <>
                            <p>Loại trang sức:</p>
                            <select
                              onChange={(e) => handleEvents.getData(e)}
                              value={data.category.jewel_type}
                              className="jewel_type"
                            >
                              <option value="Nhẫn">Nhẫn</option>
                              <option value="Lắc">Lắc</option>
                              <option value="Bông tai">Bông tai</option>
                              <option value="Vòng tay">Vòng tay</option>
                              <option value="Dây cổ">Dây cổ</option>
                            </select>
                            <br />
                            <p>Dòng trang sức:</p>
                            <select
                              className="jewel_line"
                              onChange={(e) => handleEvents.getData(e)}
                              value={data.category.jewel_line}
                            >
                              <option value="Kim cương">Kim cương</option>
                              <option value="Không đính đá">
                                Không đính đá
                              </option>
                              <option value="Ecz-cz">Ecz-cz</option>
                            </select>
                          </>
                        )}
                        {cateWatch === true && (
                          <>
                            <p>Thương hiệu:</p>
                            <select
                              id="brand__watch"
                              className="brand"
                              onChange={(e) => handleEvents.getData(e)}
                              value={data.category.brand}
                            >
                              <option value="Casio">Casio</option>
                              <option value="Gucci">Gucci</option>
                              <option value="Citizen">Citizen</option>
                            </select>
                          </>
                        )}
                        {cateAccessory === true && (
                          <>
                            <p>Loại phụ kiện:</p>
                            <select
                              id="type_accessory"
                              className="accessory_type"
                              onChange={(e) => handleEvents.getData(e)}
                              value={data.category.accessory_type}
                            >
                              {" "}
                              <option value="Mắt kính">Mắt kính</option>
                              <option value="Thắt Lưng">Thắt Lưng</option>
                            </select>
                          </>
                        )}
                      </li>
                      <li className="form__item">
                        <p>Chất liệu:</p>
                        <select
                          className="material"
                          name="edit__material"
                          id="material"
                          ref={goldRef}
                          onChange={(e) => {
                            handleEvents.getData(e);
                            handleEvents.changMaterial(e);
                          }}
                          value={data.category.material}
                        >
                          <option value="Bạc">Bạc</option>
                          <option value="Vàng">Vàng</option>
                          <option value="Hợp kim cao cấp">
                            Hợp kim cao cấp
                          </option>
                          <option value="Platinum">Platinum</option>
                        </select>
                        <br />
                        {activeGold === true && (
                          <>
                            <p>Chất liệu vàng:</p>
                            <select
                              name="material__gold"
                              id="material__gold"
                              className="materialGold"
                              onChange={(e) => handleEvents.getData(e)}
                              value={data.category.materialGold}
                            >
                              <option value="18k">18k</option>
                              <option value="22k">22k</option>
                              <option value="24k">24k</option>
                            </select>
                          </>
                        )}
                      </li>
                      <li className="form__item">
                        <p>Giới tính:</p>
                        <select
                          id="gender"
                          className="gender"
                          onChange={(e) => handleEvents.getData(e)}
                          value={data.gender}
                        >
                          <option value="Nam">Nam</option>
                          <option value="Nữ">Nữ</option>
                          <option value="Unisex">Unisex</option>
                        </select>
                      </li>
                      <li className="form__item">
                        <p>Sản phẩm couple:</p>
                        <select
                          id="couple"
                          className="isCouple"
                          onChange={(e) => handleEvents.getData(e)}
                          value={data.isCouple}
                        >
                          <option value={true}>Có</option>
                          <option value={false}>Không</option>
                        </select>
                      </li>
                      <li className="form__item form__item__type__gifts">
                        <p>Loại quà tặng: </p>

                        {dataInput.map(
                          (e, id) =>
                            e.type === "gift" && (
                              <React.Fragment key={id}>
                                <label htmlFor={e.title + id}>{e.title}</label>
                                <input
                                  onChange={(e) => handleEvents.getData(e)}
                                  className="gift"
                                  id={e.title + id}
                                  type="checkbox"
                                  value={e.value}
                                  checked={data.gift.includes(e.value)}
                                  disabled={data.disableGift}
                                ></input>
                              </React.Fragment>
                            )
                        )}
                        <label htmlFor="form__add__noGift">
                          Không phải là quà tặng
                        </label>
                        <input
                          defaultChecked
                          className="gift"
                          id="form__add__noGift"
                          type="checkbox"
                          value={""}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setData({
                                ...data,
                                gift: [],
                                disableGift: e.target.checked,
                              });
                            } else {
                              setData({
                                ...data,
                                disableGift: e.target.checked,
                              });
                            }
                          }}
                        ></input>
                      </li>
                      <li className="form__item form__item__type__colors">
                        <p>Màu sắc:</p>
                        {dataInput.map(
                          (e, id) =>
                            e.type === "color" && (
                              <React.Fragment key={id}>
                                <label htmlFor={e.title + id}>{e.title}</label>
                                <input
                                  onChange={(e) => handleEvents.getData(e)}
                                  className="color"
                                  id={e.title + id}
                                  type="checkbox"
                                  value={e.value}
                                  checked={data.color.includes(e.value)}
                                ></input>
                              </React.Fragment>
                            )
                        )}
                      </li>{" "}
                      <li className="form__item ">
                        <input
                          onChange={(e) => handleEvents.getData(e)}
                          value={data.price}
                          type="number"
                          placeholder="Giá (VND)"
                          maxLength="20"
                          min="1000"
                          className="price"
                        />
                      </li>
                      <li className="form__item">
                        <textarea
                          onChange={(e) => handleEvents.getData(e)}
                          value={data.description}
                          type="text"
                          className="description"
                          placeholder="Mô tả chi tiết sản phẩm"
                        />
                      </li>
                    </FormAdd>
                    <ToastContainer autoClose={2000} />
                  </Modal>
                ) : (
                  ""
                )}

                {/* =============end add product ================== */}

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
                    {products
                      .filter((val) => {
                        if (searchItem === "") {
                          return val;
                        } else if (
                          val.name
                            .toLowerCase()
                            .includes(searchItem.toLowerCase())
                        ) {
                          return val;
                        }
                        return true;
                      })
                      .map((e, id) => (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>
                            <img src={e.imgsUrl[0]} alt="" />
                          </td>
                          <td>{e.name}</td>
                          <td>{numberWithCommas(e.price)}</td>
                          <td>{e.date}</td>
                          <td>
                            <i
                              className="bx bx-edit-alt"
                              onClick={() => setIsActiveForm(true)}
                            ></i>
                          </td>
                          <td>
                            <i
                              className="bx bx-trash"
                              onClick={() => {
                                deleteProducts(e._id);
                                notifyDel();
                              }}
                            ></i>
                            <ToastContainer autoClose={1000} />
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
