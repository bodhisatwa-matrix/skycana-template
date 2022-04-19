let selected_option = "";
let mapIsZommedIn = false;

const body = document.querySelector("body");
const flightPath = document.querySelector(".flight-path");
const plane = document.querySelector("#plane");

const window_shutters = document.querySelectorAll(".window-shutter");
const choose_option = document.querySelector(".zoomed-in");
const world_map = document.querySelector(".world-map");
const world_map_heading = document.querySelector(".world-map__heading");
const world_map_options = document.querySelectorAll("#world-map__option");
const world_map_img = document.querySelector(".world-map__map-img");
const nurestra_flota_container = document.querySelector(".nuestra-flota");

const first_window = document.querySelector('#Path_511_first_window');
const first_window_line = document.querySelector('#Line_11_first_window');
const second_window = document.querySelector('#Path_511_second_window');
const second_window_line = document.querySelector('#Line_11_second_window');
const third_window = document.querySelector('#Path_511_third_window');
const third_window_line = document.querySelector('#Line_11_third_window');
const shutter_image1 = document.querySelector('#Vuelos_Actuales_Open');
const shutter_image2 = document.querySelector('#Destinos_Open');
const shutter_image3 = document.querySelector('#Flota_Open');


/** Hover Animation on Sutter Buttons */
shutter_image1.addEventListener('mouseover', function () {
    first_window.setAttribute("d", "M0,0H434.544V145.361H0Z");
    first_window_line.setAttribute("transform", "translate(208.29 122.211)");
});
shutter_image2.addEventListener('mouseover', function () {
    second_window.setAttribute("d", "M0,0H434.544V145.361H0Z");
    second_window_line.setAttribute("transform", "translate(208.29 122.211)");
});
shutter_image3.addEventListener('mouseover', function () {
    third_window.setAttribute("d", "M0,0H434.544V145.361H0Z");
    third_window_line.setAttribute("transform", "translate(208.29 122.211)");
});

shutter_image1.addEventListener('mouseout', function () {
    first_window.setAttribute("d", "M0,0H434.544V475.361H0Z");
    first_window_line.setAttribute("transform", "translate(208.29 452.211)");
});

shutter_image2.addEventListener('mouseout', function () {
    second_window.setAttribute("d", "M0,0H434.544V475.361H0Z");
    second_window_line.setAttribute("transform", "translate(208.29 452.211)");
});

shutter_image3.addEventListener('mouseout', function () {
    third_window.setAttribute("d", "M0,0H434.544V475.361H0Z");
    third_window_line.setAttribute("transform", "translate(208.29 452.211)");
});

/******************************************************************************/

