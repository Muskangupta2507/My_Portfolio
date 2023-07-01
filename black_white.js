const themeToggle = document.getElementById('theme-toggle-btn');
const themeStylesheet = document.getElementById('theme-stylesheet');
themeToggle.addEventListener('click', function () {
 
  if (themeStylesheet.getAttribute('href') === 'Lighttheme.css') {
    themeStylesheet.setAttribute('href', 'Blackwhite.css');
  } else {
    themeStylesheet.setAttribute('href', 'Lighttheme.css');
  }

  if (contentElement.className === 'light-theme') {
    contentElement.className = 'dark-theme';
  } else {
    contentElement.className = 'light-theme';
  }

 

});

const handleCheckbox = () => {
  const themeToggleSwitch = document.getElementById('switch-toggle');
  if (themeToggleSwitch.checked) {
    contentElement.className = 'dark-theme';
    themeStylesheet.setAttribute('href', 'Blackwhite.css');
  } else {
    contentElement.className = 'light-theme';
    themeStylesheet.setAttribute('href', 'Lighttheme.css');
  }
}


// Toggle btn for different media
const togglebtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown_nav');

togglebtn.onclick = function (){
  dropdownMenu.classList.toggle('open');
  const isOpen = dropdownMenu.classList.contains('open');

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}