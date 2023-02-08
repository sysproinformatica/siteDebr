<?php

namespace MF\Init;

abstract class Bootstrap{

    private $routes;


   abstract protected function iniRoutes();

    public function __construct(){
        $this->iniRoutes();
        $this->run($this->getUrl());
    }

    public function getUrl(){
        return parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH);
    }

    public function setRoutes(array $routes){
        $this->routes = $routes;
    }

    public function getRoutes(){
        return $this->routes;
    }

    protected function run($url){
        foreach($this->getRoutes() as $key => $route){
            
            if($url == $route['routes']){
                $class = 'App\\Controllers\\'.$route['controller'];
                $controller = new $class;
                $action = $route['action'];
                $controller->$action();
            }

        }
        
    }
}




?>