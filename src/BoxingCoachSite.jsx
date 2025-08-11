import { useRef } from "react";
import { motion } from "framer-motion";

// локальные изображения ― положите в src/assets/
import heroImg   from "./assets/andrei.jpg";
import actionImg from "./assets/LZEvhllar-s.jpg";

// ⭐ компонент звёздного рейтинга
function StarRating({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Рейтинг ${rating} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`w-5 h-5 ${i < rating ? "fill-yellow-400" : "fill-gray-300"}`}
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  );
}

//  15 демо‑отзывов (замените на реальные по мере поступления)
const testimonials = [
  {
    name: "Иван К.",
    text: "За 3 месяца сбросил 8 кг и научился работать в стойке. Андрей объясняет просто и по делу.",
    rating: 5,
    meta: "Индивид. тренировки • 2025",
  },
  {
    name: "Мария П.",
    text: "С нуля поставили технику ударов. Чувствую себя уверенно и на ринге, и в жизни.",
    rating: 5,
    meta: "Бокс для начинающих",
  },
  {
    name: "Егор Л.",
    text: "Функционалка топ! Выносливость выросла, спина перестала болеть после офиса.",
    rating: 5,
    meta: "Функц. подготовка",
  },
  {
    name: "Дарья С.",
    text: "Тёплая атмосфера, но тренировки огонь. Андрей следит за техникой и безопасностью.",
    rating: 5,
    meta: "Групповые",
  },
  {
    name: "Алексей Н.",
    text: "Подготовились к корпоративному спаррингу за 6 недель. Победил! Спасибо за стратегию.",
    rating: 5,
    meta: "Соревнования",
  },
  {
    name: "Ольга Р.",
    text: "Вернулась в форму после декрета. Индивидуальный план и мягкая прогрессия нагрузок.",
    rating: 5,
    meta: "Персонально",
  },
  {
    name: "Павел Т.",
    text: "С меня 12 кг, плюс дисциплина и режим. Тренер мотивирует без крика и пафоса.",
    rating: 5,
    meta: "Снижение веса",
  },
  {
    name: "Кристина В.",
    text: "Отработали защиту и контратаки. Теперь спарринги не пугают.",
    rating: 5,
    meta: "Техника",
  },
  {
    name: "Сергей М.",
    text: "Крутое чувство партнёрства: цели реалистичные, прогресс измеряемый каждую неделю.",
    rating: 5,
    meta: "Прогресс",
  },
  {
    name: "Алина Д.",
    text: "Формат 2 раза в неделю идеально лёг. Пульс контролируем, техника растёт.",
    rating: 5,
    meta: "Режим 2x/нед",
  },
  {
    name: "Роман Ж.",
    text: "Перестал задыхаться на 3‑м раунде. Кардио и лапы — то, что нужно!",
    rating: 5,
    meta: "Выносливость",
  },
  {
    name: "Наталья К.",
    text: "Андрей подбирает упражнения под мои колени. Без травм, прогресс идёт.",
    rating: 5,
    meta: "Безопасность",
  },
  {
    name: "Дмитрий С.",
    text: "Чёткие правки по технике. После видеоразбора понял свои ошибки в стойке.",
    rating: 5,
    meta: "Видеоанализ",
  },
  {
    name: "Полина Г.",
    text: "Очень поддерживающе. Пришла за формой — нашла любовь к боксу.",
    rating: 5,
    meta: "Мотивация",
  },
  {
    name: "Антон Ф.",
    text: "Удар стал быстрее и точнее. Плюс минус 6 см в талии за 2 месяца.",
    rating: 5,
    meta: "Сушка",
  },
];

