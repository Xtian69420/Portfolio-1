var typed = new Typed('#auto-type', {
    strings: ['FULLSTACK WEB', 'API SERVER', 'GAME', 'MOBILE APPLICATION'],
    typeSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("email");
    const copyIcon = document.getElementById("copyIcon");
    const emailText = document.getElementById("emailText").textContent.trim();

    email.addEventListener("click", () => {
        navigator.clipboard.writeText(emailText).then(() => {
            copyIcon.style.color = "green";
            copyIcon.title = "Copied!";

            setTimeout(() => {
                copyIcon.style.color = "#010005";
                copyIcon.title = "Copy email";
            }, 1500);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector(".environment");
    const btnControls = document.querySelectorAll(".btnControl");

    const scrollAmount = 280;

    btnControls[0].addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    btnControls[1].addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".ts");
    let index = 0;
    let intervalId;
    let isPaused = false;

    function highlightCard(i) {
        cards.forEach((card, idx) => {
            card.classList.toggle("highlight", idx === i);
        });
    }

    function startCycle() {
        intervalId = setInterval(() => {
            if (!isPaused) {
                highlightCard(index);
                index = (index + 1) % cards.length;
            }
        }, 1500); 
    }

    function stopCycle() {
        clearInterval(intervalId);
    }

    cards.forEach((card, i) => {
        card.addEventListener("mouseenter", () => {
            isPaused = true;
            highlightCard(i);
        });

        card.addEventListener("mouseleave", () => {
            isPaused = false;
        });
    });

    startCycle();
});