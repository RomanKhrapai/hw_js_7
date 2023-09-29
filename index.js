//2-------------------------------------------------------------------------
const buttonTask2 = document.getElementById("bt-task-2");
const inputTask2 = document.getElementById("in-task-2");

const changeInputTask2 = (e) => {
    e.preventDefault();
    inputTask2.value = "Hello, World!";
};
buttonTask2.addEventListener("click", changeInputTask2);

//3-------------------------------------------------------------------------
const buttonTask3 = document.getElementById("bt-task-3");
const inputTask3 = document.getElementById("in-task-3");

const changeInputTask3 = (e) => {
    e.preventDefault();
    console.log(inputTask3.value);
    inputTask3.value = "";
};
buttonTask3.addEventListener("click", changeInputTask3);

//4-------------------------------------------------------------------------
const buttonTask4 = document.getElementById("bt-task-4");
const title1Task4 = document.getElementById("title-1-task-4");
const title2Task4 = document.getElementById("title2-task-4");

const changeInputTask4 = (e) => {
    e.preventDefault();

    const title = title1Task4.textContent;
    title1Task4.innerHTML = title2Task4.textContent;
    title2Task4.innerHTML = title;
};
buttonTask4.addEventListener("click", changeInputTask4);

//5-------------------------------------------------------------------------
const buttonTask5 = document.getElementById("bt-task-5");
const textTask5 = document.getElementById("text-task-5");

const changeColorTextTask5 = (e) => {
    e.preventDefault();
    textTask5.classList.toggle("text-task5");
};
buttonTask5.addEventListener("click", changeColorTextTask5);

//6-------------------------------------------------------------------------
const buttonTask6 = document.getElementById("bt-task-6");
const inputTask6 = document.getElementById("in-task-6");

const blockInputTask6 = (e) => {
    e.preventDefault();
    inputTask6.disabled = !inputTask6.disabled;
};
buttonTask6.addEventListener("click", blockInputTask6);

//7-------------------------------------------------------------------------
const squares = document.querySelector(".flex-box");

const changecolorSquares = (e) => {
    if (e.target.id === "second-square" || e.target.id === "first-square") {
        for (const child of e.currentTarget.children) {
            child.classList.toggle("square-green");
            child.classList.toggle("square-red");
        }
    }
};
squares.addEventListener("click", changecolorSquares);

//8-------------------------------------------------------------------------
const list = document.querySelector(".list");
const buttonTask8 = document.getElementById("bt-task-8");

const addItemInList = () => {
    const element = document.createElement("li");

    if (list.children.length === 0) {
        element.innerHTML = 1;
    } else {
        element.textContent =
            +list.children[list.children.length - 1].textContent + 1;
    }

    list.appendChild(element);
};

buttonTask8.addEventListener("click", addItemInList);

//9-------------------------------------------------------------------------
const listTask9 = document.querySelector(".list-task-9");
const buttonTask9 = document.getElementById("bt-task-9");
const text = document.getElementById("in-task-9");

const addItemInListFromArea = (e) => {
    e.preventDefault();
    const arr = text.value.split(", ");
    listTask9.innerHTML = arr.map((item) => `<li>${item}</li>`).join("");
};

buttonTask9.addEventListener("click", addItemInListFromArea);

//10-------------------------------------------------------------------------
const refs = {
    login: document.getElementById("login"),
    mail: document.getElementById("mail"),
    age: document.getElementById("age"),
    password: document.getElementById("password"),
    password2: document.getElementById("password2"),
    submit: document.getElementById("submit"),
    form: document.querySelector(".form-register"),
};

const validation = {
    login: (str) => {
        if (str.length <= 4) return "логін занадто короткий";
        if (str.length >= 20) return "логін занадто довгий";
        if (/[. _ / \\ |]/g.test(str))
            return `не має включати символы . _ / \\ | `;
        return "";
    },
    mail: (str) => {
        if (str?.trim().length === 0) return "Введіть пошту";
        const arr = str.split("@");
        if (arr.length !== 2 || arr[1].split(".").length !== 2)
            return "повинен бути формат text@text.text";
        return "";
    },
    age: (num) => {
        if (num.trim() === "") return "Введіть число";
        if (!Number.isFinite(+num)) return "може бути лише числом";
        if (+num <= 0) return "повинне бути більше нуля";
        return "";
    },
    password: (str) => {
        if (!str?.trim()) return "пароль не може бути пустим";
        if (str.length < 6) return "має бути більше 6 символів";
        if (!(str.toLowerCase() === str))
            return "має бути хоча б одна велика буква";
        if (!str.split("").some((e) => Number.isFinite(+e) && e !== " "))
            return "має бути хоч одна цифра";
        return "";
    },
    password2: (str1, str2) => {
        if (str1 !== str2) return "паролі не сходяться";
        return "";
    },
};
const checkForm = (e) => {
    e.preventDefault();
    [...document.querySelectorAll(".error-text")].forEach((elem) =>
        elem.remove()
    );
    const errors = {
        login: { ref: refs.login, value: "" },
        mail: { ref: refs.mail, value: "" },
        age: { ref: refs.age, value: "" },
        password: { ref: refs.password, value: "" },
        password2: { ref: refs.password2, value: "" },
    };

    errors.login.value = validation.login(refs.login.value);
    errors.mail.value = validation.mail(refs.mail.value);
    errors.age.value = validation.age(refs.age.value);
    errors.password.value = validation.password(refs.password.value);
    errors.password2.value = validation.password2(
        refs.password2.value,
        refs.password.value
    );

    for (key in errors) {
        if (errors[key].value !== "") {
            errors[key].ref.classList.add("input-error");
            const element = document.createElement("span");
            element.innerText = errors[key].value;
            element.classList.add("error-text");
            errors[key].ref.after(element);
        } else {
            errors[key].ref.classList.remove("input-error");
        }
    }
    if (
        !errors.login.value &&
        !errors.mail.value &&
        !errors.age.value &&
        !errors.password.value &&
        !errors.password2.value
    ) {
        refs.form.reset();
    }
};

