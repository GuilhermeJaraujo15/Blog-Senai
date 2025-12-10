//podcast//

//chamamento//

const podcasts = [
  {
    button: document.getElementById("botao1"),
    audio: document.getElementById("pod1"),
  },
  {
    button: document.getElementById("botao2"),
    audio: document.getElementById("pod2"),
  },
  {
    button: document.getElementById("botao3"),
    audio: document.getElementById("pod3"),
  },
];

//interação//

function pausarTodos() {
  podcasts.forEach((p) => {
    p.audio.pause(); //Pausa o áudio
    p.audio.currentTime = 0; //Reinicia o tempo para 0
    p.button.textContent = "▶"; // Botão o texto do botão de volta para play
  });
}

// Adicionando evento em cada botão
podcasts.forEach((p) => {
  p.button.addEventListener("click", () => {
    // Se já está tocando → pausar
    if (!p.audio.paused) {
      p.audio.pause();
      p.button.textContent = "▶";
      return;
    }

    // Caso contrário, pausar os outros e tocar este
    pausarTodos();
    p.audio.play();
    p.button.textContent = "❚❚"; // ícone de pause
  });

  // Quando o áudio acabar → voltar botão para play
  p.audio.addEventListener("ended", () => {
    p.button.textContent = "▶";
  });

  //audio.paused: Propriedade nativa do HTML5 que retorna true se pausado;
  //audio.currentTime = 0: Reinicia para o início (0 segundos);
  //audio.play() / audio.pause(): Métodos nativos da API de Áudio;
  //audio.addEventListener('ended', ...): Evento disparado ao término.
});

const nome = document.getElementById("nome");
const avatar = document.getElementById("avatar");
const texto = document.getElementById("texto");
const tag = document.getElementById("tag");
const dataInput = document.getElementById("data");
const addComunidade = document.getElementById("add-comunidade");
const email = document.getElementById("email");
const grid = document.querySelector(".community-posts-grid");

