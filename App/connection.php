<?php
    namespace App;
    class Connection {
        public static function getDB(){
            try{
                $host= 'localhost';
                $db = 'SiteDebr';
                $user = 'postgres';
                $password = 'Syspro2014$';
                $dsn = "pgsql:host=$host;port=5432;dbname=$db;";
                $conn = new \PDO($dsn, $user, $password,[\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION]);
                return $conn;

            } catch(\PDOException $e) {
                die($e->getMessage());
            }
        }
    }

?>