window_shutters.forEach(item => {
    item.addEventListener("mouseover", e => {
        if (e.target.id === 'vuelos-shutter') {
            first_window.setAttribute("d", "M0,0H434.544V145.361H0Z");
            first_window_line.setAttribute("transform", "translate(208.29 122.211)");
        } else if (e.target.id === 'destinos-shutter') {
            second_window.setAttribute("d", "M0,0H434.544V145.361H0Z");
            second_window_line.setAttribute("transform", "translate(208.29 122.211)");
        } else if (e.target.id === 'flota-shutter') {
            third_window.setAttribute("d", "M0,0H434.544V145.361H0Z");
            third_window_line.setAttribute("transform", "translate(208.29 122.211)");
        }
        // gsap.to(`#${e.target.id}`, {
        //     opacity: 0,
        //     duration: 1,
        // })
    })
    item.addEventListener("mouseout", e => {
        if (e.target.id === 'vuelos-shutter') {
            first_window.setAttribute("d", "M0,0H434.544V475.361H0Z");
            first_window_line.setAttribute("transform", "translate(208.29 452.211)");
        } else if (e.target.id === 'destinos-shutter') {
            second_window.setAttribute("d", "M0,0H434.544V475.361H0Z");
            second_window_line.setAttribute("transform", "translate(208.29 452.211)");
        } else if (e.target.id === 'flota-shutter') {
            third_window.setAttribute("d", "M0,0H434.544V475.361H0Z");
            third_window_line.setAttribute("transform", "translate(208.29 452.211)");
        }
        // gsap.to(`#${e.target.id}`, {
        //     opacity: 1,
        //     duration: 1,
        // })
    })

    item.addEventListener("click", e => {
        switch (e.target.id) {
            case "Path_441":
            case "Path_442":
            case "Path_443":
            case "Rectangle_21":
            case "Path_511_first_window":
            case "Line_11_first_window":
            case "vuelos-shutter":
                // selected_option = e.target.id;
                selected_option = "vuelos-shutter";
                choose_option.style.display = "none";
                world_map_heading.innerHTML = "Vuelos en tiempo real";
                // gsap.to(".world-map__vuelos-pane", { attr: { src: "./Assets/Images/Vuelos_Actuales_Open.png" } })
                smallFirstWindowMouseOver();
                gsap.from(".world-map", { opacity: 0 })
                gsap.to(".world-map", { opacity: 1, display: "block", duration: 2 })
                gsap.to(".world-map__map-img", { opacity: 1, duration: 1 });
                gsap.to(".nuestra-flota", { opacity: 0, display: "none", duration: 2 })
                break;
            case "Group_22":
            case "Group_21":
            case "Path_465":
            case "Rectangle_25":
            case "Path_511_second_window":
            case "Line_11_second_window":
            case "second_window_rect":
            case "destinos-shutter":
                // selected_option = e.target.id;
                selected_option = "destinos-shutter";
                choose_option.style.display = "none";
                world_map_heading.innerHTML = "Nuestros destinos";
                // gsap.to(".world-map__destinos-pane", { attr: { src: "./Assets/Images/Destinos_Open.png" } })
                smallSecondWindowMouseOver();
                gsap.from(".world-map", { opacity: 0 })
                gsap.to(".world-map", { opacity: 1, display: "block", duration: 2 })
                gsap.to(".world-map__map-img", { opacity: 1, duration: 1 });
                gsap.to(".nuestra-flota", { opacity: 0, display: "none", duration: 2 })
                break;
            case "Path_445":
            case "Path_446":
            case "Path_447":
            case "Rectangle_23":
            case "Path_511_third_window":
            case "Line_11_third_window":
            case "third_window_rect":
            case "flota-shutter":
                // selected_option = e.target.id;
                selected_option = "flota-shutter";
                choose_option.style.display = "none";
                world_map_heading.innerHTML = "Nuestra flota";
                // gsap.to(".world-map__flota-pane", { attr: { src: "./Assets/Images/Flota_Open.png" } })
                smallThirdWindowMouseOver();
                gsap.from(".world-map", { opacity: 0 })
                gsap.to(".world-map", { opacity: 1, display: "block", duration: 2 })
                gsap.to(".world-map__map-img", { opacity: 0, duration: 1 });
                gsap.to(".nuestra-flota", { opacity: 1, display: "block", duration: 2 })
                break;
            default:
                console.log("Something Went wrong");
                break;
        }
    })
})


