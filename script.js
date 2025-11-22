let cardcontainer = document.querySelector(".card-container");
let searchInput = document.querySelector("#searchInput");

let dados = [];

async function carregarDados() {
    let resposta = await fetch("date.json");
    dados = await resposta.json();
    rederizarCards(dados);
}

function rederizarCards(dados) { 
    cardcontainer.innerHTML = "";
    for (let dado of dados) { 
         let article = document.createElement("article");
         article.classList.add("card");
         article.innerHTML = `
            <a href="${dado.link}">
                <h2>${dado.nome}</h2>
                <p>${dado.descrição}</p>
            </a>
         ` 
          
         cardcontainer.appendChild(article);
    }
}

function pesquisar() {
    let termo = searchInput.value.toLowerCase();
    let dadosFiltrados = dados.filter(dado => dado.nome.toLowerCase().includes(termo));
    rederizarCards(dadosFiltrados);
}

 const menu = document.getElementById("sideMenu");
    const botaoHamburger = document.querySelector(".hamburger");

    function abrirMenu() {
        menu.classList.add("open");
        botaoHamburger.style.display = "none";
    }

    function fecharMenu() {
        menu.classList.remove("open");
        botaoHamburger.style.display = "block";
    }

    // FECHAR AO CLICAR FORA DO MENU
    document.addEventListener("click", function(event) {
        const clicouForaDoMenu = !menu.contains(event.target);
        const clicouNoHamburger = botaoHamburger.contains(event.target);

        // se o menu estiver aberto e o clique não for no menu nem no botão → fecha
        if (menu.classList.contains("open") && clicouForaDoMenu && !clicouNoHamburger) {
            fecharMenu();
        }
    });

    



carregarDados();