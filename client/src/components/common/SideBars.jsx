/* eslint-disable react-hooks/exhaustive-deps */
import {
  useState,
  useCallback,
  useMemo,
  useContext,
  useEffect,
  useRef,
} from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import { Filter } from "./Filter";
import Accordion from "./Accordion";
import Button from "./Button";
import CheckBox from "./CheckBox";
import { sortLowToHigh, sortHighToLow } from "../../utils/utils";
import InfinityList from "./InfinityList";
import { logo } from "../../assets/img";
import { AuthContext } from "../../provider/context/AuthContext";
import { ProductContext } from "../../provider/context/ProductContext";

const arrItemAdmin = [
  {
    title: "Trang Chủ",
    link: "/admin/",
    icon: "bx bx-home-alt",
  },
  {
    title: "Đơn đặt hàng",
    link: "/admin/don-dat-hang/",
    icon: "bx bxs-news",
  },
  {
    title: "Sản phẩm",
    link: "/admin/san-pham/",
    icon: "bx bx-cube-alt bx-rotate-90",
  },
  {
    title: "Khách hàng",
    link: "/admin/khach-hang/",
    icon: "bx bx-user",
  },
  {
    title: "Trạng thái",
    link: "/admin/trang-thai/",
    icon: "bx bx-line-chart-down bx-rotate-270",
  },
  {
    title: "Cài đặt",
    link: "/admin/cai-dat/",
    icon: "bx bx-cog",
  },
];
const arrAccodion = [
  {
    title: "Trang sức",
    subtitle: [
      {
        title: "Kim cương",
        path: "/trang-suc/kim-cuong/",
      },
      {
        title: "Ecz-cz",
        path: "/trang-suc/ecz-cz/",
      },
      { title: "Không đính đá", path: "/trang-suc/khong-dinh-da/" },
    ],
  },
  {
    title: "Đồng hồ",
    subtitle: [
      { title: "Gucci", path: "/dong-ho/gucci/" },
      { title: "Citizen", path: "/dong-ho/citizen/" },
      { title: "Casio", path: "/dong-ho/casio/" },
    ],
  },
  {
    title: "Quà tặng",
    subtitle: [
      { title: "Cho chàng", path: "/qua-tang/cho-chang/" },
      { title: "Cho nàng", path: "/qua-tang/cho-nang/" },
      { title: "Cho cha", path: "/qua-tang/cho-cha/" },
      { title: "Cho mẹ", path: "/qua-tang/cho-me/" },
      { title: "Cho bé", path: "/qua-tang/cho-be/" },
    ],
  },
];
const DataOverall = [
  {
    title: "Đơn đặt hàng",
    count: 300,
    icon: "bx bxs-news",
  },
  {
    title: "Khách hàng",
    count: 9.876,
    icon: "bx bx-user",
  },
  {
    title: "Sản phẩm",
    count: 1.234,

    icon: "bx bx-cube-alt bx-rotate-90",
  },

  {
    title: "Doanh thu",
    count: "56784",
    icon: "bx bx-dollar",
  },
];
const dataFilter = {
  color: [
    { color: "Vàng", display: "Vàng" },
    { color: "Trắng", display: "Trắng" },
    { color: "Hồng", display: "Hồng" },
    { color: "Vàng Trắng", display: "Vàng + Trắng" },
    { color: "Hồng Trắng", display: "Hồng + Trắng" },
    { color: "Hồng Vàng", display: "Hồng + Vàng" },
  ],
  material: [
    { material: "Vàng", display: "Vàng" },
    { material: "Bạc", display: "Bạc" },
    { material: "Hợp kim cao cấp", display: "Hợp kim cao cấp" },
    { material: "Platinum", display: "Platinum" },
  ],
  materialGold: [
    { materialGold: "24k", display: "24K" },
    { materialGold: "22k", display: "22K" },
    { materialGold: "18k", display: "18K" },
  ],
  gender: [
    { gender: "Nam", display: "Nam" },
    { gender: "Nữ", display: "Nữ" },
    { gender: "Unisex", display: "Unisex" },
  ],
};
const SideBarLeftAdmin = () => {
  const [active, setActive] = useState(false);
  const showRef = useRef(null);
  const sidebarRef = useRef(null);

  const { logout } = useContext(AuthContext);
  const handleShow = () => {
    if (active) {
      showRef.current.style.transform = "rotate(0deg)";
      sidebarRef.current.style.transform = "translateX(-100%)";
      sidebarRef.current.style.transition = "all 0.3s linear";
    } else {
      showRef.current.style.transform = "rotate(180deg)";
      sidebarRef.current.style.transform = "translateX(0%)";
      sidebarRef.current.style.transition = "all 0.3s linear";
    }
  };
  return (
    <div className="sidebar">
      <div
        ref={sidebarRef}
        className={`sidebar__left__admin ${active ? "active" : ""}`}
      >
        <i
          className="bx bxs-chevron-right show__menu__table__mobile"
          ref={showRef}
          onClick={() => {
            setActive(!active);
            handleShow();
          }}
        ></i>

        <Link
          to="/"
          className="mt-5 mb-4"
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {logo ? (
            <img
              src={logo}
              alt=""
              style={{
                transform: "scale(0.5)",
                width: window.screen > 768 ? "" : "300px",
              }}
            />
          ) : (
            <i className="header__icon bx bxs-category-alt mt-5 mb-4"></i>
          )}
        </Link>
        <ul className="sidebar__list pe-0">
          {arrItemAdmin.map((e, id) => (
            <li key={id} className="sidebar__item slidebar__left__item pe-0">
              <NavLink
                className={({ isActive }) =>
                  isActive ? " selected  p-2 pe-0" : "  p-2 pe-0"
                }
                to={e.link}
              >
                <p className="sidebar__item__icon">
                  <i className={e.icon}></i>
                </p>
                <h6 className="m-0 sidebar__item__title">{e.title}</h6>
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          onClick={logout}
          to={"/"}
          title="Đăng xuất"
          className="sidebar__item__logout p-4"
        >
          <i className="bx bx-log-out-circle m-2"></i>
          Đăng xuất
        </Link>
      </div>
    </div>
  );
};
const SideBarRightAdmin = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__right__admin  pb-4 ">
        <div className="sidebar__right__item  ps-4 pt-4 pe-4">
          <h5 className="sidebar__item__title">Tổng quan</h5>
          <ul className="item__list">
            {DataOverall.map((e, id) => (
              <li className="item" key={id}>
                <i className={`item__icon me-4 ${e.icon}`}></i>
                <h5 className="item__body">
                  <p className="item__body__title">{e.count}K</p>
                  <p className="item__body__subtitle">{e.title}</p>
                </h5>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__right__item ps-4 pt-4 pe-4">
          <h5 className="sidebar__item__title">Doanh thu từ các kênh</h5>
          <ul className="item__list">
            <li className="item">
              <h5 className="item__body">
                <p className="item__body__title">Đường liên kết</p>
                <p className="item__body__percent">70%</p>
              </h5>
              <p className="progress">
                <span className="progess__percent"></span>
              </p>
            </li>
            <li className="item">
              {" "}
              <h5 className="item__body">
                <p className="item__body__title">Tìm kiếm bên ngoài</p>
                <p className="item__body__percent">40%</p>
              </h5>
              <p className="progress">
                <span className="progess__percent"></span>
              </p>
            </li>
            <li className="item">
              <h5 className="item__body">
                <p className="item__body__title">Giới thiệu</p>
                <p className="item__body__percent">60%</p>
              </h5>
              <p className="progress">
                <span className="progess__percent"></span>
              </p>
            </li>{" "}
            <li className="item">
              {" "}
              <h5 className="item__body">
                <p className="item__body__title">Mạng xã hội</p>
                <p className="item__body__percent">30%</p>
              </h5>
              <p className="progress">
                <span className="progess__percent"></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const SideBarFilter = ({ typeData, path }) => {
  const {
    productState: { products },
  } = useContext(ProductContext);
  const initFilter = {
    // category: [],
    color: [],
    material: [],
    materialGold: [],
    gender: "",
  };
  const [productList, setProductList] = useState(products);
  const [filter, setFilter] = useState(initFilter);
  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case "MATERIAL":
          setFilter({
            ...filter,
            material: [...filter.material, item.material],
          });
          break;
        case "MATERIALGOLD":
          setFilter({
            ...filter,
            materialGold: [...filter.materialGold, item.materialGold],
          });
          break;
        case "GENDER":
          setFilter({ ...filter, gender: [...filter.gender, item.gender] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "MATERIAL":
          const newMaterial = filter.material.filter(
            (e) => e !== item.material
          );
          setFilter({ ...filter, material: newMaterial });
          break;
        case "MATERIALGOLD":
          const newMaterialGold = filter.materialGold.filter(
            (e) => e !== item.materialGold
          );
          setFilter({ ...filter, materialGold: newMaterialGold });
          break;
        case "GENDER":
          const newGender = filter.gender.filter((e) => e !== item.gender);
          setFilter({ ...filter, gender: newGender });
          break;
        case "SORT_LOWTOHIGH":
          setFilter({ ...filter, sortMethod: "LOWTOHIGH" });

          break;
        case "SORT_HIGHTOLOW":
          setFilter({ ...filter, sortMethod: "HIGHTOLOW" });
          break;
        case "SORT_DEFAULT":
          setFilter({ ...filter, sortMethod: null });
          break;
        default:
      }
    }
  };
  const filterSort = (value) => {
    if (value === "1") {
      setFilter({ ...filter, sortMethod: "LOWTOHIGH" });
    } else if (value === "2") {
      setFilter({ ...filter, sortMethod: "HIGHTOLOW" });
    } else {
      setFilter({ ...filter, sortMethod: null });
    }
  };
  const clearFilter = () => setFilter(initFilter);
  const updateProducts = useCallback(() => {
    let temp = products;
    if (filter.sortMethod !== null) {
      if (filter.sortMethod === "LOWTOHIGH") {
        temp = temp
          .sort((a, b) => a.price - b.price)
          .filter((e) => {
            if (true) {
              return e;
            }
          });
      } else {
        temp = temp
          .sort((a, b) => b.price - a.price)
          .filter((e) => {
            if (true) {
              return e;
            }
          });
      }
    }
    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.color.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }
    if (filter.material.length > 0) {
      temp = temp.filter((e) => {
        if (e.category.material) {
          const check = e.category.material.find((material) =>
            filter.material.includes(material)
          );
          return check !== undefined;
        }
        return true;
      });
    }
    if (filter.materialGold.length > 0) {
      temp = temp.filter((e) => {
        if (e.category.materialGold.length > 0) {
          const check = e.category.materialGold.find((materialGold) =>
            filter.materialGold.includes(materialGold)
          );
          return check !== undefined;
        }
        return true;
      });
    }
    if (filter.gender.length > 0) {
      temp = temp.filter((e) => {
        const arrGender = Array.of(e.gender);
        const check = arrGender.find((gender) =>
          filter.gender.includes(gender)
        );
        return check !== undefined;
      });
    }
    setProductList(temp);
  }, [filter, products]);
  useMemo(() => {
    updateProducts();
  }, [updateProducts]);
  let item = {
    data: productList,
    amount: 12,
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col col-xl-3 col-md-3 col-sm-12">
          <div className="sidebar__right__filter">
            {/* {console.log(productList)} */}
            {/* {console.log(filter)} */}

            <div className="row row__header">
              <Filter title="Danh mục sản phẩm">
                {arrAccodion.map((acc, i) => (
                  <li key={i} className="filter__item filter__item__product">
                    <Accordion title={acc.title}>
                      {acc.subtitle.map((sub, index) => (
                        <Link to={sub.path} key={index}>
                          <p className="content__item"> {sub.title} </p>
                        </Link>
                      ))}
                    </Accordion>
                  </li>
                ))}
              </Filter>
            </div>
            <div className="row ">
              <Filter title="Lọc theo chất liệu">
                {dataFilter.material.map((e, index) => (
                  <li key={index} className="filter__item">
                    <CheckBox
                      typeInput={"checkbox"}
                      label={e.display}
                      onChange={(input) =>
                        filterSelect("MATERIAL", input.checked, e)
                      }
                      checked={filter.material.includes(e.material)}
                    />
                  </li>
                ))}
              </Filter>
            </div>
            <div className="row ">
              <Filter title="Lọc theo chất liệu vàng">
                {dataFilter.materialGold.map((e, index) => (
                  <li key={index} className="filter__item">
                    <CheckBox
                      typeInput={"checkbox"}
                      label={e.display}
                      onChange={(input) =>
                        filterSelect("MATERIALGOLD", input.checked, e)
                      }
                      checked={filter.materialGold.includes(e.materialGold)}
                    />
                  </li>
                ))}
              </Filter>
            </div>
            <div className="row ">
              <Filter title="Lọc theo giới tính">
                {dataFilter.gender.map((e, index) => (
                  <li key={index} className="filter__item">
                    <CheckBox
                      typeInput={"checkbox"}
                      label={e.display}
                      onChange={(input) =>
                        filterSelect("GENDER", input.checked, e)
                      }
                      checked={filter.gender.includes(e.gender)}
                    />
                  </li>
                ))}
              </Filter>
            </div>
            <div className="row ">
              <Filter title="Lọc theo màu chất liệu">
                {dataFilter.color.map((e, index) => (
                  <li key={index} className="filter__item">
                    <CheckBox
                      typeInput={"checkbox"}
                      label={e.display}
                      onChange={(input) =>
                        filterSelect("COLOR", input.checked, e)
                      }
                      checked={filter.color.includes(e.color)}
                    />
                  </li>
                ))}
              </Filter>
            </div>
            <div className="row">
              <div className="col-6 ">
                <Button
                  onClick={clearFilter}
                  content="Xóa bộ lọc"
                  classNameBtn="delete__filter mt-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col col-xl-9 col-md-9 col-sm-12">
          <div className="row">
            <div className="sort">
              <select onChange={(e) => filterSort(e.target.value)}>
                <option value={0}>Mới cập nhật (mặc định)</option>
                <option value={1}>Giá từ cao tới thấp</option>
                <option value={2}>Giá từ thấp đến cao</option>
              </select>
            </div>
          </div>
          <InfinityList path={path} typeData={typeData} props={item} />
        </div>
      </div>
    </div>
  );
};
export { SideBarLeftAdmin, SideBarRightAdmin, SideBarFilter };
