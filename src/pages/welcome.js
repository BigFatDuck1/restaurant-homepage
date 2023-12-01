
const welcome = () => {
    const welcome_page = document.createElement("div");
    welcome_page.classList.add("welcome_page");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Dee & Em's - a taste to die for";

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = `Dee & Em's has been serving the same old classic All-American diet since 1921. 
    Eat and drink to your heart's content here - what's the point of living if you can't taste it?`;

    const quote = document.createElement("p");
    quote.classList.add("quote");
    quote.innerHTML = `"We don't eat and make money to be able to enjoy life. 
    We live to make money in order to eat.
    That is what life means, and that is what life is for." <br>
    - George Lee Mallory`;

    const image = document.createElement("div");
    image.classList.add("burger_image");

    welcome_page.appendChild(title);
    welcome_page.appendChild(description);
    welcome_page.appendChild(quote);
    welcome_page.appendChild(image);


    return welcome_page;
}

export {welcome};