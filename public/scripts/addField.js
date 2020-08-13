// procurar o botão, e associar o tipo de evento e ação desencadeada
document.querySelector("#add-time")
    .addEventListener("click", cloneField);
// definição ação

function cloneField() {
    
    var newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true);

    var fields = newFieldsContainer.querySelectorAll("input");

    fields.forEach(element => element.value = "");

    document.querySelector("#schedule-items").appendChild(newFieldsContainer);
}

