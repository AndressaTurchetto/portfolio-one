const form = document.querySelector("form");
const nome = document.getElementById("name");
const email = document.getElementById("email");
const assunto = document.getElementById("subject");
const mensagem = document.getElementById("message");

const typed = new Typed('.multiplos-textos', {
    strings: ['Desenvolvedora Front-end', 'Programadora'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

function checkInputs () {
    const items = document.querySelectorAll('.item');

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Entre com um e-mail válido."
        } else {
            errorTxtEmail.innerText = "O campo não pode ficar em branco."
        }
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!nome.classList.contains("error") && !email.classList.contains("error") && !assunto.classList.contains("error") && !mensagem.classList.contains("error")) {
        alert("Enviado com sucesso!");

        form.reset();
        return false;
    }
})