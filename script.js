
const c3d = document.querySelector(".container-3d"),
  i3d = c3d.querySelector(".item-3d");

c3d.addEventListener('mousemove', ev => {
  const self = ev.target;
  const rotX = 90 - ev.offsetX / self.offsetWidth * 100;
  const rotY = 90 - ev.offsetY / self.offsetHeight * 100;
  
 
  
  i3d.style.transform = `rotateX(${rotY}deg) rotateY(${rotX}deg)`;
  i3d.style.transformStyle = 'preserve-3d';
})
