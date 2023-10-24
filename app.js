//javascript for scroll to top button
const scrollBtn = document.querySelector(".scroll");

window.addEventListener("scroll", function() {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// light-mode

(function() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {

        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();