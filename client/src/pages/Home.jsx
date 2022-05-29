import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Skeleton from "react-loading-skeleton";
import Helmet from "../components/common/Helmet";
import { Banner } from "../components/common/Banner";
import { FormContact } from "../components/common/Forms";
import Button from "../components/common/Button";
import InfinityList from "../components/common/InfinityList";
import { ProductContext } from "../provider/context/ProductContext";

//  ip data
import {
  banner_01,
  banner_sub_01,
  theme_01,
  theme_02,
  theme_03,
  theme_04,
} from "../assets/img";
export default function Home() {
  const {
    productState: { products, loading },
  } = useContext(ProductContext);
  const [data, setData] = useState(products);
  useEffect(() => {
    setData(products);
  }, [products]);

  const item = {
    data: data,
    amount: 16,
    classNameCol: "col-xl-3 col-lg-4 col-md-6",
  };
  if (loading) return <Skeleton height="300px" />;
  return (
    <Helmet title="Trang chủ">
      <div className="home">
        <Banner
          classNameSub="home__banner"
          classNameImg="home__banner__img"
          img={banner_01}
          sologan="Giới thiệu"
          title="Màu sắc tưởng tượng"
          subtitle="Bộ sưu tập được hỗ trợ bởi Passion"
        >
          <div data-aos="zoom-out-up" className="sub__img">
            <img src={banner_sub_01} alt="" />
          </div>
          <Link
            data-aos="fade-up"
            data-aos-duration="2000"
            to={"/trang-suc/nhan/"}
          >
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
            {data.length > 0 && <InfinityList props={item} />}
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
