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
import { to_slug } from "../../utils/utils";
import { CardItem } from "./CardItem";

const Item = ({ e, props, loading }) => {
  return (
    <div
      data-aos="zoom-in"
      className={`col pe-0  ${
        props.classNameCol ? props.classNameCol : "col-xl-4 col-md-6 "
      } col-sm-12 col-12`}
    >
      <Link style={{ width: "100%" }} to={`/chi-tiet/${to_slug(e._id)}`}>
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
  const [filterProduct, setFilterProduct] = useState(
    props.data ? props.data : products
  );
  const perLoad = props.amount; // items each load
  const location = useLocation();
  const listRef = useRef(null);

  const [data, setData] = useState(products);
  useEffect(() => {
    setData(props.data ? props.data : products);
  }, [props.data]);
  const [load, setLoad] = useState(true);

  const [index, setIndex] = useState(0);

  let [typeData, setTypeData] = useState(location.pathname.split("/").at(-2));
  const newFilterProduct = (type) => {
    switch (type) {
      case "Nhẫn":
      case "nhan":
        setData(products.filter((p) => p.category.jewel_type === "Nhẫn"));
        break;
      case "Nhẫn Cặp":
      case "nhan-cap":
        setData(
          products.filter(
            (p) => p.isCouple === true && p.category.jewel_type === "Nhẫn"
          )
        );
        break;
      case "Lắc":
      case "lac":
        setData(products.filter((p) => p.category.jewel_type === "Lắc"));
        break;
      case "Bông tai":
      case "bong-tai":
        setData(products.filter((p) => p.category.jewel_type === "Bông tai"));
        break;
      case "Vòng tay":
      case "vong-tay":
        setData(products.filter((p) => p.category.jewel_type === "Vòng tay"));
        break;
      case "Dây cổ":
      case "day-co":
        setData(products.filter((p) => p.category.jewel_type === "Dây cổ"));
        break;
      case "Kim cương":
      case "kim-cuong":
        setData(products.filter((p) => p.category.jewel_line === "Kim cương"));
        break;
      case "Ecz-cz":
      case "ecz-cz":
        setData(products.filter((p) => p.category.jewel_line === "Ecz-cz"));
        break;
      case "Không đính đá":
      case "khong-dinh-da":
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
      case "gucci":
        setData(products.filter((p) => p.category.brand === "Gucci"));
        break;
      case "Casio":
      case "casio":
        setData(products.filter((p) => p.category.brand === "Casio"));
        break;
      case "Citizen":
      case "citizen":
        setData(products.filter((p) => p.category.brand === "Citizen"));
        break;
      case "Nam":
      case "nam":
        setData(
          products.filter((p) => p.type === "Đồng hồ" && p.gender === "Nam")
        );

        break;
      case "Nữ":
      case "nu":
        setData(
          products.filter((p) => p.type === "Đồng hồ" && p.gender === "Nữ")
        );
        break;
      case "Unisex":
      case "unisex":
        setData(
          products.filter((p) => p.type === "Đồng hồ" && p.gender === "Unisex")
        );
        break;
      case "Đồng hồ":
      case "dong-ho":
        setData(products.filter((p) => p.type === "Đồng hồ"));
        break;
      case "Mắt kính":
      case "mat-kinh":
        setData(
          products.filter(
            (p) =>
              p.type === "Phụ kiện" && p.category.accessory_type === "Mắt kính"
          )
        );
        break;
      case "Đồng hồ cặp":
      case "dong-ho-cap":
        setData(
          products.filter((p) => p.type === "Đồng hồ" && p.isCouple === true)
        );
        break;
      case "Phụ kiện":
      case "phu-kien":
        setData(products.filter((p) => p.type === "Phụ kiện"));
        break;
      case "Cho cha":
      case "cho-cha":
        setData(products.filter((p) => p.gift.find((e) => e === "Cho cha")));
        break;
      case "Cho mẹ":
      case "cho-me":
        setData(products.filter((p) => p.gift.find((e) => e === "Cho mẹ")));
        break;
      case "Cho chàng":
      case "cho-chang":
        setData(products.filter((p) => p.gift.find((e) => e === "Cho chàng")));
        break;
      case "Cho nàng":
      case "cho-nang":
        setData(products.filter((p) => p.gift.find((e) => e === "Cho nàng")));
        break;
      case "Cho bé":
      case "cho-be":
        setData(products.filter((p) => p.gift.find((e) => e === "Cho bé")));
        break;
      default:
        return setData(products);
    }
  };

  useEffect(() => {
    newFilterProduct(typeData);
  }, [typeData, loading]);
  const handleFilter = () => {
    if (path === "/trang-suc/nhan/") {
      setTypeData("Nhẫn");
    } else if (path === "/trang-suc/nhan-cap/") {
      setTypeData("Nhẫn Cặp");
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
    } else if (path === "/dong-ho/mat-kinh/") {
      typeData = "Mắt kính";
    } else if (path === "/dong-ho/dong-ho-cap/") {
      typeData = "Đồng hồ cặp";
    } else if (path === "/dong-ho/phu-kien/") {
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
  };

  useLayoutEffect(() => {
    handleFilter();
  }, [path]);

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
  console.log(data);
  return (
    <div className="row" ref={listRef}>
      {loading === false && data.length > 0 ? (
        data
          .slice(0, perLoad)
          .reverse()
          .map((e, id) => {
            return <Item key={id} e={e} props={props} loading={loading} />;
          })
      ) : (
        <p style={{ marginTop: "8rem", textAlign: "center" }}>
          Không tìm thấy sản phẩm phù hợp
        </p>
      )}
    </div>
  );
};
export default InfinityList;
