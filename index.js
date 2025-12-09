const nameMestro = "Miyagi";

function saluta(){
    return "Ciao sono "+ nameMestro;
}

console.log(saluta());

const verificaObiettivo = (numeroFE) => {
    return numeroFE === 1 ? "Sei il num 1": numeroFE >1 ? "Continua ad allenarti" : "Devi ancora iniziare";
}

console.log("\n1: "+ verificaObiettivo(1));
console.log("\n-13: "+ verificaObiettivo(-13));
console.log("\n5: "+ verificaObiettivo(5));
