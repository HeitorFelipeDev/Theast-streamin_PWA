// LOGIN
const form = document.querySelector("#form-login");
const buttonLogin = document.querySelector("#button-login");
const messageError = document.querySelector(".message-error-login");

form.addEventListener("submit", (e) => {
    const validLogin = {
        email: "theast@gmail.com",
        senha: "theast123"
    }

    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    if (email != validLogin.email || senha != validLogin.senha) {
        e.preventDefault();

        messageError.classList.remove("d-none");
    }
})

const buttonVerSenha = document.querySelector("#button-ver-senha");

buttonVerSenha.addEventListener("click", verSenha)

function verSenha() {
    let senha = document.getElementById('senha');

    if (senha.type === 'password') {
        senha.type = 'text';
    } else {
        senha.type = 'password';
    }

    buttonVerSenha.classList.toggle("fa-eye");
}