const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random()*15)+1;


let heading = 'ВСКРОЙ СЕЙФ';
let i = 0;
let speed = 100;
function type() {
    if(i < heading.length) {
        document.querySelector('h1').textContent += heading.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();


input.addEventListener('keypress', function(e) {
    if (e.key === "Enter")
    play();
})

button.addEventListener('click',play);

function play() {
    const userNumber = document.querySelector('#guess').value;
    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Введи число от 1 до 15!',
            confirmButtonColor: '#636164',
            background: '#fff url(key1.png)',
        })
    }
    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Ой!',
            text: 'Нужно ввести число!',
            confirmButtonColor: '#636164',
            background: '#fff url(key1.png)',
        })
    }
    else {
        if (userNumber < answer) {
            Swal.fire({
                title:'Попробуй число ПОБОЛЬШЕ',
                text:'Сейф не взломан',
                confirmButtonColor: '#636164',
                background: '#fff url(key2.png)',
            })
        }
        else if (userNumber > answer) {
            Swal.fire({
                title:'Попробуй число поменьше',
                text:'Сейф не взломан',
                confirmButtonColor: '#636164',
                background: '#fff url(key2.png)',
            })
        }
        else {
            Swal.fire({
                title: 'СЕЙФ ОТКРЫТ!',
                text: "У ТЕБЯ ПОЛУЧИЛОСЬ!",
                imageUrl: 'open.jpg',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'BankVault',
                background: 'rgba(188, 177, 171, 0.90)',
                color: '#630606',
                confirmButtonColor: '#636164',
            })
        }
    }
    input.value = '';
}