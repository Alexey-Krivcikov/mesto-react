import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_card-open">
      <div className="popup__card-container">
        <figure className="popup__item">
          <img className="popup__img" src="#" alt="#" />
          <figcaption className="popup__img-desc"></figcaption>
        </figure>
        <button className="popup__close-btn" type="reset"></button>
      </div>
    </div>
  );
}

export default ImagePopup;
