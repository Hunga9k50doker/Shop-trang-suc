/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useContext,
} from "react";
import { Link, useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { ProductContext } from "../../provider/context/ProductContext";
import { to_slug, numberWithCommas } from "../../utils/utils";
import { CardItem } from "./CardItem";

const Item = ({ e, props, loading }) => {
  return (
    <div
      className={`col pe-0  ${
        props.classNameCol ? props.classNameCol : "col-xl-4 col-md-6 "
      } col-sm-12 col-12`}
    >
      <Link style={{ width: "100%" }} to={`/chi-tiet/${to_slug(e.name)}`}>
        {loading === true ? (
          <Skeleton height="300px"></Skeleton>
        ) : (
          <CardItem item={e} />
        )}
      </Link>
    </div>
  );
};
const InfinityList = ({ props, path }) => {
  const {
    productState: { products, loading },
  } = useContext(ProductContext);
  const [filterProduct, setFilterProduct] = useState(products);
  const perLoad = props.amount; // items each load
  const location = useLocation();
  const listRef = useRef(null);

  const [data, setData] = useState(products);

  const [load, setLoad] = useState(true);

  const [index, setIndex] = useState(0);

  let [typeData, setTypeData] = useState(location.pathname.split("/").at(-2));

  const newFilterProduct = (type) => {
    switch (type) {
      case "Nhẫn":
        setData(products.filter((p) => p.category.jewel_type === "Nhẫn"));
        break;
      case "Nhẫn Cặp":
        setData(
          products.filter(
            (p) => p.isCouple === true && p.category.jewel_type === "Nhẫn"
          )
        );
        break;
      case "Lắc":
        setData(products.filter((p) => p.category.jewel_type === "Lắc"));
        break;
      case "Bông tai":
        setData(products.filter((p) => p.category.jewel_type === "Bông tai"));
        break;
      case "Vòng tay":
        setData(products.filter((p) => p.category.jewel_type === "Vòng tay"));
        break;
      case "Dây cổ":
        setData(products.filter((p) => p.category.jewel_type === "Dây cổ"));
        break;
      case "Kim cương":
        setData(products.filter((p) => p.category.jewel_line === "Kim cương"));
        break;
      case "Ecz-cz":
        setData(products.filter((p) => p.category.jewel_line === "Ecz-cz"));
        break;
      case "Không đính đá":
        setData(
          products.filter((p) => p.category.jewel_line === "Không đính đá")
        );
        break;
      case "24k":
        setData(
          products.filter((p) =>
            p.category.materialGold.find((e) => e === "24k")
          )
        );
        break;
      case "22k":
        setData(
          products.filter((p) =>
            p.category.materialGold.find((e) => e === "22k")
          )
        );
        break;
      case "18k":
        setData(
          products.filter((p) =>
            p.category.materialGold.find((e) => e === "18k")
          )
        );
        break;
      case "Gucci":
        setData(products.filter((p) => p.category.brand === "Gucci"));
        break;
      case "Casio":
        setData(products.filter((p) => p.category.brand === "Casio"));
        break;
      case "Citizen":
        setData(products.filter((p) => p.category.brand === "Citizen"));
        break;
      case "Nam":
        setData(products.filter((p) => p.gender === "Nam"));
        break;
      case "Nữ":
        setData(products.filter((p) => p.gender === "Nữ"));
        break;
      case "Unisex":
        setData(products.filter((p) => p.gender === "Unisex"));
        break;
      case "Đồng hồ":
        setData(products.filter((p) => p.type === "Đồng hồ"));
        break;
      case "Mắt Kính":
        setData(
          products.filter((p) => p.category.accessory_type === "Mắt Kính")
        );
        break;
      case "Đồng hồ cặp":
        setData(
          products.filter((p) => p.type === "Đồng hồ" && p.isCouple === true)
        );
        break;
      case "Phụ kiện":
        setData(products.filter((p) => p.type === "Phụ kiện"));
        break;
      case "Cho cha":
        setData(products.filter((p) => p.gift.find((e) => e === "Cho cha")));
        break;
      case "Cho mẹ":
        setData(products.filter((p) => p.gift.find((e) => e === "Cho mẹ")));
        break;
      case "Cho chàng":
        setData(products.filter((p) => p.gift.find((e) => e === "Cho chàng")));
        break;
      case "Cho nàng":
        setData(products.filter((p) => p.gift.find((e) => e === "Cho nàng")));
        break;
      case "Cho bé":
        setData(products.filter((p) => p.gift.find((e) => e === "Cho bé")));
        break;
      default:
        return setData(products);
    }
  };
  useEffect(() => {
    newFilterProduct(typeData);
  }, [typeData]);
  const handleFilter = () => {
    if (path === "/trang-suc/nhan/") {
      typeData = "Nhẫn";
    } else if (path === "/trang-suc/nhan-cap/") {
      typeData = "Nhẫn Cặp";
    } else if (path === "/trang-suc/lac/") {
      typeData = "Lắc";
    } else if (path === "/trang-suc/bong-tai/") {
      typeData = "Bông tai";
    } else if (path === "/trang-suc/vong-tay/") {
      typeData = "Vòng tay";
    } else if (path === "/trang-suc/day-co/") {
      typeData = "Dây cổ";
    } else if (path === "/trang-suc/kim-cuong/") {
      typeData = "Kim cương";
    } else if (path === "/trang-suc/ecz-cz/") {
      typeData = "Ecz-cz";
    } else if (path === "/trang-suc/khong-dinh-da/") {
      typeData = "Không đính đá";
    } else if (path === "/trang-suc/24k/") {
      typeData = "24k";
    } else if (path === "/trang-suc/22k/") {
      typeData = "22k";
    } else if (path === "/trang-suc/18k/") {
      typeData = "18k";
    } else if (path === "/dong-ho/gucci/") {
      typeData = "Gucci";
    } else if (path === "/dong-ho/citizen/") {
      typeData = "Citizen";
    } else if (path === "/dong-ho/casio/") {
      typeData = "Casio";
    } else if (path === "/dong-ho/nam/") {
      typeData = "Nam";
    } else if (path === "/dong-ho/nu/") {
      typeData = "Nữ";
    } else if (path === "/dong-ho/unisex/") {
      typeData = "Unisex";
    } else if (path === "/dong-ho/dong-ho/") {
      typeData = "Đồng hồ";
    } else if (path === "/trang-suc/mat-kinh/") {
      typeData = "Mắt kính";
    } else if (path === "/trang-suc/dong-ho-cap/") {
      typeData = "Đồng hồ cặp";
    } else if (path === "/trang-suc/phu-kien/") {
      typeData = "Phụ kiện";
    } else if (path === "/qua-tang/cho-cha/") {
      typeData = "Cho cha";
    } else if (path === "/qua-tang/cho-me/") {
      typeData = "Cho mẹ";
    } else if (path === "/qua-tang/cho-chang/") {
      typeData = "Cho chàng";
    } else if (path === "/qua-tang/cho-nang/") {
      typeData = "Cho nàng";
    } else if (path === "/qua-tang/cho-be/") {
      typeData = "Cho bé";
    } else {
      path = "/";
      typeData = "auto";
    }
    newFilterProduct(typeData);
    // console.log(data);
  };

  useLayoutEffect(() => {
    handleFilter();
  }, [path]);
  // console.log(typeData);

  useEffect(() => {
    if (products.length > 0) {
      setData(props.data.slice(0, perLoad));
      setIndex(1);
    }
  }, [props.data]);

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (listRef && listRef.current) {
        if (
          window.scrollY + window.innerHeight >=
          listRef.current.clientHeight + listRef.current.offsetTop + 200
        ) {
          setLoad(true);
        }
      }
    });
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(props.data.length / perLoad);
      const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1;

      if (load && index <= maxIndex) {
        setIndex(index + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, index, data, props.data]);

  return (
    <div className="row" ref={listRef}>
      {loading === false &&
        data.map((e, id) => {
          return <Item key={id} e={e} props={props} loading={loading} />;
        })}
    </div>
  );
};
export default InfinityList;
