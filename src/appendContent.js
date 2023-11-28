import { welcome } from "./pages/welcome";
import { menu } from "./pages/menu";
import { location } from "./pages/location";
import { reservation } from "./pages/reservation";

const appendContent = (parent, string) => {
    let restaurant_pages = {
        "Welcome": welcome,
        "Menu": menu,
        "Location": location,
        "Reservation": reservation,
    }

    let page_content = restaurant_pages[string](); //Remember to call the function to generate the DOM Node

    parent.appendChild(page_content);

    return page_content;
}

export default appendContent; 