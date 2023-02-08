window.onload = init();
var erro = 0;
var acerto;
var ajuda;

function init(){

   definirTextos('Bem-vindo, jogador(a)!', 'Vimos que ficou curioso com nosso desafio...', 'O que acha de começarmos com um ? ( Digite S ou N )');
   checarAnimacao();
   
}


function definirTextos(texto1,texto2,texto3){
    let paragrafos = document.querySelectorAll('[name="paragrafos"]');

    paragrafos[0].innerHTML = texto1;
    paragrafos[1].innerHTML = texto2;
    paragrafos[2].innerHTML = texto3;

    paragrafos[0].style.display = 'block';
    paragrafos[0].classList = ('line piscar');
    paragrafos[1].style.display = 'none';
    paragrafos[1].classList = ('');
    paragrafos[2].style.display = 'none';
    paragrafos[2].classList = ('');


}

function checarAnimacao(){
  
    //verifica quando a animação termina e qual elemento ela estava animando 

    //a classe css de animação
    let animacao = document.querySelector(".piscar");
    let paragrafos = document.querySelectorAll('[name="paragrafos"]');
    let inputNome = document.getElementById('nome');
    var ativo;



    //adiciona o evendo nessa animação para definir uma ação quando ela acabar
    animacao.addEventListener('animationend', ()=>{
        
        //var paragrafos = document.querySelectorAll('[name="paragrafos"]');
        //var ativo;

        //procura qual paragrafo está visivel na tela e joga para a variavel "ativo"
        [...paragrafos].forEach(el =>{
            
            if(el.style.display == 'block'){
                ativo = el;   
            }

        });

       //se o elemento ativo for o "txt1" retira a classe de animação e o display dele, ativando o proximo elemento, o "txt2" e repete essa função
        if(ativo.dataset.texto == ('txt1')){
            ativo.classList = ('');
            ativo.style.display = '';

            let txt2 = document.getElementById('txt2');
            txt2.style.display = 'block';
            txt2.classList = ('line piscar');
            checarAnimacao();
        }

        //se o elemento ativo for o "txt2" retira a classe de animação e o display dele, ativando o proximo elemento, o "txt3" e repete essa função
        if(ativo.dataset.texto == ('txt2')){
            ativo.classList = ('');
            ativo.style.display = '';

            let txt3 = document.getElementById('txt3');
            txt3.style.display = 'block';
            txt3.classList = ('line piscar');
            checarAnimacao();
        }

        //se o elemento ativo for o "txt3" retira a classe de animação e o display dele, inserindo um input para uma resposta
        if(ativo.dataset.texto == ('txt3')){
            ativo.classList = ('');
            ativo.style.display = '';

            let input = document.getElementById('resposta');
            exibirInput('btnEnviar');
            
            
            if(!input){
                criarInputDeResposta('resposta', 'Resposta', 'text', 'resposta', '1');
                
            }
            
       
           if(!inputNome){
                exibirInput('resposta');
            }
            
            if(ativo.innerHTML== 'Preencha as caixas de texto:'){
                ocultarInput('resposta');
                criarInputDeResposta('nome','Nome','text', 'nome','40');
                criarInputDeResposta('email', 'E-mail', 'email', 'email', '30');
                criarInputDeResposta('telefone', 'Telefone', 'text', 'telefone', '11');
            }

            if(ativo.innerHTML== 'Fique ligado!'){
                ocultarInput('resposta');
                ocultarInput('btnEnviar');
                  
            }
           

            if(ativo.innerHTML== 'esse e-mail já foi cadastrado'){
                ocultarInput('resposta');
                exibirInput('nome');
                exibirInput('email');
                exibirInput('telefone');
                
            }

            if(ativo.innerHTML== 'esse telefone já foi cadastrado'){
                ocultarInput('resposta');
                exibirInput('nome');
                exibirInput('email');
                exibirInput('telefone');
            }

            if(ativo.innerHTML== 'telefone e email já cadastrados'){
                ocultarInput('resposta');
                exibirInput('nome');
                exibirInput('email');
                exibirInput('telefone');
            }

            
            
        }
  
    });   
}



