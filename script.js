// Dados iniciais dos comentários
const comments = JSON.parse(localStorage.getItem("senaiComments")) || [
  {
    id: 1,
    name: "Vitor Shirahata",
    photo: "/person-male.png",
    text: "Sem palavras para descrever. Um lugar acolhedor, cheio de pessoas empenhadas, tanto no sucesso do alunos como na segurança da escola. Professores qualificados e sempre dispostos a ajudar.",
    rating: 5,
    helpful: 12,
    notHelpful: 2,
    userReaction: null,
  },
  {
    id: 2,
    name: "Edilene Cristina Silva",
    photo: "/female-person.png",
    text: "Ótima escola!!! Excelente Escola onde o fator principal é a SEGURANÇA. Super recomendo!! A infraestrutura é excelente e os cursos são muito bem estruturados.",
    rating: 5,
    helpful: 8,
    notHelpful: 1,
    userReaction: null,
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    photo: "/person-male-engineer.jpg",
    text: "Fiz o curso técnico em Mecânica e hoje estou empregado em uma grande indústria. A qualidade do ensino é excelente e os professores são muito experientes.",
    rating: 5,
    helpful: 15,
    notHelpful: 0,
    userReaction: null,
  },
]

// Salvar no localStorage
function saveComments() {
  localStorage.setItem("senaiComments", JSON.stringify(comments))
}

// Elementos do DOM
const commentsTrack = document.getElementById("commentsTrack")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const commentForm = document.getElementById("commentForm")
const totalRatingsElement = document.getElementById("totalRatings")

// Atualizar contador de avaliações
function updateRatingsCount() {
  totalRatingsElement.textContent = comments.length
}

// Renderizar comentários
function renderComments() {
  commentsTrack.innerHTML = ""
  comments.forEach((comment) => {
    const stars = "★".repeat(comment.rating) + "☆".repeat(5 - comment.rating)

    const commentCard = document.createElement("div")
    commentCard.className = "comment-card"
    commentCard.innerHTML = `
            <div class="comment-header">
                <div class="user-avatar">
                    <img src="${comment.photo}" alt="${comment.name}">
                </div>
                <div class="user-info">
                    <h4>${comment.name}</h4>
                    <div class="stars">${stars}</div>
                </div>
            </div>
            <div class="comment-text">
                <p>${comment.text}</p>
            </div>
            <div class="reactions">
                <div class="reaction-buttons">
                    <button class="reaction-btn helpful ${comment.userReaction === "helpful" ? "active" : ""}" data-comment-id="${comment.id}" data-type="helpful">
                        <i>👍</i>
                        <span>Útil</span>
                        <span class="reaction-count">${comment.helpful}</span>
                    </button>
                    <button class="reaction-btn not-helpful ${comment.userReaction === "not-helpful" ? "active" : ""}" data-comment-id="${comment.id}" data-type="not-helpful">
                        <i>👎</i>
                        <span>Não tão útil</span>
                        <span class="reaction-count">${comment.notHelpful}</span>
                    </button>
                </div>
            </div>
        `
    commentsTrack.appendChild(commentCard)
  })

  updateRatingsCount()

  // Adicionar event listeners para os botões de reação
  document.querySelectorAll(".reaction-btn").forEach((button) => {
    button.addEventListener("click", handleReaction)
  })

  updateCarouselButtons()
}

// Manipular reações do usuário
function handleReaction(event) {
  const button = event.currentTarget
  const commentId = Number.parseInt(button.getAttribute("data-comment-id"))
  const reactionType = button.getAttribute("data-type")

  const comment = comments.find((c) => c.id === commentId)
  if (!comment) return

  // Se o usuário já reagiu a este comentário
  if (comment.userReaction) {
    // Se clicou na mesma reação, remove a reação
    if (comment.userReaction === reactionType) {
      comment[reactionType === "helpful" ? "helpful" : "notHelpful"]--
      comment.userReaction = null
    } else {
      // Se clicou em reação diferente, troca a reação
      comment[comment.userReaction === "helpful" ? "helpful" : "notHelpful"]--
      comment[reactionType === "helpful" ? "helpful" : "notHelpful"]++
      comment.userReaction = reactionType
    }
  } else {
    // Se é uma nova reação
    comment[reactionType === "helpful" ? "helpful" : "notHelpful"]++
    comment.userReaction = reactionType
  }

  saveComments()
  renderComments()
}

// Navegação do carrossel
let currentPosition = 0
const commentWidth = 380 + 32 // largura do card + margem

function updateCarousel() {
  commentsTrack.style.transform = `translateX(-${currentPosition * commentWidth}px)`
  updateCarouselButtons()
}

function updateCarouselButtons() {
  prevBtn.disabled = currentPosition === 0
  nextBtn.disabled = currentPosition >= comments.length - 1
}

nextBtn.addEventListener("click", () => {
  if (currentPosition < comments.length - 1) {
    currentPosition++
    updateCarousel()
  }
})

prevBtn.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition--
    updateCarousel()
  }
})

// Adicionar novo comentário
commentForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const userName = document.getElementById("userName").value
  const userPhoto = document.getElementById("userPhoto").value || "/diverse-group.png"
  const userComment = document.getElementById("userComment").value
  const ratingInput = document.querySelector('input[name="rating"]:checked')

  // Verificar se uma avaliação foi selecionada
  if (!ratingInput) {
    alert("Por favor, selecione uma avaliação com as estrelas.")
    return
  }

  const userRating = Number.parseInt(ratingInput.value)

  const newComment = {
    id: Date.now(),
    name: userName,
    photo: userPhoto,
    text: userComment,
    rating: userRating,
    helpful: 0,
    notHelpful: 0,
    userReaction: null,
  }

  comments.unshift(newComment)
  saveComments()
  renderComments()

  // Reset form
  commentForm.reset()

  // Scroll para o novo comentário
  currentPosition = 0
  updateCarousel()

  // Scroll para a seção de avaliações
  document.getElementById("avaliacoes").scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
})

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  renderComments()
})

// Scroll suave para seções
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
