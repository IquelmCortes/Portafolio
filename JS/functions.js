document.addEventListener("DOMContentLoaded", function () {

    let email = document.getElementById("email");
    let error = document.getElementById("error-email");

    email.addEventListener("input", function () {
        if (this.validity.typeMismatch) {
            this.setCustomValidity("Este campo debe contener al menos un '@', un dominio y un '.'");
            error.textContent = this.validationMessage;
        } else {
            this.setCustomValidity("");
            error.textContent = "";
        }
    });

    let nombre = document.getElementById("nombre");
    let errorName = document.getElementById("error-nombre");
    function validar_nombre() {
        var regex = /^[A-Z][a-z]+(?:\s+[a-z]+)*$/;
        if (!regex.test(nombre.value)) {
            errorName.innerHTML = "Debe escribir un nombre válido";
        } else {
            errorName.innerHTML = "";
        }
    }

    nombre.addEventListener("input", () => validar_nombre());

    let asunto = document.getElementById("asunto");
    let message = document.getElementById("mensaje");
    let send = document.getElementById("enviar");

    function activeSend() {
        if (email.value != "" && nombre.value != "" && asunto.value != "" && message.value != "") {
            if (error.innerText == "" && errorName.innerText == "") {
                send.parentElement.classList.add("w-[48%]", "h-67", "p-4", "ml-[4%]", "bg-[#2A7AE4]", "text-center", "text-white", "transition", "hover:scale-110", "hover:-translate-y-1", "duration-150", "ease-in-out");
                send.removeAttribute("disabled");
            } else {
                send.parentElement.classList.remove("w-[48%]", "h-67", "p-4", "ml-[4%]", "bg-[#2A7AE4]", "text-center", "text-white", "transition", "hover:scale-110", "hover:-translate-y-1", "duration-150", "ease-in-out");
                send.setAttribute("disabled", "");
            }
        } else {
            send.parentElement.classList.remove("w-[48%]", "h-67", "p-4", "ml-[4%]", "bg-[#2A7AE4]", "text-center", "text-white", "transition", "hover:scale-110", "hover:-translate-y-1", "duration-150", "ease-in-out");
            send.setAttribute("disabled", "");
        }
    }

    message.addEventListener("input", () => activeSend());
    asunto.addEventListener("input", () => activeSend());
    nombre.addEventListener("input", () => activeSend());
    email.addEventListener("input", () => activeSend());

    send.addEventListener("click", function () {
        document.getElementById("bg-modal").setAttribute("style", "display: flex; margin-top: -32px")
        document.getElementById("modal-text").innerHTML = "Gracias por comunicarte conmigo";
    });

    let close = document.getElementById("close");

    close.addEventListener("click", function () {
        document.getElementById("bg-modal").style.display = "none";
    });

});
