import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  // хуки состояния
  const [isEditProfilePopupOpen, SetEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, SetAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, SetEditAvatarPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, SetCurrentUser] = React.useState({});

  function handleEditProfileClick() {
    SetEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    SetAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    SetEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    SetEditProfilePopupOpen(false);
    SetAddPlacePopupOpen(false);
    SetEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((newCard) => {
        setCards(cards.filter((c) => (c._id === card._id ? "" : newCard)));
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, cards]) => {
        setCards(cards);
        SetCurrentUser(userInfo);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
      />

      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="profile-info"
        title="Редактировать профиль"
      >
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

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="card-add"
        title="Новое место"
      >
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

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="avatar"
        title="Обновить аватар"
      >
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

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
