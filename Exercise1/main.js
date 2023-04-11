document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#input").value;
    // add result div to the DOM
    const result = document.createElement("div");
    result.classList.add("result");
    result.textContent = `Result: ${input}`;
    document.querySelector(".reset-form").appendChild(result);
    document.querySelector("#input").value = "";
});

document.querySelector("form").addEventListener("reset", (event) => {
    event.preventDefault();
    const result = document.querySelector(".reset-form");
    if (result) {
        result.remove();
    }
});