var clickedButton = 0;
world_map_options.forEach(item => {
    const phrase = item.classList[0].split("__")[1].split("-")[0];
    const phrase_capital = phrase[0].toUpperCase() + phrase.substring(1);
    item.addEventListener("mouseover", e => {
        if (selected_option.split("-")[0] !== phrase) {
            if(phrase_capital === 'Vuelos') {
                smallFirstWindowMouseOver();
            } else if(phrase_capital === 'Destinos') {
                smallSecondWindowMouseOver();
            } else if(phrase_capital === 'Flota') {
                smallThirdWindowMouseOver();
            } else {
                console.log('somthing went wrong! on small shutter window mouse over');
            }
            // gsap.from(`.${item.classList[0]}`, { opacity: 0.5 })
            // gsap.to(`.${item.classList[0]}`, { opacity: 1, attr: { src: `./Assets/Images/${phrase_capital}_Open.png` }, duration: 2 })
        }
    });
    item.addEventListener("mouseout", e => {
        if (selected_option.split("-")[0] !== phrase) {
            // gsap.from(`.${item.classList[0]}`, { opacity: 0.5 })
            // gsap.to(`.${item.classList[0]}`, { opacity: 1, attr: { src: `./Assets/Images/${phrase_capital}_Closed.png` }, duration: 2 })
            if(phrase_capital === 'Vuelos') {
                smallFirstWindowMouseOut();
            } else if(phrase_capital === 'Destinos') {
                smallSecondWindowMouseOut();
            } else if(phrase_capital === 'Flota') {
                smallThirdWindowMouseOut();
            } else {
                console.log('somthing went wrong! on small shutter window mouse out');
            }
        }
    })
    item.addEventListener("click", e => {
        if (selected_option.split("-")[0] !== phrase) {
            const isVisible = document.getElementsByClassName('world-map__map-img-zoom')[0].style.display;
            // const temp_option = e.target.classList[0].split("__")[1].split("-")[0] + "-shutter";
            const temp_option = item.classList[0].split("__")[1].split("-")[0];
            switch (temp_option) {
                // case "vuelos-shutter":
                case "vuelos":
                    // selected_option = temp_option;
                    selected_option = "vuelos-shutter";
                    world_map_heading.innerHTML = "Vuelos en tiempo real";
                    smallFirstWindowMouseOver();
                    smallSecondWindowMouseOut();
                    smallThirdWindowMouseOut();
                    // gsap.to(".world-map__vuelos-pane", { attr: { src: "./Assets/Images/Vuelos_Actuales_Open.png" } })
                    // gsap.to(".world-map__destinos-pane", { attr: { src: "./Assets/Images/Destinos_Closed.png" } })
                    // gsap.to(".world-map__flota-pane", { attr: { src: "./Assets/Images/Flota_Closed.png" } })
                    gsap.to(".world-map__map-img", { opacity: 1, duration: 1 });
                    gsap.to(".nuestra-flota", { opacity: 0, display: "none", duration: 2 });
                    if (isVisible == 'block') {
                        showFirstWindow();
                    }
                    clickedButton = 1;
                    if (mapIsZommedIn) showLocations();
                    hideDestinationPoins();
                    break;
                // case "destinos-shutter":
                case "destinos":
                    hideLocations()
                    // selected_option = temp_option;
                    selected_option = "destinos-shutter";
                    world_map_heading.innerHTML = "Nuestros destinos";
                    smallFirstWindowMouseOut();
                    smallSecondWindowMouseOver();
                    smallThirdWindowMouseOut();
                    // gsap.to(".world-map__vuelos-pane", { attr: { src: "./Assets/Images/Vuelos_Actuales_Closed.png" } })
                    // gsap.to(".world-map__destinos-pane", { attr: { src: "./Assets/Images/Destinos_Open.png" } })
                    // gsap.to(".world-map__flota-pane", { attr: { src: "./Assets/Images/Flota_Closed.png" } })
                    gsap.to(".world-map__map-img", { opacity: 1, duration: 1 });
                    gsap.to(".nuestra-flota", { opacity: 0, display: "none", duration: 2 });
                    if (isVisible == 'block') {
                        showSecondWindow();
                    }
                    clickedButton = 2;
                    if (mapIsZommedIn) showDestinationPoints();
                    hidePlane();
                    break;
                // case "flota-shutter":
                case "flota":
                    hideLocations();
                    // selected_option = temp_option;
                    selected_option = "flota-shutter";
                    world_map_heading.innerHTML = "Nuestra flota";
                    smallThirdWindowMouseOver();
                    smallFirstWindowMouseOut();
                    smallSecondWindowMouseOut();
                    // gsap.to(".world-map__vuelos-pane", { attr: { src: "./Assets/Images/Vuelos_Actuales_Closed.png" } })
                    // gsap.to(".world-map__destinos-pane", { attr: { src: "./Assets/Images/Destinos_Closed.png" } })
                    // gsap.to(".world-map__flota-pane", { attr: { src: "./Assets/Images/Flota_Open.png" } })
                    gsap.to(".world-map__map-img", { opacity: 0, duration: 1 });
                    gsap.to(".nuestra-flota", { opacity: 1, display: "block", duration: 2 });
                    // gsap.to(".world-map__destination-point__nuestros-destinos, .destination_text__nuestros-destinos", { opacity: 0, display: "none", duration: 2 });
                    // gsap.to(".world-map__destination-point, .destination_text", { opacity: 0, display: "none", duration: 2 });
                    hideDestinationPoins();
                    hidePlane()
                    break;
                default:
                    console.log("Something Went wrong");
                    break;
            }
        }
    })
});

