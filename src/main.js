export default class App {
    sumarParesFor(){
        let i,suma=0;
        for(i=0; i<=20; i+=2){
            suma += i;
        }
        console.log("La suma de los pares es: ");
        return suma;
    }

    contarImparesFor(inicio, fin){
        let i,t,suma=1;
        
        if(inicio > fin){
            t = inicio;
            inicio = fin;
            fin = t;
        }

        for(i=inicio; i<=fin; i++){
            if(i % 2 !== 0){
            suma ++;
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
        console.log("La suma de los pares es: ");
        return suma;
    }
    contarImparesWhile(inicio, fin){
        let i = inicio;
        let impares=0;
       
        while(i <= fin){
            if(i % 2 !== 0){
                impares++; 
            }
            i++;
       }
       return impares;
    }

    sumarParesDo(){
        let i=1,suma=0;
        do{
            if(i % 2 == 0){
                suma += i;
            }
            i++;
        }while(i <= 20);
        console.log("La suma de los pares es: ");
        return suma;
    }
    contarImparesDo(inicio, fin){
        if(inicio > fin){
            let t = inicio;
            inicio = fin;
            fin = t;
        }
        let i = inicio;
        let suma = 0;
        do{
            if(i % 2 !== 0){
                suma ++;
            }
            i++;
        }while(i <= fin);
        console.log("La suma de los impares es: ");
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
console.log("");
console.log("Funcion sumar los impares de de un rango con while:");
console.log(app.contarImparesWhile(1,20));
console.log("");
console.log("Funcion sumar los pares de 1-20 con do while:");
console.log(app.sumarParesDo());
console.log("");
console.log("Funcion sumar los impares de un rango con do while:");
console.log(app.contarImparesDo(1,20));