function criarInputDeResposta(id, nome, tipo, name, tamanho){
    let conteudo = document.getElementById('formulario');
    let div = document.createElement('div');
    let input = document.createElement('input');
    let espaco = document.createElement('br');
    

    input.maxLength = tamanho;
    input.style.background = 'black';
    input.style.outline = 0 ;
    input.style.color = 'green';
    input.style.border = 'dashed';
    input.id = id;
    input.style.width = '500px';
    input.placeholder = nome;
    input.type = tipo;
    input.name = name;
    input.dataset.fase = 'resposta';

    

   // div.classList = "col-md-1 offset-md-11";

    conteudo.appendChild(div);
    conteudo.appendChild(espaco);
    conteudo.appendChild(input);
    
    
    input.focus();
    definirAcaoInput();
}


function criarBtn(id,name){
    let conteudo = document.getElementById('formulario');
    let div = document.createElement('div');
    let btn = document.createElement('button');
    let espaco = document.createElement('br');
    

    btn.style.background = 'black';
    btn.style.outline = 0 ;
    btn.style.color = 'green';
    btn.style.border = 'dashed';
    btn.id = id;
    btn.innerHTML = 'Enviar'
    btn.style.width = '500px';
    btn.name = name;

    

    div.classList = "col-md-1 offset-md-11";

    conteudo.appendChild(div);
    conteudo.appendChild(espaco);
    conteudo.appendChild(btn);
    
    
    definirAcaoInput();
}



/*function definirAcaoInput(){
    let input = document.getElementById('resposta');
    let input2 = document.getElementById('telefone');
    let conteudo = document.getElementById('conteudo');
    let paragrafos = document.querySelectorAll('[name="paragrafos"]');
    let resposta = 'mystery';

   

    input.addEventListener('keypress', (el)=>{
 
        if (el.key === "Enter"){

            if((input.value.toUpperCase() == 'S') && (input.maxLength == 1)){
                //alert("Enter pressionado!")
                limpaTela();
                ocultarInput('resposta');
                
                $('#Modal1').modal({
                    backdrop: 'static',
                    keyboard: false, 
                    show: true
            }); 
            $('#Modal1').modal('show');
            }

            if((input.value.toUpperCase() == 'N') && (input.maxLength == 1)){
                limpaTela();
                input.value = '';
                paragrafos[2].style.display = 'block';
                paragrafos[2].style.color = 'red';
                paragrafos[2].innerHTML = 'É uma pena, porém, volte quando se sentir preparado. Se mudar de ideia, pode digitar "S" para continuarmos.';
                paragrafos[2].classList = ('line piscar');
                ocultarInput('resposta');
                
            }
            
            if ((input.value.toUpperCase() != resposta.toUpperCase()) && (input.maxLength == 7)){
                limpaTela();
                ocultarInput('resposta');
                input.value = '';
                paragrafos[2].style.display = 'block';
                paragrafos[2].style.color = 'red';
                paragrafos[2].innerHTML = 'Resposta incorreta!';
                paragrafos[2].classList = ('line piscar');
                erro = ++erro;

                if(erro >= 3){
                    limpaTela();
                    ocultarInput('resposta');
                    input.value = '';
                    paragrafos[2].style.display = 'block';
                    paragrafos[2].style.color = 'red';
                    paragrafos[2].innerHTML = 'Dica: a misteriosa resposta é: (M _ S T _ _ Y)';
                    paragrafos[2].classList = ('line piscar');
                    ajuda = 'S';
                }
                

            }
            else{
                if ((el.key === "Enter") && (input.value.toUpperCase() == resposta.toUpperCase()) && (input.maxLength == 7)){
                    ocultarInput('resposta');
                    paragrafos[2].style.color = 'green';
                    acerto = 1;
                    Pergunta2();
                    
                }
            }


            if ((input.value.toUpperCase() == 'S') && (input.maxLength == 2)){
                ocultarInput('resposta');
                paragrafos[2].style.color = 'green';
                cadastro();
            }

            if ((input.value.toUpperCase() == 'N') && (input.maxLength == 2)){
                limpaTela();
                ocultarInput('resposta');
                input.value = '';
                paragrafos[2].style.display = 'block';
                paragrafos[2].style.color = 'red';
                paragrafos[2].innerHTML = 'Poxa, quase acreditei que você conseguiria... Se mudar de ideia, pode digitar "S" para continuarmos.';
                paragrafos[2].classList = ('line piscar');
             }
            
        }

       
    })

    if(input2){
        input2.addEventListener('keypress', (el)=>{
 
            if (el.key === "Enter"){
    
                
    
                enviarForm();
            }
        })
    }

    
}

*/


