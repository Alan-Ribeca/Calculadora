const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const calculadora = document.querySelector(".calculator")

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = math.evaluate(display.value.replace(/,/g, "."))
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id == "de") {
            display.value = display.value.slice(0, -1);
        } else if (esOperador(btn.id) && display.value !== "" && !isNaN(display.value.slice(-1))) {
            display.value += ` ${btn.id} `;
        } else if (btn.id == "-" && display.value.slice(-1) != " " && display.value !== "") {
            display.value += ` ${btn.id} `;
        } else if (btn.id == "-" && display.value === "") {
            display.value += btn.id;
        } else if (!esOperador(btn.id)) {
            display.value += btn.id
        } else if (esOperador(btn.id)) {
            mostrarError("Formato no valido, inserte un numero antes")
        }
    })
})

function esOperador(value) {
    return ["/", "+", "*", "%"].includes(value);
}

function mostrarError(mensaje) {
    let mensajeError = document.querySelector(".error");

    if (!mensajeError) {
        mensajeError = document.createElement("P");
        mensajeError.classList.add("error");
        mensajeError.textContent = mensaje
        calculadora.appendChild(mensajeError)
    }

    if (!mensajeError) {
        mensajeError.remove()
    }

    setTimeout(() => {
        mensajeError.remove()
    }, 900);
}

// modo oscuro
const btnSwitch = document.querySelector("#theme-checkbox");

window.addEventListener("load", (event) => {
    if(localStorage.getItem("modoOscuro") === "true") {
        document.body.classList.add("dark");
        btnSwitch.checked = true;  // Marca el checkbox
    }
});

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("modoOscuro", "true");
    } else {
        localStorage.setItem("modoOscuro", "false");
    }
});