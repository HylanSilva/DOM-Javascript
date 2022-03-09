function changeMode (){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    head1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);

}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        head1.innerHTML = darkMode +" ON";
        return;
    }
    button.innerHTML = darkMode;
    head1.innerHTML = lightMode +" ON";
}

const button = document.getElementById('mode-selector');

const head1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

const darkModeClass = 'dark-mode';

button.addEventListener('click', changeMode)