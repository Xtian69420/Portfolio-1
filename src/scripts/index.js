var typed = new Typed('#auto-type', {
    strings: ['FULLSTACK WEB', 'API SERVER', 'GAME', 'MOBILE APPLICATION'],
    typeSpeed: 100,
    backDelay: 1000,
    loop: true
});

const emailCopyIcon = document.getElementById('copyIcon');
const emailText = document.getElementById('emailText').textContent;

emailCopyIcon.addEventListener('click', () => {
  navigator.clipboard.writeText(emailText).then(() => {
    emailCopyIcon.style.color = 'green';
    emailCopyIcon.title = 'Copied!';
    
    setTimeout(() => {
      emailCopyIcon.style.color = 'black';
      emailCopyIcon.title = 'Copy email';
    }, 1500);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
});


document.querySelectorAll('.contactItems[data-copy]').forEach(item => {
    const copyIcon = item.querySelector('.copyIcon');
    const textToCopy = item.getAttribute('data-copy');

    item.addEventListener('click', () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Change icon color and tooltip on success
            copyIcon.style.color = "green";
            copyIcon.title = "Copied!";

            setTimeout(() => {
                copyIcon.style.color = "black";
                copyIcon.title = copyIcon.classList.contains('fa-phone') ? "Copy number" : "Copy email";
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy: ', err);
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
    const pulseIntervals = [];

    function highlightCard(i) {
        cards.forEach((card, idx) => {
            const circ = card.querySelector(".circ");

            if (idx === i) {
                card.classList.add("highlight");

                // Start blinking if not already blinking
                if (circ && !pulseIntervals[idx]) {
                    let visible = false;
                    circ.style.opacity = "0";
                    pulseIntervals[idx] = setInterval(() => {
                        visible = !visible;
                        circ.style.opacity = visible ? "1" : "0";
                    }, 500);
                }

            } else {
                card.classList.remove("highlight");

                // Stop blinking
                if (circ && pulseIntervals[idx]) {
                    clearInterval(pulseIntervals[idx]);
                    pulseIntervals[idx] = null;
                    circ.style.opacity = "0";
                }
            }
        });
    }

    function startCycle() {
        highlightCard(index); 
        index = (index + 1) % cards.length;

        intervalId = setInterval(() => {
            if (!isPaused) {
                highlightCard(index);
                index = (index + 1) % cards.length;
            }
        }, 2000);
    }


    function stopCycle() {
        clearInterval(intervalId);
    }

    // Mouse interaction (optional)
    cards.forEach((card, i) => {
        card.addEventListener("mouseenter", () => {
            isPaused = true;
            highlightCard(i); // ensure blinking starts too
        });

        card.addEventListener("mouseleave", () => {
            isPaused = false;
        });
    });

    startCycle();
});
