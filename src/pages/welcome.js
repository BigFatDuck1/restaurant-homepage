
const welcome = () => {
    const welcome_page = document.createElement("div");
    welcome_page.classList.add("welcome_page");
    welcome_page.textContent = "Welcome to the restaurant!";

    return welcome_page;
}

export {welcome};