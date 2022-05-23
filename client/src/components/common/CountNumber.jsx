import PropTypes from "prop-types";
const CountNumber = ({ quantity, setQuantity }) => {
  return (
    <div className="count__number">
      <p
        className="count__number__down "
        onClick={() =>
          setQuantity(() => {
            return quantity - 1 === 0 ? 1 : quantity - 1;
          })
        }
      >
        <i className="bx bx-minus"></i>
      </p>
      <input
        className="count__number__content"
        type="number"
        // min={1}
        max={999}
        value={quantity}
        onChange={(e) => setQuantity(Math.floor(e.target.value))}
        onMouseMove={(e) =>
          setQuantity(() =>
            Math.floor(e.target.value) < 1 ? 1 : Math.floor(e.target.value)
          )
        }
      />
      <p
        className="count__number__up "
        onClick={() => setQuantity(quantity + 1)}
        // onClick={() => handleChange(item, -1)}
      >
        <i className="bx bx-plus"></i>
      </p>
    </div>
  );
};

CountNumber.prototype = {
  count: PropTypes.number.isRequired,
};
export default CountNumber;
