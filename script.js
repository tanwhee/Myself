var tl = gsap.timeline()

tl.from("#nav h2",{
    y:-50,
    delay:0.4,
    opacity:0,
    duration:1,
    stagger:0.3,
})

tl.from("#nav2 h3",{
    y:-50,
    delay:-1,
    opacity:0,
    duration:1,
    stagger:0.3,
})

tl.from("#navb h2",{
    y:50,
    delay:0.4,
    opacity:0,
    duration:1,
    stagger:0.3,
})

tl.from("#nav2b h3",{
    y:50,
    delay:-1,
    opacity:0,
    duration:1,
    stagger:0.3,
})

tl.from("#main h1",{
    x:-100,
    duration:1,
    delay:0.4,
    stagger:0.3,
    opacity:0
})

tl.from("img",{
    stagger:0.5,
    rotate:180,
    x:200,
    opacity:0
})

