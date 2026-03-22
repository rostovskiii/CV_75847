const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealEls = document.querySelectorAll(".reveal");

function initRevealToggle() {
    if (!revealEls.length) return;

    if (prefersReducedMotion) {
        revealEls.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                } else {
                    entry.target.classList.remove("is-visible");
                }
            });
        },
        {
            root: null,
            rootMargin: "0px 0px -6% 0px",
            threshold: [0, 0.06, 0.12],
        }
    );

    revealEls.forEach((el) => io.observe(el));
}

initRevealToggle();
