
function operar(tipo){    
    var t1 = document.getElementById('txtNumero1').value;
    var n1 = parseInt(t1); //Convierte el valor String en Integer

    document.getElementById('txtResultadoSuma').value = area(n1);               
    document.getElementById('txtDescripcion').innerHTML = tipo;
}
function ope(tipo){    
    var t1 = document.getElementById('txtNumero2').value;
    var n1 = parseInt(t1); //Convierte el valor String en Integer
   
    document.getElementById('txtResultadoResta').value = volumen(n1);                
    document.getElementById('txtDescripcion').innerHTML = tipo;
}
function operarPerimetro(tipo){    
    var t1 = document.getElementById('txtNumero3').value;
    var n1 = parseInt(t1); //Convierte el valor String en Integer
   
    document.getElementById('txtResultadoPerimetro').value = perimetro(n1);                
    document.getElementById('txtDescripcion').innerHTML = tipo;
}

function area(n1){    
    console.log('Área: ' + n1 + '*' + n1 + 'cm2');
    var r = n1*n1; 
    return r;
}

function volumen(n1){    
    console.log('Volumen: ' + n1 + '*' + n1 + '*' + n1 + 'cm3');
    var r = Math.pow(n1,3);
    return r;     
}

function perimetro(n1){
    console.log('Perimetro: ' + '2π' + '*' + n1 + 'cuadrado');
    var r = Math.PI*n1*2;
    return r;
}