/*
function definirAcaoInput(){
    let btn = document.getElementById('btnEnviar');
    let input = document.getElementById('resposta');
    let inputNome = document.getElementById('nome');
    let inputEmail = document.getElementById('email');
    let inputTelefone = document.getElementById('telefone');
    let conteudo = document.getElementById('conteudo');
    let paragrafos = document.querySelectorAll('[name="paragrafos"]');
    let resposta = 'mystery';

   

    btn.addEventListener('click', (el)=>{
 
        

            if((input.value.toUpperCase() == 'S') && (input.maxLength == 1)){
                //alert("Enter pressionado!")
                limpaTela();
                ocultarInput('resposta');
                
                $('#Modal1').modal({
                    backdrop: 'static',
                    keyboard: false, 
                    show: true
            }); 
            $('#Modal1').modal('show');
            }

            if((input.value.toUpperCase() == 'N') && (input.maxLength == 1)){
                limpaTela();
                input.value = '';
                paragrafos[2].style.display = 'block';
                paragrafos[2].style.color = 'red';
                paragrafos[2].innerHTML = 'É uma pena, porém, volte quando se sentir preparado. Se mudar de ideia, pode digitar "S" para continuarmos.';
                paragrafos[2].classList = ('line piscar');
                ocultarInput('resposta');
                
            }
            
            if ((input.value.toUpperCase() != resposta.toUpperCase()) && (input.maxLength == 7)){
                limpaTela();
                ocultarInput('resposta');
                input.value = '';
                paragrafos[2].style.display = 'block';
                paragrafos[2].style.color = 'red';
                paragrafos[2].innerHTML = 'Resposta incorreta!';
                paragrafos[2].classList = ('line piscar');
                erro = ++erro;

                if(erro >= 3){
                    limpaTela();
                    ocultarInput('resposta');
                    input.value = '';
                    paragrafos[2].style.display = 'block';
                    paragrafos[2].style.color = 'red';
                    paragrafos[2].innerHTML = 'Dica: a misteriosa resposta é: (M _ S T _ _ Y)';
                    paragrafos[2].classList = ('line piscar');
                    ajuda = 'S';
                }
                

            }
            else{
                if ((input.value.toUpperCase() == resposta.toUpperCase()) && (input.maxLength == 7)){
                    ocultarInput('resposta');
                    paragrafos[2].style.color = 'green';
                    acerto = 1;
                    Pergunta2();
                    
                }
            }


            if ((input.value.toUpperCase() == 'S') && (input.maxLength == 2)){
                ocultarInput('resposta');
                paragrafos[2].style.color = 'green';
                cadastro();
            }

            if ((input.value.toUpperCase() == 'N') && (input.maxLength == 2)){
                limpaTela();
                ocultarInput('resposta');
                input.value = '';
                paragrafos[2].style.display = 'block';
                paragrafos[2].style.color = 'red';
                paragrafos[2].innerHTML = 'Poxa, quase acreditei que você conseguiria... Se mudar de ideia, pode digitar "S" para continuarmos.';
                paragrafos[2].classList = ('line piscar');
            }
            
       
            if((inputNome) && (inputEmail) && (inputTelefone)){
                if((inputNome.value) && (inputEmail.value) && (inputTelefone.value)){
                    enviarForm();
                }
                
            }
        
       
    })

    
    
}

*/



