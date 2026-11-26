// Variáveis para Manipular cada DIV

const visorAtual = document.getElementById('VisorAtual');
const visorAntigo = document.getElementById('VisorAntigo');

const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnDiv = document.getElementById('btnDiv');

const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btnMult = document.getElementById('btnMult');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btnSub = document.getElementById('btnSub');

const btnLimpa = document.getElementById('btnLimpa');
const btn0 = document.getElementById('btn0');
const btnCalc = document.getElementById('btnCalc');
const btnMais = document.getElementById('btnMais');

// Ouvidores de cada Botão

btn7.addEventListener('click',() => addNum('7'));
btn8.addEventListener('click',() => addNum('8'));
btn9.addEventListener('click',() => addNum('9'));
btn4.addEventListener('click',() => addNum('4'));
btn5.addEventListener('click',() => addNum('5'));
btn6.addEventListener('click',() => addNum('6'));
btn1.addEventListener('click',() => addNum('1'));
btn2.addEventListener('click',() => addNum('2'));
btn3.addEventListener('click',() => addNum('3'));
btn0.addEventListener('click',() => addNum('0'));

btnDiv.addEventListener('click',bDiv);
btnMult.addEventListener('click',bMult);
btnSub.addEventListener('click',bSub);
btnMais.addEventListener('click',bMais);

btnCalc.addEventListener('click',bCalc);

btnLimpa.addEventListener('click',bLimpa);

// Função de add numero

function addNum(btnNum) {
    visorAtual.textContent += btnNum;
}


// Funções Operadores

var op;

function bDiv(){
  op='/';
  visorAntigo.innerText = visorAtual.innerText;
  visorAtual.innerText = '';
}

function bMult(){
  op='*';
  visorAntigo.innerText = visorAtual.innerText;
  visorAtual.innerText = '';
}

function bSub(){
  op='-';
  visorAntigo.innerText = visorAtual.innerText;
  visorAtual.innerText = '';
}

function bMais(){
  op='+';
  visorAntigo.innerText = visorAtual.innerText;
  visorAtual.innerText = '';
}


// Função de Calculo


function bCalc(){
  if (op === '+'){
    visorAtual.innerText = (visorAntigo.innerText * 1) + (visorAtual.innerText * 1);
  }
  
  if (op === '-'){
    visorAtual.innerText = (visorAntigo.innerText * 1) - (visorAtual.innerText * 1);
  }  

  if (op === '*'){
    visorAtual.innerText = (visorAntigo.innerText * 1) * (visorAtual.innerText * 1);
  }
  
  if (op === '/'){
    visorAtual.innerText = (visorAntigo.innerText * 1) / (visorAtual.innerText * 1);
  
    if (visorAtual.innerText == 0){
    visorAtual.innerText = 'ERRO';
    } 
    if  (visorAntigo.innerText == 0){
    visorAtual.innerText = 'ERRO';
    } 
    
  }
  
  visorAntigo.innerText = '';
}

function bLimpa(){
  visorAtual.innerText = '';
  visorAntigo.innerText = '';
  op = null;
}
