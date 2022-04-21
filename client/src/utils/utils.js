import {useState} from 'react'
function to_slug(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, "");

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, "");

  // return
  return str;
}

const sortLowToHigh = (a, b, arr) => {
  arr.sort(() => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0));
};
const sortHighToLow = (a, b, arr) => {
  arr.sort(() => (a.price < b.price ? 1 : a.price > b.price ? -1 : 0));
};

// get random
const get_random = (arr, count) => {
  const max = arr.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return arr.slice(start, start + count);
};

//  search 
const hanldeSearch = () => {
  
}
export { to_slug, sortLowToHigh, sortHighToLow, get_random };
