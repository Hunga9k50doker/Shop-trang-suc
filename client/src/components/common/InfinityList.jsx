/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { ProductContext } from "../../provider/context/ProductContext";
import { to_slug } from "../../utils/utils";
import { CardItem } from "./CardItem";

const InfinityList = (props) => {
  const {
    productState: { products, loading },
  } = useContext(ProductContext);
  // console.log(products);
  const perLoad = props.amount; // items each load

  const listRef = useRef(null);

  const [data, setData] = useState([]);

  const [load, setLoad] = useState(true);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setData(props.data.slice(0, perLoad));
    setIndex(1);
  }, [props.data]);

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
        const start = perLoad * index;
        const end = start + perLoad;

        setData(data.concat(props.data.slice(start, end)));
        setIndex(index + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, index, data, props.data]);

  return (
    <div className="row" ref={listRef}>
      {loading === false &&
        data.map((e, id) => (
          <div
            key={id}
            className={`col pe-0 col-sm-12 ${
              props.classNameCol ? props.classNameCol : "col-xl-4 col-md-6 "
            }`}
          >
            <Link
              style={{ width: "100%" }}
              to={`/chi-tiet/${to_slug(e.title)}`}
            >
              {loading === true ? (
                <Skeleton height="300px"></Skeleton>
              ) : (
                <CardItem item={e} />
              )}
            </Link>
          </div>
        ))}
    </div>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;
