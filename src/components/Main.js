import React from "react";
import Card from "./Card";

function Main({
  userName,
  userDescription,
  userAvatar,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  cards,
  onCardClick,
}) {
  return (
    <main className="main page__main">
      <section className="main__profile profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
          <div className="profile__cover">
            <button
              className="profile__avatar-btn"
              onClick={onEditAvatar}
            ></button>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={onEditProfile}
              className="profile__edit-btn"
              type="button"
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section
        className="main__cards cards"
        aria-label="Картинки с красивыми местами"
      >
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
