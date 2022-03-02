import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function Contact() {
  const arrContact = [
    {
      icon: "bx bxl-facebook",
      content: "Facebook",
    },
    {
      icon: "bx bxl-github",
      content: "Github",
    },
    {
      icon: "bx bxl-linkedin",
      content: "LinkedIn",
    },

    {
      icon: "bx bxl-twitter",
      content: "Twitter",
    },
  ];
  return (
    <div className="contact">
      <ul className="contact__list">
        {arrContact.map((e, id) => (
          <li key={id} className="contact__item">
            <Button
              icon={e.icon}
              content={e.content}
              classNameBtn={"btn__contact"}
              classNameContent={"btn__contact__content"}
            >
              <Link to={"/"} />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
