import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <>
      <Header />

      <Main />

      <Footer />

      <PopupWithForm name="profile-info" title="Редактировать профиль">
        <input
          className="popup__input popup__input_type_name"
          id="user-name"
          name="name"
          type="text"
          required
          minlength="2"
          maxlength="40"
          placeholder="Имя"
        />
        <span className="popup__input-err user-name-error"></span>
        <input
          className="popup__input popup__input_type_job"
          id="user-job"
          name="about"
          type="text"
          required
          minlength="2"
          maxlength="200"
          placeholder="Вид деятельности"
        />
        <span className="popup__input-err user-job-error"></span>
      </PopupWithForm>

      <PopupWithForm name="card-add" title="Новое место">
        <input
          className="popup__input popup__input_type_card-name"
          placeholder="Название"
          id="card-name"
          name="name"
          type="text"
          minlength="2"
          maxlength="30"
          required
        />
        <span className="popup__input-err card-name-error"></span>
        <input
          className="popup__input popup__input_type_card-link"
          placeholder="Ссылка на картинку"
          id="card-link"
          name="link"
          type="url"
          required
        />
        <span className="popup__input-err card-link-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        btnText="Да"
      ></PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар">
        <input
          className="popup__input popup__input_type_avatar"
          placeholder="URL"
          id="avatar-url"
          name="avatar"
          type="url"
          required
        />
        <span className="popup__input-err avatar-url-error"></span>
      </PopupWithForm>

      <template id="card-element">
        <li className="card">
          <img className="card__img" />
          <button className="card__del-btn" type="button"></button>
          <div className="card__text">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button className="card__like-btn" type="button"></button>
              <p className="card__like-counter"></p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