// ************************ PLANE SLIDER *******************************
var slider_right_arrow = document.querySelector(".nuestra-flota__right-arrow");
var slider_left_arrow = document.querySelector(".nuestra-flota__left-arrow");
var plane_slider_img = document.querySelector(".nuestra-flota__all-planes__plane-slider__single-plane")
var active_plane = 1;

function onArrowClick(event) {
    if (event.target.id === "left" && active_plane > 1) {
        active_plane = Math.ceil(active_plane - 1);
    }
    if (event.target.id === "right" && active_plane < 5) {
        active_plane = Math.ceil(active_plane + 1);
    }
    const fromProps = {
        opacity: 0.5,
    }
    const toProps = {
        attr: {
            src: `./Assets/Images/Planes/0${active_plane}.png`,
        },
        opacity: 1,
        duration: 0.005,
    }
    gsap.from(".nuestra-flota__all-planes__plane-slider__single-plane", fromProps)
    gsap.to(".nuestra-flota__all-planes__plane-slider__single-plane", toProps);

    if (active_plane > 2 && event.target.id === "right") {
        gsap.to(".nuestra-flota__all-planes__plane-slider", {
            top: "34%",
            duration: 0.01,
            ease: Circ.easeOut
        });
    }
    if (active_plane < 3 && event.target.id === "left") {
        gsap.to(".nuestra-flota__all-planes__plane-slider", {
            top: "32%",
            duration: 0.01,
            ease: Circ.easeOut
        });
    }
    if (active_plane > 4 && event.target.id === "right") {
        gsap.to(".nuestra-flota__all-planes__plane-slider", {
            rotation: -4,
            duration: 0.01,
            ease: Circ.easeOut,
            top: "36%",
        });
    }
    if (active_plane < 5 && event.target.id === "left") {
        gsap.to(".nuestra-flota__all-planes__plane-slider", {
            rotation: 0,
            duration: 0.01,
            ease: Circ.easeOut,
            top: "33%"
        });
    }
}

slider_left_arrow.addEventListener('click', onArrowClick);
slider_right_arrow.addEventListener('click', onArrowClick);

// *********************************************************************


// *********************** FLIGHT INFORMATION POPUPS *******************
var extra_info_buttons = document.querySelectorAll(".nuestra-flota__plus-buttons img");
var info_btn_one = document.querySelector(".nuestra-flota__plus-buttons__one");
var info_btn_two = document.querySelector(".nuestra-flota__plus-buttons__two");
var info_btn_three = document.querySelector(".nuestra-flota__plus-buttons__three");
var info_btn_four = document.querySelector(".nuestra-flota__plus-buttons__four");

var seats_popup = document.querySelector(".nuestra-flota__plus-icon-popups__seats");

function clickOnPlusHandler(event) {
    // console.log(event.target.id);
    if (event.target.id === "one") {
        // console.log(event.target.id);
        gsap.to('.asienton_pop_up', { opacity: 1, autoAlpha: 1 });
        cloudShiftRight();
    }
    if (event.target.id === "two") {
        gsap.to('.rango_de_vuelo_pop_up', { opacity: 1, autoAlpha: 1 });
        cloudShiftRight();
    }
    if (event.target.id === "three") {
        gsap.to('.metros_de_largo_pop_up', { opacity: 1, autoAlpha: 1 });
        cloudShiftRight();
    }
    if (event.target.id === "four") {
        gsap.to('.de_capacided_pop_up', { opacity: 1, autoAlpha: 1 });
        cloudShiftRight();
    }
}
extra_info_buttons.forEach(btn => {
    btn.addEventListener("click", clickOnPlusHandler);
})
// *********************************************************************

// *********************** REAL TIME FLIGHT INFORMATION *******************
/** 
 * Function for reading json file from assets
*/
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
// *************************************************

