// let btn = document.getElementById('clrbtn')

// btn.addEventListener('click', function (e){
//     document.querySelector('body').style.backgroundColor = 'blue';
//     document.querySelector('title').t = 'Home';
// })

let btn = document.getElementById('clrbtn');

btn.addEventListener('click', function (e) {
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('h1').style.color = 'red'; // Change text color to red
    document.querySelector('h1').textContent = 'Home'; // Update the title text
});

let submit_btn = document.getElementById('smtbtn');
submit_btn.addEventListener('click', function (e) {
    let name_input = document.getElementById('name-input').value;
    document.getElementById('h2-output').textContent = `Your name is ${name_input}`;
});



