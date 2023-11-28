
const menu = () => {
    const menu_page = document.createElement("div");
    menu_page.classList.add("menu_page");
    menu_page.textContent = "Menu";

    return menu_page;
}

export { menu };