var jsonData = {};
var locations = [];
var planes = [];
var city_images = [];
var world_map__map_border = document.querySelectorAll(".world-map__map-border")[0];
var world_map__destination_point = document.querySelectorAll(".world-map__destinations");
readTextFile("Assets/data/SkyCanaXP-DataModel.json", function (text) {
    var data = JSON.parse(text);
    jsonData = JSON.parse(text);
    // rendering locations in map related code here
    jsonData.Locations.forEach(_l => {
        const location_point = new LocationPoint(_l.x, _l.y, _l.id, _l.name);
        location_point.render();
        const destination_point = new DestinationPoint(_l.x, _l.y, _l.id, _l.name);
        destination_point.render();
    })
    // ********************************************

    Object.keys(data).forEach(key => {
        if (key == 'Locations') {
            if (Array.isArray(data['Locations'])) {
                this.locations = data['Locations'];
            } else {
                console.log("Locations should be an array!");
            }
        } else if (key == 'planes') {
            if (Array.isArray(data['planes'])) {
                this.planes = data['planes'];
            } else {
                console.log("planes should be an array!");
            }
        } else if (key == 'image_urls') {
            if (Array.isArray(data['image_urls'])) {
                this.city_images = data['image_urls'];
            } else {
                console.log("image_urls should be an array!");
            }
        } else {
            // console.log("no data found!")
        }
    });
});

// function for map zoom in feature
function mapZoomIn() {
    if (!mapIsZommedIn && selected_option !== 'flota-shutter') {
        gsap.from(".world-map__map-img", { opacity: 0 });
        gsap.to(".world-map__map-img", {
            attr: { src: "./Assets/Images/Mask Group Zoom.png" },
        })
        gsap.to(".world-map__map-img", { opacity: 1, duration: 0.5, delay: 0.5 })
        mapIsZommedIn = true;
    }
}
function showLocations() {
    if (selected_option === "vuelos-shutter") {
        gsap.from(".world-map__destinations", { opacity: 0 })
        gsap.to(".world-map__destinations", { opacity: 1, display: "block", duration: 5, delay: 1 })
        gsap.to(".location-point", { display: "block", duration: 0.1 })
        gsap.to(".location-point__city-name", { display: "block", duration: 0.1 })
    }
}
function hideLocations() {
    gsap.to(".location-point", { display: "none", duration: 0.1 });
    gsap.to(".location-point__city-name", { display: "none", duration: 0.1 });


}
// click on the world map zoomes on the map
let click = true;
world_map__map_border.addEventListener('click', function () {
    mapZoomIn();
    if (selected_option === "vuelos-shutter") showLocations();
    if (selected_option === "destinos-shutter") showDestinationPoints();
});

function showFirstWindow() {
    gsap.to(".world-map__destination-point, .destination_text", { opacity: 1, autoAlpha: 1, duration: 1, display: "block" });
    gsap.to(".world-map__destination-point__nuestros-destinos, .destination_text__nuestros-destinos", { opacity: 0, display: "none", duration: 1, autoAlpha: 0 });
}
function showSecondWindow() {
    gsap.to(".world-map__destination-point, .destination_text", { opacity: 0, display: "none", duration: 1, autoAlpha: 0 });
    gsap.to(".world-map__destination-point__nuestros-destinos, .destination_text__nuestros-destinos", { opacity: 1, duration: 1, display: "block", autoAlpha: 1 });
}

function cityClick() {
    gsap.to('.plane-name__pop-up', { ease: 'none', autoAlpha: 1, display: 'block' });
}
function citySecondWindowClick() {
    // gsap.to('.city-data__pop-up', { ease: 'none', autoAlpha: 1, display: 'block' });
}
var plane_name__pop_up = document.querySelectorAll('.plane-name__pop-up')[0];
plane_name__pop_up.addEventListener('click', function () {
    gsap.to('.plane-name__pop-up', { ease: 'none', autoAlpha: 0, display: 'block' });
});

// *********************************************************************

// *********************** DYNAMIC CITY POPUP WITH IMAGE SLIDERS *******************

