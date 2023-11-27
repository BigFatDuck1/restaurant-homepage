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
        navbar_element.textContent = navbar_items[i];
        //Add class
        navbar_element.classList.add("navbar-item");
        navbar_list.appendChild(navbar_element);
    }

    navbar.appendChild(navbar_list);
    
    content.appendChild(logo);
    content.appendChild(navbar);
}

export default pageLoad;