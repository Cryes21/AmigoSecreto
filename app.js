// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ListaAmigo = [];

function LimpiarCaja(){
    document.querySelector('#amigo').value = '';
    document.getElementById('amigo').focus();
}


function agregarAmigo(){
    
    let NuevoAmigo = document.getElementById('amigo').value;

    
    if(NuevoAmigo != ''){

        document.querySelector("#resultado").innerHTML = "";
        ListaAmigo.push(NuevoAmigo);
        document.querySelector("#listaAmigos").innerHTML = "";
        document.querySelector('#Sorteo').removeAttribute('disabled');
        for(let elemt of ListaAmigo){
            document.querySelector("#listaAmigos").innerHTML += "<li>"+elemt+"</li>";
            
        }
        LimpiarCaja();
        
        
    }else{
        alert('Por favor, Ingrese un nombre valido');
        document.querySelector('#Sorteo').setAttribute('disabled', 'true');
        LimpiarCaja();
        
    }

}

function sortearAmigo(){
    let SorteoMaximo = ListaAmigo.length;
    let sorteo = Math.floor(Math.random()*SorteoMaximo);
    if(SorteoMaximo <= 1){
        alert('Por favor, Agrega un amigo más');
    }else{
        document.querySelector("#resultado").innerHTML = "El Amigo secreto Sorteado es: "+ListaAmigo[sorteo];
        reiniciarSorteo();
    }
}

function reiniciarSorteo(){
    LimpiarCaja();
    document.querySelector("#listaAmigos").innerHTML = "";
    ListaAmigo = [];
    document.querySelector('#Sorteo').setAttribute('disabled', 'true');
}