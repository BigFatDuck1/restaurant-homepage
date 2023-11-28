
const location = () => {
    const location_page = document.createElement("div");
    location_page.classList.add("location_page");
    location_page.textContent = "Location: Address";

    return location_page;
}

export {location};