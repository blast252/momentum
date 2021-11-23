const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

loginForm.addEventListener("submit", (SubmitEvent) => {
    SubmitEvent.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value = "";
});

function loadGreeting() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if (savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        greeting.classList.add(HIDDEN_CLASSNAME);
    } else {
        greeting.innerText = `Hello ${savedUsername}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
        loginForm.classList.add(HIDDEN_CLASSNAME);
    }
}

loadGreeting();