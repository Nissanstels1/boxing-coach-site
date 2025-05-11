import { useRef } from "react";
import { motion } from "framer-motion";

// локальные изображения ― положите в src/assets/
import heroImg   from "./assets/andrei.jpg";
import actionImg from "./assets/LZEvhllar-s.jpg";

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
          <p className="text-xl md:text-2xl mb-8 font-light">
            Персональный тренер по&nbsp;боксу с&nbsp;10-летним опытом. Прокачай силу,
            технику и&nbsp;уверенность.
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
            className="text-3xl font-bold text-red-600 hover:underline"
          >
            +7&nbsp;920&nbsp;526&nbsp;24&nbsp;18
          </a>
          <p className="mt-8 text-base text-gray-600">
            Тренировки проходят в современном зале в Москве (м. Динамо) или по договорённости в удобном для вас месте.
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
