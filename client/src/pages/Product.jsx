import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { to_slug, get_random } from "../utils/utils";
import CountNumber from "../components/common/CountNumber";
import Button from "../components/common/Button";
import Helmet from "../components/common/Helmet";
import { CardItem } from "../components/common/CardItem";
import arrPro from "../assets/fake-data/Product";
export default function Product() {
  const [active, setActive] = useState(false);
  const { slug } = useParams();
  const heartRef = useRef(null);
  useEffect(() => {
    return heartRef.current.className === "bx bxs-heart" ? setActive(true) : "";
  }, []);
  return (
    <Helmet title="Chi tiết Sản phẩm">
      <div className="product">
        <div className="container">
          {arrPro.map(
            (e, id) =>
              to_slug(e.title) === slug && (
                <div className="row mb-4" key={id}>
                  <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-12">
                    <div className="product__img">
                      <div className="product__slide__img">
                        <img src={e.img} alt="" />
                        <img src={e.img} alt="" />
                        <img src={e.img} alt="" />
                        <img src={e.img} alt="" />
                      </div>
                      <div className="product__item__img">
                        <img src={e.img} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-12">
                    <div className="product__detail">
                      <h4 className="product__title">{e.title}</h4>
                      <h6 className="product__desc mt-2 mb-2">{e.desc}</h6>
                      <p className="product__price">Giá: {e.price} vnd</p>
                      <div className="product__add__cart">
                        <CountNumber />
                        <Button
                          classNameBtn="add mt-2"
                          content={"Thêm vào giỏ hàng"}
                        />
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className="product__add__wishlist"
                        onClick={() => setActive(true)}
                      >
                        <i
                          ref={heartRef}
                          className={active ? "bx bxs-heart" : "bx bx-heart"}
                        ></i>
                        {active ? (
                          <p className="ms-4 mt-4">
                            <Link to="/danh-sach-san-pham-yeu-thich/">
                              Xem danh sách yêu thích của bạn
                            </Link>
                          </p>
                        ) : (
                          <p className="ms-4 mt-4">
                            Thêm vào danh sách yêu thích
                          </p>
                        )}
                      </div>
                      <ul className="product__other_desc ps-0">
                        <li className="ps-0">
                          <i class="bx bxs-check-shield"></i>
                          <p className="m-0 ms-2">
                            Giá sản phẩm thay đổi tuỳ trọng lượng vàng và đá Đổi
                          </p>
                        </li>
                        <li className="ps-0">
                          <i class="bx bxs-check-shield"></i>
                          <p className="m-0 ms-2">
                            Sản phẩm trong 48h tại hệ thống cửa hàng PNJ Miễn
                            phí
                          </p>
                        </li>
                        <li className="ps-0">
                          <i class="bx bxs-check-shield"></i>
                          <p className="m-0 ms-2">
                            Giao nhanh Toàn Quốc 1-7 ngày
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
          )}
          <div className="row">
            <div className="product__other">
              <div className="row ">
                <h4 className="product__other__title mt-5">
                  Các sản phẩm khác
                </h4>
              </div>
              <div className="row mb-5">
                {get_random(arrPro, 12).map((e, id) => (
                  <div key={id} className="col col-xl-3 col-md-6 col-sm-12">
                    <Link
                      onClick={() => window.scroll(0, 0)}
                      style={{ width: "100%" }}
                      to={`/chi-tiet/${to_slug(e.title)}`}
                    >
                      <CardItem img={e.img} title={e.title} price={e.price} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
