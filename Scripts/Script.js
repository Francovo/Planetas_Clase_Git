let nombrePlanetas = ("tierra", "Marte");
let distancia = (6,3, '67');
const tamanio = [];

console.log(nombrePlanetas)
console.log(distancia)
console.log(tamanio)


let i = 0;

while (i <= nombrePlanetas.length - 1) {
    console.log(i);
    console.log(nombrePlanetas[i]);
    i += 1;
}

for (let index = 0; index < nombrePlanetas.length; index++) {
    const element = array[index];
    
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)){
        const element = object[key];
    }   
}

for (const key in nombrePlanetas) {
    console.log(nombrePlanetas[key])
    
}

for (const iterator of object) {
    
}

//Recorrer Planeta
for (const planeta of nombrePlanetas) {
    console.log(planeta)
}

//Operador de igualdad 
for(const key in distancia) {
    if (distancia[key] == '5') {
        console.log("Se encontro la distancia")
    } else {
        console.log("No se encontro la distancia")
    }
}

