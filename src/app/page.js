import Image from "next/image";
import styles from "./page.sass";
import Link from "next/link";
import logo from "/public/img/logo.png";
import barbaraHi from "/public/img/Barbarahi.png";
import lesson from "/public/img/lesson.jpg";
import author from "/public/img/author.jpg";
import slide1 from "/public/img/slide1.jpg";
import slide2 from "/public/img/slide2.jpg";
import slide3 from "/public/img/slide3.jpg";
import slide4 from "/public/img/slide4.jpg";
import slide5 from "/public/img/slide5.jpg";
import slide6 from "/public/img/slide6.jpg";
import barbaraTeasing from "/public/img/barbaraTeasing.png";
import Carousel from "@/components/carousel/Carousel";

export default function Home() {
  return (
    <>
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
              Учебная программа английского языка для школ с уникальной
              методикой обучения языку
            </h1>
            <p>Что мы предлагаем?</p>
            <section>
              <div className="left">
                <ul>
                  1. Полностью готовую и эффективную учебную программау,
                  состоящую из:
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
                  сертифицированных преподавателей, продвижения через программу
                  и соцсети преподавателей.
                </ul>
                <ul>
                  {" "}
                  3. Компенсацию расходов на программу и обеспечиваем
                  дополнительный доход от лицензионных платежей клиентов и
                  партнеров:
                  <li>
                    потенциальный прямой доход партнера с 60 учениками за 1 год
                    - от 60+ тыс. руб.
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
                <Image
                  className="lesson__img"
                  src={lesson}
                  alt="lesson"
                ></Image>
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
      </main>
      <section className="author">
        <div className="container">
          <h2>Автор</h2>
          <div className="box">
            <div className="left">
              <Image className="author__img" src={author} alt="author" />
              <div className="border"></div>
            </div>
            <div className="right">
              <div className="name">Александра Галка</div>
              <div className="line"></div>
              <div className="desk">
                Руководитель учебного центра “Happy Nation”, педагог с 20-ти
                летним стажем и автор уникальной программы обучения детей
                английскому языку без опоры на родной язык.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="method">
        <div className="container">
          <h2>О методике</h2>
          <p className="desk">
            Программа основа на беспереводной методике обучения. Вы убедитесь,
            что язык можно осваивать естественным образом как родной, не
            прибегая к переводу на русский язык и не формируя языковой барьер.
            Методика “HappyBara” кардинально отличается от привычной школьной
            «скажи-переведи». Материал вводится постепенно от простого к
            сложному. Ребенку будет все понятно с первых минут занятия! Дети
            начинают мыслить и говорить на языке, а не просто запоминают слова
            врассыпную, которые потом не могут составить в предложение.
          </p>

          <Carousel
            img1={slide1}
            img2={slide2}
            img3={slide3}
            img4={slide4}
            img5={slide5}
            img6={slide6}
          />
        </div>
      </section>

      <section className="benefit">
        <div className="container">
          <h2>Преимущества методики:</h2>
          <div className="box__benefit">
            <div className="left">
              <div className="box">
                <div className="number">01</div>
                <div className="desk">
                  100% Авторские материалы + видеокурс + задания/занятия для
                  повторения дома
                </div>
              </div>
              <div className="box">
                <div className="number">02</div>
                <div className="desk">Озвучка носителями (Великобритания)</div>
              </div>
              <div className="box">
                <div className="number">03</div>
                <div className="desk">
                  Прозрачная система партнеров - 3 уровня (доход - 50% дохода
                  партнера)
                </div>
              </div>
              <div className="box">
                <div className="number">04</div>
                <div className="desk">
                  Онлайн платформа с планами уроков, видео для повторений,
                  личным кабинетом преподавателя и ученика
                </div>
              </div>
            </div>
            <div className="right">
              <Image className="img" src={barbaraTeasing} alt="barbara" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
