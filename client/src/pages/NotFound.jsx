import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/common/Button";
import Helmet from "../components/common/Helmet";

export default function NotFound() {
  const Style = styled.div`
    .not__found {
      margin: auto;
      display: flex;
      flex-direction: column;
      align-item: center;
      justify-content: center;
      text-align: center;
    }
    h5 {
      margin-top: 5rem;
      margin-bottom: 1rem;
    }
    .btn {
      &:hover {
        color: #fff;
      }
    }
  `;
  return (
    <Helmet title="Trang không tồn tại">
      <Style>
        <div className="not__found mt-5">
          <h5>Trang này hiện không tồn tại</h5>
          <Link to="/">
            <Button
              content="Trở về trang chủ."
              icon="bx bx-arrow-back bx-flip-vertical bx-flashing"
            ></Button>
          </Link>
        </div>
      </Style>
    </Helmet>
  );
}
