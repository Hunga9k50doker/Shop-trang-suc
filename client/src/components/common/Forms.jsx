import React from "react";
export default function FormContact() {
  return (
    <form action="#" className="form__contact">
      <h3 className="form__contact__title"> Liên hệ với chúng tôi</h3>
      <div className="form__contact__body">
        <input
          type="
      text"
          placeholder="Ý kiến của bạn"
          className="form__input"
        />
        <button className="btn__submit">
          <i class="bx bxl-gmail"></i>
          <p>Gửi đi ý kiến</p>
        </button>
      </div>
    </form>
  );
}
