let button = document.querySelector('#button');

button.addEventListener('click', clickMe);


function clickMe() {
    button.textContent = Number(button.textContent) + 1;

    if (button.textContent == 5) {
        button.textContent = 4
        alert("STOP PRESSING ME");
        button.removeEventListener('click', clickMe)
    }
}