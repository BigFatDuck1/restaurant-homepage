
const reservation = () => {
    const reservation_page = document.createElement("div");
    reservation_page.classList.add("reservation_page");
    reservation_page.textContent = "Fill in your details for reservation";

    return reservation_page;
}

export {reservation};