var body = document.querySelector("body");
var dark = document.querySelector(".darkTheme");
dark.classList.add("border-thick")
var red = document.querySelector(".redTheme");
var blue = document.querySelector(".blueTheme");
var yellow = document.querySelector(".yellowTheme");
    goDark = function() { // Creates a function called goDark that removes the 'dark' class from the body
        body.className = "";
        body.classList.add("dark");
        dark.classList.add("border-thick")
        red.classList.remove("border-thick")
        blue.classList.remove("border-thick")
        yellow.classList.remove("border-thick")
    };
    goRed = function() {
        body.className = "";
        body.classList.add("red");
        red.classList.add("border-thick")
        dark.classList.remove("border-thick")
        blue.classList.remove("border-thick")
        yellow.classList.remove("border-thick")
    };
    goBlue = function() {
        body.className = "";
        body.classList.add("blue");
        blue.classList.add("border-thick")
        dark.classList.remove("border-thick")
        red.classList.remove("border-thick")
        yellow.classList.remove("border-thick")
    };
    goYellow = function() {
        body.className = "";
        body.classList.add("yellow");
        yellow.classList.add("border-thick")
        dark.classList.remove("border-thick")
        blue.classList.remove("border-thick")
        red.classList.remove("border-thick")
    }



document.querySelector(".darkTheme").addEventListener("click", goDark, false);
document.querySelector(".redTheme").addEventListener("click", goRed, false);
document.querySelector(".yellowTheme").addEventListener("click", goYellow, false);
document.querySelector(".blueTheme").addEventListener("click", goBlue, false);