function populateCityPopUp(id) {
    let city_data = {};
    let images = [];
    let data = jsonData;
    city_data = {
        name: data['city-name'],
        code: data['city-code']
    }
    Object.keys(jsonData).forEach(key => {
        if (key == 'image_urls') {
            if (data[key].length) {
                if (data['image_urls']) {
                    for (const img of data['image_urls']) {
                        let image = {
                            "url": img.image
                        };
                        images.push(image);
                    }
                }
            }
        }
    });
    var slider_dot = document.getElementsByClassName('slider-dot')[0];
    var img__slider = document.getElementsByClassName("img__slider")[0];
    slider_dot.setAttribute('style', 'text-align:center');
    let j = 1;
    // console.log(images.length);
    for (const i of images) {
        var span = document.createElement('span');
        var city_data_img = document.createElement('div');
        city_data_img.setAttribute('class', 'city-data__img fade');
        var img = document.createElement("img");
        img.src = i.url;
        img.setAttribute('class', 'slider__img');
        city_data_img.append(img);
        span.setAttribute('class', 'dot');
        if (j == 1) {
            span.setAttribute('class', 'dot active');
        }
        span.addEventListener('onclick', function () {
            sliderClick(j);
        });
        slider_dot.append(span);
        img__slider.append(city_data_img);
        j++;
    }
    gsap.to('.city-data__pop-up', { ease: 'none', autoAlpha: 1, display: 'block' });
    showSlides(1);
}

function sliderClick(i) {
    currentSlide(i);
}

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("city-data__img");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// *********************************************************************
// ******************* Plus Icon click *********************************

var destination = document.querySelectorAll('.world-map__destination-point__nuestros-destinos');
destination.forEach(des => {
    des.addEventListener('click', function () {
        alert("Ok")
    });
})

// *********************************************************************

var airport = new Airport();
function takeOff(e) {
    if (selected_option === "vuelos-shutter" && mapIsZommedIn) {
        airport.getFromAndToPoints(e);
        const plane = new FlyingPlane(airport.from, airport.to);
        if (airport.from && airport.to) {
            plane.fly();
        } else {
            plane.land();
        }
    }
}

//  ui related functions***********************************************
function showDestinationPoints() {
    var timeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    timeline.to(".destination-point", {
        opacity: 1,
        display: "block",
        duration: 0.5,
    });
    timeline.to(".destination-point__city-name", {
        opacity: 1,
        display: "block",
        duration: 0.5,
    });
}
function hideDestinationPoins() {
    var timeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    timeline.to(".destination-point", {
        opacity: 0,
        display: "none",
        duration: 0.5,
    });
    timeline.to(".destination-point__city-name", {
        opacity: 0,
        display: "none",
        duration: 0.5,
    });
}
function hidePlane() {
    var timeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    timeline.to(".flight-path-container", {
        display: "none",
        duration: 0.1,
    });
    timeline.to("#plane", {
        display: "none",
        duration: 0.1,
    })
}
//******************************************************************* */

// *********************** utility classes *****************************
function LocationPoint(x, y, id, cityName) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.cityName = cityName;

    //   render on dom
    this.render = function () {
        var parentDiv = document.createElement("div");
        parentDiv.classList.add("location-point-parent")

        var div = document.createElement("div");
        div.classList.add("location-point");
        div.setAttribute('onclick', "takeOff(event)")

        var p = document.createElement("p");
        var text = document.createTextNode(this.cityName);
        p.classList.add("location-point__city-name");
        p.appendChild(text);

        parentDiv.appendChild(p)

        div.id = id;
        div.style.left = (this.x - 10) + "px";
        div.style.top = (this.y - 10) + "px";

        p.id = id;
        p.style.left = (this.x + 20) + "px";
        p.style.top = (this.y - 10) + "px";

        parentDiv.appendChild(div);
        document.querySelector(".world-map__destinations").appendChild(parentDiv);
    };
}

