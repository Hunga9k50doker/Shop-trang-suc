import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { CardItem } from "./CardItem";
import arrPro from "../../assets/fake-data/Product";
const FormContact = (props) => {
  return (
    <form
      action="#"
      className="form  form__contact"
      style={{ background: `url(${props.url})` }}
    >
      <h3 className="form__title"> {props.title}</h3>
      <div className="form__body">
        <input
          type="
      text"
          placeholder={props.placeholder}
          className="form__input"
        />
        <Button
          classNameBtn="btn__submit"
          icon="bx bxl-telegram"
          content={props.content}
        ></Button>
      </div>
    </form>
  );
};

const FormSearch = () => {
  const [items, setItems] = useState();
  const refInputSearch = useRef();
  useEffect(() => {
    setItems();
  }, []);
  return (
    <form action="#" onClick={(e) => e.stopPropagation()} className="form">
      <div className="form__body">
        <input
          ref={refInputSearch}
          type="
      text"
          placeholder="Tìm sản phẩm..."
          className="form__input"
          onChange={() => setItems()}
        />
        <Button
          classNameBtn="btn__search"
          icon="bx bx-search-alt bx-tada"
          content="Tìm kiếm"
        ></Button>
      </div>
      <div className="form__render">
        {arrPro.slice(0, 4).map((e, id) => (
          <Link to="#" key={id}>
            <CardItem img={e.img} title={e.title} price={e.price} />
          </Link>
        ))}
      </div>
    </form>
  );
};

export { FormContact, FormSearch };
