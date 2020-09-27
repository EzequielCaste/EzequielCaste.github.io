const menu = document.getElementById('menu');

const hide = () => {    
  menu.classList.toggle('hidden')
}

const myFunction = () => {
 
  if (innerWidth <= 520 && !menu.classList.contains('hidden')){    
    menu.classList = ' hidden';
  } 
  innerWidth > 520 ?
   menu.classList.remove('hidden') :
   null
}

myFunction();

window.addEventListener("resize", myFunction);

