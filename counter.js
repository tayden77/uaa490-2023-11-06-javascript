document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#b1').addEventListener('click', count)
    document.querySelector('#b2').addEventListener('click', count)
});

let counter = 0
function count() {
    counter++;
    const header = document.querySelector('h1');
    header.innerHTML = counter;
}