export default function BoxingCoachSite() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // анимации для появления секций
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 selection:bg-red-600/80 selection:text-white">

      {/* ---------- HERO ---------- */}
      <section className="relative h-[100dvh] flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src={heroImg}
          alt="Тренер Андрей Медведев в современном зале"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 md:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 p-4 max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight">
            Андрей Медведев
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light mt-8">
            Персональный тренер по&nbsp;боксу, фитнесу, бодибилдингу и&nbsp;физической подготовке с&nbsp;10-летним стажем.
            Прокачай силу, технику и&nbsp;уверенность.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-red-600 hover:bg-red-700 transition rounded-2xl px-8 py-3 text-lg font-semibold shadow-xl backdrop-blur"
          >
            Записаться на тренировку
          </button>
        </motion.div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="py-24 container mx-auto px-4" id="about">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Обо мне
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={actionImg}
            alt="Андрей наносит удар по боксерскому мешку"
            className="rounded-3xl shadow-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed mb-4">
              Я&nbsp;сертифицированный тренер и&nbsp;действующий спортсмен. Мой подход
              сочетает проверенные классические методики с&nbsp;современными
              технологиями тренировок и&nbsp;восстановления.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Независимо от&nbsp;вашего уровня, мы&nbsp;построим программу,
              которая поможет достичь целей&nbsp;— будь то&nbsp;снижение веса,
              подготовка к&nbsp;соревнованиям или освоение базовых навыков.
            </p>
            <p className="text-lg leading-relaxed font-semibold">
              Твоя лучшая версия начинается сегодня!
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="py-24 bg-white" id="services">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Программы тренировок
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 container mx-auto px-4">
          {[
            {
              title: "Индивидуальные тренировки",
              desc: "Персональный план, 100 % внимание тренера и быстрый прогресс.",
            },
            {
              title: "Групповые занятия",
              desc: "Сильная командная энергетика, спарринги и взаимная поддержка.",
            },
            {
              title: "Функциональная подготовка",
              desc: "Сила, кардио, координация — фундамент боевой формы.",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gray-100 hover:bg-red-600 hover:text-white transition rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-base leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="py-24 bg-gray-50" id="testimonials">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              Демо‑отзывы
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-12 text-center">Что говорят ученики</h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, idx) => (
              <motion.article
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">
                      {t.name.split(" ")[0][0]}
                    </div>
                    <div>
                      <p className="font-semibold leading-tight">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.meta}</p>
                    </div>
                  </div>
                  <StarRating rating={t.rating} />
                </div>
                <p className="text-base leading-relaxed text-gray-700">{t.text}</p>
              </motion.article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500 max-w-3xl mx-auto">
            *Этот блок содержит примерные (сгенерированные) отзывы для демонстрации верстки. Замените их на реальные мнения клиентов с их разрешения.
          </p>
        </motion.div>
      </section>

      {/* ---------- GALLERY ---------- */}
      <section className="py-24 bg-gray-50" id="gallery">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Галерея
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          {[heroImg, actionImg].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt="Фото тренера Андрея Медведева"
              className="rounded-3xl shadow-2xl object-cover w-full h-[450px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            />
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-24 bg-red-600 text-white text-center relative overflow-hidden">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-bold mb-6">Готов начать тренироваться?</h2>
          <button
            onClick={scrollToContact}
            className="bg-white text-red-600 hover:bg-gray-100 transition rounded-2xl px-10 py-4 text-lg font-semibold shadow-inner"
          >
            Связаться со мной
          </button>
        </motion.div>

        {/* декоративное пятно */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </section>

      {/* ---------- CONTACT ---------- */}
      <section ref={contactRef} className="py-24 container mx-auto px-4" id="contact">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Контакты
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-gray-100 rounded-3xl p-12 shadow-2xl text-center"
        >
          <p className="text-xl mb-4">Телефон для записи:</p>
          <a
            href="tel:+79205262418"
            className="text-3xl font-bold text-red-600 hover:underline block"
          >
            +7&nbsp;920&nbsp;526&nbsp;24&nbsp;18
          </a>

          {/* Кнопки мессенджеров */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="https://t.me/Fit_TreNer7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
            >
              Telegram
            </a>
            <a
              href="https://wa.me/79205262418"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
            >
              WhatsApp
            </a>
          </div>

          <p className="mt-8 text-base text-gray-600">
            Тренировки проходят в современном зале в Москве или по договорённости в удобном для вас месте.
          </p>
        </motion.div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Андрей Медведев. Все права защищены.
      </footer>
    </div>
  );
}
