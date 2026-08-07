    /* =========================================================
        Baba Cln — CV WEBSITE
        app.js
    ========================================================= */

    document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. ELEMENTS
    ===================================================== */

    const navbar = document.getElementById("mainNav");
    const backToTop = document.getElementById("backToTop");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section[id]");

    /* =====================================================
       2. NAVBAR — SCROLL EFFECT
    ===================================================== */

    const updateNavbar = () => {
        if (!navbar) {
            return;
        }
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };

    /* =====================================================
       3. BACK TO TOP
    ===================================================== */

    const updateBackToTop = () => {
        if (!backToTop) {
            return;
        }
        if (window.scrollY > 500) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    };

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* =====================================================
       4. ACTIVE NAVIGATION
    ===================================================== */

    const updateActiveNavigation = () => {
        const scrollPosition = window.scrollY + window.innerHeight * 0.35;
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                currentSection = section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            const target = link.getAttribute("href");
            if (target === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    };

    /* =====================================================
       5. SMOOTH SCROLL
    ===================================================== */

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || 
                !targetId.startsWith("#") || 
                targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

            /*
             * Sur mobile, on ferme le menu Bootstrap
             * après avoir sélectionné une section.
             */

            const navbarCollapse =
                document.getElementById("navbarContent");

            if (navbarCollapse &&
                navbarCollapse.classList.contains("show") &&
                typeof bootstrap !== "undefined") {
                const collapse =
                    bootstrap.Collapse.getInstance(
                        navbarCollapse
                    ) ||
                    new bootstrap.Collapse(
                        navbarCollapse,
                        {
                            toggle: false
                        }
                    );
                collapse.hide();
            }
        });
    });

    /* =====================================================
       6. SCROLL REVEAL
    ===================================================== */

    /*
     * On ajoute automatiquement la classe "reveal"
     * aux éléments importants de la page.
     */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-content, " +
        ".quote-card, " +
        ".skill-card, " +
        ".timeline-item, " +
        ".education-card, " +
        ".additional-training, " +
        ".extra-block, " +
        ".contact-card"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    /*
     * IntersectionObserver permet de déclencher
     * les animations uniquement lorsque les éléments
     * apparaissent dans la fenêtre.
     */

    if ("IntersectionObserver" in window) {
        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) {
                            return;
                        }
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    });
                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -50px 0px"
                }
            );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });
    } else {
        /*
         * Fallback pour les anciens navigateurs.
         */
        revealElements.forEach((element) => {
            element.classList.add("visible");
        });
    }

    /* =====================================================
       7. STAGGER ANIMATION
    ===================================================== */

    /*
     * Les cartes apparaissent légèrement les unes
     * après les autres.
     */

    const animatedGroups = [
        ".skill-card",
        ".education-card",
        ".interest-grid span"
    ];

    animatedGroups.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.style.transitionDelay =
                `${index * 80}ms`;
        });
    });

    /* =====================================================
       8. HERO CARD PARALLAX
    ===================================================== */

    const heroCard = document.querySelector(".hero-card");

    /*
     * Désactivé si l'utilisateur préfère réduire
     * les animations.
     */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (heroCard &&
        !reducedMotion &&
        window.innerWidth > 991) {
        window.addEventListener(
            "mousemove",
            (event) => {
                const x = (window.innerWidth / 2 - event.clientX) / 100;
                const y = (window.innerHeight / 2 - event.clientY) / 100;
                heroCard.style.transform =
                    `rotate(2deg) translate(${x}px, ${y}px)`;
            },
            {
                passive: true
            }
        );

        heroCard.addEventListener(
            "mouseleave",
            () => {
                heroCard.style.transform =
                    "rotate(2deg)";
            }
        );
    }

    /* =====================================================
       10. CURRENT YEAR
    ===================================================== */

    /*
     * Si un élément possède data-current-year,
     * on le remplit automatiquement avec l'année actuelle.
     */

    const currentYear = new Date().getFullYear();

    document
        .querySelectorAll("[data-current-year]")
        .forEach((element) => {
            element.textContent =
                currentYear;

        });

    /* =====================================================
       11. SCROLL EVENTS
    ===================================================== */

    let ticking = false;

    const handleScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateNavbar();
                updateBackToTop();
                updateActiveNavigation();
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener(
        "scroll",
        handleScroll,
        {
            passive: true
        }
    );

    /* =====================================================
       12. RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            /*
             * On désactive le parallaxe sur les petits écrans.
             */

            if (heroCard &&
                window.innerWidth <= 991) {
                heroCard.style.transform = "none";
            }
        },
        {
            passive: true
        }
    );

    /* =====================================================
       13. INITIALISATION
    ===================================================== */

    updateNavbar();
    updateBackToTop();
    updateActiveNavigation();

    /* =====================================================
       14. CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%cBaba Cln — Animateur",
        "font-size:16px;font-weight:bold;"
    );

    console.log(
        "CV web chargé avec succès."
    );
});