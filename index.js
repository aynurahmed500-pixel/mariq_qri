
const topics = {
  early: {
    title: "01 — Ранните години",
    text: "Мария Склодовска е родена на 7 ноември 1867 г. във Варшава. Още от малка проявява силен интерес към науката. Тъй като възможностите за висше образование на жените в родината ѝ са ограничени, тя учи тайно и по-късно заминава за Париж."
  },
  paris: {
    title: "02 — Париж и Сорбоната",
    text: "През 1891 г. Мария пристига в Париж и започва да учи физика и математика в Сорбоната. Живее скромно, но се посвещава на обучението си. Там среща физика Пиер Кюри, за когото се омъжва през 1895 г."
  },
  discovery: {
    title: "03 — Полоний и радий",
    text: "В съвместната си научна работа Мария и Пиер Кюри изследват радиоактивността. През 1898 г. откриват два нови химични елемента — полоний и радий. Мария допринася значително за развитието на науката за радиоактивните вещества."
  },
  nobel: {
    title: "04 — Нобеловите награди",
    text: "През 1903 г. Мария Кюри получава Нобелова награда за физика за изследванията върху радиоактивността, споделена с Пиер Кюри и Анри Бекерел. През 1911 г. получава Нобелова награда за химия за откриването на полония и радия и изследванията си върху радия."
  },
  war: {
    title: "05 — Науката по време на война",
    text: "По време на Първата световна война Мария Кюри помага за организирането на мобилни рентгенови установки. Те позволяват на медицинските екипи да откриват по-лесно куршуми и счупвания при ранените войници. Тя обучава и хора да работят с рентгеновата апаратура."
  },
  legacy: {
    title: "06 — Наследството",
    text: "Мария Кюри умира през 1934 г. Изследванията ѝ оставят трайна следа във физиката, химията и медицината. През 1995 г. останките ѝ са пренесени в Пантеона в Париж — признание за значението на нейния принос."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("#modal");
  const title = document.querySelector("#modalTitle, #modal-title");
  const text = document.querySelector("#modalText, #modal-text");
  const closeButton = document.querySelector(
    "#closeModal, #close-modal, [data-close]"
  );
  const topicButtons = document.querySelectorAll("[data-topic]");

  if (!modal || !title || !text) {
    console.error(
      "Не са намерени елементите на прозореца. Провери ID-тата в HTML."
    );
    return;
  }

  let activeTopic = null;

  function closeModal() {
    modal.classList.remove("active", "open", "show");
    modal.setAttribute("aria-hidden", "true");
    activeTopic = null;
  }

  function openModal(topic, button) {
    const content = topics[topic];

    if (!content) {
      console.error("Няма съдържание за темата:", topic);
      return;
    }

    title.textContent = content.title;
    text.textContent = content.text;

    modal.classList.add("active");
    modal.classList.remove("open", "show");
    modal.setAttribute("aria-hidden", "false");

    activeTopic = topic;
  }

  topicButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const topic = button.dataset.topic;

      if (activeTopic === topic) {
        closeModal();
      } else {
        openModal(topic, button);
      }
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
});
