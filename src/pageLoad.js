import { welcome } from "./pages/welcome";

const pageLoad = () => {
    const content = document.querySelector('#content');

    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "LOGO";

    const navbar = document.createElement('div');
    navbar.classList.add("navbar");

    const navbar_list = document.createElement('ul');
    let navbar_items = ['Welcome', 'Menu', 'Location', 'Reservation'];
    for (let i = 0; i < navbar_items.length; i++) {
        let navbar_element = document.createElement('li');
        //Add text
        // navbar_element.textContent = navbar_items[i];
        navbar_element.innerHTML = `<a href="#" class="navbar_links">${navbar_items[i]}</a>`;
        //Add class
        navbar_element.classList.add("navbar-item");
        navbar_list.appendChild(navbar_element);
    }

    
    content.appendChild(logo);
    content.appendChild(navbar);

    navbar.appendChild(navbar_list);

    const page = document.createElement('div');
    page.classList.add("page");
    page.textContent = "This is the page content container. If this is visible, then the right content is not displayed.";
    content.appendChild(page);

    document.querySelectorAll(".navbar_links").forEach((element) => {
        element.addEventListener("click", function() {
            //Clears preexisting content
            document.querySelector(".page").innerHTML = "";

            //Adds new content
            appendContent(page, this.textContent);
        })
    })


}

const appendContent = (parent, content) => {
    const page_content = document.createElement('div');
    page_content.classList.add("page_content");
    page_content.textContent = `This is the page for ${content}`;
    parent.appendChild(page_content);
}

export default pageLoad;