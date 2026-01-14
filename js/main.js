    const body = document.body;
    const menu = document.getElementById("menu");
    const projetos = document.getElementById("projetos"); 
    const sobre = document.getElementById("sobre");
    const button = document.getElementById('toggleTheme'); 
    const icon = button.querySelector('.icon'); 

    document.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "escuro") {
    alterarTema();
  } else if (!temaSalvo) {
    // se não houver tema salvo, usa o do sistema
    const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefereEscuro) alterarTema();
  }
});

function alterarTema() {
   

    // Alterna o tema
    body.classList.toggle("modo-escuro");
    
    // Alterna as classes de texto no modo noturno
    document.querySelectorAll('.texto-grid').forEach(el => el.classList.toggle('texto-grid-noturno'));
    
    // Alterna a classe de escurecimento no menu
    if (menu.classList.contains("scrolled") && body.classList.contains("modo-escuro")) {
        menu.classList.add("scrolled-escuro");
    } else {
        menu.classList.remove("scrolled-escuro");
    }

    // Alterna as classes das cartas
    document.querySelectorAll(".card-hab").forEach(el => {
        el.classList.toggle("card-hab-escuro");
    });

    // Alterna as classes do menu
    document.querySelectorAll(".menu-items").forEach(el => {
        el.classList.toggle("menu-items-escuro");
    });

    // Alterna as classes da timeline
    document.querySelectorAll(".time-line-content").forEach(el => {
        el.classList.toggle("time-line-content-noturno");
    });
    // Alterna as classes do modal
     document.querySelectorAll(".modal-content").forEach(el => {
        el.classList.toggle("dark-modal");
    });

    // Alterna as classes das seções de projetos e sobre
    if (projetos) {
        projetos.classList.toggle("projetos-noturno");
    }
    if (sobre) {
        sobre.classList.toggle("sobre-noturno");
    }

    // Troca o ícone de sol/lua
    icon.classList.toggle('fa-sun', !icon.classList.contains('fa-sun'));
    icon.classList.toggle('fa-moon', !icon.classList.contains('fa-moon'));
    icon.classList.toggle('sun', !icon.classList.contains('sun'));
    icon.classList.toggle('moon', !icon.classList.contains('moon'));
    icon.classList.toggle('clicked');
}

window.addEventListener("scroll", () => {
    const menu = document.getElementById("menu");

    if (window.scrollY > 1) {
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
    if (menu.classList.contains("scrolled") && document.body.classList.contains("modo-escuro")) {
        menu.classList.add("scrolled-escuro");
    } else {
        menu.classList.remove("scrolled-escuro");
    }
});
function toggleMenu() {
    const menuItems = document.querySelector(".menu-items");
    const menuToggle = document.querySelector(".menu-toggle");
    menuItems.classList.toggle("active");
    menuToggle.classList.toggle("active");
    document.addEventListener("click", (event) => {
        if (!menuItems.contains(event.target) && !menuToggle.contains(event.target)) {
            menuItems.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });
}

document.querySelectorAll(".item-menu, .logo").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".menu-items").classList.remove("active");
        document.querySelector(".menu-toggle").classList.remove("active"); 
    });
});

window.dispatchEvent(new Event("scroll"));

const primeiraLista = document.querySelector(".lista");
const segundaLista = primeiraLista.cloneNode(true);
segundaLista.setAttribute("aria-hidden", "true"); 
document.querySelector(".div-icons-lang .wrapper").appendChild(segundaLista);

const modais = document.querySelectorAll('#modal-habilidades, #modal-habilidades2, #modal-habilidades3');


document.querySelectorAll('.link-modal').forEach(link => {
  link.addEventListener('click', () => {
    const modal = document.getElementById(link.dataset.modal);
    if (modal) modal.classList.add('show');
  });
});

document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('[id^="modal-habilidades"]');
    if (modal) modal.classList.remove('show');
  });
});

modais.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});