function createMenu() {
    if(sessionStorage.getItem("user")) {
        switch(sessionStorage.getItem("user")) {
            case "1":
                createMenuProfessor();
                break;
            case "2":
                createMenuChefia();
                break;
            case "3":
                createMenuSect();
                break;
            default:
                alert("Algo inesperado aconteceu!");
                location.replace("../index.html");
        }
    } else {
        alert("Algo inesperado aconteceu!");
        location.replace("../index.html");
    }
}

// Seção de população das páginas
function createMenuProfessor() {
    let menu = document.getElementById("vertical-nav");

    menu.innerHTML += "<p class='subtitle'>CONTROLE DE COTAS</p>";
    menu.innerHTML += "<a href='sgd_saldo.html'><i class='fa-solid fa-money-bill-1'></i> Saldo</a>";
    menu.innerHTML += "<a href='sgd_cotas_despesas.html'><i class='fa-solid fa-folder-open'></i> Despesas</a>";
    menu.innerHTML += "<a href='sgd_transferencias.html'><i class='fa-solid fa-arrow-right-arrow-left'></i> Transferências</a>";
    menu.innerHTML += "<a href='sgd_cotas.html'><i class='fa-solid fa-box-archive'></i> Cotas</a>";

    menu.innerHTML += "<p class='subtitle'>CONTROLE CONTÁBIL</p>";
    menu.innerHTML += "<a href='sgd_orcamentos.html'><i class='fa-solid fa-key'></i> Orçamentos</a>";
}

function createMenuChefia() {
    let menu = document.getElementById("vertical-nav");

    menu.innerHTML += "<p class='subtitle'>CONTROLE DE COTAS</p>";
    menu.innerHTML += "<a href='sgd_saldo.html'><i class='fa-solid fa-money-bill-1'></i> Saldo</a>";
    menu.innerHTML += "<a href='sgd_cotas_despesas.html'><i class='fa-solid fa-folder-open'></i> Despesas</a>";
    menu.innerHTML += "<a href='sgd_transferencias.html'><i class='fa-solid fa-arrow-right-arrow-left'></i> Transferências</a>";
    menu.innerHTML += "<a href='sgd_cotas.html'><i class='fa-solid fa-box-archive'></i> Cotas</a>";

    menu.innerHTML += "<p class='subtitle'>CONTROLE CONTÁBIL</p>";
    menu.innerHTML += "<a href='sgd_orcamentos.html'><i class='fa-solid fa-key'></i> Orçamentos</a>";
    menu.innerHTML += "<a href='sgd_receitas.html'><i class='fa-solid fa-folder-open'></i> Receitas</a>";
    menu.innerHTML += "<a href='sgd_contabil_despesas.html'><i class='fa-solid fa-folder-open'></i> Despesas</a>";
    menu.innerHTML += "<a href='sgd_relatorios.html'><i class='fa-solid fa-book'></i> Relatórios</a>";
}

function createMenuSect() {
    let menu = document.getElementById("vertical-nav");

    menu.innerHTML += "<p class='subtitle'>CONTROLE CONTÁBIL</p>";
    menu.innerHTML += "<a href='sgd_orcamentos.html'><i class='fa-solid fa-key'></i> Orçamentos</a>";

    menu.innerHTML += "<p class='subtitle'>CONTROLE DE COTAS</p>";
    menu.innerHTML += "<a href='sgd_saldo.html'><i class='fa-solid fa-money-bill-1'></i> Saldo</a>";    
}

function logout() {
    sessionStorage.removeItem("user");
    location.href = "../index.html";
}