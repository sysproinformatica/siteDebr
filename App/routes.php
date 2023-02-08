<?php

namespace App;

use MF\Init\Bootstrap;

class Routes extends Bootstrap {

    public function iniRoutes(){

        $routes['home'] = array(
            'routes' => '/',
            'controller' => 'indexController',
            'action' => 'index'
        );

        $routes['sobreNos'] = array(
            'routes' => '/sobre_Nos',
            'controller' => 'indexController',
            'action' => 'sobreNos'
        );

        $routes['cadastro'] = array(
            'routes' => '/cadastro',
            'controller' => 'indexCadastro',
            'action' => 'cadastrar'
        );

        $routes['ajax'] = array(
            'routes'=> '/ajax',
            'controller' => 'indexCadastro',
            'action' => 'ajax'
        );

        $this->setRoutes($routes);
    }

   
}


?>