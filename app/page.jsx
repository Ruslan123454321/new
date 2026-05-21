"use client";

import { useState } from "react";

const navItems = [
  ["О нас", "#about"],
  ["Услуги", "#services"],
  ["Процесс", "#process"],
  ["Отзывы", "#reviews"],
  ["Контакты", "#contacts"],
];

const services = [
  {
    number: "01",
    title: "Комплексное сопровождение",
    text: "Ежемесячный учет, первичка, налоги, зарплата, сверки и напоминания о сроках.",
    price: "от 18 000₸ / месяц",
    action: "Запросить расчет",
    featured: true,
  },
  {
    number: "02",
    title: "Налоговая консультация",
    text: "Разберем режим, риски, льготы, корректность платежей и законные способы оптимизации.",
    action: "Получить консультацию",
  },
  {
    number: "03",
    title: "Отчетность и декларации",
    text: "Подготовим и отправим формы для налоговой и статистики, проверим начисления.",
    action: "Сдать отчет",
  },
  {
    number: "04",
    title: "Восстановление учета",
    text: "Наведем порядок в документах, сверим остатки, найдем ошибки и подготовим план исправлений.",
    action: "Проверить учет",
  },
];

const reviewsSourceUrl =
  "https://2gis.kz/almaty/search/%D0%B1%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D0%B8%D1%8F/rubricId/653/firm/70000001110395312/tab/reviews?m=76.859859%2C43.247132%2F19.22";

const reviews = [
  {
    author: "Enk ..",
    date: "20 мая 2026",
    label: "Подтвержденный отзыв",
    text: "Клиент коротко отмечает отличную работу компании после посещения.",
  },
  {
    author: "700 ADM",
    date: "27 февраля 2026",
    label: "Рекомендация",
    text: "Отзыв выделяет быстрый и четкий результат, компанию рекомендуют другим предпринимателям.",
  },
  {
    author: "Nursat Kenesbek",
    date: "25 февраля 2026",
    label: "Отчеты и уведомления",
    text: "Клиент благодарит за помощь с отчетами и подготовкой уведомления.",
  },
  {
    author: "Leshka Kaleshka",
    date: "13 января 2026",
    label: "Аутсорсинг учета",
    text: "После перехода на сопровождение команда помогла навести порядок и оптимизировать налоговую нагрузку.",
  },
  {
    author: "Алексей Егоров",
    date: "13 января 2026",
    label: "Ответственные бухгалтеры",
    text: "Клиент отмечает четкую работу и профессиональный подход бухгалтеров.",
  },
  {
    author: "Перизат Кенжетаева",
    date: "9 января 2026",
    label: "Консультации",
    text: "В отзыве отмечены грамотные консультации, связь с командой и понятные объяснения по налогам.",
  },
];

function isValidKazakhstanPhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return /^7\d{10}$/.test(digits) || /^8\d{10}$/.test(digits);
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitState, setSubmitState] = useState("idle");

  function closeMenu() {
    setMenuOpen(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const phone = formData.get("phone");

    if (!isValidKazakhstanPhone(phone)) {
      setSubmitState("phone-error");
      return;
    }

    setSubmitState("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          business: formData.get("business"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  const isSubmitting = submitState === "loading";

  return (
    <>
      <header className={`site-header ${menuOpen ? "is-open" : ""}`} id="top">
        <button
          className="menu-scrim"
          type="button"
          aria-label="Закрыть меню"
          onClick={closeMenu}
        />
        <div className="header-shell">
          <a className="brand" href="#top" aria-label="PA Finance" onClick={closeMenu}>
            <img className="brand-logo" src="/assets/logo-pa.png" alt="PA Finance" />
            <span className="brand-name">Berestova accounting</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <div className="nav-panel">
            <nav className="nav" aria-label="Основная навигация">
              {navItems.map(([label, href]) => (
                <a href={href} key={href} onClick={closeMenu}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="header-actions">
              <a className="phone" href="tel:+77776970905">
                +7 777 697 09 05
              </a>
              <a className="header-button" href="#contacts" onClick={closeMenu}>
                Обсудить учет
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">Бухгалтерия и налоги для бизнеса в Казахстане</p>
              <h1 id="hero-title">Возьмем учет на себя, чтобы вы управляли ростом</h1>
              <p className="hero-text">
                Сопровождаем ТОО и ИП: отчетность, зарплата, налоги, первичные документы и
                консультации с понятной стоимостью от 18 000₸ в месяц.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#contacts">
                  Получить расчет
                </a>
                <a className="secondary-button" href="#services">
                  Посмотреть услуги
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Быстрый расчет">
              <span className="panel-kicker">Экспресс-оценка</span>
              <strong>15 минут</strong>
              <p>на первичный разбор задач и примерный бюджет сопровождения</p>
              <a href="https://wa.me/7776970905" target="_blank" rel="noreferrer">
                Написать в WhatsApp
              </a>
            </aside>
          </div>
        </section>

        <section className="stats section" id="about">
          <div className="section-shell stats-grid">
            <div>
              <p className="eyebrow dark">Tandau Finance</p>
              <h2>Спокойная бухгалтерия без лишней бюрократии</h2>
            </div>
            <article>
              <strong>7 лет</strong>
              <span>помогаем предпринимателям держать учет в порядке</span>
            </article>
            <article>
              <strong>80+</strong>
              <span>проектов на сопровождении и разовых аудитах</span>
            </article>
            <article>
              <strong>48 ч</strong>
              <span>средний срок запуска после передачи документов</span>
            </article>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow dark">Услуги</p>
              <h2>Выберите формат поддержки</h2>
              <p>
                Можно передать нам весь учет или закрыть отдельную задачу: от декларации до
                восстановления базы после ошибок.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className={`service-card ${service.featured ? "featured" : ""}`} key={service.number}>
                  <div className="card-icon">{service.number}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  {service.price ? <span>{service.price}</span> : null}
                  <a href="#contacts">{service.action}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="section-shell process-layout">
            <div>
              <p className="eyebrow dark">Как работаем</p>
              <h2>Прозрачный запуск без долгих встреч</h2>
              <p>
                Вы передаете вводные, мы оцениваем объем, фиксируем договоренности и ведем учет по
                календарю.
              </p>
            </div>
            <ol className="steps">
              <li>
                <span>1</span>
                <div>
                  <h3>Диагностика</h3>
                  <p>Смотрим режим налогообложения, обороты, сотрудников и текущие обязательства.</p>
                </div>
              </li>
              <li>
                <span>2</span>
                <div>
                  <h3>План сопровождения</h3>
                  <p>Предлагаем перечень работ, стоимость, график обмена документами и ответственных.</p>
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  <h3>Ежемесячный контроль</h3>
                  <p>Ведем учет, предупреждаем о сроках, отвечаем на вопросы и готовим отчеты.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="guarantees section">
          <div className="section-shell guarantees-grid">
            <article>
              <h2>Что вы получаете</h2>
              <p>
                Учет ведется по договору, документы хранятся в согласованной структуре, а ключевые
                решения фиксируются письменно.
              </p>
            </article>
            <div className="guarantee-list">
              <div>Персональный бухгалтер и резервный специалист</div>
              <div>Календарь налоговых сроков и платежей</div>
              <div>Конфиденциальность данных и доступов</div>
              <div>Ежемесячный управленческий обзор</div>
            </div>
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="section-shell">
            <div className="reviews-top">
              <div className="section-heading compact">
                <p className="eyebrow dark">Отзывы 2GIS</p>
                <h2>Клиенты отмечают четкую работу и поддержку</h2>
                <p>
                  По данным карточки компании на 2GIS: рейтинг 5.0, 10 оценок и 11 отзывов.
                </p>
              </div>
              <a className="reviews-source" href={reviewsSourceUrl} target="_blank" rel="noreferrer">
                Смотреть на 2GIS
              </a>
            </div>

            <div className="reviews-summary" aria-label="Рейтинг 2GIS">
              <strong>5.0</strong>
              <span>★★★★★</span>
              <p>10 оценок · 11 отзывов</p>
            </div>

            <div className="review-grid">
              {reviews.map((review, index) => (
                <blockquote className={index > 2 ? "mobile-hidden-review" : ""} key={review.author}>
                  <div className="review-card-head">
                    <span>{review.label}</span>
                    <small>{review.date}</small>
                  </div>
                  <p>{review.text}</p>
                  <cite>{review.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contacts">
          <div className="section-shell contact-layout">
            <div>
              <p className="eyebrow">Контакты</p>
              <h2>Расскажите, какой учет нужно закрыть</h2>
              <p>
                Оставьте контакты, и мы подготовим первичный расчет. Для настоящего проекта форму
                можно подключить к CRM, почте или WhatsApp.
              </p>
              <div className="contact-card">
                <a href="tel:+77776970905">+7 777 697 09 05</a>
                <span>Алматы, Тастак 1 дом 11</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=example@gmail.com&su=Запрос%20на%20бухгалтерию&body=Здравствуйте%2C%20я%20хочу%20обсудить%20сопровождение."
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в Gmail
                </a>
              </div>
            </div>

            <form className="lead-form" onSubmit={handleSubmit}>
              <label>
                Имя
                <input type="text" name="name" placeholder="Как к вам обращаться" required />
              </label>
              <label>
                Телефон
                <input
                  type="tel"
                  name="phone"
                  placeholder="+7 ___ ___ __ __"
                  aria-invalid={submitState === "phone-error"}
                  onChange={() => {
                    if (submitState === "phone-error") {
                      setSubmitState("idle");
                    }
                  }}
                  required
                />
              </label>
              <label>
                Формат бизнеса
                <select name="business" defaultValue="ИП">
                  <option>ИП</option>
                  <option>ТОО</option>
                  <option>Нужна консультация</option>
                </select>
              </label>
              <label>
                Задача
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Например: нужна ежемесячная бухгалтерия"
                />
              </label>
              <button className="primary-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Отправляем..." : "Отправить заявку"}
              </button>
              {submitState === "success" ? (
                <p className="form-status success">Заявка отправлена. Мы скоро свяжемся с вами.</p>
              ) : null}
              {submitState === "error" ? (
                <p className="form-status error">
                  Не получилось отправить заявку. Попробуйте позже или напишите в WhatsApp.
                </p>
              ) : null}
              {submitState === "phone-error" ? (
                <p className="form-status error">не правильно введен номер</p>
              ) : null}
              <p className="form-note">
                Нажимая кнопку, вы соглашаетесь на обработку данных для ответа на заявку.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-shell footer-shell">
          <span>© 2026 Tandau Finance</span>
          <a href="#top">Наверх</a>
        </div>
      </footer>
    </>
  );
}
