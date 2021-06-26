//variables y Selectores

const formulario=document.querySelector('#agregar-gasto');
const gastoListado=document.querySelector('#gastos ul');



//Eventos


eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto);

}



//classes

class Presupuesto{
    constructor(presupuesto){
        this.presupuesto=Number(presupuesto);
    }
}

class UI{

}


let presupuesto;
//funciones
function preguntarPresupuesto(){
    const presupuestoUsuario=prompt('Cual es su presupuesto?');
 

    if(presupuestoUsuario==='' || presupuestoUsuario=== null ||isNaN(presupuestoUsuario) || presupuestoUsuario<=0 ){
        window.location.reload();

    }

    presupuesto=new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
}