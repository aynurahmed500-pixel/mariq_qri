
const topics = {
    early: {
        title: "01 — Ранните години",
        text: "Мария Склодовска е родена на 7 ноември 1867 г. във Варшава. Още от малка проявява силен интерес към науката. Тъй като възможностите за висше образование на жените в родината ѝ са ограничени, тя посещава нелегални образователни занятия, преди да замине за Париж."
    },

    paris: {
        title: "02 — Париж и Сорбоната",
        text: "През 1891 г. Мария пристига в Париж и започва да учи физика и математика в Сорбоната. Живее скромно, но се посвещава на обучението си. Там среща физика Пиер Кюри, за когото се омъжва през 1895 г."
    },

    discovery: {
        title: "03 — Полоний и радий",
        text: "Мария и Пиер Кюри изследват радиоактивността. През 1898 г. обявяват откриването на два нови химични елемента — полоний и радий. Техните изследвания допринасят за развитието на науката за радиоактивните вещества."
    },

    nobel: {
        title: "04 — Нобеловите награди",
        text: "През 1903 г. Мария Кюри получава Нобелова награда за физика заедно с Пиер Кюри и Анри Бекерел. През 1911 г. получава Нобелова награда за химия за изследванията си върху радия и полония. Тя е първата жена, удостоена с Нобелова награда."
    },

    war: {
        title: "05 — Науката по време на война",
        text: "По време на Първата световна война Мария Кюри помага за организирането на мобилни рентгенови установки. Те позволяват на медицинските екипи да откриват счупвания и да локализират чужди тела при ранените войници. Тя обучава и хора да работят с апаратурата."
    },

    legacy: {
        title: "06 — Наследството",
        text: "Мария Кюри умира през 1934 г. Научната ѝ работа оставя трайна следа във физиката, химията и медицината. През 1995 г. останките ѝ са пренесени в Пантеона в Париж в знак на признание за нейния принос."
    }
};

const poster = document.querySelector(".poster");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalLabel = document.getElementById("modalLabel");
const modalNumber = document.getElementById("modalNumber");

let activeTopic = null;

function openTopic(topic, button) {
    const content = topics[topic];

    if (!content) {
        return;
    }

    // Повторното натискане на същия номер затваря листчето.
    if (activeTopic === topic && !modal.hidden) {
        closeModal();
        return;
    }

    modalTitle.textContent = content.title;
    modalText.textContent = content.text;
    modalLabel.textContent = "МАРИЯ КЮРИ · БИОГРАФИЯ";
    modalNumber.textContent = "НАУЧЕН ПОРТРЕТ № " +
        button.textContent.trim();

    // Листчето се позиционира спрямо самия плакат.
    poster.appendChild(modal);
    modal.hidden = false;

    activeTopic = topic;

    document.querySelectorAll("[data-topic]").forEach(item => {
        item.classList.toggle("selected", item === button);
    });
}

function closeModal() {
    modal.hidden = true;
    activeTopic = null;

    document.querySelectorAll("[data-topic]").forEach(button => {
        button.classList.remove("selected");
    });
}

// Отваряне на листчетата с номера 01–06.
document.querySelectorAll("[data-topic]").forEach(button => {
    button.addEventListener("click", () => {
        openTopic(button.dataset.topic, button);
    });
});

// Затваряне чрез × или натискане върху фона.
document.querySelectorAll("[data-close]").forEach(element => {
    element.addEventListener("click", closeModal);
});

// Затваряне с Escape.
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) {
        closeModal();
    }
});
