
const reservation = () => {
    const reservation_page = document.createElement("div");
    reservation_page.classList.add("reservation_page");

    const form = document.createElement("form");
    form.classList.add("reservation_form");
    form.action = "";
    form.method = "post";
    
    let name = document.createElement("input");
    name.id = "name";
    name.name = "name";
    name.type = "text";
    name.required = true;
    name.placeholder = "Name";

    let number = document.createElement("input");
    number.id = "number";
    number.name = "number";
    number.type = "tel";
    number.required = true;
    number.placeholder = "Phone Number";

    let seats = document.createElement("input");
    seats.id = "seats";
    seats.name = "seats";
    seats.type = "number";
    seats.required = true;
    seats.placeholder = "Number of Seats";

    let date = document.createElement("input");
    date.id = "date";
    date.name = "date";
    date.type = "date";
    date.required = true;

    let time = document.createElement("input");
    time.id = "time";
    time.name = "time";
    time.type = "time";
    time.required = true;

    let additional_requests = document.createElement("textarea");
    additional_requests.id = "additional_requests";
    additional_requests.name = "additional_requests";
    additional_requests.placeholder = "Additional Requests";
    
    let submit = document.createElement("button");
    submit.id = "submit";
    submit.type = "submit";
    submit.textContent = "Submit";

    let form_elements = [name, number, seats, date, time, additional_requests, submit];

    for (let element of form_elements) {
        form.appendChild(element);
    }

    reservation_page.appendChild(form);

    return reservation_page;
}

export {reservation};