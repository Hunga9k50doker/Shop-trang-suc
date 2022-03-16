import React from "react";
import { Link } from "react-router-dom";

import { Banner } from "../components/common/Banner";
import { CardItem } from "../components/common/CardItem";
import { FormContact } from "../components/common/Forms";
import { to_slug } from "../utils/utils";
import Button from "../components/common/Button";
//  ip data
import {
  banner_01,
  banner_02,
  banner_sub_01,
  theme_01,
  theme_02,
  theme_03,
  theme_04,
} from "../assets/img";
import arrPro from "../assets/fake-data/Product";
export default function Home() {
  return (
    <div className="home">
      <Banner
        img={banner_01}
        sologan="Giới thiệu"
        title="Màu sắc tưởng tượng"
        subtitle="Bộ sưu tập được hỗ trợ bởi Passion"
      >
        <div className="sub__img">
          <img src={banner_sub_01} alt="" />
        </div>
        <Button classNameBtn="btn__view__more" content="Xem thêm" />
      </Banner>
      <div className="container">
        <div className="row">
          <h2 className="home__title mt-5">
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
                    <CardItem img={e.img} title={e.title} price={e.price} />
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
      <FormContact
        url={theme_01}
        title="Liên hệ với chúng tôi"
        placeholder="Ý kiến của bạn"
        content="Gủi đi ý kiến"
      />
    </div>
  );
}