function definirAcaoInput(){
    let btn = document.getElementById('btnEnviar');
    let input = document.getElementById('resposta');
    let inputNome = document.getElementById('nome');
    let inputEmail = document.getElementById('email');
    let inputTelefone = document.getElementById('telefone');
    let conteudo = document.getElementById('conteudo');
    let paragrafos = document.querySelectorAll('[name="paragrafos"]');
    let resposta = 'Edson Arantes do Nascimento';

   

    btn.addEventListener('click', (el)=>{
 
        

            if((input.value.toUpperCase() == 'S') && (input.dataset.fase == 'resposta')){
                //alert("Enter pressionado!")
                limpaTela();
                ocultarInput('resposta');
                
                $('#Modal1').modal({
                    backdrop: 'static',
                    keyboard: false, 
                    show: true
            }); 
            $('#Modal1').modal('show');
            }

            if((input.value.toUpperCase() == 'N') && (input.dataset.fase == 'resposta')){
                limpaTela();
                input.value = '';
                paragrafos[2].style.display = 'block';
                paragrafos[2].style.color = 'red';
                paragrafos[2].innerHTML = 'É uma pena, porém, volte quando se sentir preparado. Se mudar de ideia, pode digitar "S" para continuarmos.';
                paragrafos[2].classList = ('line piscar');
                ocultarInput('resposta');
                ocultarInput('btnEnviar');
                
            }
            
            if ((input.value.toUpperCase() != resposta.toUpperCase()) && (input.dataset.fase == 'pgt1')){
                limpaTela();
                ocultarInput('resposta');
                ocultarInput('btnEnviar');
                input.value = '';
                paragrafos[2].style.display = 'block';
                paragrafos[2].style.color = 'red';
                paragrafos[2].innerHTML = 'Resposta incorreta!';
                paragrafos[2].classList = ('line piscar');
                erro = ++erro;

                if(erro >= 5){
                    limpaTela();
                    ocultarInput('resposta');
                    ocultarInput('btnEnviar');
                    input.value = '';
                    paragrafos[2].style.display = 'block';
                    paragrafos[2].style.color = 'red';
                    paragrafos[2].innerHTML = 'Dica: Ed...';
                    paragrafos[2].classList = ('line piscar');
                    ajuda = 'S';
                }
                

            }
            else{
                if ((input.value.toUpperCase() == resposta.toUpperCase()) && (input.dataset.fase == 'pgt1')){
                    ocultarInput('resposta');
                    paragrafos[2].style.color = 'green';
                    acerto = 1;
                    Pergunta2();
                    
                }
            }


            if ((input.value.toUpperCase() == 'S') && (input.dataset.fase == 'pgt2')){
                ocultarInput('resposta');
                paragrafos[2].style.color = 'green';
                cadastro();
            }

            if ((input.value.toUpperCase() == 'N') && (input.dataset.fase == 'pgt2')){
                limpaTela();
                ocultarInput('resposta');
                ocultarInput('btnEnviar');
                input.value = '';
                paragrafos[2].style.display = 'block';
                paragrafos[2].style.color = 'red';
                paragrafos[2].innerHTML = 'Poxa, quase acreditei que você conseguiria... Se mudar de ideia, pode digitar "S" para continuarmos.';
                paragrafos[2].classList = ('line piscar');
            }
            
       
            if((inputNome) && (inputEmail) && (inputTelefone) && (input.dataset.fase == 'cadastro')){
                if((inputNome.value) && (inputEmail.value) && (inputTelefone.value)){
                    enviarForm();
                }
                
            }
        
       
    })

    
    
}





function limpaTela(){
    let paragrafos = document.querySelectorAll('[name="paragrafos"]');
    paragrafos[0].style.display = '';
    paragrafos[0].innerHTML = '';
    paragrafos[0].classList = '';

    paragrafos[1].style.display = '';
    paragrafos[1].innerHTML = '';

    paragrafos[2].style.display = '';
    paragrafos[2].innerHTML = '';
    paragrafos[2].classList = '';

}



function Pergunta1(){
    let paragrafos = document.querySelectorAll('[name="paragrafos"]');
	criarInputDeResposta('assistirNovamente','assistirNovamente','button','assistirNovamente','0');
    let input = document.getElementById('resposta');
    ocultarInput('resposta');
    ocultarInput('btnEnviar');
    limpaTela();

    paragrafos[2].style.color = 'green';
    paragrafos[2].style.display = 'block';
    paragrafos[2].innerHTML = 'Qual a sua resposta?';
    paragrafos[2].classList = ('line piscar');

    
    input.value = '';
    input.maxLength = 27;
    input.dataset.fase = 'pgt1';
    


    $('#Modal1').modal('hide');
	
	let btnAssistirNovamente = document.getElementById('assistirNovamente');
        btnAssistirNovamente.value = 'Ver Novamente';
    let btnResposta = document.getElementById('btnResposta');

    btnAssistirNovamente.addEventListener('click', ()=>{
        $('#Modal1').modal('show');
        btnResposta.setAttribute("onclick","$('#Modal1').modal('hide');");
    })
    
}


function Pergunta2(){
    let input = document.getElementById('resposta');
    ocultarInput('resposta');
    ocultarInput('btnEnviar');
    limpaTela();
    definirTextos('Resposta correta!', 'Você demonstrou ser digno deste desafio.', 'A questão é, você está pronto? ( Digite S ou N )');
    
    input.value = '';
    input.maxLength = 1;
    input.dataset.fase = 'pgt2';
    
    $('#Modal1').modal('hide');
	
	let btnAssistirNovamente = document.getElementById('assistirNovamente');
    btnAssistirNovamente.style.display = 'none';
    
}



