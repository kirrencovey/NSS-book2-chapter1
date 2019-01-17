// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

let welcome = document.querySelector(".article__header")
// console.log(welcome)
welcome.textContent = "Welcome to the Kirren blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

let headers = document.querySelectorAll(".article__header")

for (i=0; i<headers.length; i++) {
    headers[i].classList.add("important")
}

// console.log(headers)

// Obtain a reference the element with a class of dashed and remove it.

let dashed = document.querySelector(".dashed")
dashed.classList.remove("dashed")
// console.log(dashed)

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

let footer = document.querySelector(".article__footer")
footer.classList.add("goldenrod")
// console.log(footer)