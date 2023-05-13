import Image from "next/image";
import styles from "./page.sass";
import Link from "next/link";
import logo from "/public/img/logo.png";
import barbaraHi from "/public/img/Barbarahi.png";
import lesson from "/public/img/lesson.jpg";

export default function Home() {
  return (
    <main>
      <header>
        <div className="container">
          <nav>
            <div className="left">
              <Link href="#">
                <Image className="logo" src={logo} alt={"logo"} />
              </Link>
              <Link href="#">
                <h2>HappyBara</h2>
              </Link>
            </div>
            <Link
              href="https://ru.myhappybara.com/training/view/metodika-myhappybara-dlya-prepodavateley-angliyskogo-detyam-level-1/lesson/lesson-1-zoo"
              className="button"
              target="_blank"
            >
              Перейти к программе
            </Link>
          </nav>
        </div>
      </header>
      <section className="opening">
        <div className="container">
          <h1>
            Учебная программа английского языка для школ с уникальной методикой
            обучения языку
          </h1>
          <p>Что мы предлагаем?</p>
          <section>
            <div className="left">
              <ul>
                1. Полностью готовую и эффективную учебную программау, состоящую
                из:
                <li>
                  планов уроков, видеоматериалов с инструкциями для
                  преподавателей на каждое занятие.
                </li>
                <li>
                  видеоматериалов ученикам для закрепления знаний на дому.
                </li>
              </ul>
              <ul>
                2. Привлечение новых клиентов за счет включения в список
                сертифицированных преподавателей, продвижения через программу и
                соцсети преподавателей.
              </ul>
              <ul>
                {" "}
                3. Компенсацию расходов на программу и обеспечиваем
                дополнительный доход от лицензионных платежей клиентов и
                партнеров:
                <li>
                  потенциальный прямой доход партнера с 60 учениками за 1 год -
                  от 60+ тыс. руб.
                </li>
              </ul>
            </div>
            <div className="right">
              <Image src={barbaraHi} alt="barbara"></Image>
            </div>
          </section>
        </div>
      </section>

      <section className="lesson">
        <div className="container">
          <h2>Пример урока </h2>
          <div className="box">
            <div className="left">
              <Image className="lesson__img" src={lesson} alt="lesson"></Image>
            </div>
            <div className="right">
              <h3>Модуль 1:</h3>
              <ul>
                <li>Тема: зоопарк</li>
                <li>Кол-во уроков: 8</li>
                <li>Кол-во планов: 8</li>
                <li>Кол-во роликов: 39</li>
              </ul>
            </div>
          </div>
          <Link
            className="button"
            target="_blank"
            href="https://ru.myhappybara.com/training/view/metodika-myhappybara-dlya-prepodavateley-angliyskogo-detyam-level-1/lesson/lesson-1-zoo"
          >
            Перейти
          </Link>
        </div>
      </section>

      <section className="author">
        <div className="container"></div>
      </section>
    </main>
  );
}
