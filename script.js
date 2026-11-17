
/* =========================================
   CHANDAN'S DIGITAL WORLD
   NAVBAR & HERO INTERACTIONS
========================================= */


/* ELEMENTS */

const navbar = document.querySelector(".futuristic-navbar");

const menuToggle = document.querySelector(".menu-toggle");

const navbarContent = document.querySelector("#navbarContent");

const navLinks = document.querySelectorAll(".nav-link");


/* =========================================
   MOBILE NAVIGATION
========================================= */

const mobileMenu = bootstrap.Collapse.getOrCreateInstance(
  navbarContent,
  {
    toggle: false
  }
);


menuToggle.addEventListener("click", () => {

  const isExpanded =
    menuToggle.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    mobileMenu.hide();
  } else {
    mobileMenu.show();
  }

});


navbarContent.addEventListener("show.bs.collapse", () => {

  menuToggle.setAttribute("aria-expanded", "true");

  menuToggle.setAttribute(
    "aria-label",
    "Close navigation menu"
  );

});


navbarContent.addEventListener("hide.bs.collapse", () => {

  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.setAttribute(
    "aria-label",
    "Open navigation menu"
  );

});


/* =========================================
   CLOSE MENU AFTER CLICKING LINK
========================================= */

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    if (navbarContent.classList.contains("show")) {
      mobileMenu.hide();
    }

  });

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

function updateNavbar() {

  if (window.scrollY > 40) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

}

window.addEventListener("scroll", updateNavbar, {
  passive: true
});

updateNavbar();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll(
  "main section[id]"
);

const sectionObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        const sectionId = entry.target.id;

        navLinks.forEach((link) => {

          link.classList.remove("active");

          if (
            link.getAttribute("href") === `#${sectionId}`
          ) {

            link.classList.add("active");

          }

        });

      }

    });

  },

  {
    rootMargin: "-25% 0px -60% 0px"
  }

);


sections.forEach((section) => {

  sectionObserver.observe(section);

});


/* =========================================
   INITIAL ACTIVE LINK
========================================= */

window.addEventListener("load", () => {

  if (window.scrollY < 100) {

    navLinks.forEach((link) => {

      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#home"
      );

    });

  }

});


/* ================= ABOUT SCROLL ANIMATION ================= */

const aboutSection = document.querySelector(".about-section");

if (aboutSection) {
  const aboutObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("is-visible");
          observer.unobserve(aboutSection);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  aboutObserver.observe(aboutSection);
}


/* ================= PORTFOLIO SCROLL REVEAL ================= */

const portfolioSection = document.querySelector(".portfolio-section");

if (portfolioSection) {
  const portfolioObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          portfolioSection.classList.add("is-visible");
          observer.unobserve(portfolioSection);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  portfolioObserver.observe(portfolioSection);
}



/* ================= PROJECTS SCROLL ANIMATION ================= */

const projectsSection = document.querySelector(".projects-section");

if (projectsSection) {
  const projectsObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectsSection.classList.add("is-visible");
          observer.unobserve(projectsSection);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  projectsObserver.observe(projectsSection);
}


/* ================= BLOG SCROLL ANIMATION ================= */

const blogSection = document.querySelector(".blog-section");

if (blogSection) {
  const blogObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blogSection.classList.add("is-visible");
          observer.unobserve(blogSection);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  blogObserver.observe(blogSection);
}



/* ================= NOTES SCROLL ANIMATION ================= */

const notesSection = document.querySelector(".notes-section");

if (notesSection) {
  const notesObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          notesSection.classList.add("is-visible");
          observer.unobserve(notesSection);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  notesObserver.observe(notesSection);
}



/* ================= ACHIEVEMENTS SCROLL ANIMATION ================= */

const achievementsSection = document.querySelector(".achievements-section");

if (achievementsSection) {
  const achievementsObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          achievementsSection.classList.add("is-visible");
          observer.unobserve(achievementsSection);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  achievementsObserver.observe(achievementsSection);
}



/* ================= JOURNEY SPACE ANIMATION ================= */

const journeySection = document.querySelector(".journey-section");

if (journeySection) {

  // SCROLL REVEAL

  const journeyObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          journeySection.classList.add("is-visible");
          observer.unobserve(journeySection);
        }
      });
    },
    {
      threshold: 0.08
    }
  );

  journeyObserver.observe(journeySection);


  // INTERACTIVE JOURNEY PLANETS

  const journeyButtons = journeySection.querySelectorAll(".journey-toggle");

  journeyButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const detailId = button.getAttribute("aria-controls");
      const detail = document.getElementById(detailId);

      if (!detail) return;

      const isExpanded = button.getAttribute("aria-expanded") === "true";

      // Close all other open stages

      journeyButtons.forEach((otherButton) => {
        const otherId = otherButton.getAttribute("aria-controls");
        const otherDetail = document.getElementById(otherId);

        otherButton.setAttribute("aria-expanded", "false");

        if (otherDetail) {
          otherDetail.hidden = true;
        }

        const otherText = otherButton.childNodes[0];

        if (otherText) {
          otherText.textContent = "EXPLORE THIS STAGE ";
        }
      });

      // Toggle selected stage

      if (!isExpanded) {

        detail.hidden = false;

        button.setAttribute("aria-expanded", "true");

        button.childNodes[0].textContent = "CLOSE THIS STAGE ";

      }

    });

  });

}


/* ================= GOLDEN JOURNEY PROGRESS ================= */

const journeyPath = document.querySelector(".journey-path");

if (journeyPath) {

  function updateJourneyProgress() {

    const rect = journeyPath.getBoundingClientRect();

    const totalHeight = rect.height + window.innerHeight;

    const progress = (
      (window.innerHeight - rect.top) / totalHeight
    ) * 100;

    const finalProgress = Math.min(
      100,
      Math.max(0, progress)
    );

    journeyPath.style.setProperty(
      "--journey-progress",
      `${finalProgress}%`
    );
  }

  window.addEventListener(
    "scroll",
    updateJourneyProgress,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    updateJourneyProgress
  );

  updateJourneyProgress();
}
