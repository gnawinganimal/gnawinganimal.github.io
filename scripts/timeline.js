console.log("Running timeline script...");

const content = document.getElementById("timeline-content");
const buttons = document.getElementById("timeline-buttons");

function update(current) {
    for (let i = 0; i < content.childElementCount; i++) {
        if (i === current) {
            content.children[i].classList.remove("display-none");
            buttons.children[i].classList.add("text-red-300");
            buttons.children[i].classList.add("dark:text-yellow-300");

        } else {
            content.children[i].classList.add("display-none");
            buttons.children[i].classList.remove("text-red-300");
            buttons.children[i].classList.remove("dark:text-yellow-300");
        }
    }
}

for (let i = 0; i < buttons.childElementCount; i++) {
    buttons.children[i].addEventListener("click", () => {
        update(i);
    })
}

update(0);