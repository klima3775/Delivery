

document.querySelector('.menu-btn').addEventListener('click', function (e) {
    e.preventDefault();
  
    let menu = document.querySelector('.menu');
    menu.classList.toggle('menu_active');
  
    let content = document.querySelector('.content');
    content.classList.toggle('content_active');
  });
  