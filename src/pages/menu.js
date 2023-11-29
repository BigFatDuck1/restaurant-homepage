
const menu = () => {
    const menu_page = document.createElement("div");
    menu_page.classList.add("menu_page");

    for (let item in menu_object) {
        let new_item = menuItem(menu_object[item].name, menu_object[item].description);
        menu_page.appendChild(new_item);
    }

    return menu_page;
}

const menuItem = (name, description) => {

    const menu_item = document.createElement("div");
    menu_item.classList.add("menu_item");

    const menu_title = document.createElement("h2");
    menu_title.classList.add("menu_title");
    menu_title.textContent = name;

    const menu_description = document.createElement("p");
    menu_description.classList.add("menu_description");
    menu_description.textContent = description;

    menu_item.appendChild(menu_title);
    menu_item.appendChild(menu_description);

    return menu_item;



}

let menu_object = {
    burger: {
        name: "Bypass Burger",
        description: "Fried chicken, fried egg, fried bacon, fried cheese, fried onion, fried lettuce, fried tomato, fried bun, all fried with the finest lard to fry your coronary arteries."
    },
    steak: {
        name: "Steroid Steak",
        description: "Made with top tier cattle raised on trenbolone, steroids and antibiotics. Topped with pepper, cajun spices, and of course a healthy topping of creatine and whey protein."
    },
    taco: {
        name: "Narcos Tacos",
        description: "Spices form the backbone of this dish - this is so good that it'll make you go 'I'm cumin!'. The other backbone that makes this dish so good is of course the cocaine."
    },
    fries: {
        name: "Beer-battered Fish and Chips",
        description: "Instead of just beer, we use industrial-grade methanol to give our fish that kick - why settle for a food coma when you can end up in a real coma?"
    },
    milkshake: {
        name: "Malignant Milkshake",
        description: "Congress has ruled that our signature milkshake is a vegetable, because it is made with high fructose corn syrup and 100% pure vegetable oil. That's right, that's two groups of vegetables in just one power drink. Along with vegetables, it also has all the macronutrients - fat from the butter, protein from the milk and ice-cream, carbohydrates from all the sugar...if this doesn't send you to the dialysis ward, we'll definitely give you your money back."
    },
}

export { menu };