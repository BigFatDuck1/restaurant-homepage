// import Japan from "../img/map/japan.jpg";
// import Korea from "../img/map/korea.jpg";
// import Singapore from "../img/map/sg.jpg";
// import HongKong from "../img/map/hk.jpg";
// import US from "../img/map/us.jpg";

// const myJapan = new Image();
// myJapan.src = Japan;

// const myKorea = new Image();
// myKorea.src = Korea;

// const mySingapore = new Image();
// mySingapore.src = Singapore;

// const myHongKong = new Image();
// myHongKong.src = HongKong;

// const myUS = new Image();
// myUS.src = US;

const location = () => {
    const location_page = document.createElement("div");
    location_page.classList.add("location_page");

    for (let item in location_objects) {
        let new_item = locationCard(location_objects[item].country, location_objects[item].address, location_objects[item].hours, location_objects[item].map);
        location_page.appendChild(new_item);
    }

    return location_page;
}

const locationCard = (country_param, address_param, hours_param, map_param) => {
    
    const card = document.createElement("div");
    card.classList.add("location_card");

    const map = document.createElement("img");
    map.classList.add("map");
    map.src = map_param;

    const country = document.createElement("h2");
    country.classList.add("country");
    country.textContent = country_param;

    const address = document.createElement("p");
    address.classList.add("address");
    address.textContent = address_param;

    const hours = document.createElement("p");
    hours.classList.add("hours");
    hours.textContent = hours_param;

    let card_array = [map, country, address, hours];

    for (let element of card_array) {
        card.appendChild(element);
    }

    return card;
}

const location_objects = {
    japan: {
        country: "Japan",
        address: "113 Muzuhara building, Shinjuku, Tokyo, Japan",
        hours: "9am - 10pm",
        map: "",
    },
    korea: {
        country: "Korea",
        address: "204-1, Buyeongapateu, Suseong-dong, Korea",
        hours: "9am - 12am",
        map: "",
    },
    hk: {
        country: "Hong Kong",
        address: "65 Nathan Road, Tsim Sha Tsui, Hong Kong",
        hours: "10am - 10pm",
        map: "",
    },
    sg: {
        country: "Singapore",
        address: "1 Raffles Place, Republic Plaza, Singapore",
        hours: "7am - 9pm",
        map: "",
    },
    us: {
        country: "United States",
        address: "69 Times Square, New York, United States",
        hours: "10am - 10pm",
        map: "",
    }

}

export {location};