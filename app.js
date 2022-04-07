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
        if (selected_option.split("-")[0] !== phrase){
            gsap.from(`.${item.classList[0]}`,{opacity:0.5})
            gsap.to(`.${item.classList[0]}`, {opacity : 1, attr: { src: `./Assets/Images/${phrase_capital}_Open.png` }, duration: 2 })
        }
    });
    item.addEventListener("mouseout", e => {
        if (selected_option.split("-")[0] !== phrase){
            gsap.from(`.${item.classList[0]}`,{opacity:0.5})
            gsap.to(`.${item.classList[0]}`, {opacity : 1 , attr: { src: `./Assets/Images/${phrase_capital}_Closed.png` }, duration: 2 })
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
            rotation : -4,
            duration: 0.01,
            ease: Circ.easeOut,
            top: "36%",
        });
    }
    if (active_plane < 5 && event.target.id === "left") {
        gsap.to(".nuestra-flota__all-planes__plane-slider", {
            rotation : 0,
            duration: 0.01,
            ease: Circ.easeOut,
            top : "33%"
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

function  clickOnPlusHandler(event){
    console.log(event.target.id);
    if(event.target.id === "one"){

    }
    if(event.target.id === "two"){

    }
    if(event.target.id === "three"){

    }
    if(event.target.id === "four"){

    }
}
extra_info_buttons.forEach(btn => {
    btn.addEventListener("click",clickOnPlusHandler);
})
// *********************************************************************