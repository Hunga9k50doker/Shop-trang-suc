import { useState } from "react";
import PropTypes from "prop-types";
const CountNumber = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="count__number mt-2 me-5">
      <p
        className="count__number__down "
        onClick={() =>
          setCount(() => {
            return count - 1 === 0 ? 1 : count - 1;
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
        value={count}
        onChange={(e) => setCount(Math.floor(e.target.value))}
        onMouseMove={(e) =>
          setCount(() =>
            Math.floor(e.target.value) < 1 ? 1 : Math.floor(e.target.value)
          )
        }
      />
      <p className="count__number__up " onClick={() => setCount(count + 1)}>
        <i className="bx bx-plus"></i>
      </p>
    </div>
  );
};

CountNumber.prototype = {
  count: PropTypes.number.isRequired,
};
export default CountNumber;
