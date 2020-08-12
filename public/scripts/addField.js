// Procuar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {
    // Duplicar os campos. Que campos?
    // document.querySelector vai buscar o item q estamos chamando
    //.cloneNode(true) o cloneNode vai clonar o item HTML que vc chamou e inserindo true vai clonar todo conteudo
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    // forEach = para cada 
    fields.forEach(function(field) {
        // paga o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
