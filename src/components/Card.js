import React from "react";

function Card(props) {
  console.log(props);
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="card">
      <img
        className="card__img"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button className="card__del-btn" type="button"></button>
      <div className="card__text">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button className="card__like-btn" type="button"></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