function cadastro(){
    let input = document.getElementById('resposta');
    ocultarInput('resposta');
    ocultarInput('btnEnviar');
    limpaTela();
    definirTextos('Perfeito, vi um grande potencial em você!', 'Preencha seu nome, e-mail e Whatsapp para saber o dia do maior desafio de sua vida!', 'Preencha as caixas de texto:');
    
    
   
    
    input.dataset.fase = 'cadastro';
    
    

}


function fimCadastro(){
    let input = document.getElementById('resposta');
    let inputNome = document.getElementById('nome');
    let inputEmail = document.getElementById('email');
    let inputTelefone = document.getElementById('telefone');

    ocultarInput('resposta');
    ocultarInput('nome');
    ocultarInput('email');
    ocultarInput('telefone');
    ocultarInput('btnEnviar');

    limpaTela();
    definirTextos('Cadastro realizado com sucesso!', 'Em breve, enviaremos mais informações e te avisaremos quando tudo estiver pronto para começarmos!', 'Fique ligado!');
    
    
}

function ocultarInput(id){
   let input = document.getElementById(id);

   input.style.display = 'none';
   input.type = 'hidden';
   
}


function exibirInput(id){
    let input = document.getElementById(id);
 
    input.style.display = 'block';
    input.type = 'text';
    
 }


 function enviarForm(){
   
    let inputNome = document.getElementById('nome').value;
    let inputEmail = document.getElementById('email').value;
    let inputTelefone = document.getElementById('telefone').value;

    let dados = [];
    dados.push(inputNome,inputEmail,inputTelefone,ajuda,erro,acerto);

    ajax('dadosInput',dados);

 }



 
function ajax(tipoDeDado,dado){



    let url = window.location.protocol + "//" +window.location.host + "/";
    
    //atribui a variavel uma classe nativa do JS para realizar o ajax
    let xmlreq =  new XMLHttpRequest();
    
    // Iniciar uma requisição
    xmlreq.open("GET", url+"ajax?" + tipoDeDado + '=' + dado, true);

    // Verifica se obteve ou não uma resposta
    xmlreq.onreadystatechange = function(){

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200){
                result = xmlreq.responseText;
                
                //consulta o usuario, valida o resultado com base nos criterios do IF
                if(tipoDeDado == 'dadosInput'){

                    if(result == 'email já cadastrado'){
                        limpaTela();
                        erroEmail();
                    }

                    if(result == 'telefone já cadastrado'){
                        limpaTela();
                        erroTelefone();
                    }

                    if(result == 'telefone e email já cadastrados'){
                        limpaTela();
                        erroTelefone();
                    }

                    if(result == 'cadastro efetuado'){
                        limpaTela();
                        fimCadastro();
                    }
                   
                   
                    //fimCadastro();
                   
                }

            }
        }
    }
    xmlreq.send(null);
  // FIM DA FUNÇÃO AJAX 
}


function erroEmail(){
    let input = document.getElementById('resposta');
    let inputNome = document.getElementById('nome');
    let inputEmail = document.getElementById('email');
    let inputTelefone = document.getElementById('telefone');

    ocultarInput('resposta');
    ocultarInput('nome');
    ocultarInput('email');
    ocultarInput('telefone');

    limpaTela();
    definirTextos('Ops, ocorreu um erro em seu cadastro', 'pelo que verifiquei aqui ', 'esse e-mail já foi cadastrado');
    
}

function erroTelefone(){
    let input = document.getElementById('resposta');
    let inputNome = document.getElementById('nome');
    let inputEmail = document.getElementById('email');
    let inputTelefone = document.getElementById('telefone');

    ocultarInput('resposta');
    ocultarInput('nome');
    ocultarInput('email');
    ocultarInput('telefone');

    limpaTela();
    definirTextos('Ops, ocorreu um erro em seu cadastro', 'pelo que verifiquei aqui ', 'esse telefone já foi cadastrado');
    
}


function erroTelefoneEmail(){
    let input = document.getElementById('resposta');
    let inputNome = document.getElementById('nome');
    let inputEmail = document.getElementById('email');
    let inputTelefone = document.getElementById('telefone');

    ocultarInput('resposta');
    ocultarInput('nome');
    ocultarInput('email');
    ocultarInput('telefone');

    limpaTela();
    definirTextos('Ops, ocorreu um erro em seu cadastro', 'pelo que verifiquei aqui ', 'esse telefone e seu email já foram cadastrados');
    
}