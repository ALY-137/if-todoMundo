var ativoMenu=1;
var botaoMenu = document.getElementById('menu');

function menu(){
    if(ativoMenu == 0){
        botaoMenu.style.display =  'none';
        ativoMenu = 1;
    }else{
        botaoMenu.style.display = 'block';
        ativoMenu = 0;
    }

}


function sobre(){ 
    var botaoSobre = document.getElementById('sobre');
    var botaoLista = document.getElementById('lista');
    botaoSobre.style.display =  'block';
    botaoLista.style.display =  'none';
    botaoMenu.style.display =  'none';
    ativoMenu = 1;
}

function lista(){
    var botaoLista = document.getElementById('lista');
    var botaoSobre = document.getElementById('sobre');
    botaoLista.style.display =  'block';
    botaoSobre.style.display =  'none';
    botaoMenu.style.display =  'none';
    ativoMenu = 1;
}