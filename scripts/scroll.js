//scrollnav
const navlinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'home';
window.addEventListener('scroll',()=>{
  sectionEls.forEach(sectionEl => {
    if(window.scrollY >= (sectionEl.offsetTop -50)){
      currentSection = sectionEl.id;
    }
  });

  navlinkEls.forEach(navlinkEl => {
    if(navlinkEl.href.includes(currentSection)){
      document.querySelector('.active').classList.remove('active');
      navlinkEl.classList.add('active');
    }
  });
});