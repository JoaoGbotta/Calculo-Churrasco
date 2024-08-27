// carne - 400 gr por pessoa + de 6 horas - 650 gr
// cerveja - 1200 ml por pessoa + 6 horas - 2000 ml 
// Refrigerante/agua - 1200 ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5


let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando ... ");
    
    let adultos = inputadultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value;


    let qdtTotalcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalcerveja = cervejaPP(duracao) * adultos ; 
    let qdtTotalbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    
    resultado.innerHTML = `<p>${qdtTotalcarne / 1000} kg de carne </p>`;
    resultado.innerHTML += `<P>${Math.ceil(qdtTotalcerveja / 355)} latas de cerveja</P>`;
    resultado.innerHTML += `<P>${Math.ceil(qdtTotalbebidas / 2000)} Garrafas de bebidas</P>`;
    
}

function carnePP(duracao){
    if(duracao >=6){
        return 650 ;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >=6){
        return 2000 ;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >=6){
        return 1500 ;
    } else {
        return 1000;
    }
}

