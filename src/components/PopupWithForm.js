import React from "react";

function PopupWithForm({ name, title, btnText = "Сохранить", children }) {
  return (
    <div className={`popup popup_type_${name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          action="#"
          method="get"
          name={name}
          novalidate
        >
          {children}
          <button className="popup__btn" type="submit">
            {btnText}
          </button>
        </form>
        <button className="popup__close-btn" type="reset"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;