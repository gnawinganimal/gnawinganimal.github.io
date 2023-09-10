console.log("Running timeline script...");

const content = document.getElementById("timeline-content");
const buttons = document.getElementById("timeline-buttons");

function update(current) {
    for (let i = 0; i < content.childElementCount; i++) {
        if (i === current) {
            content.children[i].classList.remove("display-none");
            buttons.children[i].classList.add("active");

        } else {
            content.children[i].classList.add("display-none");
            buttons.children[i].classList.remove("active");
        }
    }
}

for (let i = 0; i < buttons.childElementCount; i++) {
    buttons.children[i].addEventListener("click", () => {
        update(i);
    })
}

update(0);