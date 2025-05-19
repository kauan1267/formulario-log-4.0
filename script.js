
let slides = document.querySelectorAll(".slide");
let form = document.getElementById("formulario");
let questions = document.querySelectorAll(".question");
let current = 0;
let formIndex = 0;
let timeLimit = 12 * 60 * 1000;

function showSlide(index) {
    slides.forEach(s => s.style.display = "none");
    if (slides[index]) slides[index].style.display = "block";
}

function startForm() {
    document.getElementById("intro").style.display = "none";
    form.style.display = "block";
    questions[formIndex].style.display = "block";
    setTimeout(() => { alert("⏰ O tempo acabou! O formulário será enviado."); form.submit(); }, timeLimit);
    nextOnEnter();
}

function nextOnEnter() {
    document.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            if (formIndex < questions.length - 1) {
                questions[formIndex].style.display = "none";
                formIndex++;
                questions[formIndex].style.display = "block";
            }
        }
    });
}

// Bloquear copiar/colar
document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('paste', e => e.preventDefault());

showSlide(0);
setInterval(() => {
    if (current < slides.length - 1) {
        current++;
        showSlide(current);
    }
}, 10000);
