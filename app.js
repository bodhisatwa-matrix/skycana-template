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

window_shutters.forEach(item => {
    item.addEventListener("mouseover", e => {
        gsap.to(`#${e.target.id}`, {
            opacity: 0,
            duration: 1,
        })
    })
    item.addEventListener("mouseout", e => {
        gsap.to(`#${e.target.id}`, {
            opacity: 1,
            duration: 1,
        })
    })

    item.addEventListener("click", e => {
        switch (e.target.id) {
            case "vuelos-shutter":
                selected_option = e.target.id;
                choose_option.style.display = "none";
                world_map_heading.innerHTML = "Vuelos en tiempo real";
                gsap.to(".world-map__vuelos-pane", { attr: { src: "./Assets/Images/Vuelos_Actuales_Open.png" } })
                gsap.from(".world-map", { opacity: 0 })
                gsap.to(".world-map", { opacity: 1, display: "block", duration: 2 })
                gsap.to(".world-map__map-img", { opacity: 1, duration: 1 });
                gsap.to(".nuestra-flota", { opacity: 0, display: "none", duration: 2 })
                break;
            case "destinos-shutter":
                selected_option = e.target.id;
                choose_option.style.display = "none";
                world_map_heading.innerHTML = "Nuestros destinos";
                gsap.to(".world-map__destinos-pane", { attr: { src: "./Assets/Images/Destinos_Open.png" } })
                gsap.from(".world-map", { opacity: 0 })
                gsap.to(".world-map", { opacity: 1, display: "block", duration: 2 })
                gsap.to(".world-map__map-img", { opacity: 1, duration: 1 });
                gsap.to(".nuestra-flota", { opacity: 0, display: "none", duration: 2 })
                break;
            case "flota-shutter":
                selected_option = e.target.id;
                choose_option.style.display = "none";
                world_map_heading.innerHTML = "Nuestra flota";
                gsap.to(".world-map__flota-pane", { attr: { src: "./Assets/Images/Flota_Open.png" } })
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
            gsap.from(`.${item.classList[0]}`, { opacity: 0.5 })
            gsap.to(`.${item.classList[0]}`, { opacity: 1, attr: { src: `./Assets/Images/${phrase_capital}_Open.png` }, duration: 2 })
        }
    });
    item.addEventListener("mouseout", e => {
        if (selected_option.split("-")[0] !== phrase) {
            gsap.from(`.${item.classList[0]}`, { opacity: 0.5 })
            gsap.to(`.${item.classList[0]}`, { opacity: 1, attr: { src: `./Assets/Images/${phrase_capital}_Closed.png` }, duration: 2 })
        }
    })
    item.addEventListener("click", e => {
        if (selected_option.split("-")[0] !== phrase) {
            const isVisible = document.getElementsByClassName('world-map__map-img-zoom')[0].style.display;
            const temp_option = e.target.classList[0].split("__")[1].split("-")[0] + "-shutter";
            switch (temp_option) {
                case "vuelos-shutter":
                    selected_option = temp_option;
                    world_map_heading.innerHTML = "Vuelos en tiempo real";
                    gsap.to(".world-map__vuelos-pane", { attr: { src: "./Assets/Images/Vuelos_Actuales_Open.png" } })
                    gsap.to(".world-map__destinos-pane", { attr: { src: "./Assets/Images/Destinos_Closed.png" } })
                    gsap.to(".world-map__flota-pane", { attr: { src: "./Assets/Images/Flota_Closed.png" } })
                    gsap.to(".world-map__map-img", { opacity: 1, duration: 1 });
                    gsap.to(".nuestra-flota", { opacity: 0, display: "none", duration: 2 });
                    if (isVisible == 'block') {
                        showFirstWindow();
                    }
                    clickedButton = 1;
                    if (mapIsZommedIn) showLocations();
                    hideDestinationPoins();
                    break;
                case "destinos-shutter":
                    hideLocations()
                    selected_option = temp_option;
                    world_map_heading.innerHTML = "Nuestros destinos";
                    gsap.to(".world-map__vuelos-pane", { attr: { src: "./Assets/Images/Vuelos_Actuales_Closed.png" } })
                    gsap.to(".world-map__destinos-pane", { attr: { src: "./Assets/Images/Destinos_Open.png" } })
                    gsap.to(".world-map__flota-pane", { attr: { src: "./Assets/Images/Flota_Closed.png" } })
                    gsap.to(".world-map__map-img", { opacity: 1, duration: 1 });
                    gsap.to(".nuestra-flota", { opacity: 0, display: "none", duration: 2 });
                    if (isVisible == 'block') {
                        showSecondWindow();
                    }
                    clickedButton = 2;
                    if (mapIsZommedIn) showDestinationPoints();
                    break;
                case "flota-shutter":
                    hideLocations();
                    selected_option = temp_option;
                    world_map_heading.innerHTML = "Nuestra flota";
                    gsap.to(".world-map__vuelos-pane", { attr: { src: "./Assets/Images/Vuelos_Actuales_Closed.png" } })
                    gsap.to(".world-map__destinos-pane", { attr: { src: "./Assets/Images/Destinos_Closed.png" } })
                    gsap.to(".world-map__flota-pane", { attr: { src: "./Assets/Images/Flota_Open.png" } })
                    gsap.to(".world-map__map-img", { opacity: 0, duration: 1 });
                    gsap.to(".nuestra-flota", { opacity: 1, display: "block", duration: 2 });
                    // gsap.to(".world-map__destination-point__nuestros-destinos, .destination_text__nuestros-destinos", { opacity: 0, display: "none", duration: 2 });
                    // gsap.to(".world-map__destination-point, .destination_text", { opacity: 0, display: "none", duration: 2 });
                    hideDestinationPoins();
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
    showLocations();
    // if (click) {
    //     // gsap.to('.world-map__map-img-zoom', { ease: 'none', autoAlpha: 1, display: 'block', duration: 0.1 })
    //     // gsap.to('.world-map__map-img', { ease: 'none', autoAlpha: 0, display: 'none', duration: 0.1 })
    //     if (clickedButton == 2) {
    //         showSecondWindow();
    //     } else {
    //         showFirstWindow();
    //     }
    //     var i = 0;
    //     var mainDiv1 = document.createElement('div');
    //     var mainDiv2 = document.createElement('div');
    //     locations.forEach(location => {
    //         if (i == 0) {
    //             /**
    //             * First Window
    //             */
    //             var div = document.createElement('h4');
    //             div.className = "destination_text";
    //             div.innerHTML = location.name;
    //             var x = location.x;
    //             var y = location.y;
    //             var city_name = location.name;
    //             var el = document.getElementById('map__destinations');
    //             el.appendChild(div);
    //             el.style.left = x + 'px';
    //             el.style.top = y + 'px';
    //             /** Second Window */
    //             var divSecond = document.createElement('h4');
    //             divSecond.className = "destination_text__nuestros-destinos";
    //             divSecond.innerHTML = location.name;
    //             var x = location.x;
    //             var y = location.y;
    //             var city_name = location.name;
    //             var el = document.getElementById('map__destinations_nuestros-destinos');
    //             el.appendChild(divSecond);
    //             el.style.left = x + 'px';
    //             el.style.top = y + 'px';
    //         } else {
    //             /**
    //              * First Window
    //              */

    //             var div = document.createElement('div');
    //             div.id = 'map__destinations' + i;
    //             var x = location.x;
    //             var y = location.y;
    //             var city_name = location.name;
    //             div.className = 'world-map__destinations';
    //             div.innerHTML = '<div class="world-map__destination-point"><h4 class="destination_text">' + city_name + '</h4></div>';
    //             div.addEventListener("click", cityClick, false);
    //             mainDiv1.append(div)
    //             document.body.appendChild(mainDiv1);
    //             var el = document.getElementById(div.id);
    //             el.style.left = x + 'px';
    //             el.style.top = y + 'px';
    //             /* Second window */

    //             // mainDiv2.setAttribute('class', 'second_window_cities');
    //             var divSecond = document.createElement('div');
    //             divSecond.id = 'map__destinations_nuestros-destinos' + i;
    //             var x = location.x;
    //             var y = location.y;
    //             var city_name = location.name;
    //             divSecond.className = 'world-map__destinations__nuestros-destinos';
    //             divSecond.innerHTML = '<div class="world-map__destination-point__nuestros-destinos"><h4 class="destination_text__nuestros-destinos">' + city_name + '</h4></div>';
    //             divSecond.addEventListener("click", function (event) {
    //                 var id = location.id;
    //                 populateCityPopUp(id);
    //             });
    //             mainDiv2.append(divSecond);
    //             document.body.appendChild(mainDiv2);
    //             var el = document.getElementById(divSecond.id);
    //             el.style.left = x + 'px';
    //             el.style.top = y + 'px';
    //         }
    //         i++;
    //     });
    //     planes.forEach(plane => {
    //         // //create plane path
    //         var from = plane.from;
    //         var to = plane.to;
    //         var fromData = locations.find(o => o.id == from);
    //         var toData = locations.find(o => o.id == to);
    //         if (fromData && toData) {

    //             // var div = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //             // div.id = 'plane_line_' + plane.id;
    //             // // div.innerHTML = "<line></line>";
    //             // document.getElementsByClassName('real-time__planes')[0].appendChild(div);
    //             var plane__line = document.getElementsByClassName('real-time__planes')[0];
    //             var newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    //             newPath.setAttribute('id', plane.id);
    //             // newPath.setAttribute('d', "M960,291 Q 75,70 170,25 1170,460");
    //             // newLine.setAttribute('x1', fromData.x);
    //             // newLine.setAttribute('y1', fromData.y);
    //             // newLine.setAttribute('x2', toData.x);
    //             // newLine.setAttribute('y2', toData.y);
    //             newPath.setAttribute("stroke", "#00B5BA");
    //             newPath.setAttribute("stroke-width", 5);
    //             newPath.setAttribute("stroke-dasharray", "10");
    //             plane__line.appendChild(newPath);
    //         }
    //     });
    //     click = false;
    // }

});
// world_map__destination_point.forEach(item => {
//     // item.addEventListener('click', function () {
//     //     gsap.to('.plane-name__pop-up', { ease: 'none', autoAlpha: 1, display: 'block' });
//     // })

// });
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
    // Object.keys(jsonData).forEach(key => {
    //     if(key == 'city-code') {
    //         if(jsonData['city-code'] == id) {
    //             data = 
    //         }
    //     }
    // });

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
                    // city_data["images"] = images;
                }
            }
        }
    });
    console.log(images)
    var slider_dot = document.getElementsByClassName('slider-dot')[0];
    var img__slider = document.getElementsByClassName("img__slider")[0];
    // var div = document.createElement('div');
    // div.setAttribute('class', 'hello');
    slider_dot.setAttribute('style', 'text-align:center');
    let j = 1;
    for (const i of images) {
        var span = document.createElement('span');
        var city_data_img = document.createElement('div');
        city_data_img.setAttribute('class', 'city-data__img fade');
        var img = document.createElement("img");
        img.src = i.url;
        img.setAttribute('class', 'slider__img');
        city_data_img.append(img);
        span.setAttribute('class', 'dot');
        span.addEventListener('onclick', function () {
            sliderClick(j);
        });
        slider_dot.append(span);
        img__slider.append(city_data_img);
        j++;
    }
    // slider_dot.append(div);
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
            flightPath.setAttribute(
                "d",
                `M${from.x},${from.y} A100,90 0 1,1 ${to.x},${to.y}`
            );
            document.querySelector(".flight-path-container").style.display = "block";
            plane.style.offsetPath = `path('M${from.x},${from.y} A100,90 0 1,1 ${to.x},${to.y}')`;
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
var city_data__pop_up = document.querySelector('.city-data__pop-up');
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
        fisrtClick=1;
        gsap.to('.video_pop_up', { opacity: 1, autoAlpha: 1 });
    } else if(selected_option === "vuelos-shutter") {
        if(fisrtClick != 1) {
            cityClick();
        }
        fisrtClick++;
        
    }
});
nuestra_flota__final_popup.addEventListener('click', function () {
    gsap.to('.nuestra-flota__final-popup', { opacity: 0, display: 'none' });
});
city_data__pop_up.addEventListener('click', function() {
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