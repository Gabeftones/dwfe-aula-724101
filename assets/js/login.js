import { usuario } from "./bd";

const email = usuario.email;
const senha = usuario.senha;

function verificarCredenciais(){
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

if(emailInformado == email){
    alert("Email informado corretamente");
    if(senhaInformada == senha){
        alert("Senha informada corrretamente");
    }
    else{
    alert("Senha informada incorretamente");
}
}
 else
    alert("email informado incorretamente");
}

document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("button");
    botao.addEventListener("click", (e) => {
        e.preventDefault();
        verificarCredenciais();
    })
})