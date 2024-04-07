function toggleFavorite(button) {
    button.classList.toggle("active");
    if (button.classList.contains("active")) {
        button.textContent = "Favorited";
    } else {
        button.textContent = "Favorite";
    }
}
