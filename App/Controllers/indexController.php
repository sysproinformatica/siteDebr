<?php

namespace App\Controllers;
use MF\Controller\Action;

class indexController extends Action{

    public function index(){
       
        $this->render('index');
    }

    public function sobreNos(){
        
        $this->render('sobreNos');
    }


}



?>