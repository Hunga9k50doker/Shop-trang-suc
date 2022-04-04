import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import Helmet from "../components/common/Helmet";
import { Banner } from "../components/common/Banner";
import { CardItem } from "../components/common/CardItem";
import { FormContact } from "../components/common/Forms";
import { to_slug } from "../utils/utils";
import Button from "../components/common/Button";
import Pagination from "../components/common/Pagination";
import useQuery from "../hooks/useQuery";
//  ip data
import {
  banner_01,
  // banner_02,
  banner_sub_01,
  theme_01,
  theme_02,
  theme_03,
  theme_04,
} from "../assets/img";
import arrPro from "../assets/fake-data/Product";
export default function Home() {
  // const [products, setProducts] = useState(arrPro);
  // const [limit, setLimit] = useState(12);
  // const [page, setPage] = useState(1);

  // const { search } = useLocation();

  // const {  loading, error } = useQuery(
  //   `/san-pham?limit=${limit}&page=${page}`
  // );

  // useEffect(() => {
  //   if (arrPro.length) setProducts(products);
  // }, [products]);

  // const totalPages = useMemo(() => {
  //   if (!arrPro.length) return 0;
  //   return Math.ceil(arrPro.length / limit);
  // }, [arrPro.length]);

  // useEffect(() => {
  //   const page = new URLSearchParams(search).get("page") || 1;
  //   setPage(Number(page));
  // }, [search]);
  const [like, setLike] = useState(false);
  useEffect(() => {
    const hearts = document.querySelectorAll(".card__icon__like");
    console.log(hearts);
    hearts.forEach((element) => {
      element.addEventListener("click", (e) => setLike(!like));
    });
  }, [like]);
  const handleEvent = {
    handleLike: (e) => {
      e.preventDefault();
      // e.target.setLike(!like);
      e.target.addEventListener("click", () => {
        console.log((like) => like + 1);
        setLike(!like);
      });
    },
  };
  return (
    <Helmet title="Trang chủ">
      <div className="home">
        <Banner
          classNameSub="home__banner"
          img={banner_01}
          sologan="Giới thiệu"
          title="Màu sắc tưởng tượng"
          subtitle="Bộ sưu tập được hỗ trợ bởi Passion"
        >
          <div className="sub__img">
            <img src={banner_sub_01} alt="" />
          </div>
          <Link to={"/trang-suc/nhan/"}>
            <Button classNameBtn="btn__view__more" content="Xem thêm" />
          </Link>
        </Banner>
        <div className="container">
          <div className="row">
            <h2 className="home__title">
              Các sản phẩm
              <strong>&#160;nổi bật</strong>
            </h2>
            <div className="home__theme">
              <img src={theme_03} alt="" />
              <img src={theme_04} alt="" className="m-2" />
              <img src={theme_02} alt="" />
            </div>
          </div>

          <div className="row m-4">
            {arrPro.map(
              (e, id) =>
                arrPro.length > 0 && (
                  <div
                    key={id}
                    className="col col-xxl-3 col-xl-3 col-md-6 col-sm-12"
                  >
                    <Link to={`/chi-tiet/${to_slug(e.title)}`}>
                      <CardItem
                        like={like}
                        img={e.img}
                        title={e.title}
                        price={e.price}
                      />
                    </Link>
                  </div>
                )
            )}
            {/* {loading && <h2>Loading...</h2>}
          {error && <h2>{error}</h2>}
          <Pagination totalPages={totalPages} page={page} /> */}
          </div>
        </div>
        <FormContact
          url={theme_01}
          title="Liên hệ với chúng tôi"
          placeholder="Ý kiến của bạn"
          content="Gủi đi ý kiến"
        />
      </div>
    </Helmet>
  );
}
