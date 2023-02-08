<?php


namespace App\Model;

class cadastro{
    protected $db;  
    
    public function __construct(\PDO $db){
        $this->db =$db;
    }


    public function setCadastro($nome,$email,$telefone,$ajuda,$erro,$acerto){
     
        $sql = 'INSERT INTO public.cadastro(nome, email, telefone, ajuda, erro, acerto)
        VALUES ('."'".$nome."'".','."'".$email."'".','."'".$telefone."'".','."'".$ajuda."'".','."'".$erro."'".','."'".$acerto."'".')';
      
      $query = $this->db->prepare($sql);                           
      $query->execute();
      return true;  
    }


    public function getEmail($email){

        $sql = 'SELECT email FROM public.cadastro WHERE email = '."'".$email."'";
        if($sql){         
            return $this->db->query($sql)->fetchAll();
        }

    }


    public function getTelefone($telefone){

        $sql = 'SELECT telefone FROM public.cadastro WHERE telefone = '."'".$telefone."'";
        if($sql){         
            return $this->db->query($sql)->fetchAll();
        }

    }


}


?>