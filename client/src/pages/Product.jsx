import React, { useState, useRef, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { to_slug, get_random, numberWithCommas } from "../utils/utils";
import CountNumber from "../components/common/CountNumber";
import Button from "../components/common/Button";
import Helmet from "../components/common/Helmet";
import { CardItem } from "../components/common/CardItem";
import Accordion from "../components/common/Accordion";
import { ProductContext } from "../provider/context/ProductContext";
import { FavouriteContext } from "../provider/context/FavouriteContext";
import { CartContext } from "../provider/context/CartContext";
import { ReviewContext } from "../provider/context/ReviewContext";
import moment from "moment";

export default function Product() {
  const [pos, setPos] = useState(0);
  const [, setActive] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { slug } = useParams();
  const heartRef = useRef(null);
  const [review, setReview] = useState({
    description: "",
    rating: 5,
  });
  const {
    productState: { products },
  } = useContext(ProductContext);
  const { addProductToFavourite, favouriteState } =
    useContext(FavouriteContext);
  const { addProductToCart } = useContext(CartContext);
  const {
    reviewState: { loading, reviews },
    loadingReviews,
    addReview,
  } = useContext(ReviewContext);
  useEffect(() => {
    if (heartRef.current) {
      return heartRef.current.className === "bx bxs-heart"
        ? setActive(true)
        : "";
    }
  }, []);

  // console.log(item);
  const addToFavourite = (product) => {
    addProductToFavourite({ product, id: product._id });
  };

  const handleAddToCart = (id, product) => {
    addProductToCart({ id, quantity }, product);
  };

  useEffect(() => {
    loadingReviews(slug);
  }, [slug]);

  const [proOther, setProOther] = useState(get_random(products, 12));
  // get random products other
  if (loading) return "Loading...";
  const handleAddReview = () => {
    addReview(slug, review);
    setReview({
      description: "",
      rating: 5,
    });
  };

  return (
    <Helmet title="Chi tiết Sản phẩm">
      <div className="product">
        <div className="container">
          {products.length > 0 &&
            products.map(
              (e, id) =>
                to_slug(e._id) === slug && (
                  <React.Fragment key={id}>
                    <div className="row mb-4">
                      <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-12">
                        <div className="product__img">
                          <div className="product__slide__img">
                            {e.imgsUrl.map((img, id) => (
                              <>
                                <img
                                  style={{
                                    border: pos === id ? "2px solid green" : "",
                                  }}
                                  key={id}
                                  src={`../../images/${img}`}
                                  alt=""
                                  onClick={() => setPos(id)}
                                />
                              </>
                            ))}
                          </div>
                          <div className="product__item__img">
                            <Zoom>
                              <img
                                src={`../../images/${e.imgsUrl[pos]}`}
                                alt=""
                              />
                            </Zoom>
                          </div>
                        </div>
                      </div>
                      <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-12">
                        <div className="product__detail">
                          <h4 className="product__title">{e.name}</h4>
                          <h6 className="product__desc mt-2 mb-2">
                            {e.description}
                          </h6>
                          <p className="product__price">
                            Giá: {numberWithCommas(e.price)} vnđ
                          </p>
                          <div className="product__add__cart">
                            <CountNumber
                              quantity={quantity}
                              setQuantity={setQuantity}
                            />
                            <Button
                              onClick={() => {
                                handleAddToCart(e._id, e);
                              }}
                              classNameBtn="add ms-5"
                              content={"Thêm vào giỏ hàng"}
                            />
                          </div>
                          <div
                            style={{ cursor: "pointer" }}
                            className="product__add__wishlist"
                          >
                            <i
                              ref={heartRef}
                              className={
                                favouriteState.products.find(
                                  (p) => p._id === e._id
                                )
                                  ? "bx bxs-heart"
                                  : "bx bx-heart"
                              }
                            ></i>
                            {favouriteState.products.find(
                              (p) => p._id === e._id
                            ) ? (
                              <p className="ms-4 mt-4">
                                <Link to="/danh-sach-san-pham-yeu-thich/">
                                  Xem danh sách yêu thích của bạn
                                </Link>
                              </p>
                            ) : (
                              <>
                                <p
                                  className="ms-4 mt-4"
                                  onClick={() => {
                                    addToFavourite(e);
                                  }}
                                >
                                  Thêm vào danh sách yêu thích
                                </p>
                              </>
                            )}
                          </div>
                          <ul className="product__other_desc ps-0">
                            <li className="ps-0">
                              <i className="bx bxs-check-shield"></i>
                              <p className="m-0 ms-2">
                                Giá sản phẩm thay đổi tuỳ trọng lượng vàng và đá
                                Đổi
                              </p>
                            </li>
                            <li className="ps-0">
                              <i className="bx bxs-check-shield"></i>
                              <p className="m-0 ms-2">
                                Sản phẩm trong 48h tại hệ thống cửa hàng Dimond
                                City Miễn phí
                              </p>
                            </li>
                            <li className="ps-0">
                              <i className="bx bxs-check-shield"></i>
                              <p className="m-0 ms-2">
                                Giao nhanh Toàn Quốc 1-7 ngày
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <h4 className="product__other__title mt-5">
                        Thông tin chi tiết
                      </h4>
                      <div className="row mb-5 accordion__list">
                        <div className="col col-12">
                          {" "}
                          <Accordion
                            classNameAccordion="p-1"
                            title="Mô tả sản phẩm"
                          >
                            <p>{e.description}</p>
                          </Accordion>
                        </div>
                        <div className="col col-12">
                          <Accordion
                            classNameAccordion="p-1"
                            title="Chính sách hoàn trả"
                          >
                            <p>Bao đổi 1-1 trong vòng 7 ngày</p>
                          </Accordion>
                        </div>
                        <div className="col col-12">
                          {" "}
                          <Accordion
                            classNameAccordion="p-1"
                            title="Câu hỏi thường gặp"
                          >
                            <p>
                              Làm sao tìm size nhẫn phù hợp? <br />
                              Chính sách giảm giá của shop như thế nào?
                            </p>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <h4 className="product__other__title mt-5">Đánh giá</h4>
                      <ul className="row mb-5 accordion__list">
                        {reviews.map((r, id) => (
                          <li key={id}>
                            <div
                              className="form__review__header"
                              style={{ borderBottom: "1px solid #ccc" }}
                            >
                              <i className="bx bxs-user"></i>
                              <p>
                                {r.user[0].name
                                  ? r.user[0].name
                                  : r.user[0].username}
                              </p>
                              <p style={{ float: "right" }}>
                                {moment(r.createdAt).fromNow()}
                              </p>
                            </div>
                            <p className="form__review__content">
                              {r.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <textarea
                        style={{ border: "1px solid #ccc" }}
                        className="pt-2 ps-2 mb-2"
                        cols="20"
                        rows="5"
                        placeholder="Đánh giá của bạn..."
                        onChange={(e) =>
                          setReview({
                            ...review,
                            description: e.target.value,
                          })
                        }
                        value={review.description}
                      ></textarea>
                      <Button
                        content="Thêm đánh giá"
                        style={{ width: "fit-content" }}
                        onClick={handleAddReview}
                      />
                    </div>
                  </React.Fragment>
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
                {proOther.map((e, id) => (
                  <div
                    key={id}
                    className="col col-xl-3 col-md-12 col-sm-12 col-12"
                  >
                    <Link
                      onClick={() => window.scroll(0, 0)}
                      style={{ width: "100%" }}
                      to={`/chi-tiet/${to_slug(e._id)}`}
                    >
                      <CardItem item={e} />
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
