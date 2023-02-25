import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="page">
      <Header />

      <Main />

      <Footer />
      <div className="popup popup_type_profile-info">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form"
            action="#"
            method="get"
            name="profileInfo"
            novalidate
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
            <button className="popup__btn" type="submit">
              Сохранить
            </button>
          </form>
          <button className="popup__close-btn" type="reset"></button>
        </div>
      </div>

      <div className="popup popup_type_card-add">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__form"
            action="#"
            method="get"
            name="addCard"
            novalidate
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
            <button className="popup__btn" type="submit">
              Создать
            </button>
          </form>
          <button className="popup__close-btn" type="reset"></button>
        </div>
      </div>

      <div className="popup popup_type_card-open">
        <div className="popup__card-container">
          <figure className="popup__item">
            <img className="popup__img" src="#" alt="#" />
            <figcaption className="popup__img-desc"></figcaption>
          </figure>
          <button className="popup__close-btn" type="reset"></button>
        </div>
      </div>

      <div className="popup popup_type_delete">
        <div className="popup__container popup__container_type_delete">
          <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
          <form name="confirmDelete" className="popup__form">
            <button className="popup__btn" type="submit">
              Да
            </button>
          </form>
          <button className="popup__close-btn" type="reset"></button>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container popup__container_type_avatar">
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="confirmAvatar" className="popup__form" novalidate>
            <input
              className="popup__input popup__input_type_avatar"
              placeholder="URL"
              id="avatar-url"
              name="avatar"
              type="url"
              required
            />
            <span className="popup__input-err avatar-url-error"></span>
            <button className="popup__btn" type="submit">
              Сохранить
            </button>
          </form>
          <button className="popup__close-btn" type="reset"></button>
        </div>
      </div>

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
    </div>
  );
}

export default App;
