import React from "react";

function handleEditAvatarClick() {
  document.querySelector(".popup_type_avatar").classList.add("popup_opened");
}
function handleEditProfileClick() {
  document
    .querySelector(".popup_type_profile-info")
    .classList.add("popup_opened");
}
function handleAddPlaceClick() {
  document.querySelector(".popup_type_card-add").classList.add("popup_opened");
}

function Main() {
  return (
    <main className="main page__main">
      <section className="main__profile profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="аватар" />
          <div className="profile__cover">
            <button
              className="profile__avatar-btn"
              onClick={handleEditAvatarClick}
            ></button>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">Просто чел</h1>
            <button
              onClick={handleEditProfileClick}
              className="profile__edit-btn"
              type="button"
            ></button>
          </div>
          <p className="profile__subtitle">Работяга</p>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section
        className="main__cards cards"
        aria-label="Картинки с красивыми местами"
      >
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
