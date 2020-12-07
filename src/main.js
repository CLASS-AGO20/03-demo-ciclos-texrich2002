export default class App {
sumarParesFor(){
    let i,suma=0;
    for(i=0; i<=20; i+2){
            console.log(i);
            suma += i;
    }
    console.log("La suma de los pares es: ");
    return suma;
}
contarImparesFor(){

}
}
let app = new App();
console.log("Funcion sumar los pares de 1-20");
console.log(app.sumarParesFor());

