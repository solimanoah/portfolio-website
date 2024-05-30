const secretButton = document.getElementById('secret_button');

const secretText = document.getElementById('secret_text_id');

const secretTextAppear = () => {
    secretText.classList.toggle('secret_text');
    if (secretButton.innerHTML === 'SECRET ABOUT ME!') {
        secretButton.innerHTML = 'HIDE SECRET!';
    } else {
        secretButton.innerHTML = 'SECRET ABOUT ME!';
    };
};



// secretButton.onclick = secretTextAppear;

secretButton.addEventListener("click", secretTextAppear);

secretButton.onmousedown = function() {
    secretButton.style.backgroundColor = 'orange';
};

secretButton.onmouseup = function() {
    secretButton.style.backgroundColor = 'red';
};