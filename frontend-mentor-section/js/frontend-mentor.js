gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !==1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  }) 
  gsap.fromTo('.hero-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: '-200',
      end: '200',
      scrub: true,
      // markers: true
    }
  }) 
}


let itemsLeft = gsap.utils.toArray('.left')

// rdy
itemsLeft.forEach(item => {
  gsap.fromTo(item, { x: 0, y: 0, rotation: 0, opacity: 0 }, {
    opacity: 1, x: -50, y: -50, rotation: -5,
    scrollTrigger: {
      trigger: item,
      start: '-850',
      end: '-400',
      scrub: true,
      // markers: true
    }
  })
})

// rdy
itemsLeft.forEach(item => {
  gsap.fromTo(item, { opacity: 1, x: -50, y: -50, rotation: -5 }, {
    opacity: 0, x: -100, y: -100, rotation: -10,
    scrollTrigger: {
      trigger: item,
      start: '-300',
      end: '0',
      scrub: true,
      // markers: true
    }
  })
})


let itemsRight = gsap.utils.toArray('.right')
 
itemsRight.forEach(item => {
  gsap.fromTo(item, { x: 0, y: 0, rotation: 0, opacity: 0 }, {
    opacity: 1, x: 50, y: -50, rotation: 5,
    scrollTrigger: {
      trigger: item,
      start: '-850',
      end: '-400',
      scrub: true,
      // markers: true
    }
  })
})

itemsRight.forEach(item => {
  gsap.fromTo(item, { opacity: 1, x: 50, y: -50, rotation: 5 }, {
    opacity: 0, x: 100, y: -100, rotation: 10,
    scrollTrigger: {
      trigger: item,
      start: '-350',
      end: '0',
      scrub: true,
      // markers: true
    }
  })
})


let itemsCenter = gsap.utils.toArray('.center')
 
itemsCenter.forEach(item => {
  gsap.fromTo(item, { x: 0, y: 0, rotation: 0, opacity: 0 }, {
    opacity: 1, x: 0, y: -50, rotation: 0,
    scrollTrigger: {
      trigger: item,
      start: '-850',
      end: '-400',
      scrub: true,
      // markers: true
    }
  })
})

itemsCenter.forEach(item => {
  gsap.fromTo(item, { opacity: 1, x: 0, y: -50, rotation: 0 }, {
    opacity: 0, x: 0, y: -100, rotation: 0,
    scrollTrigger: {
      trigger: item,
      start: '-300',
      end: '0',
      scrub: true,
      // markers: true
    }
  })
})