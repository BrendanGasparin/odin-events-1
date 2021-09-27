// in an external file but can only have one onclick event
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('Button 2 clicked!');

// best method, can have multiple click event listeners
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert('Button 3 clicked!');
})