const changUsernameButton = document.querySelector("#change-username");

changUsernameButton.addEventListener("click", () => {
    localStorage.removeItem("username");
    loadGreeting();
});