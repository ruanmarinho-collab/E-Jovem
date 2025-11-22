const btnTopo = document.getElementById("btnTopo");

// Mostrar botão quando a página for rolada
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = "flex";
    } else {
        btnTopo.style.display = "none";
    }
});

// Voltar ao topo suavemente
btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
