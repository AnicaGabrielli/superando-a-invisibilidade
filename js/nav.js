const header = document.querySelector("header");
const head = document.querySelector("head");
const style = document.createElement("style");
const nav = document.createElement("nav");
const tituloLogo = document.createElement("div");
const links = new Array(
    {href: "", class:"navLink", textContent:"Início"},
    {href: "/pages/entrevistas.html", class:"navLink", },
    {href: "/pages/dados.html", class:"navLink"},
    {href: "", class:"navLink"}
)
const logo = document.createElement("img");
const titulo = document.createElement("p");
const abrir = document.createElement("img");
const fechar = document.createElement("img");
const styleSheet = `html{
    scroll-behavior: smooth;
}
body{
    overflow: scroll;
}
body::-webkit-scrollbar{
    display: none;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

/* Estilo da Barra */
header {
    position: sticky;
    z-index: 1;
  }
nav{
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: saddlebrown;
    color: white;
    font-size: larger;

}
.imgNegrasNav{
    border-radius: 50%;
    margin: 1%;
}
.tituloLogo{
    width: 50%;
    display: flex;
    padding: 1%;
    gap: 2%;
    letter-spacing: 2px;

}
.titulo{
    padding: 8px 0px;

}
.acessos{
    width: 50%;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

}
.navLink{
    text-decoration: none;
    color: white;
    letter-spacing: 2px;
}
.navLink:hover{
    border-bottom: 1px white solid;
    
}`;


/*Atributos e conteúdo*/ 

//classes
tituloLogo.className = "tituloLogo";
logo.className = "imgNegrasNav";
titulo.className = "titulo";

//set atributos
logo.setAttribute("src", "/images/negrasNav.jpg");
logo.setAttribute("alt", "logo com três mulheres negras");
abrir.setAttribute("src", "/images/cardapio-hamburger.png");
abrir.setAttribute("alt", "icone de abrir menu");
fechar.setAttribute("src", "/images/botao-fechar.png");
fechar.setAttribute("alt", "icone de fechar menu");

// conteúdo
p.innerHTML = "MULHERES NEGRAS: <br> superando a invisibilidade";
style.innerHTML = `${styleSheet}`;


