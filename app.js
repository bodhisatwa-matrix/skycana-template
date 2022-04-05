const window_shutters = document.querySelectorAll(".window-shutter");
window_shutters.forEach(item => {
    item.addEventListener("mouseover", e => {
        gsap.to(`#${e.target.id}`,{
            transform : "translateY(-280px)",
            duration : 1,
        })
    })
    item.addEventListener("mouseout" , e => {
        gsap.to(`#${e.target.id}`,{
            transform : "translateY(0px)",
            duration : 1,
        })
    })
})