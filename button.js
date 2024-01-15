// button up

window.onscroll = function() {
    var button = document.getElementById("button");
    if (window.pageYOffset > 0) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