submit.addEventListener("click", checkForm);

//11-------------------------------------------------------------------------

const calc = document.querySelector(".calc");
const screen = document.querySelector(".calc_area");
const state = {
    num1: "",
    op: "",
    num2: "",
    C: function () {
        this.num1 = "";
        this.op = "";
        this.num2 = "";
    },
    "*": (a, b) => {
        writeScreen(a * b);
    },
    "/": (a, b) => {
        writeScreen(b == 0 ? "на нуль не ділять" : a / b);
    },
    "-": (a, b) => {
        writeScreen(a - b);
    },
    "+": (a, b) => {
        writeScreen(a + b);
    },
};
const calcClick = (e) => {
    const id = e.target.dataset.id;
    const type = e.target.dataset.type;

    if (id === "C") {
        state[id]();
    }

    if (state.op === "") {
        if (id === "." && state.num1 !== "-") {
            state.num1 = state.num1.length > 0 ? state.num1 + id : "0" + id;
        } else if (type === "number") {
            state.num1 += id;
        } else if (state.num1 === "" && id === "-") {
            state.num1 = id;
        } else if (
            type === "operant" &&
            state.num1 !== "-" &&
            state.num1.length > 0
        ) {
            state.op = id;
        }
    } else {
        if (id === "." && state.num2 !== "-" && state.num2.length > 0) {
            state.num2 += id;
        } else if (state.op !== "" && state.num2 === "" && id === "-") {
            state.num2 = id;
        } else if (state.op !== "" && type === "number") {
            state.num2 += id;
        }
    }

    if (type === "result" && state.num2 !== "-" && state.num2.length > 0) {
        state[state.op](+state.num1, +state.num2);
        state.C();
    } else {
        const str = state.num1 + state.op + state.num2;
        writeScreen(str === "" ? "0" : str);
    }
};
const writeScreen = (str) => {
    screen.innerHTML = str;
};
calc.addEventListener("click", calcClick);

//12------------------------------------------------------------------------------
const priceList = [
    { name: "Вишня", id: "1" },
    { name: "Яблоко", id: "2" },
    { name: "Кавун", id: "3" },
    { name: "Диня", id: "4" },
    { name: "Кокос", id: "5" },
    { name: "Апельсин", id: "6" },
];

const refs12 = {
    openModalBtn: document.querySelector("[data-modal-open-cart]"),
    closeModalBtn: document.querySelector("[data-cart-close]"),
    modal: document.querySelector("[data-modal-cart]"),
    shop: document.querySelector(".shop"),
    cart: document.querySelector(".cart"),
};

let shopCart = [];

refs12.shop.innerHTML = priceList
    .map(
        (item) =>
            `<li class="shop-item">${item.name} 
         <button class="shop-item-btn-to-cart"
         data-id="${item.id}">
         add to cart</button></li>`
    )
    .join("");

const renderCartList = () => {
    if (shopCart.length === 0) {
        refs12.cart.innerHTML = "В корзині відсутні товари!!!";
        return;
    }

    const items = shopCart
        .map(
            (item) => `<li class="shop-item">${item.name} 
</li>`
        )
        .join("");

    refs12.cart.innerHTML = ` <ol class="shop">
      ${items}
      </ol><button class="shop-item-btn-to-cart"
      data-clearCart='true'>
      Очистити корзину</button>`;
};

const addItemToCart = (e) => {
    if (!e.target?.dataset.id) return;

    shopCart.push(priceList.find((elem) => elem.id === e.target.dataset.id));
    renderCartList();
};

const clearCart = (e) => {
    if (!e.target?.dataset.clearcart) return;
    shopCart = [];
    renderCartList();
};

const toggleModal = () => {
    document.body.classList.toggle("modal-open");
    refs12.modal.classList.toggle("is-hidden");
    renderCartList();
};

refs12.openModalBtn.addEventListener("click", toggleModal);
refs12.closeModalBtn.addEventListener("click", toggleModal);
refs12.shop.addEventListener("click", addItemToCart);
refs12.modal.addEventListener("click", clearCart);
