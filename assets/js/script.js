'use strict';

//variaveis
let somaMussarela = 0;
let somaCalabresa = 0;
let somaVegetariana = 0;
let vendaMussarela = 0.00;
let vendaCalabresa = 0.00;
let vendaVegetariana = 0.00;

let btnVendas = document.getElementById('vendas')
let btnEstorno = document.getElementById('estorno')
let btnPlanilha = document.getElementById('export')

//eventos
btnVendas.addEventListener('click',vendas,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

//funções
function venda(e)
{
    if(document.getElementById('mussarela').checked){
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(document.getElementById('calabresa').checked){
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }else if(document.getElementById('vegetariana').checked){
        somaVegetariana = somaVegetariana + 1;
        vendaVegetariana = vendaVegetariana + 35.00;
        document.getElementById('resultadoVegetariana').innerHTML = somaVegetariana;
        document.getElementById('vendaVegetariana').innerHTML = vendaVegetariana.toFixed(2);
    }
}