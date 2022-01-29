import React from "react";
import homePic from "../../images/Pictures/homePic.gif";
import "./Home.scss";

export function Home() {
  return (
    <main className="home">
      <h2 className="home__title">
        Ласкаво просимо на сайті Rozetka.ua !
      </h2>
      <img className="home__img" src={homePic} alt="Rozetka" />
      <h3 className="home__subTitle">
        Маленькі мрії та грандіозні плани
      </h3>
      <p className="home__whyAlwaysUs">
        <b>ROZETKA</b> − найбільший онлайн-ритейлер у країні. З 2005 року ми втілюємо маленькі мрії та грандіозні
        плани мільйонів людей. У нас можна знайти буквально все. Ми продаємо за справедливою ціною та надаємо гарантію,
        бо вважаємо, що онлайн-шопінг має бути максимально зручним і безпечним. І щоразу, коли хтось натискає «Купити»,
        ми розуміємо, що робимо потрібну справу.
      </p>
      <h3 className="home__subTitle">
        Щоб мрії здійснювалися легко
      </h3>
      <p className="home__whyAlwaysUs">
        Ми відкриваємо величезні офлайн-магазини, щоб ви могли прийти, потримати в руках і протестувати вподобаний
        продукт. Ми хочемо, щоб у нас був найкращий у світі сервіс, тому навчаємо співробітників не тільки технічній
        частині справи, а й роботі з клієнтом. А якщо вам, навпаки, хочеться якомога менше спілкуватися з людьми −
        для цього у нас є поштомати: зробили замовлення, вибрали поштомат, забрали дорогою додому чи на роботу. Все.
      </p>
      <div className="home__statistic">
        <div>
          <p className="home__statisticNumber">3.9 млн</p>
          <span className="home__statisticDescription">доступних до покупки товарів</span>
        </div>
        <div>
          <p className="home__statisticNumber">789 млн</p>
          <span className="home__statisticDescription">користувачів відвідали Rozetka в 2018 році</span>
        </div>
        <div>
          <p className="home__statisticNumber">81%</p>
          <span className="home__statisticDescription">наших покупців повертаються</span>
        </div>
        <div>
          <p className="home__statisticNumber">2.5 млн</p>
          <span className="home__statisticDescription">відвідувачів в день</span>
        </div>
      </div>
    </main>
  );
}