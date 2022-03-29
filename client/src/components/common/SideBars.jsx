/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useMemo } from "react";
import { NavLink, Link } from "react-router-dom";
import { Filter } from "./Filter";
import Accordion from "./Accordion";
import Button from "./Button";
import CheckBox from "./CheckBox";
import { sortLowToHigh, sortHighToLow } from "../../utils/utils";
import InfinityList from "./InfinityList";
import arrPro from "../../assets/fake-data/Product";
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
      { title: "Casio", path: "/dong-ho/casio" },
    ],
  },
  {
    title: "Quà tặng",
    subtitle: [
      { title: "Cho chàng", path: "/qua-tang/cho-chang/" },
      { title: "Cho nàng", path: "/qua-tang/cho-chang/" },
      { title: "Cho cha", path: "/qua-tang/cho-chang/" },
      { title: "Cho mẹ", path: "/qua-tang/cho-chang/" },
      { title: "Cho bé", path: "/qua-tang/cho-chang/" },
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
  colors: [
    { color: "Vàng", display: "Vàng" },
    { color: "Trắng", display: "Trắng" },
    { color: "Hồng", display: "Hồng" },
    { color: "Vàng Trắng", display: "Vàng + Trắng" },
    { color: "Hồng Trắng", display: "Hồng + Trắng" },
    { color: "Hồng Vàng", display: "Hồng + Vàng" },
  ],
  materials: [
    { material: "Vàng", display: "Vàng" },
    { material: "Bạc", display: "Bạc" },
    { material: "Hợp kim cao cấp", display: "Hợp kim cao cấp" },
    { material: "Platinum", display: "Platinum" },
  ],
  material_golds: [
    { material_gold: "24k", display: "24K" },
    { material_gold: "22k", display: "22K" },
    { material_gold: "18k", display: "18K" },
  ],
  sexs: [
    { sex: "Nam", display: "Nam" },
    { sex: "Nữ", display: "Nữ" },
    { sex: "Unisex", display: "Unisex" },
  ],
};
const SideBarLeftAdmin = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__left__admin">
        {/* <Link to="/">
        </Link> */}
        <i className="header__icon bx bxs-category-alt mt-5 mb-5"></i>
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
        <Link to={"/"} title="Đăng xuất" className="sidebar__item__logout p-4">
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
const SideBarFilter = () => {
  const initFilter = {
    // category: [],
    color: [],
    material: [],
    material_gold: [],
    sex: [],
  };
  const [productList, setProductList] = useState(arrPro);
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
        case "MATERIAL_GOLD":
          setFilter({
            ...filter,
            material_gold: [...filter.material_gold, item.material_gold],
          });
          break;
        case "SEX":
          setFilter({ ...filter, sex: [...filter.sex, item.sex] });
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
        case "MATERIAL_GOLD":
          const newMaterial_Gold = filter.material_gold.filter(
            (e) => e !== item.material_gold
          );
          setFilter({ ...filter, material_gold: newMaterial_Gold });
          break;
        case "SEX":
          const newSex = filter.sex.filter((e) => e !== item.sex);
          setFilter({ ...filter, sex: newSex });
          break;
        default:
      }
    }
  };
  const filterSort = (value) => {
    switch (value) {
      case 0:
        break;
      case 1:
        sortLowToHigh(productList);
        break;
      case 2:
        sortHighToLow(productList);
        break;
      default:
    }
  };
  const clearFilter = () => setFilter(initFilter);
  const updateProducts = useCallback(() => {
    let temp = arrPro;
    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }
    if (filter.material.length > 0) {
      temp = temp.filter((e) => {
        const check = e.materials.find((material) =>
          filter.material.includes(material)
        );
        return check !== undefined;
      });
    }
    if (filter.material_gold.length > 0) {
      temp = temp.filter((e) => {
        const check = e.material_golds.find((materialGold) =>
          filter.material_gold.includes(materialGold)
        );
        return check !== undefined;
      });
    }
    if (filter.sex.length > 0) {
      temp = temp.filter((e) => {
        const check = e.sexs.find((sex) => filter.sex.includes(sex));
        return check !== undefined;
      });
    }

    setProductList(temp);
  }, [filter, arrPro]);
  useMemo(() => {
    updateProducts();
  }, [updateProducts]);

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
                {dataFilter.materials.map((e, index) => (
                  <li key={index} className="filter__item">
                    <CheckBox
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
                {dataFilter.material_golds.map((e, index) => (
                  <li key={index} className="filter__item">
                    <CheckBox
                      label={e.display}
                      onChange={(input) =>
                        filterSelect("MATERIAL_GOLD", input.checked, e)
                      }
                      checked={filter.material_gold.includes(e.material_gold)}
                    />
                  </li>
                ))}
              </Filter>
            </div>
            <div className="row ">
              <Filter title="Lọc theo giới tính">
                {dataFilter.sexs.map((e, index) => (
                  <li key={index} className="filter__item">
                    <CheckBox
                      label={e.display}
                      onChange={(input) =>
                        filterSelect("SEX", input.checked, e)
                      }
                      checked={filter.sex.includes(e.sex)}
                    />
                  </li>
                ))}
              </Filter>
            </div>
            <div className="row ">
              <Filter title="Lọc theo màu chất liệu">
                {dataFilter.colors.map((e, index) => (
                  <li key={index} className="filter__item">
                    <CheckBox
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
                <option value="0">Mới cập nhật (mặc định)</option>
                <option value="1">Giá từ thấp tới cao</option>
                <option value="2">Giá từ cao tới thấp</option>
              </select>
            </div>
          </div>
          <InfinityList data={productList} />
          {/* {productList.map((e, id) => (
              <div key={id} className="col col-xl-4 col-md-6 col-sm-12">
                <Link to={`/chi-tiet/${to_slug(e.title)}`}>
                  <CardItem img={e.img} title={e.title} price={e.price} />
                </Link>
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
};
export { SideBarLeftAdmin, SideBarRightAdmin, SideBarFilter };
