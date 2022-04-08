let selected_option = "";
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
            const temp_option = e.target.classList[0].split("__")[1].split("-")[0] + "-shutter";
            switch (temp_option) {
                case "vuelos-shutter":
                    selected_option = temp_option;
                    world_map_heading.innerHTML = "Vuelos en tiempo real";
                    gsap.to(".world-map__vuelos-pane", { attr: { src: "./Assets/Images/Vuelos_Actuales_Open.png" } })
                    gsap.to(".world-map__destinos-pane", { attr: { src: "./Assets/Images/Destinos_Closed.png" } })
                    gsap.to(".world-map__flota-pane", { attr: { src: "./Assets/Images/Flota_Closed.png" } })
                    gsap.to(".world-map__map-img", { opacity: 1, duration: 1 });
                    gsap.to(".nuestra-flota", { opacity: 0, display: "none", duration: 2 })
                    break;
                case "destinos-shutter":
                    selected_option = temp_option;
                    world_map_heading.innerHTML = "Nuestros destinos";
                    gsap.to(".world-map__vuelos-pane", { attr: { src: "./Assets/Images/Vuelos_Actuales_Closed.png" } })
                    gsap.to(".world-map__destinos-pane", { attr: { src: "./Assets/Images/Destinos_Open.png" } })
                    gsap.to(".world-map__flota-pane", { attr: { src: "./Assets/Images/Flota_Closed.png" } })
                    gsap.to(".world-map__map-img", { opacity: 1, duration: 1 });
                    gsap.to(".nuestra-flota", { opacity: 0, display: "none", duration: 2 })
                    break;
                case "flota-shutter":
                    selected_option = temp_option;
                    world_map_heading.innerHTML = "Nuestra flota";
                    gsap.to(".world-map__vuelos-pane", { attr: { src: "./Assets/Images/Vuelos_Actuales_Closed.png" } })
                    gsap.to(".world-map__destinos-pane", { attr: { src: "./Assets/Images/Destinos_Closed.png" } })
                    gsap.to(".world-map__flota-pane", { attr: { src: "./Assets/Images/Flota_Open.png" } })
                    gsap.to(".world-map__map-img", { opacity: 0, duration: 1 });
                    gsap.to(".nuestra-flota", { opacity: 1, display: "block", duration: 2 })
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
    console.log(event.target.id);
    if (event.target.id === "one") {

    }
    if (event.target.id === "two") {

    }
    if (event.target.id === "three") {

    }
    if (event.target.id === "four") {

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
var locations;
var planes;
readTextFile("Assets/data/SkyCanaXP-DataModel.json", function (text) {
    var data = JSON.parse(text);
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
        } else {
            console.log("no data found!")
        }
    });
});
var world_map__map_border = document.querySelectorAll(".world-map__map-border")[0];
var world_map__destination_point = document.getElementsByClassName("world-map__destination-point");


world_map__map_border.addEventListener('click', function () {
    var timeline = gsap.timeline({ duration: 1 });

    timeline.to('.world-map__map-img-zoom', { ease: 'none', autoAlpha: 1, display: 'block' })
    timeline.to('.world-map__map-img', { ease: 'none', autoAlpha: 0, display: 'none' })
    // timeline.from('.world-map__destinations', { ease: 'none', autoAlpha: 1 }, '<2');
    // timeline.from('.map__destinations', { ease: 'none', autoAlpha: 1 }, '<2');
    var i = 0;
    locations.forEach(location => {
        if (i == 0) {
            var div = document.createElement('h4');
            div.className = "destination_text";
            div.innerHTML = location.name;
            var x = location.x;
            var y = location.y;
            var city_name = location.name;
            var el = document.getElementById('map__destinations');
            el.appendChild(div);
            el.style.left = x + 'px';
            el.style.top = y + 'px';
        } else {
            var div = document.createElement('div');
            div.id = 'map__destinations' + i;
            var x = location.x;
            var y = location.y;
            var city_name = location.name;
            div.className = 'world-map__destinations';
            div.innerHTML = '<div class="world-map__destination-point"><h4 class="destination_text">' + city_name + '</h4></div>';
            document.body.appendChild(div);
            var el = document.getElementById(div.id);
            el.style.left = x + 'px';
            el.style.top = y + 'px';
        }
        i++;
    });
    planes.forEach(plane => {
        // //create plane path
        var from = plane.from;
        var to = plane.to;
        var fromData = locations.find(o => o.id == from);
        var toData = locations.find(o => o.id == to);
        if(fromData && toData) {

            // var div = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            // div.id = 'plane_line_' + plane.id;
            // // div.innerHTML = "<line></line>";
            // document.getElementsByClassName('real-time__planes')[0].appendChild(div);
            var plane__line = document.getElementsByClassName('real-time__planes')[0];
            var newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            newPath.setAttribute('id', plane.id);
            newPath.setAttribute('d', "M960,291 Q 75,70 170,25 1170,460");
            // newLine.setAttribute('x1', fromData.x);
            // newLine.setAttribute('y1', fromData.y);
            // newLine.setAttribute('x2', toData.x);
            // newLine.setAttribute('y2', toData.y);
            newPath.setAttribute("stroke", "#00B5BA");
            newPath.setAttribute("stroke-width", 5);
            newPath.setAttribute("stroke-dasharray", "10");
            plane__line.appendChild(newPath);
        }
    })
});

function drawLine(x1, x2, y1, y2) {
    console.log("Ok");
    const canvas = document.querySelector('#plane__line');
    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// *********************************************************************