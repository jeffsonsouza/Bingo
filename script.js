let vetor = [];
const LIMITE = 75
const MAX = 76

function sortear(){
    let lista = document.getElementById("lista").innerHTML;
    let numero;
    if(!isLimite()){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos os números foram sorteados!',
          })
    }
    do{
        if (isLimite()) {
            numero = parseInt(Math.random() * (MAX - 1) + 1, 10);
        }
    }while(isLimite() && presente(numero))

    if (isLimite()) {
        vetor.push(numero);
        lista += "<li>" +numero +" - " +"</li>"
        document.getElementById("lista").innerHTML = lista;

        document.querySelector('#sorteio').innerHTML = numero;
    }
}

const presente = (numero) => vetor.indexOf(numero) != -1;
const isLimite = () =>  vetor.length < LIMITE

