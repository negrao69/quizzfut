const nomes = ["Gabriel", "Pedro", "Nicolas", "Matheus",
    "Gustavo", "Luna", "Maria"];
    export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
    }
    export const nome = aleatorio(nomes)