function FlyingPlane(from, to) {
    this.from = from;
    this.to = to;
    this.planeElement = document.querySelector("#plane");
    this.flightPathElement = document.querySelector(".flight-path");
    this.flying = false;

    this.fly = function () {
        if (this.from && this.to) {
            var distance = calculateDistance(this.to, this.from);
            let rx = 100;
            let ry = 90;
            // if two points distance less then 200
            if (distance < 200) {
                rx = 30;
                ry = 20;
            }
            flightPath.setAttribute(
                "d",
                // `M${from.x},${from.y} A100,90 0 1,1 ${to.x},${to.y}`
                `M${from.x},${from.y} A${rx},${ry} 0 1,1 ${to.x},${to.y}`
            );
            document.querySelector(".flight-path-container").style.display = "block";
            // plane.style.offsetPath = `path('M${from.x},${from.y} A100,90 0 1,1 ${to.x},${to.y}')`;
            plane.style.offsetPath = `path('M${from.x},${from.y} A${rx},${ry} 0 1,1 ${to.x},${to.y}')`;
            plane.style.transform = "translateY(-25px)";
            plane.style.display = "block";
            this.flying = true;
        }
    };
    this.land = function () {
        flightPath.setAttribute("d", "");
        document.querySelector(".flight-path-container").style.display = "none";
        plane.style.offsetPath = ``;
        plane.style.transform = "translateY(0px)";
        plane.style.display = "none";
        this.flying = false;
    };
}

function calculateDistance(to, from) {
    var sqrY = Math.pow(to.y - from.y, 2);
    var sqrX = Math.pow(to.x - from.x, 2);
    var total = sqrY + sqrX;
    return Math.sqrt(total);
}

function Airport() {
    this.from = null;
    this.to = null;
    this.getFromAndToPoints = function (e) {
        const { pageX, pageY } = e;
        if ((!this.from && !this.to) || (this.from && this.to)) {
            this.from = { x: pageX, y: pageY };
            this.to = null;
        } else if (this.from && !this.to) {
            this.to = { x: pageX, y: pageY };
        } else if (!this.from && this.to) {
            this.from = { x: pageX, y: pageY };
            this.to = null;
        } else {
            this.from = null;
            this.to = null;
        }
        console.log("from", this.from);
        console.log("to", this.to);
    };
}

function DestinationPoint(x, y, id, cityName) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.cityName = cityName;

    this.render = function () {
        var parentDiv = document.createElement("div");

        var p = document.createElement("p");
        var text = document.createTextNode(this.cityName);
        p.classList.add("destination-point__city-name");
        p.appendChild(text);

        var img = document.createElement("img");
        img.setAttribute('src', "./Assets/Images/destination-point.png");
        img.classList.add("destination-point");
        img.setAttribute('onclick', `populateCityPopUp(${this.id})`);

        img.id = `des-${id}`;
        img.style.left = (this.x - 10) + "px";
        img.style.top = (this.y - 10) + "px";

        p.id = `des-${id}`;
        p.style.left = (this.x - 5) + "px";
        p.style.top = (this.y + 25) + "px";

        parentDiv.appendChild(img);
        parentDiv.appendChild(p);

        document.querySelector(".world-map__destinations__nuestros-destinos").appendChild(parentDiv);
    }
}

// *********** end of utility classes ***********************************

/****************Close plane page pop up****************/

