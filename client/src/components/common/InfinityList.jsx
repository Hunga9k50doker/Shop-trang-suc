/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useContext,
} from "react";
import { Link } from "react-router-dom";
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

  const listRef = useRef(null);

  const [data, setData] = useState(products);

  const [load, setLoad] = useState(true);

  const [index, setIndex] = useState(0);

  let [typeData, setTypeData] = useState("");

  const newFilterProduct = (type) => {
    switch (type) {
      case "24k":
        setData(
          products.filter((p) => p.category.materialGold.includes("24k"))
        );
        console.log(data);
        break;
      case "22k":
        setData(
          products.filter((p) => p.category.materialGold.includes("22k"))
        );
        console.log(data);
        break;
      case "18k":
        setData(
          products.filter((p) => p.category.materialGold.includes("18k"))
        );
        console.log(data);
        break;
      default:
        return setData(products);
    }
  };
  const handleFilter = () => {
    if (path === "/trang-suc/nhan/") {
      typeData = "Nhẫn";
    } else if (path === "/trang-suc/nhan-cap/") {
      typeData = "Nhẫn Cặp";
    } else if (path === "/trang-suc/lac/") {
      typeData = "Lắc";
      // data = data.filter((e) => e.category.jewel_type === "Nhẫn");
    } else if (path === "/trang-suc/bong-tai/") {
      typeData = "Bông tai";
    } else if (path === "/trang-suc/vong-tay/") {
      typeData = "Vòng tay";
    } else if (path === "/trag-suc/day-co/") {
      typeData = "Dây cổ";
    } else if (path === "/trang-suc/kim-cuong/") {
      typeData = "Kim cương";
    } else if (path === "/trang-suc/ecz-cz/") {
      typeData = "Ecz-cz";
    } else if (path === "/trang-suc/khong-dinh-da/") {
      typeData = "Không đính đá";
    } else if (path === "/trang-suc/24k/") {
      setData(products.filter((p) => p.category.materialGold.includes("24k")));
      console.log(data);
    } else if (path === "/trang-suc/22k/") {
      newFilterProduct("22k");
    } else if (path === "/trang-suc/18k/") {
      newFilterProduct("18k");
    } else {
      path = "/";
      typeData = "auto";
    }
    // setTypeData(data);
    console.log(data);
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
        // const start = perLoad * index;
        // const end = start + perLoad;

        // setData(data.concat(props.data.slice(start, end)));
        setIndex(index + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, index, data, props.data]);

  // console.log(products);

  // useEffect(() => {
  //   if (typeData === "24k" || typeData === "22k" || typeData === "18k") {
  //     const newFilterProduct = filterProduct.filter((p) =>
  //       p.category.materialGold.includes(typeData)
  //     );
  //     setFilterProduct(newFilterProduct);
  //   }
  // }, [typeData]);
  // console.log(filterProduct);
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
