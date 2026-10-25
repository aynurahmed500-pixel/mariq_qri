
const facts = {
    polonium: {
        title: "Полоний — Po",
        text: "През 1898 г. Мария и Пиер Кюри откриват полония. Мария го нарича в чест на родината си Полша."
    },

    radium: {
        title: "Радий — Ra",
        text: "През 1898 г. двамата учени откриват и радия — радиоактивен химичен елемент, който става важен за последващите научни изследвания."
    },

    "1903": {
        title: "Нобелова награда по физика",
        text: "Мария Кюри споделя Нобеловата награда с Пиер Кюри и Анри Бекерел за изследванията им върху радиационните явления."
    },

    "1911": {
        title: "Нобелова награда по химия",
        text: "Тя получава наградата за откриването на радия и полония, изолирането на радия и изследванията на неговите свойства."
    },

    legacy: {
        title: "Научното наследство",
        text: "Мария Кюри умира през 1934 г., но работата ѝ продължава да влияе върху физиката, химията и медицината."
    }
};

const factBox = document.getElementById("factBox");
const factTitle = document.getElementById("factTitle");
const factText = document.getElementById("factText");
const closeButton = document.getElementById("closeFact");

let activeFact = null;

document.querySelectorAll("[data-fact]").forEach(button => {
    button.addEventListener("click", () => {
        const key = button.dataset.fact;

        // Ако натиснем същия елемент, скриваме информацията.
        if (activeFact === key && !factBox.hidden) {
            closeFact();
            return;
        }

        activeFact = key;

        factTitle.textContent = facts[key].title;
        factText.textContent = facts[key].text;

        factBox.hidden = false;
        factBox.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });
});

function closeFact() {
    factBox.hidden = true;
    activeFact = null;
}

closeButton.addEventListener("click", closeFact);

