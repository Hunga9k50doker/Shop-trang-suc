// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Pagination = ({ totalPages, page }) => {
//   const newArr = [...Array(totalPages)].map((_, i) => i + 1);
//   const navigate = useNavigate();

//   const isActive = (index) => {
//     if (index === page) return "active";
//     return "";
//   };

//   const prev = () => {
//     const newPage = Math.max(page - 1, 1);
//     navigate(`?page=${newPage}`);
//   };

//   const next = () => {
//     const newPage = Math.min(page + 1, totalPages);
//     navigate(`?page=${newPage}`);
//   };

//   const jump = (num) => {
//     navigate(`?page=${num}`);
//   };

//   return (
//     <div className="pagination">
//       <button onClick={prev}>&laquo;</button>

//       {newArr.map((num) => (
//         <button
//           key={num}
//           className={`${isActive(num)}`}
//           onClick={() => jump(num)}
//         >
//           {num}
//         </button>
//       ))}

//       <button onClick={next}>&raquo;</button>
//     </div>
//   );
// };

// export default Pagination;