var video_pop_up = document.getElementsByClassName('video_pop_up')[0];
var metros_de_largo_pop_up = document.getElementsByClassName('metros_de_largo_pop_up')[0];
var de_capacided_pop_up = document.getElementsByClassName('de_capacided_pop_up')[0];
var rango_de_vuelo_pop_up = document.getElementsByClassName('rango_de_vuelo_pop_up')[0];
var asienton_pop_up = document.getElementsByClassName('asienton_pop_up')[0];
var nuestra_flota__final_popup = document.querySelector('.nuestra-flota__final-popup');
var city_data__header = document.querySelector('.city-data__header');
// var world_map__map_border = document.getElementsByClassName('world-map__map-border')[0];
video_pop_up.addEventListener('click', function () {
    gsap.to('.video_pop_up', { opacity: 0, autoAlpha: 0, duration: 1 });
    gsap.to('.nuestra-flota__final-popup', { opacity: 1, display: 'block' });
});
metros_de_largo_pop_up.addEventListener('click', function () {
    gsap.to('.metros_de_largo_pop_up', { opacity: 0, autoAlpha: 0 });
    cloudShiftToOriginal();
});
de_capacided_pop_up.addEventListener('click', function () {
    gsap.to('.de_capacided_pop_up', { opacity: 0, autoAlpha: 0 });
    cloudShiftToOriginal();
});
rango_de_vuelo_pop_up.addEventListener('click', function () {
    gsap.to('.rango_de_vuelo_pop_up', { opacity: 0, autoAlpha: 0 });
    cloudShiftToOriginal();
});
asienton_pop_up.addEventListener('click', function () {
    gsap.to('.asienton_pop_up', { opacity: 0, autoAlpha: 0 });
    cloudShiftToOriginal();
});
var fisrtClick = 1;
world_map__map_border.addEventListener('click', function () {
    if (selected_option === "flota-shutter") {
        fisrtClick = 1;
        gsap.to('.video_pop_up', { opacity: 1, autoAlpha: 1 });
    } else if (selected_option === "vuelos-shutter") {
        if (fisrtClick != 1) {
            cityClick();
        }
        fisrtClick++;

    }
});
nuestra_flota__final_popup.addEventListener('click', function () {
    gsap.to('.nuestra-flota__final-popup', { opacity: 0, display: 'none' });
});
city_data__header.addEventListener('click', function () {
    var slider_dot = document.querySelector('.slider-dot');
    var img__slider = document.getElementsByClassName("img__slider")[0];
    slider_dot.innerHTML = "";
    img__slider.innerHTML = "";
    // img__slider.remove();
    gsap.to('.city-data__pop-up', { opacity: 0, display: 'none' });
});
function cloudShiftRight() {
    gsap.to('.nuestra-flota__clouds__top', { left: '32%', duration: 1 });
    gsap.to('.nuestra-flota__clouds__bottom', { right: '30%', duration: 1 });
}
function cloudShiftToOriginal() {
    gsap.to('.nuestra-flota__clouds__top', { left: '26%', duration: 1 });
    gsap.to('.nuestra-flota__clouds__bottom', { right: '35%', duration: 1 });
}

/*******************************************************/

/****** functions and query selector for small shutter window animation */
const small_first_window = document.querySelector('#Path___484');
const small_first_window_line = document.querySelector('#Line___3');
const small_second_window = document.querySelector('#Rectangle_i3');
const small_second_window_line = document.querySelector('#Line_i3');
const small_third_window = document.querySelector('#Rectangle__3');
const small_third_window_line = document.querySelector('#Line__3');
/**
 * first window default value
 * Path__484:- d="M0,0H175.7V201.532H0Z" to d="M0,0H175.7V51.532H0Z" and Line___3:- transform="translate(67.296 160.928)" to translate(67.296 20.928)"
 * * second window default value
 * Rectangle_i3:- height(199.119) to height(54.119) and Line_i3:- transform="translate(67.614 158.131)" to transform="translate(67.614 24.131)"
 * * * third window default value
 * Rectangle__3:- height(202.208) to height(52.208) and Line__3:- transform="translate(68.867 164.178)" to transform="translate(68.867 24.178)"
 */
function smallFirstWindowMouseOver() {
    small_first_window.setAttribute("d","M0,0H175.7V57.532H0Z");
    small_first_window_line.setAttribute("transform", "translate(67.296 20.928)");
}
function smallFirstWindowMouseOut() {
    small_first_window.setAttribute("d","M0,0H175.7V201.532H0Z");
    small_first_window_line.setAttribute("transform", "translate(67.296 160.928)");
}
function smallSecondWindowMouseOver() {
    small_second_window.setAttribute("height", "62.119");
    small_second_window_line.setAttribute("transform", "translate(67.614 24.131)");
}
function smallSecondWindowMouseOut() {
    small_second_window.setAttribute("height", "199.119");
    small_second_window_line.setAttribute("transform", "translate(67.614 158.131)");
}
function smallThirdWindowMouseOver() {
    small_third_window.setAttribute("height", "58.208");
    small_third_window_line.setAttribute("transform", "translate(68.867 24.178)");
}
function smallThirdWindowMouseOut() {
    small_third_window.setAttribute("height", "202.208");
    small_third_window_line.setAttribute("transform", "translate(68.867 164.178)");
}
/****************************************************************************/