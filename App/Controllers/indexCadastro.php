<?php

namespace App\Controllers;
use MF\Controller\Action;
use App\connection;
use App\Model\cadastro;

class indexCadastro extends Action{

    public function ajax(){
        //Instancia a conexão com o banco
		$conn = Connection::getDB();
	    $cadastro = new Cadastro($conn);

        if(isset($_GET['dadosInput'])){
           
            $dados = $_GET['dadosInput'];

           $dados = explode(',',$dados);
            
            $nome = $dados[0];
            $email = $dados[1];
            $telefone = $dados[2];
            $ajuda = $dados[3];
            $erro = $dados[4];
            $acerto = $dados[5];

            $emailCadastro = $cadastro->getEmail($email);
            $telefoneCadastro = $cadastro->getTelefone($telefone);
            

            

            if(($emailCadastro) && ($telefoneCadastro)){
                $emailCadastro = $emailCadastro[0]['email'];
                $telefoneCadastro = $telefoneCadastro[0]['telefone'];
               echo 'telefone e email já cadastrados';
            }
            else{
                if($emailCadastro){
                    $emailCadastro = $emailCadastro[0]['email'];
                    echo 'email já cadastrado';
                }

                if($telefoneCadastro){
                    $telefoneCadastro = $telefoneCadastro[0]['telefone'];
                    echo 'telefone já cadastrado';
                }

                if((!$emailCadastro) && (!$telefoneCadastro)){
                    $cadastro->setCadastro($nome,$email,$telefone,$ajuda,$erro,$acerto);
                    echo 'cadastro efetuado';
                }

            }



           
            
          
        }
    }

    public function cadastrar(){
        //Instancia a conexão com o banco
		$conn = Connection::getDB();
	    $cadastro = new Cadastro($conn);

        if(isset($_POST['email'])){
            $cadastro->setCadastro($_POST['nome'],$_POST['email'],$_POST['telefone']);
           
            
        }

    }
   
}





?>