<?php

namespace MF\Controller;

abstract class Action{

    protected $view;

    public function __construct(){
        $this->view = new \stdClass();
    }


    protected function render($data){
        $this->view->data = $data;
        require_once'../App/View/layout.phtml';
    }

    public function content(){

        $currentClass = get_class($this);
        $currentClass = str_replace('App\\Controllers\\', '',$currentClass);
        $currentClass =  strtolower( str_replace('Controller','',$currentClass) );
     
        require_once'../App/View/'.$currentClass.'/'.$this->view->data.'.phtml';
    }

     
}



?>