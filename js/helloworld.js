console.clear();

const tl = gsap.timeline({
  id: 'Timeline',
  repeat: 0
  // repeatDelay: 1.5
});

const colors = ['#A8CED7', '#446F99', '#DE4C4D', '#343E59'];

function tween (node) {
  let path = node;
  // Start each path animation with a random delay
  const delay = Math.random();
  // Calculate the length of the path
  const length = path.getTotalLength();
  
  // Loop on each color
  colors.forEach((color, index) => {
    let end = 0; // Used to store the end value of the tween
    let ease = 'power2.in'; // Default ease is ease-in
    
    // Create a clone for 2nd & 3rd colors
    if (index !== 0) {
      path = path.cloneNode();
      node.parentNode.appendChild(path);
    }
    
    // Define the initial values to 'hide' the paths
    tl.set(path, {
      strokeDasharray: length + 0.5,
      strokeDashoffset: length + 0.6,
      autoRound: false
    }, 0);
    
    // Assign the color to the stroke
    path.setAttribute('stroke', color);
    
    // Second path is going backward with an ease-out transition
    // So we need to set a different value for the end and ease variables
    if (index === 1) {
      end = (length + 0.5) * 2;
      ease = 'linear'
    } else if (index === 2) {
      ease = 'power2.out'
    }
    
    // Animate each path to the defined `end` value
    tl.to(path, {
      strokeDashoffset: end,
      autoRound: false,
      duration: 1,
      ease
    }, index * 0.8 + delay);
  });
}

// Query all paths and create a tween for each
window.addEventListener('load', () => {
  document.querySelectorAll('svg path').forEach(p => tween(p));
})

// Init GSAP devtools
// GSDevTools.create({
//   animation: tl
// });