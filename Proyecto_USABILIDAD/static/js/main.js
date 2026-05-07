const menuButton = document.querySelector(".menu-toggle");
const primaryMenu = document.querySelector("#primary-menu");
const mobileMenu = window.matchMedia("(max-width: 820px)");

function syncMenu() {
    if (!menuButton || !primaryMenu) {
        return;
    }

    if (!mobileMenu.matches) {
        primaryMenu.hidden = false;
        menuButton.setAttribute("aria-expanded", "true");
        return;
    }

    primaryMenu.hidden = menuButton.getAttribute("aria-expanded") !== "true";
}

menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    syncMenu();
});

if (typeof mobileMenu.addEventListener === "function") {
    mobileMenu.addEventListener("change", syncMenu);
} else {
    mobileMenu.addListener(syncMenu);
}

document.querySelectorAll(".lite-embed").forEach((embed) => {
    const button = embed.querySelector("button");
    const videoId = embed.dataset.videoId;

    button?.addEventListener("click", () => {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.title = "Video embebido de la práctica multimedia";
        iframe.loading = "lazy";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allowFullscreen = true;
        embed.replaceChildren(iframe);
    });
});

syncMenu();
