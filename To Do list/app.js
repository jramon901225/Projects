const input = document.querySelector(".input-text");
const button = document.querySelector(".input-button");
const output = document.querySelector(".output-container");
const listContainer = [];

let text = "";

const inputText = input.addEventListener("change", (e) => {
    text = e.target.value;
});

button.addEventListener("click", () => {
    clearHTML();
    listContainer.push(text);

    listContainer.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo;
        output.appendChild(li);
    });
});

function clearHTML() {
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
}
