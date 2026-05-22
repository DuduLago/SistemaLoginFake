function login() {
    let user = document.getElementById("user").value;
    let senha = document.getElementById("senha").value;
    let contaAd = "admin";

    if (user === contaAd && senha === contaAd) {
        document.getElementById("titulo").innerText = "Bem-vindo, Admin!";
        document.getElementById("user").style.display = "none";
        document.getElementById("senha").style.display = "none";
        document.getElementById("Login").style.display = "none";
    } else {
        document.getElementById("titulo").innerText = "Usuário ou senha incorretos. Tente novamente.";
    }
}