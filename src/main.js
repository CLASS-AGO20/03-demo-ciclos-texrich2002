export default class App {
    sumarParesFor(){
        let i,suma=0;
        for(i=0; i<=20; i+=2){
            console.log(i);
            suma += i;
        }
        console.log("La suma de los pares es: ");
        return suma;
    }

    contarImparesFor(inicio, fin){
        let i,t,suma=0;
        if(inicio > fin){
            t = inicio;
            inicio = fin;
            fin = t;
        }
        for(i=inicio; i<=fin; i++){
            if(i % 2 != 0){
            console.log(i);
            suma += i;
            }    
        }
        console.log("La suma de los impares es: ");
        return suma;
        }

    sumarParesWhile(){
        let i=1,suma=0;

        while(i <= 20){
            if(i % 2 ==0){
                suma += i;
            }
            i++;
        }
        return suma;
    }

}
let app = new App();
console.log("Funcion sumar los pares de 1-20:");
console.log(app.sumarParesFor());
console.log("");
console.log("Funcion sumar los impares de un rango:");
console.log(app.contarImparesFor(1,20));
console.log("");
console.log("Funcion sumar los pares de 1-20 con while:");
console.log(app.sumarParesWhile());