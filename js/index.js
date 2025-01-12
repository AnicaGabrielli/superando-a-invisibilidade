// Elementos
const titulo = document.createElement("h1");
const introducao = document.querySelector(".introducao");
const textoIntroducao = document.createElement("p");
const introVideo = document.querySelector(".introVideo");
const iframe = document.createElement("iframe");
const bibliografia = document.querySelector(".bibliografia");
const article = document.querySelector("article");
const tituloBibliografia = document.createElement("h2");
const subTitBibliografia = document.createElement("p");

const imagens = [
    { src: "./images/mulheresHistoriaELiteratura.jpg", alt: "Capa do livro Mulheres, história e literatura em João Gomes" },
    { src: "./images/interseccionalidade.jpg", alt: "Capa do livro interseccionalidade" },
    { src: "./images/mulheresNoPoder.jpg", alt: "Capa do livro Mulheres e Poder" },
    { src: "./images/mulherNegra.jpg", alt: "Capa do caderno Geledes 'Mulher Negra'" }
];


// Conteúdo e atributos dos elementos
titulo.innerText = "Mulheres Negras em Guanambi: Superando a Invisibilidade";

textoIntroducao.innerText = "Descubra a força da representatividade feminina! Nosso Projeto Integrador visa destacar e celebrar as mulheres negras líderes em Guanambi. Explore conosco como suas trajetórias e realizações inspiram mudanças e promovem a igualdade de gênero e raça. Junte-se a nós nessa jornada de reconhecimento e visibilidade. Juntas, podemos construir um futuro mais inclusivo e diversificado!";

iframe.setAttribute("height", "315");
iframe.setAttribute("src", "https://www.youtube.com/embed/BwCGXExjFyI?si=8aPAVrDOhnJumx9o");
iframe.setAttribute("title", "YouTube video player");
iframe.setAttribute("frameborder", "0");
iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
iframe.setAttribute("allowfullscreen", "");

tituloBibliografia.innerText = "Atualize seu Conhecimento";
subTitBibliografia.innerText = "Explore materiais inovadores que você precisa conhecer";

// Evento DOMContentLoaded para garantir que o DOM esteja totalmente carregado
document.addEventListener("DOMContentLoaded", () => {
    // Adiciona título e introdução
    if (introducao) {
        introducao.prepend(titulo);
        introducao.append(textoIntroducao);
    } else {
        console.error("Elemento com a classe '.introducao' não encontrado");
    }

    // Adiciona vídeo introdutório
    if (introVideo) {
        introVideo.prepend(iframe);
    } else {
        console.error("Elemento com classe '.introVideo' não encontrado");
    }

    // Adiciona conteúdo à bibliografia
    if (bibliografia) {
        bibliografia.prepend(subTitBibliografia);
        bibliografia.prepend(tituloBibliografia);
        
    } else {
        console.error("Elemento com a classe '.bibliografia' não encontrado");
    }

    // Adiciona imagens ao article
    if (article) {
        imagens.forEach((imagem) => {
            const img = document.createElement("img");
            img.setAttribute("src", imagem.src);
            img.setAttribute("alt", imagem.alt);
            article.appendChild(img);
        });
    } else {
        console.error("Elemento <article> não encontrado");
    }
});
