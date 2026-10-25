
const topics = {
    early: {
        number: "01 / РАННИ ГОДИНИ",
        title: "От Варшава към голямата мечта",
        text: "Мария Склодовска е родена на 7 ноември 1867 г. във Варшава. Въпреки ограниченията пред образованието на жените в Руската империя, тя продължава да учи. Участва в тайни образователни инициативи, свързани с полската култура и наука. По-късно работи като гувернантка, за да помогне на сестра си Бронислава да завърши медицина."
    },

    paris: {
        number: "02 / ОБРАЗОВАНИЕ",
        title: "Студентка в Сорбоната",
        text: "През 1891 г. Мария заминава за Париж и започва обучението си във Факултета по науки на Сорбоната. През 1893 г. завършва физика, а през 1894 г. — математика. През 1894 г. се запознава с физика Пиер Кюри. Те се женят през 1895 г. и започват съвместна научна работа."
    },

    discovery: {
        number: "03 / ОТКРИТИЯ",
        title: "Полоний, радий и радиоактивност",
        text: "Мария изследва излъчването на урана и установява, че то е свързано със свойствата на самия атом. Тя въвежда термина „радиоактивност“. През 1898 г. Мария и Пиер Кюри обявяват откриването на два нови елемента — полоний, наречен в чест на Полша, и радий. Изолирането и изследването на радия изискват години упорита лабораторна работа."
    },

    nobel: {
        number: "04 / ПРИЗНАНИЕ",
        title: "Две Нобелови награди",
        text: "През 1903 г. Мария Кюри получава Нобелова награда по физика заедно с Пиер Кюри и Анри Бекерел за изследванията върху радиационните явления. През 1911 г. получава Нобелова награда по химия за работата си върху радия и полония. Тя е първата жена Нобелов лауреат и първият човек, получил награди в две различни научни области."
    },

    war: {
        number: "05 / НАУКА В ПОМОЩ",
        title: "Малките Кюри",
        text: "По време на Първата световна война Мария организира мобилни рентгенови кабинети, които помагат на лекарите да откриват куршуми и други травми при ранените. Тези превозни средства стават известни като „Малките Кюри“. Тя участва и в обучението на жени за работа с рентгенова апаратура."
    },

    legacy: {
        number: "06 / НАСЛЕДСТВО",
        title: "Отвъд границите на времето",
        text: "Мария Кюри умира на 4 юли 1934 г. от апластична анемия, свързана с продължителното ѝ излагане на йонизиращо лъчение. Научните ѝ изследвания имат трайно влияние върху физиката, химията и медицината. През 1995 г. останките на Мария и Пиер Кюри са пренесени в Пантеона в Париж."
    }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalLabel = document.getElementById("modalLabel");
const modalNumber = document.getElementById("modalNumber");

let activeTopic = null;
let previousFocus = null;

function openTopic(key, button) {
    // Повторното натискане върху същия номер затваря прозореца.
    if (!modal.hidden && activeTopic === key) {
        closeModal();
        return;
    }

    const topic = topics[key];

    if (!topic) return;

    previousFocus = button;
    activeTopic = key;

    modalLabel.textContent = "МАРИЯ КЮРИ / ИСТОРИЯ";
    modalTitle.textContent = topic.title;
    modalText.textContent = topic.text;
    modalNumber.textContent = topic.number;

    modal.hidden = false;
    document.body.style.overflow = "hidden";

    modal.querySelector(".modal-close").focus();
}

function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    activeTopic = null;

    if (previousFocus) {
        previousFocus.focus();
    }
}

document.querySelectorAll("[data-topic]").forEach(button => {
    button.addEventListener("click", () => {
        openTopic(button.dataset.topic, button);
    });
});

modal.querySelectorAll("[data-close]").forEach(element => {
    element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) {
        closeModal();
    }
});

