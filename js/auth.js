function loginUser() {
    let user = document.forms.loginform.login.value;

    if(user === "professor") {
        sessionStorage.setItem("user", 1);
        location.replace = "./sgd/home.html";
    } else if (user === "chefia") {
        sessionStorage.setItem("user", 2);
        location.href = "./sgd/home.html";
    } else if (user === "secretario") {
        sessionStorage.setItem("user", 3);
        location.href = "./sgd/home.html";
    } else alert("Usuário inválido");
}