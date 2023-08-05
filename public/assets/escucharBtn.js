const escuchabtn = document.getElementById ("boton");
const input1 = document.getElementById ('correo');
const input2 = document.getElementById ('password');
escuchabtn.addEventListener( 'click', accionadorBtn );

function accionadorBtn(){
    console.log( `${input1.value} \n ${input2.value}` )
    
}