// ==========================
// ADICIONAR POST
// ==========================
addComunidade.addEventListener("click", () => {
  
  // VALIDAÇÃO DO EMAIL
  const emailValor = email.value.trim();

<<<<<<< HEAD
  if (!emailValor.endsWith("@aluno.senai.br")) { // O "endsWith", analisa somente o final de uma string, pegando o length de toda string, e subtraindo pelos caracteres da palavra desejada a encontrar-se no final,e assim confere se o texto posto se encontra, em exato, no final, isto é, no caractere encontrado a partir da subtração entre o length total com o length do texto almejado em encontra-se.//
    alert(
      "Apenas e-mails institucionais (@aluno.senai.br) podem enviar comentários."
=======
  if (!emailValor.endsWith("@aluno.senai.org.br")) { // O "endsWith", analisa somente o final de uma string, pegando o length de toda string, e subtraindo pelos caracteres da palavra desejada a encontrar-se no final,e assim confere se o texto posto se encontra, em exato, no final, isto é, no caractere encontrado a partir da subtração entre o length total com o length do texto almejado em encontra-se.//
    alert(
      "Apenas e-mails institucionais (@aluno.senai.org.br) podem enviar comentários."
>>>>>>> 1a534093f8f124f38dc79ffb2d437382dba0949c
    );
    return; // impede o envio
  }

  if (nome.value.trim() === ""){

    alert ("Preencha o nome")
    return 
  }

  if (dataInput.value.trim() === ""){

    alert ("Preencha a data")
    return 
  }

  if (texto.value.trim() === ""){

    alert ("Preencha o texto")
    return 
  }

  if (tag.value.trim() === ""){

    alert ("Preencha a tag")
    return 
  }

  

  const valorData = dataInput.value; // ex: "2025-01-28"
  const [ano, mes, dia] = valorData.split("-");
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const dataFormatada = `${dia} de ${meses[parseInt(mes) - 1]}, ${ano}`;

  // CRIAR ARTICLE
  const article = document.createElement("article");
  article.classList.add("community-post");

  // Datasets para likes e data original (para filtros)
  article.dataset.likes = 0;
  article.dataset.dataoriginal = valorData;

  // ==========================
  // HEADER
  // ==========================
  const header = document.createElement("div");
  header.classList.add("post-header");

  const avatarDiv = document.createElement("div");
  avatarDiv.classList.add("post-avatar");
  const img = document.createElement("img");
  img.src = avatar.value;
  img.alt = nome.value;
  avatarDiv.appendChild(img);

  const userInfo = document.createElement("div");
  userInfo.classList.add("post-user-info");
  const author = document.createElement("h4");
  author.classList.add("post-author");
  author.textContent = nome.value;
  const date = document.createElement("span");
  date.classList.add("post-date");
  date.textContent = dataFormatada;
  userInfo.appendChild(author);
  userInfo.appendChild(date);

  header.appendChild(avatarDiv);
  header.appendChild(userInfo);

  // LIXEIRA
  const trash = document.createElement("img");
  trash.src = "img/lixeira.webp";
  trash.classList.add("trash-icon");
  trash.addEventListener("click", () => article.remove());
  header.appendChild(trash);

  // ==========================
  // CONTENT
  // ==========================
  const content = document.createElement("div");
  content.classList.add("post-content");
  const p = document.createElement("p");
  p.textContent = texto.value;
  content.appendChild(p);

  // ==========================
  // FOOTER
  // ==========================
  const footer = document.createElement("div");
  footer.classList.add("post-footer");

  const span = document.createElement("span");
  span.classList.add("post-tag");
  span.textContent = tag.value;
  footer.appendChild(span);

  // LIKE AREA
  const likeArea = document.createElement("div");
  likeArea.classList.add("like-area");
  const likeBtn = document.createElement("button");
  likeBtn.classList.add("like-btn");
  const likeIcon = document.createElement("img");
  likeIcon.src = "img/like.png";
  likeIcon.classList.add("like-icon");
  likeBtn.appendChild(likeIcon);

  const likeCount = document.createElement("span");
  likeCount.classList.add("like-count");
  likeCount.textContent = "0";

  let liked = false;
  likeBtn.addEventListener("click", () => {
    liked = !liked;
    likeCount.textContent = liked
      ? parseInt(likeCount.textContent) + 1
      : parseInt(likeCount.textContent) - 1;
    likeBtn.classList.toggle("liked");
    article.dataset.likes = likeCount.textContent;
  });

  likeArea.appendChild(likeBtn);
  likeArea.appendChild(likeCount);
  footer.appendChild(likeArea);

  // ==========================
  // MONTAGEM FINAL
  // ==========================
  article.appendChild(header);
  article.appendChild(content);
  article.appendChild(footer);

  grid.appendChild(article);
});

// ==========================
// FILTROS
// ==========================
const filtroMais = document.getElementById("filtro-mais");
const filtroMenos = document.getElementById("filtro-menos");
const filtroRecentes = document.getElementById("filtro-recentes");
const filtroAntigos = document.getElementById("filtro-antigos");

filtroMais.addEventListener("click", () => ordenarPosts("desc"));
filtroMenos.addEventListener("click", () => ordenarPosts("asc"));
filtroRecentes.addEventListener("click", () => ordenarPorData("recente"));
filtroAntigos.addEventListener("click", () => ordenarPorData("antigo"));

// Ordenar por likes
function ordenarPosts(direcao) {
  const posts = Array.from(document.querySelectorAll(".community-post"));
  posts.sort((a, b) => {
    const likesA = parseInt(a.dataset.likes || 0);
    const likesB = parseInt(b.dataset.likes || 0);
    return direcao === "desc" ? likesB - likesA : likesA - likesB;
  });
  posts.forEach((post) => grid.appendChild(post));
}

// Ordenar por data //
function ordenarPorData(tipo) {
  const posts = Array.from(document.querySelectorAll(".community-post"));
  posts.sort((a, b) => {
    const dataA = new Date(a.dataset.dataoriginal);
    const dataB = new Date(b.dataset.dataoriginal);
    return tipo === "recente" ? dataB - dataA : dataA - dataB;
  });
  posts.forEach((post) => grid.appendChild(post));
}

// Seleciona todos os posts já existentes //
const postsExistentes = document.querySelectorAll(".community-post");

postsExistentes.forEach((post) => {
  const likeArea = post.querySelector(".like-area");
  const likeBtn = likeArea.querySelector(".like-btn");
  const likeCount = likeArea.querySelector(".like-count");

  let liked = false;

  likeBtn.addEventListener("click", () => {
    if (!liked) {
      liked = true;
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
      likeBtn.classList.add("liked");
    } else {
      liked = false;
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
      likeBtn.classList.remove("liked");
    }

    // Atualiza o dataset do post
    post.dataset.likes = likeCount.textContent;
  });
});
