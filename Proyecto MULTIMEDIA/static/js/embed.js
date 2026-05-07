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
